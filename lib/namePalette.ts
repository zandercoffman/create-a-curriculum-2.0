
 // Name -> deterministic 6-color palette
// Same input = same output, every time.

function hashName(name: string): number {
  // FNV-1a 32-bit hash
  let hash = 2166136261;
  for (const ch of name) {
    hash ^= ch.codePointAt(0) ?? 0;
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

export type GradientTheme = "coral" | "prussian";

function mulberry32(seed: number) {
  let a = seed;
  return () => {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hslToHex(h: number, s: number, l: number): string {
  h = ((h % 360) + 360) % 360;
  s = Math.max(0, Math.min(100, s)) / 100;
  l = Math.max(0, Math.min(100, l)) / 100;

  const k = (n: number) => (n + h / 30) % 12;
  const a = s * Math.min(l, 1 - l);
  const f = (n: number) =>
    l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));

  return (
    "#" +
    [f(0), f(8), f(4)]
      .map((v) => Math.round(v * 255).toString(16).padStart(2, "0"))
      .join("")
      .toUpperCase()
  );
}

export function getThemeForName(name: string): GradientTheme {
  const normalized = name.trim().toLowerCase();
  const seed = normalized
    ? hashName(normalized + "|theme")
    : 0;

  const rand = mulberry32(seed);
  return rand() < 0.5 ? "coral" : "prussian";
}

export function generatePaletteFromName(name: string): {
  palette: string[];
  backgroundColor: string;
  speed: number;
  theme: GradientTheme;
} {
  const normalized = name.trim().toLowerCase();
  const seed = normalized ? hashName(normalized) : 0;
  const rand = mulberry32(seed);
  const theme = getThemeForName(name);

  if (theme === "prussian") {
    const slots = [
      { h: 201, s: 77, l: 19 },
      { h: 186, s: 89, l: 29 },
      { h: 206, s: 55, l: 83 },
      { h: 359, s: 100, l: 67 },
      { h: 358, s: 75, l: 45 },
      { h: 152, s: 55, l: 78 },
    ];

    const palette = slots.map((slot) =>
      hslToHex(
        slot.h + (rand() - 0.5) * 16,
        slot.s + (rand() - 0.5) * 20,
        slot.l + (rand() - 0.5) * 16
      )
    );

    palette[0] = "#0B3954";
    palette[3] = "#FF5A5F";

    return {
      palette,
      backgroundColor: hslToHex(201, 77, 10),
      speed: Math.round((1.4 + rand() * 2.4) * 10) / 10,
      theme,
    };
  }

  // Coral theme
  const slots = [
    { h: 4, s: 88, l: 62 },
    { h: 14, s: 92, l: 68 },
    { h: 25, s: 88, l: 72 },
    { h: 345, s: 78, l: 64 },
    { h: 32, s: 85, l: 82 },
    { h: 8, s: 75, l: 48 },
  ];

  const palette = slots.map((slot) =>
    hslToHex(
      slot.h + (rand() - 0.5) * 16,
      slot.s + (rand() - 0.5) * 16,
      slot.l + (rand() - 0.5) * 12
    )
  );

  palette[0] = "#FF6B6B";

  return {
    palette,
    backgroundColor: hslToHex(8, 45, 12),
    speed: Math.round((1.4 + rand() * 2.4) * 10) / 10,
    theme,
  };
}

export type AnimationDirection = {
  label: "forward" | "reverse" | "horizontal" | "vertical";
  speedSign: 1 | -1;
  horizontalPressure: number;
  verticalPressure: number;
};

const DIRECTIONS: AnimationDirection[] = [
  { label: "forward", speedSign: 1, horizontalPressure: 3, verticalPressure: 4 },
  { label: "reverse", speedSign: -1, horizontalPressure: 3, verticalPressure: 4 },
  { label: "horizontal", speedSign: 1, horizontalPressure: 5, verticalPressure: 2 },
  { label: "vertical", speedSign: -1, horizontalPressure: 2, verticalPressure: 5 },
];

export function getAnimationDirectionForName(name: string): AnimationDirection {
  const normalized = name.trim().toLowerCase();
  const rand = mulberry32(
    normalized ? hashName(normalized + "|direction") : 0
  );

  return DIRECTIONS[Math.floor(rand() * DIRECTIONS.length)];
}

export function toNeatColors(palette: string[]) {
  return palette.map((color) => ({ color, enabled: true }));
}


// Gray in = gray out, because saturation is carried through from the input.
function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const clean = hex.trim().replace(/^#/, "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;

  if (!/^[0-9a-fA-F]{6}$/.test(full)) {
    return { h: 0, s: 82, l: 67 }; // fallback: #F06565
  }

  const r = parseInt(full.slice(0, 2), 16) / 255;
  const g = parseInt(full.slice(2, 4), 16) / 255;
  const b = parseInt(full.slice(4, 6), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;

  if (max === min) return { h: 0, s: 0, l: l * 100 };

  const d = max - min;
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const h =
    max === r
      ? (g - b) / d + (g < b ? 6 : 0)
      : max === g
        ? (b - r) / d + 2
        : (r - g) / d + 4;

  return { h: h * 60, s: s * 100, l: l * 100 };
}

function normalizeHex(hex: string): string {
  const clean = hex.trim().replace(/^#/, "");
  const full =
    clean.length === 3
      ? clean
          .split("")
          .map((c) => c + c)
          .join("")
      : clean;
  return /^[0-9a-fA-F]{6}$/.test(full) ? `#${full.toUpperCase()}` : "#F06565";
}


export function generatePaletteFromHex(hex: string): {
  palette: string[];
  backgroundColor: string;
} {
  const { h, s, l } = hexToHsl(hex);
  const clamp = (v: number, min: number, max: number) =>
    Math.max(min, Math.min(max, v));

  const slots = [
    { dh: 0, ds: 0, dl: 0 }, // base, exact
    { dh: 0, ds: -5, dl: 28 }, // light tint
    { dh: 12, ds: -10, dl: 16 }, // lighter, slightly shifted
    { dh: -12, ds: 0, dl: -14 }, // shade
    { dh: 0, ds: 5, dl: -28 }, // deep shade
    { dh: 20, ds: -15, dl: 8 }, // shifted tint
  ];

  const palette = slots.map((slot) =>
    hslToHex(h + slot.dh, s + slot.ds, clamp(l + slot.dl, 5, 95))
  );
  palette[0] = normalizeHex(hex);

  return {
    palette,
    backgroundColor: hslToHex(h, s * 0.55, 12),
  };
}