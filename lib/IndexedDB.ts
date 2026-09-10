const DB_NAME = "curriculum-app";
const STORE_NAME = "items";
const DB_VERSION = 1;

function openDatabase(): Promise<IDBDatabase> {
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


export async function saveItemToIndexedDB(
    key: string,
    value: any
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