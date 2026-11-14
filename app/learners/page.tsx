"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ColorGradient, NameGradient } from "@/components/NameGradient";
import { nofex } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import {
  retrieveItemFromIndexedDB,
  saveItemToIndexedDB,
} from "@/lib/IndexedDB";
import { useDarkMode } from "@/lib/useDarkMode";
import {
  Check,
  Loader2,
  Pencil,
  Plus,
  Shell,
  Trash2,
  UserStar,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";

type Profile = {
  id: string;
  name: string;
  photo: string;
  description: string;
  educationLevel: string;
  createdAt: number;
};

/* Storage lives in "@/lib/IndexedDB": database "curriculum-app",    */
/* store "items", version 1 (version stays 1 — do not bump). The whole */
/* list for a kind is one value under its key: "learners" or           */
/* "instructors".                                                      */
/*                                                                     */
/* Note: if this browser already has "curriculum-app" at version 2     */
/* (the earlier split-store version), opening version 1 will fail.     */
/* In that case, delete the database once in DevTools > Application    */
/* > IndexedDB, then reload.                                           */

type ProfileKind = "learners" | "instructors";


function normalizeProfiles(value: unknown): Profile[] {
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => {
      // Older saved records have `tasks` and no `description`;
      // normalize them so the new shape always has a description.
      const record = item as Profile & {
        tasks?: unknown;
        description?: string;
        educationLevel?: string;
      };
      return {
        id: record.id,
        name: record.name ?? "",
        photo: record.photo ?? "",
        description: record.description ?? "",
        educationLevel: record.educationLevel ?? "",
        createdAt: record.createdAt ?? 0,
      };
    })
    .sort((a, b) => (a.createdAt ?? 0) - (b.createdAt ?? 0));
}

function newId(): string {
  return typeof crypto !== "undefined" && "randomUUID" in crypto
    ? crypto.randomUUID()
    : `profile-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/* ------------------------------------------------------------------ */
/* Profile photos: /public/pexels-profile-photos (see CREDITS.txt)     */
/* ------------------------------------------------------------------ */

const PROFILE_PHOTOS: { src: string; label: string }[] = [
  { src: "/pexels-profile-photos/01-dog.jpg", label: "Dog" },
  { src: "/pexels-profile-photos/02-cat.jpg", label: "Cat" },
  { src: "/pexels-profile-photos/03-butterfly.jpg", label: "Butterfly" },
  { src: "/pexels-profile-photos/04-ladybug.jpg", label: "Ladybug" },
  { src: "/pexels-profile-photos/05-bee.jpg", label: "Bee" },
  { src: "/pexels-profile-photos/06-hummingbird.jpg", label: "Hummingbird" },
  { src: "/pexels-profile-photos/07-rabbit.jpg", label: "Rabbit" },
  { src: "/pexels-profile-photos/08-hamster.jpg", label: "Hamster" },
  { src: "/pexels-profile-photos/09-turtle.jpg", label: "Turtle" },
  { src: "/pexels-profile-photos/10-frog.jpg", label: "Frog" },
  { src: "/pexels-profile-photos/11-fox.jpg", label: "Fox" },
  { src: "/pexels-profile-photos/12-red-panda.jpg", label: "Red Panda" },
  { src: "/pexels-profile-photos/13-penguin.jpg", label: "Penguin" },
  { src: "/pexels-profile-photos/14-owl.jpg", label: "Owl" },
  { src: "/pexels-profile-photos/15-koala.jpg", label: "Koala" },
  { src: "/pexels-profile-photos/16-deer.jpg", label: "Deer" },
  { src: "/pexels-profile-photos/17-horse.jpg", label: "Horse" },
  { src: "/pexels-profile-photos/18-goldfish.jpg", label: "Goldfish" },
  { src: "/pexels-profile-photos/19-chameleon.jpg", label: "Chameleon" },
  { src: "/pexels-profile-photos/20-monkey.jpg", label: "Monkey" },
  { src: "/pexels-profile-photos/21-lion.jpg", label: "Lion" },
  { src: "/pexels-profile-photos/22-tiger.jpg", label: "Tiger" },
  { src: "/pexels-profile-photos/23-elephant.jpg", label: "Elephant" },
  { src: "/pexels-profile-photos/24-giraffe.jpg", label: "Giraffe" },
  { src: "/pexels-profile-photos/25-dolphin.jpg", label: "Dolphin" },
  { src: "/pexels-profile-photos/26-jellyfish.jpg", label: "Jellyfish" },
  { src: "/pexels-profile-photos/27-snail.jpg", label: "Snail" },
  { src: "/pexels-profile-photos/28-hedgehog.jpg", label: "Hedgehog" },
  { src: "/pexels-profile-photos/29-squirrel.jpg", label: "Squirrel" },
  { src: "/pexels-profile-photos/30-duck.jpg", label: "Duck" },
];

const DEFAULT_PHOTO = PROFILE_PHOTOS[0].src;
const SEED_FLAG = "curriculum-app:learners-seeded";

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function CarouselFades({ isDark }: { isDark: boolean }) {
  const from = isDark ? "from-black" : "from-white";
  return (
    <>
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r to-transparent",
          from,
        )}
      />
      <div
        className={cn(
          "pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l to-transparent",
          from,
        )}
      />
    </>
  );
}

function ProfileCard({
  profile,
  onEdit,
}: {
  profile: Profile;
  onEdit: (profile: Profile) => void;
}) {
  return (
    <div className="group relative h-[50vh] w-full overflow-hidden rounded-[50px] border-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <NameGradient name={profile.name} />
      {/* Bottom scrim so the name and description stay readable on light gradients */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-black/40 to-transparent" />

      <div className="absolute inset-0 flex flex-col p-6">
        <div className="flex items-start justify-end gap-3">
          <button
            type="button"
            aria-label={`Edit ${profile.name}`}
            onClick={() => onEdit(profile)}
            className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white text-slate-950 opacity-90 shadow-lg ring-1 ring-black/10 transition hover:bg-slate-100 hover:opacity-100"
          >
            <Pencil className="size-5" />
          </button>
        </div>

        <div className="mt-auto">
          <Image
            src={profile.photo || DEFAULT_PHOTO}
            alt={profile.name}
            width={96}
            height={96}
            unoptimized
            className="size-24 rounded-full object-cover shadow-xl ring-2 ring-white/70 transition-transform duration-300 group-hover:scale-105"
          />
          <h3 className="mt-4 mb-2 flex flex-col gap-1 text-3xl leading-[0.95] font-semibold text-white drop-shadow-lg">
            {profile.name.split(" ").map((part, index) => (
              <span key={`${part}-${index}`} className="block">
                {part}
              </span>
            ))}
          </h3>
          {profile.description && (
            <p className="line-clamp-3 max-w-[90%] text-sm leading-snug text-white/90 drop-shadow">
              {profile.description}
            </p>
          )}
          {profile.educationLevel && (
            <p className="mt-3 w-fit rounded-full bg-white/85 px-3.5 py-1.5 text-xs font-semibold text-slate-950 shadow-sm backdrop-blur-sm">
              {profile.educationLevel}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

function NewProfileCard({
  title,
  subtitle,
  gradientColor,
  onClick,
}: {
  title: string;
  subtitle: string;
  gradientColor: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Create a new ${title.toLowerCase()}`}
      className="w-full text-left"
    >
      <div className="group relative h-[50vh] w-full overflow-hidden rounded-[50px] border-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        {/* dot texture, like the grain on the other cards */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.25)_1px,transparent_0)] bg-[size:24px_24px]" />
        <ColorGradient color={gradientColor} />
        {/* dashed "empty slot" border */}
        <div className="absolute inset-4 rounded-[36px] border-2 border-dashed border-white/60" />

        <div className="absolute inset-0 z-10 flex cursor-pointer flex-col items-center justify-center gap-5">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white shadow-2xl shadow-black/25 transition-transform duration-300 group-hover:rotate-90 group-hover:scale-125">
            <Plus
              className="h-11 w-11 text-[#917575] transition-transform duration-300 group-hover:scale-135"
              strokeWidth={2.5}
            />
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold tracking-tight text-white drop-shadow transition-transform duration-300 group-hover:scale-105">
              {title}
            </p>
            <p className="mt-1 text-sm font-medium text-white/80 transition-transform duration-300 group-hover:scale-105">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function LearnersPage() {
  const { isDark } = useDarkMode();

  const [learners, setLearners] = useState<Profile[]>([]);
  const [instructors, setInstructors] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  // Create / edit drawer state. `drawerKind` decides which list the
  // drawer reads from and writes to: "learners" or "instructors".
  // The Drawer itself handles Escape, outside-press, and swipe dismiss.
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerKind, setDrawerKind] = useState<ProfileKind>("learners");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [formName, setFormName] = useState("");
  const [formPhoto, setFormPhoto] = useState(DEFAULT_PHOTO);
  const [formDescription, setFormDescription] = useState("");
  const [formEducationLevel, setFormEducationLevel] = useState("");
  const [saving, setSaving] = useState(false);
  const [saveError, setSaveError] = useState("");

  // Load both lists on mount. First run only: seed the original
  // Zander learner card so the page isn't empty, then never seed again.
  useEffect(() => {
    let cancelled = false;

    (async () => {
      try {
        const [savedLearners, savedInstructors] = await Promise.all([
          retrieveItemFromIndexedDB<Profile[]>("learners"),
          retrieveItemFromIndexedDB<Profile[]>("instructors"),
        ]);
        if (cancelled) return;

        const learnerList = normalizeProfiles(savedLearners);
        const instructorList = normalizeProfiles(savedInstructors);

        if (learnerList.length === 0) {
          let seeded = false;
          try {
            seeded = localStorage.getItem(SEED_FLAG) === "1";
          } catch {
            seeded = false;
          }
          if (!seeded) {
            const seed: Profile = {
              id: newId(),
              name: "Zander Coffman",
              photo: DEFAULT_PHOTO,
              description: "",
              educationLevel: "",
              createdAt: Date.now(),
            };
            await saveItemToIndexedDB("learners", [seed]);
            try {
              localStorage.setItem(SEED_FLAG, "1");
            } catch {
              // Private mode / storage blocked: seeding just retries
              // next load, which is harmless.
            }
            if (!cancelled) setLearners([seed]);
          }
        } else {
          setLearners(learnerList);
        }
        setInstructors(instructorList);
      } catch {
        if (!cancelled) {
          setLearners([]);
          setInstructors([]);
        }
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  function openCreate(kind: ProfileKind) {
    setDrawerKind(kind);
    setEditingId(null);
    setFormName("");
    setFormPhoto(DEFAULT_PHOTO);
    setFormDescription("");
    setFormEducationLevel("");
    setSaveError("");
    setDrawerOpen(true);
  }

  function openEdit(kind: ProfileKind, profile: Profile) {
    setDrawerKind(kind);
    setEditingId(profile.id);
    setFormName(profile.name);
    setFormPhoto(profile.photo || DEFAULT_PHOTO);
    setFormDescription(profile.description ?? "");
    setFormEducationLevel(profile.educationLevel ?? "");
    setSaveError("");
    setDrawerOpen(true);
  }

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const name = formName.trim();
    if (!name || saving) return;

    setSaving(true);
    setSaveError("");

    const currentList = drawerKind === "learners" ? learners : instructors;
    const profile: Profile = {
      id: editingId ?? newId(),
      name,
      photo: formPhoto.trim() || DEFAULT_PHOTO,
      description: formDescription.trim(),
      educationLevel: formEducationLevel.trim(),
      createdAt:
        editingId != null
          ? (currentList.find((item) => item.id === editingId)?.createdAt ??
            Date.now())
          : Date.now(),
    };

    try {
      const newList =
        editingId != null
          ? currentList.map((item) =>
              item.id === profile.id ? profile : item,
            )
          : [...currentList, profile];
      await saveItemToIndexedDB(drawerKind, newList);
      if (drawerKind === "learners") {
        setLearners(newList);
      } else {
        setInstructors(newList);
      }
      setDrawerOpen(false);
    } catch {
      setSaveError(
        `Couldn't save that ${drawerKind === "learners" ? "learner" : "instructor"}. Please try again.`,
      );
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete() {
    if (editingId == null) return;
    const kindLabel = drawerKind === "learners" ? "learner" : "instructor";
    if (!window.confirm(`Delete this ${kindLabel}? This can't be undone.`))
      return;

    try {
      const currentList = drawerKind === "learners" ? learners : instructors;
      const newList = currentList.filter((item) => item.id !== editingId);
      await saveItemToIndexedDB(drawerKind, newList);
      if (drawerKind === "learners") {
        setLearners(newList);
      } else {
        setInstructors(newList);
      }
      setDrawerOpen(false);
    } catch {
      setSaveError(`Couldn't delete that ${kindLabel}. Please try again.`);
    }
  }

  const selectedPhotoLabel =
    PROFILE_PHOTOS.find((photo) => photo.src === formPhoto)?.label ??
    "Custom photo";
  const kindLabel = drawerKind === "learners" ? "learner" : "instructor";
  const cardBasis =
    "basis-[80vw] sm:basis-[45vw] lg:basis-[calc(20vw+2rem)]";

  return (
    <main className="relative z-0 mb-20 flex w-full flex-col gap-2 px-7 pt-11 text-slate-950">
      <section className="mb-4 ml-5 flex w-full flex-col gap-1">
        <h1
          className={cn(
            "min-w-max text-4xl font-semilight text-[#f06565]",
            nofex.className,
          )}
        >
          Learners
        </h1>
        <p className="text-slate-600">
          Start your learning journey by creating a learner and a teacher.
        </p>
      </section>

      <section className="flex w-full flex-col gap-4">
        <div className="ml-4 flex flex-col gap-1">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <UserStar size={16} />
            Learners
          </p>
        </div>

        {loading ? (
          <div className="ml-4 flex items-center gap-2 py-16 text-sm text-slate-500">
            <Loader2 className="size-4 animate-spin" />
            Loading learners…
          </div>
        ) : (
          <Carousel opts={{ align: "start" }} className="w-[90vw]">
            <CarouselContent className="ml-8 px-5">
              <CarouselItem className={cardBasis}>
                <NewProfileCard
                  title="New Learner"
                  subtitle="Start a new journey"
                  gradientColor="#808080"
                  onClick={() => openCreate("learners")}
                />
              </CarouselItem>

              {learners.map((learner) => (
                <CarouselItem key={learner.id} className={cardBasis}>
                  <ProfileCard
                    profile={learner}
                    onEdit={(profile) => openEdit("learners", profile)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselFades isDark={isDark} />
            <CarouselPrevious className="left-2 z-20" />
            <CarouselNext className="right-2 z-20" />
          </Carousel>
        )}
      </section>

      <section className="mt-12 flex w-full flex-col gap-4">
        <div className="ml-4 flex flex-col gap-1">
          <p className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
            <Shell size={16} />
            Instructors
          </p>
        </div>

        {loading ? (
          <div className="ml-4 flex items-center gap-2 py-16 text-sm text-slate-500">
            <Loader2 className="size-4 animate-spin" />
            Loading instructors…
          </div>
        ) : (
          <Carousel opts={{ align: "start" }} className="w-[90vw]">
            <CarouselContent className="ml-8 px-5">
              <CarouselItem className={cardBasis}>
                <NewProfileCard
                  title="New Instructor"
                  subtitle="Start teaching"
                  gradientColor="#64748b"
                  onClick={() => openCreate("instructors")}
                />
              </CarouselItem>

              {instructors.map((instructor) => (
                <CarouselItem key={instructor.id} className={cardBasis}>
                  <ProfileCard
                    profile={instructor}
                    onEdit={(profile) => openEdit("instructors", profile)}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselFades isDark={isDark} />
            <CarouselPrevious className="left-2 z-20" />
            <CarouselNext className="right-2 z-20" />
          </Carousel>
        )}
      </section>

      {/* ---------------------------------------------------------- */}
      {/* Create / edit drawer (shadcn Drawer, Base UI)               */}
      {/* Vertical drawer: sizes to content, capped at                */}
      {/* calc(100dvh - 6rem) by default. The middle region is the     */}
      {/* scroll container (flex-1 + overflow-y-auto); the header     */}
      {/* and footer stay put. Horizontal layout on wide screens:      */}
      {/* details left, photos right.                                 */}
      {/* ---------------------------------------------------------- */}
      <Drawer open={drawerOpen} onOpenChange={setDrawerOpen} showSwipeHandle>
        <DrawerContent className="mx-auto flex w-full max-w-4xl flex-col">
          <DrawerHeader className="px-7 pt-7 pb-3 text-left sm:px-9">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <DrawerTitle className="text-2xl font-bold tracking-tight">
                  {editingId ? `Edit ${kindLabel}` : `New ${kindLabel}`}
                </DrawerTitle>
                <DrawerDescription className="mt-1">
                  Pick a name, a profile photo, and a short description.
                </DrawerDescription>
              </div>
              <DrawerClose
                render={
                  <button
                    type="button"
                    aria-label="Close"
                    className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:bg-slate-200 dark:bg-zinc-800 dark:text-slate-200 dark:hover:bg-zinc-700"
                  />
                }
              >
                <X className="size-5" />
              </DrawerClose>
            </div>
          </DrawerHeader>

          <form
            onSubmit={handleSubmit}
            className="flex min-h-0 flex-1 flex-col"
          >
            <div className="flex-1 overflow-y-auto px-7 pb-3 sm:px-9">
              {/* Two columns on wide screens: details left, photos right. */}
              <div className="mt-2 grid min-h-0 gap-x-9 gap-y-7 md:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
                {/* Left: name + description */}
                <div className="min-h-0 min-w-0">
                  <label
                    className="block text-sm font-semibold"
                    htmlFor="profile-name"
                  >
                    Name
                  </label>
                  <input
                    id="profile-name"
                    autoFocus
                    required
                    value={formName}
                    onChange={(event) => setFormName(event.target.value)}
                    placeholder="e.g. First Last"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-base outline-none focus:border-[#f06565] focus:ring-2 focus:ring-[#f06565]/30 dark:border-zinc-700 dark:bg-zinc-900"
                  />

                  <label
                    className="mt-6 block text-sm font-semibold"
                    htmlFor="profile-education-level"
                  >
                    Education level
                  </label>
                  <p className="mt-1 text-xs text-slate-400">
                    Optional — where are you in school?
                  </p>
                  <input
                    id="profile-education-level"
                    value={formEducationLevel}
                    onChange={(event) =>
                      setFormEducationLevel(event.target.value)
                    }
                    placeholder="e.g. High school, College, Homeschool"
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm outline-none focus:border-[#f06565] focus:ring-2 focus:ring-[#f06565]/30 dark:border-zinc-700 dark:bg-zinc-900"
                  />

                  <label
                    className="mt-6 block text-sm font-semibold"
                    htmlFor="profile-description"
                  >
                    Description
                  </label>
                  <p className="mt-1 text-xs text-slate-400">
                    Optional — a little about yourself.
                  </p>
                  <textarea
                    id="profile-description"
                    rows={3}
                    value={formDescription}
                    onChange={(event) => setFormDescription(event.target.value)}
                    placeholder="e.g. I love building things and learning how computers work."
                    className="mt-2 w-full resize-none rounded-2xl border border-slate-200 bg-white px-5 py-3.5 text-sm outline-none focus:border-[#f06565] focus:ring-2 focus:ring-[#f06565]/30 dark:border-zinc-700 dark:bg-zinc-900"
                  />
                </div>

                {/* Right: profile photo picker */}
                <div className="min-h-0 min-w-0">
                  <div className="flex items-center gap-4">
                    <Image
                      src={formPhoto || DEFAULT_PHOTO}
                      alt={selectedPhotoLabel}
                      width={80}
                      height={80}
                      unoptimized
                      className="size-20 shrink-0 rounded-full object-cover shadow-md ring-2 ring-[#f06565]/60"
                    />
                    <div className="min-w-0">
                      <p className="text-sm font-semibold">Profile photo</p>
                      <p className="truncate text-sm text-slate-500 dark:text-slate-400">
                        {selectedPhotoLabel}
                      </p>
                      <p className="text-xs text-slate-400">
                        Pick an animal below, or paste an image URL.
                      </p>
                    </div>
                  </div>

                  <div
                    className="mt-4 grid min-h-0 max-h-60 grid-cols-5 gap-6 overflow-y-auto p-4 md:max-h-[300px] md:grid-cols-4"
                    role="radiogroup"
                    aria-label="Profile photo options"
                  >
                    {PROFILE_PHOTOS.map((photo) => {
                      const selected = formPhoto === photo.src;
                      return (
                        <button
                          key={photo.src}
                          type="button"
                          role="radio"
                          aria-checked={selected}
                          aria-label={photo.label}
                          title={photo.label}
                          onClick={() => setFormPhoto(photo.src)}
                          style={{ aspectRatio: "1 / 1" }}
                          className={cn(
                            "relative block w-full overflow-hidden rounded-full ring-2 transition hover:scale-105",
                            selected
                              ? "ring-[#f06565] ring-offset-2"
                              : "ring-transparent hover:ring-slate-300",
                          )}
                        >
                          <Image
                            src={photo.src}
                            alt={photo.label}
                            fill
                            sizes="96px"
                            unoptimized
                            className="object-cover"
                          />
                          {selected && (
                            <span className="absolute inset-0 z-10 flex items-center justify-center bg-black/35">
                              <Check
                                className="size-6 text-white"
                                strokeWidth={3}
                              />
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {saveError && (
                <p className="mt-5 rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700 dark:bg-red-950/50 dark:text-red-300">
                  {saveError}
                </p>
              )}

              <p className="mt-6 text-center text-xs leading-relaxed text-slate-500 dark:text-slate-400">
                Everything here is stored securely on your own device.{" "}
                <Link
                  href="/privacy-policy"
                  className="font-medium text-slate-700 underline underline-offset-2 transition hover:text-[#f06565] dark:text-slate-200"
                >
                  Privacy Policy
                </Link>
              </p>
            </div>

            <DrawerFooter className="flex flex-row items-center gap-2 px-7 pt-5 pb-7 sm:px-9">
              {editingId != null && (
                <button
                  type="button"
                  onClick={handleDelete}
                  className="flex items-center gap-2 rounded-2xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50 dark:border-red-900 dark:hover:bg-red-950/40"
                >
                  <Trash2 className="size-4" />
                  Delete
                </button>
              )}
              <div className="ml-auto flex gap-2">
                <DrawerClose
                  render={
                    <button
                      type="button"
                      className="rounded-2xl px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-zinc-800"
                    />
                  }
                >
                  Cancel
                </DrawerClose>
                <button
                  type="submit"
                  disabled={saving || !formName.trim()}
                  className="flex items-center gap-2 rounded-2xl bg-[#f06565] px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:brightness-95 disabled:opacity-50"
                >
                  {saving && <Loader2 className="size-4 animate-spin" />}
                  {saving
                    ? "Saving…"
                    : editingId
                      ? "Save changes"
                      : `Create ${kindLabel}`}
                </button>
              </div>
            </DrawerFooter>
          </form>
        </DrawerContent>
      </Drawer>
    </main>
  );
}
