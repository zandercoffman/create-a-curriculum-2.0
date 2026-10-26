"use client";

import { useEffect, useRef } from "react";
import { NeatGradient } from "@firecms/neat";
import { generatePaletteFromHex, generatePaletteFromName, getAnimationDirectionForName, toNeatColors } from "@/lib/namePalette";

// Paste your full config here, minus colors/backgroundColor
const baseConfig = {
    speed: 2.5,
    horizontalPressure: 3,
    verticalPressure: 4,
    waveFrequencyX: 2,
    waveFrequencyY: 3,
    waveAmplitude: 5,
    // ...rest of your config
} as const;

// True when the user has "Reduce motion" enabled in their OS.
const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export function NameGradient({
  name,
  height = "400px",
  width = "600px",
}: {
  name: string;
  height?: string;
  width?: string;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const { palette, backgroundColor, speed } = generatePaletteFromName(name);
        const direction = getAnimationDirectionForName(name);
        const reducedMotion = prefersReducedMotion();

        const gradient = new NeatGradient({
            ref: canvas,
            ...baseConfig,
            speed: reducedMotion ? 0 : speed * direction.speedSign,
            horizontalPressure: direction.horizontalPressure,
            verticalPressure: direction.verticalPressure,
            colors: toNeatColors(palette),
            backgroundColor,
        });

        // With reduced motion, the gradient stays on its first frame:
        // no animation, and scrolling doesn't shift it either.
        if (reducedMotion) {
            return () => {
                (gradient as unknown as { destroy?: () => void }).destroy?.();
            };
        }

        const onScroll = () => {
            gradient.yOffset = window.scrollY;
        };
        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
            (gradient as unknown as { destroy?: () => void }).destroy?.();
        };
    }, [name]);

    return (
      <div
        className="relative overflow-hidden rounded-xl"
        style={{ height, width }}
      >
        {/* canvas is 40px taller than the div, so the bottom 40px — where the watermark sits — is hidden */}
        <canvas
          ref={canvasRef}
          className="absolute left-0 top-0 w-full"
          style={{ height: `calc(${height} + 40px)` }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>
    );
}

export function ColorGradient({
  color,
  speed = baseConfig.speed,
  height = "100%",
  width = "100%",
}: {
  color: string;
  speed?: number;
  height?: string;
  width?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { palette, backgroundColor } = generatePaletteFromHex(color);
    const reducedMotion = prefersReducedMotion();

    const gradient = new NeatGradient({
      ref: canvas,
      ...baseConfig,
      speed: reducedMotion ? 0 : speed,
      colors: palette.map((c) => ({ color: c, enabled: true })),
      backgroundColor,
    });

    // With reduced motion, the gradient stays on its first frame:
    // no animation, and scrolling doesn't shift it either.
    if (reducedMotion) {
      return () => {
        (gradient as unknown as { destroy?: () => void }).destroy?.();
      };
    }

    const onScroll = () => {
      gradient.yOffset = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      (gradient as unknown as { destroy?: () => void }).destroy?.();
    };
  }, [color, speed]);

  return (
    <div
      className="relative overflow-hidden rounded-xl"
      style={{ height, width }}
    >
      {/* canvas is 40px taller than the div, so the bottom 40px — where the watermark sits — is hidden */}
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 w-full"
        style={{ height: `calc(${height} + 40px)` }}
      />
      <div className="pointer-events-none h-[50%] mt-auto absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </div>
  );
}

export function AbsoluteColorGradient({
  color,
  speed = baseConfig.speed,
  height = "100%",
  width = "100%",
}: {
  color: string;
  speed?: number;
  height?: string;
  width?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { palette, backgroundColor } = generatePaletteFromHex(color);
    const reducedMotion = prefersReducedMotion();

    const gradient = new NeatGradient({
      ref: canvas,
      ...baseConfig,
      speed: reducedMotion ? 0 : speed,
      colors: palette.map((c) => ({ color: c, enabled: true })),
      backgroundColor,
    });

    // With reduced motion, the gradient stays on its first frame:
    // no animation, and scrolling doesn't shift it either.
    if (reducedMotion) {
      return () => {
        (gradient as unknown as { destroy?: () => void }).destroy?.();
      };
    }

    const onScroll = () => {
      gradient.yOffset = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      (gradient as unknown as { destroy?: () => void }).destroy?.();
    };
  }, [color, speed]);

  return (
    <div
      className="absolute z-[-1] overflow-hidden rounded-xl"
      style={{ height, width }}
    >
      {/* canvas is 40px taller than the div, so the bottom 40px — where the watermark sits — is hidden */}
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 w-full"
        style={{ height: `calc(${height} + 40px)` }}
      />
      <div className="pointer-events-none h-[50%] mt-auto absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </div>
  );
}
