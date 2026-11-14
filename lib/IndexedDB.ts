const DB_NAME = "curriculum-app";
const STORE_NAME = "items";
const DB_VERSION = 1;

// Opens the database at version 1 and creates the "items" store if needed.
function openDatabaseAtVersionOne(): Promise<IDBDatabase> {
    return new Promise((resolve, reject) => {
        if (typeof window === "undefined") {
            reject(new Error("IndexedDB is only available in the browser"));
            return;
        }

        const request = indexedDB.open(DB_NAME, DB_VERSION);

        request.onupgradeneeded = () => {
            const db = request.result;

            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = () => {
            resolve(request.result);
        };

        request.onerror = () => {
            reject(request.error);
        };
    });
}

// Reads the database's current version without requesting a version.
// Opening without a version never upgrades, so this is safe to call
// even when the stored version is higher than DB_VERSION — opening
// with DB_VERSION directly would just fail with a VersionError.
function inspectDatabase(): Promise<{ version: number; hasStore: boolean }> {
    return new Promise((resolve, reject) => {
        if (typeof window === "undefined") {
            reject(new Error("IndexedDB is only available in the browser"));
            return;
        }

        const request = indexedDB.open(DB_NAME);

        request.onupgradeneeded = () => {
            // Brand-new database: created at version 1 by default.
            const db = request.result;

            if (!db.objectStoreNames.contains(STORE_NAME)) {
                db.createObjectStore(STORE_NAME);
            }
        };

        request.onsuccess = () => {
            const db = request.result;
            const info = {
                version: db.version,
                hasStore: db.objectStoreNames.contains(STORE_NAME),
            };
            db.close();
            resolve(info);
        };

        request.onerror = () => {
            reject(request.error);
        };

        request.onblocked = () => {
            console.warn(
                "Opening the database is blocked by another open connection.",
            );
        };
    });
}

function deleteDatabase(): Promise<void> {
    return new Promise((resolve, reject) => {
        const request = indexedDB.deleteDatabase(DB_NAME);

        request.onsuccess = () => {
            resolve();
        };

        request.onerror = () => {
            reject(request.error);
        };

        request.onblocked = () => {
            console.warn(
                "Deleting the database is blocked by another open connection. Waiting for it to close.",
            );
        };
    });
}

// Checker: if the stored version is NOT 1 (or the "items" store is
// missing), delete the whole database and recreate it fresh at
// version 1. Returns true when a reset happened, false when it was
// already version 1 with the store present.
// WARNING: resetting deletes everything stored under "curriculum-app".
export async function checkAndResetDatabaseIfVersionIsNotOne(): Promise<boolean> {
    if (typeof window === "undefined") {
        return false;
    }

    const { version, hasStore } = await inspectDatabase();

    if (version === DB_VERSION && hasStore) {
        return false;
    }

    console.warn(
        `IndexedDB "${DB_NAME}" is at version ${version}, expected ${DB_VERSION}. Deleting and resetting the database.`,
    );

    await deleteDatabase();

    const db = await openDatabaseAtVersionOne();
    db.close();

    return true;
}

// Shared in-flight check, so parallel save/retrieve calls don't each
// try to delete and recreate the database at the same time.
let versionCheckPromise: Promise<boolean> | null = null;

function ensureDatabaseVersion(): Promise<boolean> {
    if (!versionCheckPromise) {
        versionCheckPromise = checkAndResetDatabaseIfVersionIsNotOne().finally(
            () => {
                versionCheckPromise = null;
            },
        );
    }
    return versionCheckPromise;
}

async function openDatabase(): Promise<IDBDatabase> {
    if (typeof window === "undefined") {
        throw new Error("IndexedDB is only available in the browser");
    }

    // Runs the version checker on every open, so save/retrieve/remove
    // below always land in a version 1 database.
    await ensureDatabaseVersion();

    return openDatabaseAtVersionOne();
}

export async function saveItemToIndexedDB<T>(
    key: string,
    value: T
): Promise<void> {
    if (typeof window === "undefined") {
        return;
    }

    try {
        const db = await openDatabase();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(
                STORE_NAME,
                "readwrite"
            );

            const store = transaction.objectStore(STORE_NAME);

            store.put(value, key);

            transaction.oncomplete = () => {
                db.close();
                resolve();
            };

            transaction.onerror = () => {
                db.close();
                reject(transaction.error);
            };
        });
    } catch (error) {
        console.error("Error saving item to IndexedDB:", error);
    }
}

export async function retrieveItemFromIndexedDB<T>(
    key: string
): Promise<T | null> {
    if (typeof window === "undefined") {
        return null;
    }

    try {
        const db = await openDatabase();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(
                STORE_NAME,
                "readonly"
            );

            const store = transaction.objectStore(STORE_NAME);

            const request = store.get(key);

            request.onsuccess = () => {
                db.close();

                if (request.result === undefined) {
                    resolve(null);
                } else {
                    resolve(request.result as T);
                }
            };

            request.onerror = () => {
                db.close();
                reject(request.error);
            };
        });
    } catch (error) {
        console.error("Error retrieving item from IndexedDB:", error);
        return null;
    }
}

export async function removeItemFromIndexedDB(
    key: string
): Promise<void> {
    if (typeof window === "undefined") {
        return;
    }

    try {
        const db = await openDatabase();

        return new Promise((resolve, reject) => {
            const transaction = db.transaction(
                STORE_NAME,
                "readwrite"
            );

            const store = transaction.objectStore(STORE_NAME);

            store.delete(key);

            transaction.oncomplete = () => {
                db.close();
                resolve();
            };

            transaction.onerror = () => {
                db.close();
                reject(transaction.error);
            };
        });
    } catch (error) {
        console.error("Error removing item from IndexedDB:", error);
    }
}
