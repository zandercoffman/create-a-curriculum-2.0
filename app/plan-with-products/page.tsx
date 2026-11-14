"use client"
import { ColorGradient } from "@/components/NameGradient";
import { nofex } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ChevronRight, ChevronDown, ChevronUp, ClipboardPaste, HatGlasses, ListPlus, BookCopy, MessageSquareText, Search, PencilLine, Sparkles, Wallet, Plus, Layers2, Info, Check, X, Store, Copy, PanelRightClose, PanelRightOpen } from "lucide-react";
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { motion } from "framer-motion";

import {
    ButtonGroup,
    ButtonGroupSeparator,
    ButtonGroupText,
} from "@/components/ui/button-group"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectSeparator,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const description = "A radial chart with text"

import { TrendingUp } from "lucide-react"
import {
    Label,
    PolarAngleAxis,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts"
import {
    ChartContainer,
    type ChartConfig,
} from "@/components/ui/chart"
import { Button } from "@/components/ui/button";
import React, { useState, useMemo, useEffect, useRef } from "react";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import { CATALOGUE, CATALOGUE_CATEGORIES, CatalogueEntry, CurriculumCardProduct } from "./products";
import { useMobile } from "@/lib/useMobile";
import { ScrollArea } from "@/components/ui/scroll-area";




type CatalogueSort = "featured" | "price-asc" | "price-desc" | "name-asc";

type CurriculumProductCardProps = {
    category: string;
    title: string;
    description: string;
    image: string;
    imageAlt?: string;
    products: CurriculumCardProduct[];
    price: number;
    actionLabel?: string;
    onAction?: () => void;
    onAddProduct?: (product: CurriculumCardProduct) => void;
    onRemoveProduct?: (product: CurriculumCardProduct) => void;
    addedSrcs?: ReadonlySet<string>;
    className?: string;
};


export function CurriculumProductCard({
    category,
    title,
    description,
    image,
    imageAlt,
    products,
    price,
    actionLabel = "Add to Planner",
    onAction,
    onAddProduct,
    onRemoveProduct,
    addedSrcs = new Set(),
    className,
}: CurriculumProductCardProps) {
    const [selectedProduct, setSelectedProduct] = useState<CurriculumCardProduct | null>(null);
    // Mobile only: tap-to-open version of the desktop hover panel.
    // Kept above the branch so hook order stays the same on both layouts.
    const [showIndividual, setShowIndividual] = useState(false);
    const displayedImage = selectedProduct?.src ?? image;
    const displayedAlt = selectedProduct?.alt ?? (imageAlt ?? title);
    const isMobile = useMobile();

    const handleToggleProduct = (product: CurriculumCardProduct) => {
        if (addedSrcs.has(product.src)) {
            onRemoveProduct?.(product);
        } else {
            onAddProduct?.(product);
        }
    };

    if (!isMobile) {
        return (
            <Card
                className={cn(
                    "group relative w-full overflow-hidden rounded-[50px] border-red-50 bg-neutral-900 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#f06565]/25",
                    className,
                    // No aspect ratio: the card's height is set by its
                    // content. aspect-[4/4] locked height to width, so at
                    // 3 columns the card got shorter than its text +
                    // thumbnails + price row and the bottom spilled over
                    // the next row. py-0/gap-0 neutralise the Card
                    // defaults (flex-col gap-6 py-6), which added 48px
                    // of padding the aspect math never counted.
                    "min-h-[460px] h-full py-0 gap-0"
                )}
            >
                <img src={displayedImage} alt={displayedAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/5 to-black/80" />

                <div className="relative flex h-full flex-col justify-between gap-4 p-5 text-center text-white">
                    <div className="flex flex-col items-center gap-2">
                        <div className="flex w-full items-center justify-between">
                            <span className="rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-white/85 backdrop-blur-sm">
                                {category}
                            </span>
                            <span className="rounded-full bg-black/40 px-2.5 py-1 text-[11px] font-medium text-white/75 backdrop-blur-sm">
                                {products.length} items
                            </span>
                        </div>
                        <h2 className="text-[22px] font-bold leading-tight">{title}</h2>
                        <p className="line-clamp-2 text-sm leading-snug text-white/85">{description}</p>
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        <div className="flex flex-row justify-center gap-1.5">
                            {products.map((product) => {
                                const isSelected = selectedProduct?.src === product.src;
                                return (
                                    <button
                                        key={product.src}
                                        type="button"
                                        onClick={() => setSelectedProduct(product)}
                                        aria-label={`View ${product.alt}`}
                                        aria-pressed={isSelected}
                                        className={cn(
                                            "size-9 shrink-0 cursor-pointer rounded-md shadow-lg transition focus-visible:outline-2 focus-visible:outline-white",
                                            isSelected ? "ring-2 ring-white" : "opacity-80 hover:opacity-100"
                                        )}
                                    >
                                        <img src={product.src} alt={product.alt} loading="lazy" decoding="async" className="size-9 rounded-md object-cover" />
                                    </button>
                                );
                            })}
                        </div>

                        <div className="flex w-full flex-col gap-2">
                            <p className="text-xl font-bold">
                                {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                            </p>
                            <div className="flex w-full items-center gap-2">
                                <motion.button
                                    onClick={onAction}
                                    whileHover={{ scale: 1.03 }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    className="h-10 min-w-0 flex-1 cursor-pointer rounded-full bg-white px-3 text-sm font-semibold whitespace-nowrap text-red-500 shadow-xs transition-colors hover:bg-gray-200 focus-visible:outline-none"
                                >
                                    {actionLabel}
                                </motion.button>
                                <button
                                    type="button"
                                    aria-label="Add products one by one"
                                    aria-expanded={showIndividual}
                                    onClick={() => setShowIndividual((open) => !open)}
                                    className="flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white"
                                >
                                    <ListPlus className="size-4" />
                                </button>
                            </div>
                        </div>

                        <p className="text-[11px] text-white/60">Tap a thumbnail to preview it · Tap + to add one by one</p>
                    </div>
                </div>

                {showIndividual && (
                    <div className="absolute inset-x-4 bottom-4 mt-auto z-20 max-h-[75%] overflow-y-auto rounded-3xl rounded-b-4xl border border-white/30 bg-black/75 p-3 text-left text-white shadow-2xl backdrop-blur-xl backdrop-saturate-150">
                        <div className="mb-1 flex items-baseline justify-between px-1">
                            <p className="text-sm font-semibold">Add individually...</p>
                            <button type="button" aria-label="Close" onClick={() => setShowIndividual(false)} className="rounded-full p-1 hover:bg-white/10">
                                <X className="size-4" />
                            </button>
                        </div>
                        <div className="flex flex-col gap-1 mt-auto">
                            {products.map((product) => {
                                const isAdded = addedSrcs.has(product.src);
                                return (
                                    <div key={product.src} className="flex items-center gap-3 rounded-xl px-2 py-2 hover:bg-white/10">
                                        <img src={product.src} alt={product.alt} loading="lazy" decoding="async" className="size-11 shrink-0 rounded-xl object-cover" />
                                        <div className="min-w-0 flex-1 text-left">
                                            <p className="truncate text-sm font-medium">{product.name ?? product.alt}</p>
                                            {typeof product.price === "number" && (
                                                <p className="text-xs text-white/70">{product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
                                            )}
                                        </div>
                                        <Button
                                            type="button"
                                            size="sm"
                                            variant="outline"
                                            aria-pressed={isAdded}
                                            className={cn(
                                                "shrink-0 rounded-full transition-all active:scale-95",
                                                isAdded
                                                    ? "border-transparent bg-white text-[#F06565] hover:bg-white hover:text-[#F06565]"
                                                    : "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white"
                                            )}
                                            onClick={() => handleToggleProduct(product)}
                                        >
                                            {isAdded ? "Remove" : "Add"}
                                        </Button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </Card>
        );
    }


    // ── Mobile card ─────────────────────────────────────────────
    // No aspect-square and no absolutely positioned bottom row: on a
    // narrow card those two are what made the thumbnails sit on top of
    // the description and the price/button row get cut off. The card is
    // a normal column instead — text at the top, then, on their own
    // row, the thumbnails, then the price above a centered button.
    // HoverCard has no hover on touch, so the one-by-one list is a
    // tap-to-open panel inside the card, with the same callbacks.
    return (
        <Card
            className={cn("relative w-full overflow-hidden rounded-[2rem] border-red-50 shadow-sm shadow-[#f06565]", className)}
        >
            <img src={displayedImage} alt={displayedAlt} loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/10 to-black/60" />

            <div className="relative flex min-h-[460px] flex-col justify-between gap-6 p-5 text-center text-white">
                <section className="flex flex-col items-center gap-1">
                    <span className="shrink-0 rounded-full bg-black/40 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider whitespace-nowrap text-white/85 backdrop-blur-sm">
                        {category}
                    </span>
                    <h1 className="text-2xl font-bold leading-tight">{title}</h1>
                    <p className="text-sm leading-snug text-white/85">{description}</p>
                </section>

                <section className="flex flex-col items-center gap-3">
                    <div className="flex flex-row flex-wrap justify-center gap-2">
                        {products.map((product) => {
                            const isSelected = selectedProduct?.src === product.src;
                            return (
                                <button
                                    key={product.src}
                                    type="button"
                                    onClick={() => setSelectedProduct(product)}
                                    aria-label={`View ${product.alt}`}
                                    aria-pressed={isSelected}
                                    className={cn(
                                        "size-12 shrink-0 cursor-pointer rounded-md shadow-lg transition focus-visible:outline-2 focus-visible:outline-white",
                                        isSelected ? "ring-2 ring-white" : "opacity-80"
                                    )}
                                >
                                    <img
                                        src={product.src}
                                        alt={product.alt}
                                        loading="lazy"
                                        decoding="async"
                                        className="size-12 rounded-md object-cover"
                                    />
                                </button>
                            );
                        })}
                    </div>

                    <p className="text-lg font-bold">
                        {price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                    </p>

                    <motion.button
                        onClick={onAction}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                        className="inline-flex h-11 shrink-0 cursor-pointer items-center justify-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-medium whitespace-nowrap text-red-500 shadow-xs transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50"
                    >
                        {actionLabel}
                    </motion.button>

                    <button
                        type="button"
                        aria-expanded={showIndividual}
                        onClick={() => setShowIndividual((open) => !open)}
                        className="inline-flex items-center gap-1 text-xs font-medium text-white/85 underline-offset-2 hover:underline"
                    >
                        Add products one by one
                        <ChevronDown className={cn("size-3.5 transition-transform", showIndividual && "rotate-180")} />
                    </button>

                    {showIndividual && (
                        <div className="w-full rounded-2xl border border-white/30 bg-black/40 p-3 text-left shadow-xl backdrop-blur-xl backdrop-saturate-150">
                            <div className="mb-1 flex items-baseline justify-between px-1">
                                <p className="text-sm font-semibold">Add individually...</p>
                                <p className="text-xs text-white/60">{products.length} items</p>
                            </div>
                            <div className="flex flex-col gap-1">
                                {products.map((product) => {
                                    const isAdded = addedSrcs.has(product.src);
                                    return (
                                        <div key={product.src} className="flex items-center gap-3 rounded-xl px-2 py-2">
                                            <img
                                                src={product.src}
                                                alt={product.alt}
                                                loading="lazy"
                                                decoding="async"
                                                className="size-11 shrink-0 rounded-xl object-cover"
                                            />
                                            <div className="min-w-0 flex-1 text-left">
                                                <p className="truncate text-sm font-medium">{product.name ?? product.alt}</p>
                                                {typeof product.price === "number" && (
                                                    <p className="text-xs text-white/70">
                                                        {product.price.toLocaleString("en-US", { style: "currency", currency: "USD" })}
                                                    </p>
                                                )}
                                            </div>
                                            <Button
                                                type="button"
                                                size="sm"
                                                variant="outline"
                                                aria-pressed={isAdded}
                                                className={cn(
                                                    "shrink-0 rounded-full transition-all active:scale-95",
                                                    isAdded
                                                        ? "border-transparent bg-white text-[#F06565] hover:bg-white hover:text-[#F06565] dark:border-transparent dark:bg-white dark:hover:bg-white"
                                                        : "border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white dark:border-white/30 dark:bg-white/10 dark:hover:bg-white/20"
                                                )}
                                                onClick={() => handleToggleProduct(product)}
                                            >
                                                {isAdded ? (
                                                    <>
                                                        <X className="size-3.5" />
                                                        Remove
                                                    </>
                                                ) : (
                                                    "Add"
                                                )}
                                            </Button>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}

                    <p className="text-xs text-white/70">Tap a thumbnail to preview it.</p>
                </section>
            </div>
        </Card>
    );
}

const formatUSD = (value: number) =>
    value.toLocaleString("en-US", { style: "currency", currency: "USD" });

type PlannedItem = {
    key: string;
    groupKey: string;
    groupTitle: string;
    groupImage: string;
    category: string;
    product: CurriculumCardProduct;
};



const getCataloguePrice = (entry: CatalogueEntry): number => {
    if (typeof entry.price === "number") return entry.price;
    const sum = entry.products.reduce((total, product) => total + (product.price ?? 0), 0);
    return Math.round(sum * 100) / 100;
};

// Every word in the query must match somewhere: text fields, or a price.
// Price tokens match "129", "129.99", and "$129" against card and product prices.
const matchesCatalogueSearch = (entry: CatalogueEntry, query: string): boolean => {
    const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return true;

    const text = [
        entry.title,
        entry.description,
        entry.category,
        ...entry.products.flatMap((product) => [
            product.name ?? "",
            product.alt,
            product.description ?? "",
        ]),
    ].join(" ").toLowerCase();

    const prices = [
        getCataloguePrice(entry),
        ...entry.products.map((product) => product.price ?? 0),
    ];

    return tokens.every((token) => {
        if (text.includes(token)) return true;
        const numericToken = token.replace(/[$,]/g, "");
        if (numericToken !== "" && !Number.isNaN(Number(numericToken))) {
            return prices.some(
                (price) => price.toFixed(2).includes(numericToken) || String(price).includes(numericToken)
            );
        }
        return false;
    });
};

const makePlannedKey = (groupKey: string, src: string) => `${groupKey}::${src}`;

const EMPTY_ADDED_SET: ReadonlySet<string> = new Set();



// ── Custom create drawer ────────────────────────────────────────
// Pattern follows the prompts page: 1) describe the idea, 2) paste
// the AI's JSON reply back, and it saves straight into the catalogue
// (no review step). Or skip the AI and enter it by hand.
// A shadcn Drawer from the bottom: it portals to the body, so no
// fixed-positioning traps, and Esc / outside-press / swipe / X all
// close it via onOpenChange.

const PLACEHOLDER_IMAGE =
    "data:image/svg+xml;charset=utf-8," +
    encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="800" height="800"><defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#F06565"/><stop offset="1" stop-color="#B03A3A"/></linearGradient></defs><rect width="800" height="800" fill="url(#g)"/><text x="400" y="430" font-family="sans-serif" font-size="280" fill="#FFFFFF" text-anchor="middle">✦</text></svg>`
    );

// Copy helper: clipboard first, textarea fallback, long-press fallback.
// Never a bare navigator.clipboard.writeText — it fails silently on a
// phone and on an http preview.
const copyText = async (text: string): Promise<boolean> => {
    try {
        await navigator.clipboard.writeText(text);
        return true;
    } catch {
        try {
            const ta = document.createElement("textarea");
            ta.value = text;
            ta.style.position = "fixed";
            ta.style.opacity = "0";
            document.body.appendChild(ta);
            ta.select();
            const ok = document.execCommand("copy");
            document.body.removeChild(ta);
            return ok;
        } catch {
            return false;
        }
    }
};

// One item per line: "Name — $12.99" / "Name, 12.99" / "Name".
const parseItemLines = (text: string): { name: string; price: number }[] => {
    return text
        .split("\n")
        .map((line) => line.trim())
        .filter(Boolean)
        .map((line) => {
            const match = line.match(/\$?\s*(\d+(?:\.\d{1,2})?)\s*$/);
            const price = match ? Number(match[1]) : 0;
            const rawName = match ? line.slice(0, match.index ?? line.length).trim() : line;
            const name = rawName.replace(/[-–—,:]\s*$/, "").trim();
            return { name: name === "" ? line : name, price };
        })
        .filter((item) => item.name !== "");
};

const isHttpUrl = (value: unknown): value is string =>
    typeof value === "string" && /^https?:\/\//.test(value.trim());

type CreateCustomDrawerProps = {
    open: boolean;
    initialType: "product" | "set";
    onClose: () => void;
    onSave: (entry: CatalogueEntry) => void;
};

function CreateCustomDrawer({ open, initialType, onClose, onSave }: CreateCustomDrawerProps) {
    const [type, setType] = useState<"product" | "set">(initialType);
    const [mode, setMode] = useState<"ai" | "manual">("ai");
    const [prompt, setPrompt] = useState("");
    const [budget, setBudget] = useState("");
    const [researchWeb, setResearchWeb] = useState(true);
    const [researchPrompt, setResearchPrompt] = useState("");
    const [copied, setCopied] = useState(false);
    const [copyFailed, setCopyFailed] = useState(false);
    const [pasted, setPasted] = useState("");
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState(CATALOGUE_CATEGORIES[0] ?? "all");
    const [description, setDescription] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [price, setPrice] = useState("");
    const [itemsText, setItemsText] = useState("");
    const [error, setError] = useState<string | null>(null);

    const buildResearchPrompt = () => {
        const kind = type === "set" ? "curriculum set (3–4 products)" : "single product";
        return [
            `Create one ${kind} for a homeschool curriculum plan. Request: ${prompt.trim() || "(no details given — ask me for them)"}`,
            researchWeb
                ? "Search the web for real, current products and prices. Use only real product pages you actually opened. Never guess or invent a price, a product, or a photo ID."
                : "Do not browse. Draft from the request only — never invent a price, a product, or a photo ID; leave anything you cannot verify blank.",
            "Photos must be real Pexels photos: open the actual Pexels photo page and use only a real images.pexels.com/photos/{id}/…?w=800 URL from that page. If a photo cannot be verified, use the placeholder PEXELS-SEARCH: <search words> instead of a fake URL.",
            budget.trim() !== "" ? `Total budget: $${budget.trim()}. Stay under it if possible.` : "",
            `Choose the category from exactly this list: ${CATALOGUE_CATEGORIES.join(", ")}.`,
            "Use realistic USD prices. Do not claim ESA eligibility or name a store.",
            `Return ONLY JSON, no other text, in this shape: {"title": "...", "description": "...", "category": "...", "products": [{"name": "...", "price": 0, "src": ""}]}`,
        ]
            .filter(Boolean)
            .join("\n\n");
    };

    const handleCopyPrompt = async () => {
        const text = buildResearchPrompt();
        setResearchPrompt(text);
        setCopied(false);
        setCopyFailed(false);
        const ok = await copyText(text);
        if (ok) setCopied(true);
        else setCopyFailed(true);
    };

    const entryFromJson = (value: unknown): CatalogueEntry | null => {
        if (!value || typeof value !== "object") return null;
        const obj = value as Record<string, unknown>;
        const rawProducts = Array.isArray(obj.products)
            ? obj.products
            : Array.isArray(obj.items)
                ? obj.items
                : null;
        if (typeof obj.title !== "string" || !obj.title.trim() || !rawProducts || rawProducts.length === 0) return null;
        const products: CurriculumCardProduct[] = rawProducts
            .filter((item): item is Record<string, unknown> => !!item && typeof item === "object")
            .map((item, i) => ({
                src: isHttpUrl(item.src) ? item.src : PLACEHOLDER_IMAGE,
                alt: typeof item.name === "string" && item.name.trim() ? item.name.trim() : `Item ${i + 1}`,
                name: typeof item.name === "string" ? item.name.trim() : undefined,
                price: typeof item.price === "number" ? item.price : Number(item.price) || 0,
            }));
        if (products.length === 0) return null;
        const cat =
            typeof obj.category === "string" && CATALOGUE_CATEGORIES.includes(obj.category)
                ? obj.category
                : (CATALOGUE_CATEGORIES[0] ?? "");
        return {
            id: `custom-${Date.now()}`,
            title: obj.title.trim(),
            description: typeof obj.description === "string" ? obj.description : "",
            category: cat,
            image: products[0].src,
            imageAlt: obj.title.trim(),
            products,
            ...(type === "product" && products.length === 1 ? { price: products[0].price } : {}),
        };
    };

    const handleSavePasted = () => {
        setError(null);
        try {
            const entry = entryFromJson(JSON.parse(pasted));
            if (!entry) {
                setError("That didn't read as a set — it needs a title and at least one product with a name. Check the JSON shape above, or use Enter manually.");
                return;
            }
            onSave(entry);
            onClose();
        } catch {
            setError("That isn't valid JSON yet — paste the AI's reply exactly as it came back, starting with { and ending with }.");
        }
    };

    const handleSaveManual = () => {
        setError(null);
        if (title.trim() === "") {
            setError("Give it a title first.");
            return;
        }
        const image = isHttpUrl(imageUrl) ? imageUrl.trim() : PLACEHOLDER_IMAGE;
        if (type === "product") {
            const priceValue = Number(price);
            if (price.trim() === "" || Number.isNaN(priceValue)) {
                setError("Add a price for the product.");
                return;
            }
            onSave({
                id: `custom-${Date.now()}`,
                title: title.trim(),
                description: description.trim(),
                category,
                image,
                imageAlt: title.trim(),
                products: [{ src: image, alt: title.trim(), name: title.trim(), price: priceValue }],
                price: priceValue,
            });
            onClose();
            return;
        }
        const items = parseItemLines(itemsText);
        if (items.length === 0) {
            setError("Add at least one item, one per line — e.g. Counting Bears — $12.99.");
            return;
        }
        onSave({
            id: `custom-${Date.now()}`,
            title: title.trim(),
            description: description.trim(),
            category,
            image,
            imageAlt: title.trim(),
            products: items.map((item) => ({ src: image, alt: item.name, name: item.name, price: item.price })),
        });
        onClose();
    };

    return (
        <Drawer open={open} showSwipeHandle onOpenChange={(next) => { if (!next) onClose(); }} swipeDirection="down">
                <DrawerContent className="mx-auto w-screen backdrop-blur-sm  flex flex-col gap-0 overflow-y-auto rounded-t-[2rem] p-5">
                    <ScrollArea className="mx-auto h-[50vh] pr-4 mb-2 bg-white/30" >
                        <div className="flex shrink-0 items-center justify-between">
                            <DrawerTitle className="flex items-center gap-2 text-base font-semibold">
                                <Sparkles className="size-5 text-[#F06565]" />
                                {type === "set" ? "Create a custom set" : "Create a custom product"}
                            </DrawerTitle>
                            <DrawerClose
                                render={
                                    <Button type="button" size="icon" variant="ghost" className="size-8 rounded-full" aria-label="Close" />
                                }
                            >
                                <X className="size-4" />
                            </DrawerClose>
                        </div>
                        <DrawerDescription className="sr-only">
                            Create a custom product or catalogue set with AI research, or enter it manually.
                        </DrawerDescription>

                        {/* Type: product or set */}
                        <div className="mt-4 grid grid-cols-2 gap-1 rounded-full bg-muted/70 p-1" role="group" aria-label="What to create">
                            {(["product", "set"] as const).map((option) => (
                                <Button
                                    key={option}
                                    type="button"
                                    variant="ghost"
                                    aria-pressed={type === option}
                                    onClick={() => {
                                        setType(option);
                                        setError(null);
                                    }}
                                    className={cn("h-9 rounded-full text-sm font-medium", type === option ? "bg-[#F06565] text-white shadow-sm hover:bg-[#F06565]/90 hover:text-white" : "text-muted-foreground hover:bg-transparent hover:text-foreground")}
                                >
                                    {option === "product" ? "Single product" : "Catalogue set"}
                                </Button>
                            ))}
                        </div>

                        {/* Mode: AI research or manual entry */}
                        <div className="mt-2 grid grid-cols-2 gap-1 rounded-full bg-muted/70 p-1" role="group" aria-label="How to create it">
                            {(["ai", "manual"] as const).map((option) => (
                                <Button
                                    key={option}
                                    type="button"
                                    variant="ghost"
                                    aria-pressed={mode === option}
                                    onClick={() => {
                                        setMode(option);
                                        setError(null);
                                    }}
                                    className={cn("h-9 rounded-full text-sm font-medium", mode === option ? "bg-[#F06565] text-white shadow-sm hover:bg-[#F06565]/90 hover:text-white" : "text-muted-foreground hover:bg-transparent hover:text-foreground")}
                                >
                                    {option === "ai" ? "AI research" : "Enter manually"}
                                </Button>
                            ))}
                        </div>

                        {mode === "ai" ? (
                            <div className="mt-4 flex flex-col gap-3">
                                <div>
                                    <label htmlFor="custom-prompt" className="mb-1 block text-sm font-medium">
                                        What should it be?
                                    </label>
                                    <textarea
                                        id="custom-prompt"
                                        value={prompt}
                                        onChange={(e) => setPrompt(e.target.value)}
                                        placeholder="e.g. A hands-on phonics set for ages 5–7, under $80…"
                                        className="min-h-24 w-full rounded-2xl border border-black/10 bg-muted/40 p-3 text-sm focus-visible:outline-2 focus-visible:outline-[#F06565]/50"
                                    />
                                </div>
                                <div className="flex flex-wrap items-end gap-2">
                                    <div className="min-w-0 flex-1">
                                        <label htmlFor="custom-budget" className="mb-1 block text-sm font-medium">
                                            Budget (optional)
                                        </label>
                                        <div className="relative">
                                            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                                            <Input id="custom-budget" type="number" min={1} value={budget} onChange={(e) => setBudget(e.target.value)} placeholder="80" className="h-10 rounded-full pr-4 pl-7" />
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        aria-pressed={researchWeb}
                                        onClick={() => setResearchWeb((value) => !value)}
                                        className={cn("flex h-10 items-center gap-2 rounded-full border px-3 text-sm font-medium", researchWeb ? "border-[#F06565]/40 bg-[#F06565]/10 text-[#F06565]" : "border-black/10 text-muted-foreground")}
                                    >
                                        <span className={cn("flex size-4 items-center justify-center rounded-full border", researchWeb ? "border-[#F06565] bg-[#F06565] text-white" : "border-black/30")}>
                                            {researchWeb && <Check className="size-3" />}
                                        </span>
                                        Research the web
                                    </button>
                                </div>
                                <Button type="button" onClick={handleCopyPrompt} className="h-11 rounded-full bg-[#F06565] text-white hover:bg-[#F06565]/90">
                                    <Copy className="size-4" />
                                    {researchPrompt === "" ? "Build research prompt" : "Copy research prompt again"}
                                </Button>
                                {researchPrompt !== "" && (
                                    <div>
                                        <p className="text-sm font-medium">Your research prompt — copy it into your AI tool</p>
                                        <pre className="mt-1 max-h-48 overflow-y-auto rounded-2xl bg-muted/60 p-3 text-xs whitespace-pre-wrap select-text">{researchPrompt}</pre>
                                        {copied && <p className="mt-1 text-xs font-medium text-green-600">Copied.</p>}
                                        {copyFailed && <p className="mt-1 text-xs text-muted-foreground">Copy didn't work here — long-press the prompt above to copy it by hand.</p>}
                                    </div>
                                )}
                                <div>
                                    <p className="text-sm font-medium">Step 2 — paste the AI's reply</p>
                                    <p className="mt-0.5 text-xs text-muted-foreground">Paste the JSON it gives back, exactly as it came. It saves straight into the catalogue — no review step.</p>
                                    <textarea
                                        value={pasted}
                                        onChange={(e) => setPasted(e.target.value)}
                                        placeholder='{"title": "...", "description": "...", "category": "...", "products": [{"name": "...", "price": 0, "src": ""}]}'
                                        className="mt-1 min-h-24 w-full rounded-2xl border border-black/10 bg-muted/40 p-3 text-sm focus-visible:outline-2 focus-visible:outline-[#F06565]/50"
                                    />
                                    <Button type="button" onClick={handleSavePasted} disabled={pasted.trim() === ""} className="mt-2 h-11 w-full rounded-full bg-[#F06565] text-white hover:bg-[#F06565]/90 disabled:opacity-50">
                                        Save pasted result to catalogue
                                    </Button>
                                </div>
                                <p className="text-xs text-muted-foreground">Research runs in your AI tool — this page doesn't call an AI by itself yet. If you want it to call your AI directly, tell me which agent or endpoint to wire in.</p>
                            </div>
                        ) : (
                            <div className="mt-4 flex flex-col gap-3">
                                <div>
                                    <label htmlFor="custom-title" className="mb-1 block text-sm font-medium">
                                        Title
                                    </label>
                                    <Input id="custom-title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder={type === "set" ? "e.g. Phonics Starter Set" : "e.g. Wooden Counting Bears"} className="h-11 rounded-full px-4" />
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div>
                                        <label htmlFor="custom-category" className="mb-1 block text-sm font-medium">
                                            Category
                                        </label>
                                        <select id="custom-category" value={category} onChange={(e) => setCategory(e.target.value)} className="h-11 w-full rounded-full border border-black/10 bg-white px-3 text-sm">
                                            {CATALOGUE_CATEGORIES.map((c) => (
                                                <option key={c} value={c}>
                                                    {c}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="custom-image" className="mb-1 block text-sm font-medium">
                                            Photo URL (optional)
                                        </label>
                                        <Input id="custom-image" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} placeholder="images.pexels.com/…" className="h-11 rounded-full px-4" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="custom-description" className="mb-1 block text-sm font-medium">
                                        Description
                                    </label>
                                    <textarea id="custom-description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="One or two lines, for the card." className="min-h-20 w-full rounded-2xl border border-black/10 bg-white p-3 text-sm focus-visible:outline-2 focus-visible:outline-[#F06565]/50" />
                                </div>
                                {type === "product" ? (
                                    <div>
                                        <label htmlFor="custom-price" className="mb-1 block text-sm font-medium">
                                            Price
                                        </label>
                                        <div className="relative">
                                            <span className="absolute top-1/2 left-3 -translate-y-1/2 text-sm text-muted-foreground">$</span>
                                            <Input id="custom-price" type="number" min={0} step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="24.99" className="h-11 rounded-full pr-4 pl-7" />
                                        </div>
                                    </div>
                                ) : (
                                    <div>
                                        <label htmlFor="custom-items" className="mb-1 block text-sm font-medium">
                                            Items — one per line
                                        </label>
                                        <textarea
                                            id="custom-items"
                                            value={itemsText}
                                            onChange={(e) => setItemsText(e.target.value)}
                                            placeholder={"Counting Bears — $12.99\nNumber Cards — $8.50"}
                                            className="min-h-28 w-full rounded-2xl border border-black/10 bg-white p-3 text-sm focus-visible:outline-2 focus-visible:outline-[#F06565]/50"
                                        />
                                        <p className="mt-1 text-xs text-muted-foreground">Format: Name — $price. A price is optional; leave it off and it counts as $0.</p>
                                    </div>
                                )}
                                <Button type="button" onClick={handleSaveManual} className="h-11 w-full rounded-full bg-[#F06565] text-white hover:bg-[#F06565]/90">
                                    Add to catalogue
                                </Button>
                                <p className="text-xs text-muted-foreground">No photo URL? It gets a placeholder image. Use a real images.pexels.com URL from the photo's own page — never a guessed one.</p>
                            </div>
                        )}

                        {error !== null && (
                            <p role="alert" className="mt-3 rounded-2xl bg-red-50 px-3 py-2 text-sm text-red-600">
                                {error}
                            </p>
                        )}
                    </ScrollArea>
                </DrawerContent>
            </Drawer>
    );
}

export default function PlanWithProductsPage() {

    const [chosenOption, setChosenOption] = React.useState<string | null>(null);

    // ── Planner rail state ──────────────────────────────────────
    const [planned, setPlanned] = useState<PlannedItem[]>([]);
    const [monthlyBudget, setMonthlyBudget] = useState(0);
    const [editingBudget, setEditingBudget] = useState(false);
    const [budgetDraft, setBudgetDraft] = useState("0");
    const [railView, setRailView] = useState<"price" | "topic">("topic");
    // Mobile only: the planner lives in a bottom sheet instead of a
    // side rail, so this is the sheet's open/closed state.
    const [plannerOpen, setPlannerOpen] = useState(false);

    // Desktop only: the budget lives in a shadcn Drawer from the
    // right. It starts closed; the sticky Planner button opens it.
    // The catalogue is always 3 per row now — the drawer overlays
    // on demand instead of taking layout space.
    const [plannerVisible, setPlannerVisible] = useState(false);

    // Custom products / sets the user creates in this session, kept
    // ahead of the built-in catalogue so a new one shows up first.
    const [customEntries, setCustomEntries] = useState<CatalogueEntry[]>([]);
    const [creatorOpen, setCreatorOpen] = useState<"product" | "set" | null>(null);

    // ── Catalogue search / filter / sort ────────────────────────
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const [sortBy, setSortBy] = useState<CatalogueSort>("featured");

    // Render the catalogue in small batches instead of mounting every card at once.
    const CATALOGUE_PAGE_SIZE = 9;
    const [loadedCount, setLoadedCount] = useState(CATALOGUE_PAGE_SIZE);
    const loadMoreRef = useRef<HTMLDivElement | null>(null);
    const isMobile = useMobile();

    const handleSearchChange = (value: string) => {
        setSearchQuery(value);
        setLoadedCount(CATALOGUE_PAGE_SIZE);
    };

    const handleCategoryChange = (value: string) => {
        setSelectedCategory(value);
        setLoadedCount(CATALOGUE_PAGE_SIZE);
    };

    const handleSortChange = (value: CatalogueSort) => {
        setSortBy(value);
        setLoadedCount(CATALOGUE_PAGE_SIZE);
    };

    const clearFilters = () => {
        setSearchQuery("");
        setSelectedCategory("all");
        setSortBy("featured");
        setLoadedCount(CATALOGUE_PAGE_SIZE);
    };

    const hasActiveFilters =
        searchQuery.trim() !== "" || selectedCategory !== "all" || sortBy !== "featured";

    const handleSaveCustom = (entry: CatalogueEntry) => {
        setCustomEntries((prev) => [entry, ...prev]);
        // Clear filters so the new entry is actually visible.
        clearFilters();
    };

    const addProducts = (
        groupKey: string,
        groupTitle: string,
        groupImage: string,
        category: string,
        items: CurriculumCardProduct[],
    ) => {
        setPlanned((prev) => {
            const existing = new Set(prev.map((item) => item.key));
            const next = [...prev];
            for (const product of items) {
                const key = makePlannedKey(groupKey, product.src);
                if (!existing.has(key)) {
                    next.push({ key, groupKey, groupTitle, groupImage, category, product });
                }
            }
            return next;
        });
    };

    const removeProduct = (key: string) =>
        setPlanned((prev) => prev.filter((item) => item.key !== key));

    const removeGroup = (groupKey: string) =>
        setPlanned((prev) => prev.filter((item) => item.groupKey !== groupKey));

    const saveBudget = () => {
        const next = Math.max(1, Number(budgetDraft) || monthlyBudget);
        setMonthlyBudget(next);
        setBudgetDraft(String(next));
        setEditingBudget(false);
    };

    const visibleCatalogue = useMemo(() => {
        const filtered = [...customEntries, ...CATALOGUE].filter(
            (entry) =>
                (selectedCategory === "all" || entry.category === selectedCategory) &&
                matchesCatalogueSearch(entry, searchQuery)
        );
        const sorted = [...filtered];
        switch (sortBy) {
            case "price-asc":
                sorted.sort((a, b) => getCataloguePrice(a) - getCataloguePrice(b));
                break;
            case "price-desc":
                sorted.sort((a, b) => getCataloguePrice(b) - getCataloguePrice(a));
                break;
            case "name-asc":
                sorted.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }
        return sorted;
    }, [searchQuery, selectedCategory, sortBy, customEntries]);

    // Load another batch when the sentinel near the bottom enters the viewport.
    useEffect(() => {
        const sentinel = loadMoreRef.current;
        if (!sentinel || loadedCount >= visibleCatalogue.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((entry) => entry.isIntersecting)) {
                    setLoadedCount((current) =>
                        Math.min(current + CATALOGUE_PAGE_SIZE, visibleCatalogue.length)
                    );
                }
            },
            {
                root: null,
                rootMargin: "500px 0px",
                threshold: 0,
            }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, [loadedCount, visibleCatalogue.length]);

    // Close the mobile planner sheet with Escape.
    useEffect(() => {
        if (!plannerOpen) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setPlannerOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [plannerOpen]);

    // Close the desktop planner overlay with Escape.
    useEffect(() => {
        if (!plannerVisible || isMobile) return;
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") setPlannerVisible(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, [plannerVisible, isMobile]);

    const addedSrcsByGroup = useMemo(() => {
        const map = new Map<string, Set<string>>();
        for (const item of planned) {
            const set = map.get(item.groupKey) ?? new Set<string>();
            set.add(item.product.src);
            map.set(item.groupKey, set);
        }
        return map;
    }, [planned]);

    const spent = planned.reduce((sum, item) => sum + (item.product.price ?? 0), 0);
    const rawPercent = monthlyBudget > 0 ? Math.round((spent / monthlyBudget) * 100) : 0;
    const remaining = monthlyBudget - spent;

    const groups = useMemo(() => {
        const map = new Map<string, { key: string; title: string; image: string; category: string; items: PlannedItem[] }>();
        for (const item of planned) {
            const group = map.get(item.groupKey);
            if (group) {
                group.items.push(item);
            } else {
                map.set(item.groupKey, {
                    key: item.groupKey,
                    title: item.groupTitle,
                    image: item.groupImage,
                    category: item.category,
                    items: [item],
                });
            }
        }
        return [...map.values()];
    }, [planned]);

    const byPrice = useMemo(
        () => [...planned].sort((a, b) => (b.product.price ?? 0) - (a.product.price ?? 0)),
        [planned],
    );

    const budgetChartData = [{ spent: Math.min(100, rawPercent), fill: "#F06565" }];


    const budgetChartConfig = {
        spent: {
            label: "Spent",
            color: "#F06565",
        },
    } satisfies ChartConfig;



    if (isMobile) {
        // ── Mobile layout ───────────────────────────────────────
        // One column, no viewport-width columns, no side rail. The
        // old layout (95vw row + 68vw content + a 280px-min rail) is
        // what squeezed the catalogue and pushed the rail half off
        // screen in the screenshot. The planner is now a bottom sheet
        // opened from the pill above the site's bottom bar, so every
        // control keeps full width when it opens.
        return (
            <main className="relative z-0 mx-auto flex w-full max-w-xl min-w-0 flex-col px-4 pt-6 pb-40 text-slate-950">
                {/* ── Hero ─────────────────────────────────────────── */}
                <section className="relative mt-4 w-full min-w-0 pb-2">
                    {/* Background decoration */}
                    <div className="flex flex-col">
                        <h1 className={cn("flex flex-wrap items-center gap-3 text-3xl leading-tight text-[#F06565]", nofex.className)}>
                            <Sparkles className="size-8 shrink-0" />  Plan With Products
                        </h1>

                        <section className="relative text-[#8e3c3c] dark:text-[#cf7171]">
                            <p className="max-w-3xl text-sm leading-5 ">
                                Create and organize curriculum plans with estimated product and service costs, using AI or manual planning. Keep all curricula, resources, and estimated prices organized in one place. No purchases are made — this is strictly for planning and budgeting. Get started by pressing the buttons below.
                            </p>
                        </section>



                        {
                            /**
                             * <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/70">
                            <span className="flex items-center gap-1.5">
                              <Zap size={14} className="text-rose-400" />
                              1 Active Agents
                            </span>
                            <span className="flex items-center gap-1.5">
                              <Clock3 size={14} className="text-rose-400" />
                              Saves ~3hrs/week
                            </span>
                            <span className="flex items-center gap-1.5">
                              <ShieldCheck size={14} className="text-rose-400" />
                              Privacy-first
                            </span>
                          </div>
                             */
                        }
                    </div>
                </section>

                {/* ── Quick Shortcuts ─────────────────────────────────────────── */}
                <section className="relative mt-4 flex w-full min-w-0 flex-col">
                    <p className="flex w-full flex-row items-center gap-2 text-sm font-semibold text-foreground/80">
                        <Layers2 size={16} className="shrink-0" />
                        Quick Shortcuts
                    </p>

                    <section className="mt-2 grid w-full grid-cols-2 gap-2">
                        <Button variant="outline" onClick={() => setCreatorOpen("product")} className="h-auto min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-center text-xs leading-tight whitespace-normal text-foreground/80">
                            <Plus size={16} className="shrink-0" />
                            Create Product
                        </Button>
                        <Button variant="outline" onClick={() => setCreatorOpen("set")} className="h-auto min-h-11 min-w-0 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-center text-xs leading-tight whitespace-normal text-foreground/80">
                            <Plus size={16} className="shrink-0" />
                            Create Catalogue Set
                        </Button>
                    </section>

                </section>

                {/* ── Catalogue ─────────────────────────────────────────── */}
                <section className="relative mt-4 flex w-full min-w-0 flex-col">
                    <p className="flex w-full flex-row items-center gap-2 text-sm font-semibold text-foreground/80">
                        <Store size={16} className="shrink-0" />
                        Catalogue
                    </p>
                    <section className="mt-2 flex w-full min-w-0 flex-col gap-2 dark:text-foreground/60">
                        <section className="flex w-full min-w-0 flex-row items-center">
                            <Search className="mr-2 size-4 shrink-0 text-foreground/50" />
                            <Input
                                value={searchQuery}
                                onChange={(e) => handleSearchChange(e.target.value)}
                                placeholder="Search by title, topic, price, etc..."
                                className="w-full min-w-0 flex-1 rounded-full bg-transparent px-4 py-2 text-sm"
                            />
                        </section>
                        <section className="grid w-full grid-cols-2 gap-2">
                            <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                                <SelectTrigger className="w-full min-w-0 rounded-full pl-4">
                                    <SelectValue placeholder="All categories" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">All Categories</SelectItem>
                                    <SelectSeparator />
                                    <SelectGroup>
                                        <SelectLabel>Categories</SelectLabel>
                                        {CATALOGUE_CATEGORIES.map((category) => (
                                            <SelectItem key={category} value={category}>
                                                {category}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Select value={sortBy} onValueChange={(value) => handleSortChange(value as CatalogueSort)}>
                                <SelectTrigger className="w-full min-w-0 rounded-full pl-4">
                                    <SelectValue placeholder="Sort" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="featured">Featured</SelectItem>
                                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                    <SelectItem value="name-asc">Name: A to Z</SelectItem>
                                </SelectContent>
                            </Select>
                        </section>
                    </section>

                    <section className="relative mt-4 grid w-full grid-cols-1 grid-rows-2 gap-5">
                        {visibleCatalogue.length === 0 ? (
                            <div className="px-4 py-10 text-center">
                                <p className="text-sm font-semibold">No products match your search.</p>
                                <p className="mt-1 text-sm text-muted-foreground">Try a different name, price, or category.</p>
                                <Button
                                    type="button"
                                    variant="outline"
                                    className="mt-4 rounded-full"
                                    onClick={clearFilters}
                                >
                                    Clear search and filters
                                </Button>
                            </div>
                        ) : (
                            <>
                                {visibleCatalogue.slice(0, loadedCount).map((entry) => (
                                    <CurriculumProductCard
                                        key={entry.id}
                                        category={entry.category}
                                        title={entry.title}
                                        description={entry.description}
                                        image={entry.image}
                                        imageAlt={entry.imageAlt}
                                        products={entry.products}
                                        price={getCataloguePrice(entry)}
                                        onAction={() => addProducts(entry.id, entry.title, entry.image, entry.category, entry.products)}
                                        onAddProduct={(product) => addProducts(entry.id, entry.title, entry.image, entry.category, [product])}
                                        onRemoveProduct={(product) => removeProduct(makePlannedKey(entry.id, product.src))}
                                        addedSrcs={addedSrcsByGroup.get(entry.id) ?? EMPTY_ADDED_SET}
                                    />
                                ))}
                                {loadedCount < visibleCatalogue.length && (
                                    <div
                                        ref={loadMoreRef}
                                        className="col-span-full flex min-h-16 items-center justify-center py-6"
                                        aria-live="polite"
                                    >
                                        <span className="text-sm text-muted-foreground">
                                            Loading more products...
                                        </span>
                                    </div>
                                )}
                            </>
                        )}
                    </section>
                </section>

                {/* ── Planner pill ────────────────────────────────────
                    Fixed above the site's bottom bar (bottom-24 +
                    safe area), so it never sits under it the way the
                    card did in the screenshot. */}
                <div className="fixed inset-x-4 bottom-[calc(6rem+env(safe-area-inset-bottom))] z-40 mx-auto w-auto max-w-xl">
                    <Button
                        type="button"
                        onClick={() => setPlannerOpen(true)}
                        className="flex h-14 w-full items-center justify-between gap-3 rounded-full bg-[#F06565] px-5 text-white shadow-lg hover:bg-[#F06565]/90"
                    >
                        <span className="min-w-0 text-left">
                            <span className="block truncate text-sm font-bold">
                                {formatUSD(spent)} · {planned.length} item{planned.length === 1 ? "" : "s"}
                            </span>
                            <span className="block truncate text-xs text-white/80">
                                {monthlyBudget > 0
                                    ? remaining >= 0
                                        ? `${formatUSD(remaining)} left of budget`
                                        : `${formatUSD(-remaining)} over budget`
                                    : "No budget set yet"}
                            </span>
                        </span>
                        <span className="flex shrink-0 items-center gap-1 text-sm font-medium">
                            Planner
                            <ChevronUp className="size-4" />
                        </span>
                    </Button>
                </div>

                {/* ── Planner bottom sheet ──────────────────────────── */}
                {plannerOpen && (
                    <div className="fixed inset-0 z-50 flex items-end justify-center">
                        <button
                            type="button"
                            aria-label="Close planner"
                            onClick={() => setPlannerOpen(false)}
                            className="absolute inset-0 h-full w-full cursor-default bg-black/50"
                        />
                        <div
                            role="dialog"
                            aria-modal="true"
                            aria-label="Planner"
                            className="relative flex max-h-[85dvh] w-full max-w-xl flex-col overflow-hidden rounded-t-[2rem] bg-background shadow-xl"
                        >
                            <div className="flex shrink-0 items-center justify-between px-5 pt-4 pb-2">
                                <p className="text-base font-semibold">Planner</p>
                                <Button
                                    type="button"
                                    size="icon"
                                    variant="ghost"
                                    className="size-8 shrink-0 rounded-full"
                                    aria-label="Close planner"
                                    onClick={() => setPlannerOpen(false)}
                                >
                                    <X className="size-4" />
                                </Button>
                            </div>

                            <div className="min-h-0 flex-1 overflow-y-auto px-4 pb-4">
                                {/* ── Budget ring ─────────────────────────── */}
                                <section className="flex shrink-0 flex-col items-center">
                                    <ChartContainer
                                        config={budgetChartConfig}
                                        className="mx-auto h-[200px] w-[200px] shrink-0"
                                    >
                                        <RadialBarChart
                                            data={budgetChartData}
                                            startAngle={90}
                                            endAngle={-270}
                                            innerRadius={75}
                                            outerRadius={90}
                                        >
                                            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                            <PolarGrid
                                                gridType="circle"
                                                radialLines={false}
                                                stroke="none"
                                                className="first:fill-muted last:fill-background"
                                                polarRadius={[90, 75]}
                                            />
                                            <RadialBar dataKey="spent" background cornerRadius={10} />
                                            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                                <Label
                                                    content={({ viewBox }) => {
                                                        const cx = viewBox && "cx" in viewBox ? Number(viewBox.cx) : 0;
                                                        const cy = viewBox && "cy" in viewBox ? Number(viewBox.cy) : 0;
                                                        const overBy = spent - monthlyBudget;
                                                        return (
                                                            <text
                                                                x={cx}
                                                                y={cy}
                                                                textAnchor="middle"
                                                                dominantBaseline="middle"
                                                            >
                                                                <tspan
                                                                    x={cx}
                                                                    y={cy - 16}
                                                                    className="fill-foreground text-2xl font-bold"
                                                                >
                                                                    {formatUSD(monthlyBudget)}
                                                                </tspan>
                                                                <tspan
                                                                    x={cx}
                                                                    y={cy + 10}
                                                                    className="fill-muted-foreground text-xs"
                                                                >
                                                                    of the budget
                                                                </tspan>
                                                                <tspan
                                                                    x={cx}
                                                                    y={cy + 28}
                                                                    className="fill-muted-foreground text-xs"
                                                                >
                                                                    {overBy > 0
                                                                        ? `${formatUSD(overBy)} over budget`
                                                                        : `${formatUSD(-overBy)} left`}
                                                                </tspan>
                                                            </text>
                                                        );
                                                    }}
                                                />

                                            </PolarRadiusAxis>
                                        </RadialBarChart>

                                    </ChartContainer>
                                </section>

                                {/* ── Totals + Price / Topic ──────────────── */}
                                <div className="w-full shrink-0 border-t pt-3">
                                    <div className="mb-3 flex items-center justify-between px-1 text-sm">
                                        <span className="font-semibold">Total</span>
                                        <span className="font-bold">
                                            {formatUSD(spent)}{" "}
                                            <span className="font-normal text-muted-foreground">· {planned.length} item{planned.length === 1 ? "" : "s"}</span>
                                        </span>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2">
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setRailView("price")}
                                            className={cn("rounded-full", railView === "price" && "border-transparent bg-[#F06565] text-white hover:bg-[#F06565]/90 hover:text-white")}
                                        >
                                            Price
                                        </Button>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            onClick={() => setRailView("topic")}
                                            className={cn("rounded-full", railView === "topic" && "border-transparent bg-[#F06565] text-white hover:bg-[#F06565]/90 hover:text-white")}
                                        >
                                            Topic
                                        </Button>
                                    </div>
                                </div>

                                {/* ── Edit / Clear ────────────────────────── */}
                                <div className="mt-4">
                                    {editingBudget ? (
                                        <div className="flex w-full shrink-0 items-center gap-2">
                                            <span className="text-sm font-semibold">$</span>
                                            <Input
                                                type="number"
                                                min={1}
                                                value={budgetDraft}
                                                onChange={(e) => setBudgetDraft(e.target.value)}
                                                onKeyDown={(e) => {
                                                    if (e.key === "Enter") saveBudget();
                                                }}
                                                className="h-9 min-w-0 flex-1 rounded-full px-4 text-sm"
                                            />
                                            <Button size="sm" onClick={saveBudget} className="shrink-0 rounded-full bg-[#F06565] px-3 text-white hover:bg-[#F06565]/90">
                                                Save
                                            </Button>
                                            <Button size="sm" variant="ghost" onClick={() => setEditingBudget(false)} className="shrink-0 rounded-full px-2" aria-label="Cancel editing budget">
                                                <X className="size-4" />
                                            </Button>
                                        </div>
                                    ) : (
                                        <ButtonGroup className="w-full rounded-full shrink-0 justify-center">
                                            <Button variant="outline" className="flex-1 rounded-l-full" onClick={() => { setBudgetDraft(String(monthlyBudget)); setEditingBudget(true); }}>
                                                <PencilLine className="size-4" />
                                                Edit
                                            </Button>
                                            <Button variant="outline" className="flex-1 rounded-r-full" disabled={planned.length === 0} onClick={() => setPlanned([])}>
                                                <X className="size-4" />
                                                Clear
                                            </Button>
                                        </ButtonGroup>
                                    )}
                                </div>

                                {/* ── Planned items ───────────────────────── */}
                                <div className="mt-4 w-full">
                                    {planned.length === 0 ? (
                                        <p className="px-2 py-6 text-center text-sm text-muted-foreground">
                                            Nothing planned yet. Add a full set, or tap a card to add products one by one.
                                        </p>
                                    ) : railView === "topic" ? (
                                        <div className="flex flex-col gap-4">
                                            {groups.map((group) => (
                                                <div key={group.key}>
                                                    <div className="flex items-center gap-2">
                                                        <img src={group.image} alt={group.title} className="size-10 shrink-0 rounded-lg object-cover" />
                                                        <div className="min-w-0 flex-1 text-left">
                                                            <p className="truncate text-sm font-semibold">{group.title}</p>
                                                            <p className="text-xs text-muted-foreground">
                                                                {group.items.length} item{group.items.length === 1 ? "" : "s"} · {formatUSD(group.items.reduce((sum, item) => sum + (item.product.price ?? 0), 0))}
                                                            </p>
                                                        </div>
                                                        <Button type="button" size="icon" variant="ghost" className="size-7 shrink-0 rounded-full" aria-label={`Remove ${group.title}`} onClick={() => removeGroup(group.key)}>
                                                            <X className="size-4" />
                                                        </Button>
                                                    </div>
                                                    <div className="mt-1 flex flex-col">
                                                        {group.items.map((item) => (
                                                            <div key={item.key} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/50">
                                                                <p className="min-w-0 flex-1 truncate text-left text-sm">{item.product.name ?? item.product.alt}</p>
                                                                <p className="shrink-0 text-sm font-medium">{formatUSD(item.product.price ?? 0)}</p>
                                                                <Button type="button" size="icon" variant="ghost" className="size-6 shrink-0 rounded-full" aria-label={`Remove ${item.product.name ?? item.product.alt}`} onClick={() => removeProduct(item.key)}>
                                                                    <X className="size-3.5" />
                                                                </Button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <div className="flex flex-col">
                                            {byPrice.map((item) => (
                                                <div key={item.key} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/50">
                                                    <img src={item.product.src} alt={item.product.alt} className="size-8 shrink-0 rounded-md object-cover" />
                                                    <div className="min-w-0 flex-1 text-left">
                                                        <p className="truncate text-sm font-medium">{item.product.name ?? item.product.alt}</p>
                                                        <p className="truncate text-xs text-muted-foreground">{item.groupTitle}</p>
                                                    </div>
                                                    <p className="shrink-0 text-sm font-medium">{formatUSD(item.product.price ?? 0)}</p>
                                                    <Button type="button" size="icon" variant="ghost" className="size-6 shrink-0 rounded-full" aria-label={`Remove ${item.product.name ?? item.product.alt}`} onClick={() => removeProduct(item.key)}>
                                                        <X className="size-3.5" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="shrink-0 border-t bg-background p-4">
                                <Button className="mx-auto flex w-full shrink-0 justify-center rounded-full bg-[#F06565] px-4 py-2 text-white hover:bg-[#F06565]/90">
                                    <Sparkles />
                                    Create A Prompt
                                </Button>
                            </div>
                        </div>
                    </div>
                )}

                {creatorOpen !== null && (<CreateCustomDrawer key={creatorOpen} open initialType={creatorOpen} onClose={() => setCreatorOpen(null)} onSave={handleSaveCustom} />)}
            </main>
        );
    } else {
        return (
            <Drawer swipeDirection="right" disablePointerDismissal open={plannerVisible} onOpenChange={setPlannerVisible}>
                <main className="relative z-0 mr-auto min-h-screen w-[95vw] px-4 pt-8 pl-6 text-slate-950">
                    {/* ── Sticky budget button ────────────────────────────────
                    Fixed to the screen with sticky, inside this
                    relative <main>: it sits at the top of the page
                    and stays at top-4 while the catalogue scrolls
                    underneath it. -mb-11 so the row takes no
                    vertical space; pointer-events only on the
                    button itself. Clicking it opens the Drawer. */}
                    <div className="pointer-events-none sticky top-4 z-40 -mb-11 flex h-11 justify-end">
                        <DrawerTrigger render={
                            <button
                                type="button"
                                className="pointer-events-auto flex h-11 items-center gap-2.5 rounded-full bg-white pr-2 pl-4 text-sm font-semibold shadow-lg shadow-black/10 ring-1 ring-black/5 transition hover:shadow-xl"
                            />
                        }>
                            <span className="flex size-7 items-center justify-center rounded-full bg-[#F06565]/10 text-[#F06565]">
                                <Wallet className="size-4" />
                            </span>
                            <span className="min-w-0 text-left leading-tight">
                                <span className="block">
                                    {formatUSD(spent)} · {planned.length} item{planned.length === 1 ? "" : "s"}
                                </span>
                                <span className="block text-xs font-normal text-muted-foreground">
                                    {monthlyBudget > 0
                                        ? remaining >= 0
                                            ? `${formatUSD(remaining)} left of budget`
                                            : `${formatUSD(-remaining)} over budget`
                                        : "No budget set yet"}
                                </span>
                            </span>
                            <span className="flex items-center gap-1 rounded-full bg-[#F06565] px-3 py-1.5 text-xs font-semibold text-white">
                                Planner
                                <PanelRightOpen className="size-3.5" />
                            </span>
                        </DrawerTrigger>
                    </div>

                    <section className="flex flex-col">
                        {/* ── Hero ─────────────────────────────────────────── */}
                        <section className="relative w-full overflow-hidden pb-2 mt-4">
                            {/* Background decoration */}
                            <div className=" inset-0 flex flex-col">
                                <h1 className={cn("flex flex-wrap text-[#F06565] items-center gap-3 text-3xl ", nofex.className)}>
                                    <Sparkles className="size-8" />  Plan With Products
                                </h1>

                                <section className="relative dark:text-[#cf7171] text-[#8e3c3c]">
                                    <p className="max-w-3xl text-sm leading-5 ">
                                        Create and organize curriculum plans with estimated product and service costs, using AI or manual planning. Keep all curricula, resources, and estimated prices organized in one place. No purchases are made — this is strictly for planning and budgeting. Get started by pressing the buttons below.
                                    </p>
                                </section>



                                {
                                    /**
                                     * <div className="mt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-white/70">
                                    <span className="flex items-center gap-1.5">
                                      <Zap size={14} className="text-rose-400" />
                                      1 Active Agents
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                      <Clock3 size={14} className="text-rose-400" />
                                      Saves ~3hrs/week
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                      <ShieldCheck size={14} className="text-rose-400" />
                                      Privacy-first
                                    </span>
                                  </div>
                                     */
                                }
                            </div>
                        </section>

                        {/* ── Quick Shortcuts ─────────────────────────────────────────── */}
                        <section className="relative w-full flex flex-col overflow-hidden mt-4  ">
                            <p className="flex w-full flex-row items-center gap-2 text-sm font-semibold text-foreground/80">
                                <Layers2 size={16} />
                                Quick Shortcuts
                            </p>

                            <section className="mt-2 flex flex-wrap gap-2.5">
                                <Button onClick={() => setCreatorOpen("product")} className="h-11 rounded-full bg-[#F06565] px-5 text-sm font-semibold text-white shadow-sm shadow-[#F06565]/25 transition hover:bg-[#E05555]">
                                    <Plus size={16} />
                                    Create Product
                                </Button>
                                <Button variant="outline" onClick={() => setCreatorOpen("set")} className="h-11 rounded-full border-black/10 bg-white px-5 text-sm font-semibold text-foreground/80 shadow-sm transition hover:border-[#F06565]/40 hover:text-[#F06565]">
                                    <Plus size={16} />
                                    Create Catalogue Set
                                </Button>
                            </section>

                        </section>

                        {/* ── Products ─────────────────────────────────────────── */}
                        <section className="relative w-full flex flex-col overflow-hidden mt-4  ">
                            <p className="flex w-full flex-row items-center gap-2 text-sm font-semibold text-foreground/80">
                                <Store size={16} />
                                Catalogue
                            </p>
                            <section className="mt-3 flex flex-wrap items-center gap-2 rounded-2xl border border-black/[0.06] bg-white/90 p-2 shadow-sm">
                                <div className="relative min-w-[220px] flex-1">
                                    <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
                                    <Input
                                        value={searchQuery}
                                        onChange={(e) => handleSearchChange(e.target.value)}
                                        placeholder="Search by title, topic, price, etc..."
                                        aria-label="Search catalogue"
                                        className="h-10 w-full rounded-full border-transparent bg-muted/60 pr-9 pl-10 text-sm focus-visible:bg-white focus-visible:ring-2 focus-visible:ring-[#F06565]/40"
                                    />
                                    {searchQuery !== "" && (
                                        <button
                                            type="button"
                                            aria-label="Clear search"
                                            onClick={() => handleSearchChange("")}
                                            className="absolute top-1/2 right-2 flex size-6 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition hover:bg-black/5 hover:text-foreground"
                                        >
                                            <X className="size-3.5" />
                                        </button>
                                    )}
                                </div>
                                <Select value={selectedCategory} onValueChange={handleCategoryChange}>
                                    <SelectTrigger className="h-10 w-[180px] rounded-full border-black/10 bg-white pl-4 text-sm font-medium" aria-label="Filter by category">
                                        <SelectValue placeholder="All categories" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="all">All Categories</SelectItem>
                                        <SelectSeparator />
                                        <SelectGroup>
                                            <SelectLabel>Categories</SelectLabel>
                                            {CATALOGUE_CATEGORIES.map((category) => (
                                                <SelectItem key={category} value={category}>
                                                    {category}
                                                </SelectItem>
                                            ))}
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                                <Select value={sortBy} onValueChange={(value) => handleSortChange(value as CatalogueSort)}>
                                    <SelectTrigger className="h-10 w-[190px] rounded-full border-black/10 bg-white pl-4 text-sm font-medium" aria-label="Sort catalogue">
                                        <SelectValue placeholder="Sort" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="featured">Featured</SelectItem>
                                        <SelectItem value="price-asc">Price: Low to High</SelectItem>
                                        <SelectItem value="price-desc">Price: High to Low</SelectItem>
                                        <SelectItem value="name-asc">Name: A to Z</SelectItem>
                                    </SelectContent>
                                </Select>
                                <div className="hidden h-6 w-px bg-black/10 sm:block" aria-hidden="true" />
                                <Button
                                    type="button"
                                    variant="ghost"
                                    disabled={!hasActiveFilters}
                                    onClick={clearFilters}
                                    className="h-10 shrink-0 rounded-full px-3 text-sm font-medium text-[#F06565] hover:bg-[#F06565]/10 hover:text-[#F06565] disabled:pointer-events-none disabled:opacity-40"
                                >
                                    <X className="size-4" />
                                    Clear filters
                                </Button>
                            </section>

                            {/* Result count + the active filters, so it is
                            always clear why the list is what it is. */}
                            <div className="mt-2 flex flex-wrap items-center gap-2 px-1 text-xs text-muted-foreground">
                                <span>
                                    {visibleCatalogue.length} set{visibleCatalogue.length === 1 ? "" : "s"}
                                    {hasActiveFilters ? " matching your filters" : ""}
                                </span>
                                {searchQuery.trim() !== "" && (
                                    <button
                                        type="button"
                                        onClick={() => handleSearchChange("")}
                                        className="flex items-center gap-1 rounded-full bg-[#F06565]/10 px-2.5 py-1 font-medium text-[#F06565] transition hover:bg-[#F06565]/20"
                                    >
                                        “{searchQuery.trim()}”
                                        <X className="size-3" />
                                    </button>
                                )}
                                {selectedCategory !== "all" && (
                                    <button
                                        type="button"
                                        onClick={() => handleCategoryChange("all")}
                                        className="flex items-center gap-1 rounded-full bg-[#F06565]/10 px-2.5 py-1 font-medium text-[#F06565] transition hover:bg-[#F06565]/20"
                                    >
                                        {selectedCategory}
                                        <X className="size-3" />
                                    </button>
                                )}
                                {sortBy !== "featured" && (
                                    <button
                                        type="button"
                                        onClick={() => handleSortChange("featured")}
                                        className="flex items-center gap-1 rounded-full bg-[#F06565]/10 px-2.5 py-1 font-medium text-[#F06565] transition hover:bg-[#F06565]/20"
                                    >
                                        {sortBy === "price-asc" ? "Price: Low to High" : sortBy === "price-desc" ? "Price: High to Low" : "Name: A to Z"}
                                        <X className="size-3" />
                                    </button>
                                )}
                            </div>

                            {/* ── Hero ─────────────────────────────────────────── */}
                            <div
                                className="relative mt-4 grid w-full grid-cols-2 gap-5 p-2 lg:grid-cols-3"
                            >
                                {visibleCatalogue.length === 0 ? (
                                    <div className="col-span-full px-4 py-10 text-center">
                                        <p className="text-sm font-semibold">No products match your search.</p>
                                        <p className="mt-1 text-sm text-muted-foreground">Try a different name, price, or category.</p>
                                        <Button
                                            type="button"
                                            variant="outline"
                                            className="mt-4 rounded-full"
                                            onClick={clearFilters}
                                        >
                                            Clear search and filters
                                        </Button>
                                    </div>
                                ) : (
                                    <>
                                        {visibleCatalogue.slice(0, loadedCount).map((entry) => (
                                            <CurriculumProductCard
                                                key={entry.id}
                                                category={entry.category}
                                                title={entry.title}
                                                description={entry.description}
                                                image={entry.image}
                                                imageAlt={entry.imageAlt}
                                                products={entry.products}
                                                price={getCataloguePrice(entry)}
                                                onAction={() => addProducts(entry.id, entry.title, entry.image, entry.category, entry.products)}
                                                onAddProduct={(product) => addProducts(entry.id, entry.title, entry.image, entry.category, [product])}
                                                onRemoveProduct={(product) => removeProduct(makePlannedKey(entry.id, product.src))}
                                                addedSrcs={addedSrcsByGroup.get(entry.id) ?? EMPTY_ADDED_SET}
                                            />
                                        ))}
                                        {loadedCount < visibleCatalogue.length && (
                                            <div
                                                ref={loadMoreRef}
                                                className="col-span-full flex min-h-16 items-center justify-center py-6"
                                                aria-live="polite"
                                            >
                                                <span className="text-sm text-muted-foreground">
                                                    Loading more products...
                                                </span>
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        </section>

                    </section>



                </main>
                {/* ── Budget drawer ─────────────────────────────────────────────
                shadcn Drawer from the right. Modal (default) +
                disablePointerDismissal, so adding a product does not
                dismiss it. Close with the X, swipe, or Esc. */}
                <DrawerContent className="flex w-[320px] flex-col">
                    {/* ── Pinned header — fixed at the top of the panel. Only the planned-items list below scrolls. ── */}
                    <div className="shrink-0 border-b border-black/[0.06] p-4 pb-3">
                        {/* Panel header — the hide button lives here. */}
                        <div className="flex shrink-0 items-center justify-between px-1 pt-1">
                            <DrawerTitle className="flex items-center gap-2 text-sm font-semibold">
                                <Wallet className="size-4 text-[#F06565]" />
                                Planner &amp; budget
                            </DrawerTitle>
                            <DrawerDescription className="sr-only">
                                Your planned products and monthly budget.
                            </DrawerDescription>
                            <DrawerClose
                                render={
                                    <Button
                                        type="button"
                                        size="icon"
                                        variant="ghost"
                                        className="size-8 shrink-0 rounded-full"
                                        aria-label="Hide planner"
                                        title="Hide planner (Esc)"
                                    />
                                }
                            >
                                <PanelRightClose className="size-4" />
                            </DrawerClose>
                        </div>
                        {/* ── Budget ring ─────────────────────────── */}
                        <div className="flex shrink-0 flex-col items-center">
                            <ChartContainer
                                config={budgetChartConfig}
                                className="mx-auto h-[200px] w-[200px] shrink-0"
                            >
                                <RadialBarChart
                                    data={budgetChartData}
                                    startAngle={90}
                                    endAngle={-270}
                                    innerRadius={75}
                                    outerRadius={90}
                                >
                                    <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
                                    <PolarGrid
                                        gridType="circle"
                                        radialLines={false}
                                        stroke="none"
                                        className="first:fill-muted last:fill-background"
                                        polarRadius={[90, 75]}
                                    />
                                    <RadialBar dataKey="spent" background cornerRadius={10} />
                                    <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                                        <Label
                                            content={({ viewBox }) => {
                                                const cx = viewBox && "cx" in viewBox ? Number(viewBox.cx) : 0;
                                                const cy = viewBox && "cy" in viewBox ? Number(viewBox.cy) : 0;
                                                const overBy = spent - monthlyBudget;
                                                return (
                                                    <text
                                                        x={cx}
                                                        y={cy}
                                                        textAnchor="middle"
                                                        dominantBaseline="middle"
                                                    >
                                                        <tspan
                                                            x={cx}
                                                            y={cy - 16}
                                                            className="fill-foreground text-2xl font-bold"
                                                        >
                                                            {formatUSD(monthlyBudget)}
                                                        </tspan>
                                                        <tspan
                                                            x={cx}
                                                            y={cy + 10}
                                                            className="fill-muted-foreground text-xs"
                                                        >
                                                            of the budget
                                                        </tspan>
                                                        <tspan
                                                            x={cx}
                                                            y={cy + 28}
                                                            className="fill-muted-foreground text-xs"
                                                        >
                                                            {overBy > 0
                                                                ? `${formatUSD(overBy)} over budget`
                                                                : `${formatUSD(-overBy)} left`}
                                                        </tspan>
                                                    </text>
                                                );
                                            }}
                                        />

                                    </PolarRadiusAxis>
                                </RadialBarChart>

                            </ChartContainer>
                        </div>

                        {/* ── Totals + Price / Topic ──────────────── */}
                        <div className="w-full shrink-0 border-t pt-3">
                            <div className="mb-3 flex items-center justify-between px-1 text-sm">
                                <span className="font-semibold">Total</span>
                                <span className="font-bold">
                                    {formatUSD(spent)}{" "}
                                    <span className="font-normal text-muted-foreground">· {planned.length} item{planned.length === 1 ? "" : "s"}</span>
                                </span>
                            </div>
                            <div className="grid grid-cols-2 gap-1 rounded-full bg-muted/70 p-1" role="group" aria-label="Group planned items by">
                                <Button
                                    type="button"
                                    variant="ghost"
                                    aria-pressed={railView === "price"}
                                    onClick={() => setRailView("price")}
                                    className={cn("h-9 rounded-full text-sm font-medium", railView === "price" ? "bg-[#F06565] text-white shadow-sm hover:bg-[#F06565]/90 hover:text-white" : "text-muted-foreground hover:bg-transparent hover:text-foreground")}
                                >
                                    Price
                                </Button>
                                <Button
                                    type="button"
                                    variant="ghost"
                                    aria-pressed={railView === "topic"}
                                    onClick={() => setRailView("topic")}
                                    className={cn("h-9 rounded-full text-sm font-medium", railView === "topic" ? "bg-[#F06565] text-white shadow-sm hover:bg-[#F06565]/90 hover:text-white" : "text-muted-foreground hover:bg-transparent hover:text-foreground")}
                                >
                                    Topic
                                </Button>
                            </div>
                        </div>

                        {/* ── Edit / Clear ────────────────────────── */}
                        {editingBudget ? (
                            <div className="flex w-full shrink-0 items-center gap-2">
                                <span className="text-sm font-semibold">$</span>
                                <Input
                                    type="number"
                                    min={1}
                                    value={budgetDraft}
                                    onChange={(e) => setBudgetDraft(e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") saveBudget();
                                    }}
                                    className="h-9 min-w-0 flex-1 rounded-full px-4 text-sm"
                                />
                                <Button size="sm" onClick={saveBudget} className="shrink-0 rounded-full bg-[#F06565] px-3 text-white hover:bg-[#F06565]/90">
                                    Save
                                </Button>
                                <Button size="sm" variant="ghost" onClick={() => setEditingBudget(false)} className="shrink-0 rounded-full px-2" aria-label="Cancel editing budget">
                                    <X className="size-4" />
                                </Button>
                            </div>
                        ) : (
                            <ButtonGroup className="w-full rounded-full shrink-0 justify-center">
                                <Button variant="outline" className="flex-1 rounded-l-full" onClick={() => { setBudgetDraft(String(monthlyBudget)); setEditingBudget(true); }}>
                                    <PencilLine className="size-4" />
                                    Edit
                                </Button>
                                <Button variant="outline" className="flex-1 rounded-r-full" disabled={planned.length === 0} onClick={() => setPlanned([])}>
                                    <X className="size-4" />
                                    Clear
                                </Button>
                            </ButtonGroup>
                        )}

                    </div>
                    {/* ── Planned items ───────────────────────── */}
                    <div className="min-h-0 w-full flex-1 overflow-y-auto px-4 py-3">
                        {planned.length === 0 ? (
                            <p className="px-2 py-6 text-center text-sm text-muted-foreground">
                                Nothing planned yet. Add a full set, or hover a card to add products one by one.
                            </p>
                        ) : railView === "topic" ? (
                            <div className="flex flex-col gap-4">
                                {groups.map((group) => (
                                    <div key={group.key}>
                                        <div className="flex items-center gap-2">
                                            <img src={group.image} alt={group.title} className="size-10 shrink-0 rounded-lg object-cover" />
                                            <div className="min-w-0 flex-1 text-left">
                                                <p className="truncate text-sm font-semibold">{group.title}</p>
                                                <p className="text-xs text-muted-foreground">
                                                    {group.items.length} item{group.items.length === 1 ? "" : "s"} · {formatUSD(group.items.reduce((sum, item) => sum + (item.product.price ?? 0), 0))}
                                                </p>
                                            </div>
                                            <Button type="button" size="icon" variant="ghost" className="size-7 shrink-0 rounded-full" aria-label={`Remove ${group.title}`} onClick={() => removeGroup(group.key)}>
                                                <X className="size-4" />
                                            </Button>
                                        </div>
                                        <div className="mt-1 flex flex-col">
                                            {group.items.map((item) => (
                                                <div key={item.key} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/50">
                                                    <p className="min-w-0 flex-1 truncate text-left text-sm">{item.product.name ?? item.product.alt}</p>
                                                    <p className="shrink-0 text-sm font-medium">{formatUSD(item.product.price ?? 0)}</p>
                                                    <Button type="button" size="icon" variant="ghost" className="size-6 shrink-0 rounded-full" aria-label={`Remove ${item.product.name ?? item.product.alt}`} onClick={() => removeProduct(item.key)}>
                                                        <X className="size-3.5" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col">
                                {byPrice.map((item) => (
                                    <div key={item.key} className="flex items-center gap-2 rounded-lg px-2 py-1.5 hover:bg-muted/50">
                                        <img src={item.product.src} alt={item.product.alt} className="size-8 shrink-0 rounded-md object-cover" />
                                        <div className="min-w-0 flex-1 text-left">
                                            <p className="truncate text-sm font-medium">{item.product.name ?? item.product.alt}</p>
                                            <p className="truncate text-xs text-muted-foreground">{item.groupTitle}</p>
                                        </div>
                                        <p className="shrink-0 text-sm font-medium">{formatUSD(item.product.price ?? 0)}</p>
                                        <Button type="button" size="icon" variant="ghost" className="size-6 shrink-0 rounded-full" aria-label={`Remove ${item.product.name ?? item.product.alt}`} onClick={() => removeProduct(item.key)}>
                                            <X className="size-3.5" />
                                        </Button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="shrink-0 border-t p-4">
                        <Button className="w-full shrink-0 justify-center bg-[#F06565] hover:bg-[#F06565]/90 text-white rounded-full px-4 py-2 flex flex-row items-center gap-2">
                            <Sparkles />
                            Create A Prompt
                        </Button>
                    </div>
                </DrawerContent>
                {creatorOpen !== null && (<CreateCustomDrawer key={creatorOpen} open initialType={creatorOpen} onClose={() => setCreatorOpen(null)} onSave={handleSaveCustom} />)}
            </Drawer>
        );
    }

}