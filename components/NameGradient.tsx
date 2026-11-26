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

// Exact config from your vanilla snippet — fixed colors, no palette generation.
const presetConfig = {
  colors: [
    { color: "#F06565", enabled: true },
    { color: "#FF8585", enabled: true },
    { color: "#FF6B6B", enabled: true },
    { color: "#FF9A9E", enabled: true },
    { color: "#F06565", enabled: true },
    { color: "#FFC1BC", enabled: true },
  ],
  backgroundColor: "#F06565",
  speed: 2.5,
  horizontalPressure: 2,
  verticalPressure: 4,
  waveFrequencyX: 4,
  waveFrequencyY: 4,
  waveAmplitude: 6,
  secondaryWaveEnabled: false,
  secondaryWaveFrequencyX: 3,
  secondaryWaveFrequencyY: 3,
  secondaryWaveAmplitude: 5,
  secondaryWaveSpeed: 0.6,
  secondaryWaveAngle: 1,
  shadows: 1,
  highlights: 5,
  colorBrightness: 1,
  colorSaturation: 7,
  wireframe: false,
  antialias: false,
  colorBlending: 4,
  backgroundAlpha: 1,
  grainScale: 0,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 1,
  resolution: 0.65,
  yOffset: 0,
  yOffsetWaveMultiplier: 4,
  yOffsetColorMultiplier: 6.3,
  yOffsetFlowMultiplier: 4,
  flowDistortionA: 0,
  flowDistortionB: 0,
  flowScale: 1,
  flowEase: 0,
  flowEnabled: false,
  enableProceduralTexture: false,
  transparentTextureVoid: false,
  textureMode: "bitmap",
  bakeEdgeSoftness: 1,
  textureVoidLikelihood: 0.45,
  textureVoidWidthMin: 200,
  textureVoidWidthMax: 486,
  textureBandDensity: 2.15,
  textureColorBlending: 0.01,
  textureSeed: 333,
  textureEase: 0.5,
  proceduralBackgroundColor: "#000000",
  textureShapeTriangles: 20,
  textureShapeCircles: 15,
  textureShapeBars: 15,
  textureShapeSquiggles: 10,
  domainWarpEnabled: false,
  domainWarpIntensity: 0,
  domainWarpScale: 3,
  vignetteIntensity: 0,
  vignetteRadius: 0.8,
  fresnelEnabled: true,
  fresnelPower: 2,
  fresnelIntensity: 0.6,
  fresnelColor: "#F90707",
  iridescenceEnabled: false,
  iridescenceIntensity: 0.5,
  iridescenceSpeed: 1,
  prismEdgeEnabled: false,
  prismEdgeIntensity: 0.5,
  prismEdgeThinness: 3,
  prismEdgeSpread: 1,
  prismEdgeSpeed: 0.5,
  prismEdgeRipple: 1,
  bloomIntensity: 0,
  bloomThreshold: 0.95,
  chromaticAberration: 1,
  shapeType: "ribbon",
  shapeRotationX: 0,
  shapeRotationY: 0,
  shapeRotationZ: 0,
  shapeAutoRotateSpeedX: 0,
  shapeAutoRotateSpeedY: 0,
  sphereRadius: 15,
  torusRadius: 15,
  torusTube: 5,
  cylinderRadius: 10,
  cylinderHeight: 40,
  planeBend: 0,
  planeTwist: 0,
  silhouetteFade: 0.25,
  cylinderFade: 0.08,
  ribbonFade: 0.05,
  flatShading: false,
  cameraLock: false,
  cameraX: 0,
  cameraY: -12,
  cameraZ: 0,
  cameraRotationX: 0,
  cameraRotationY: 0,
  cameraRotationZ: 0,
  cameraZoom: 4.4,
} as const;

export function MobileBGGradient1({
  speed = presetConfig.speed,
  height = "400px",
  width = "600px",
}: {
  speed?: number;
  height?: string;
  width?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = prefersReducedMotion();

    const gradient = new NeatGradient({
      ref: canvas,
      ...presetConfig,
      colors: presetConfig.colors.map((c) => ({ ...c })),
      speed: reducedMotion ? 0 : speed,
    });



    const onScroll = () => {
      gradient.yOffset = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      (gradient as unknown as { destroy?: () => void }).destroy?.();
    };
  }, [speed]);

  return (
    <div
      className="relative h-screen w-screen overflow-hidden rounded-xl"
    >
      {/* canvas is 40px taller than the div, so the bottom 40px — where the watermark sits — is hidden */}
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 w-screen h-screen"
      />
      <div className="pointer-events-none h-[50%] mt-auto absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </div>
  );
}

/// 2

// Exact config from your vanilla snippet — fixed colors, no palette generation.
const presetConfig2 = {
  colors: [
    { color: "#F06565", enabled: true },  // was #3B00FF
    { color: "#FFC858", enabled: true },
    { color: "#17E7FF", enabled: true },
    { color: "#215BFF", enabled: true },
    { color: "#D8A50C", enabled: true },
  ],
  backgroundColor: "#F06565",  // was #003FFF
  fresnelColor: "#F06565",     // was #FF0000

  speed: 4,
  horizontalPressure: 4,
  verticalPressure: 6,
  waveFrequencyX: 1,
  waveFrequencyY: 1,
  waveAmplitude: 1,
  secondaryWaveEnabled: false,
  secondaryWaveFrequencyX: 3,
  secondaryWaveFrequencyY: 3,
  secondaryWaveAmplitude: 5,
  secondaryWaveSpeed: 0.6,
  secondaryWaveAngle: 1,
  shadows: 3,
  highlights: 0,
  colorBrightness: 1.15,
  colorSaturation: 0,
  wireframe: false,
  antialias: false,
  colorBlending: 4,
  backgroundAlpha: 1,
  grainScale: 0,
  grainSparsity: 0,
  grainIntensity: 0,
  grainSpeed: 0,
  resolution: 1,
  yOffset: 0,
  yOffsetWaveMultiplier: 3.2,
  yOffsetColorMultiplier: 3.5,
  yOffsetFlowMultiplier: 4,
  flowDistortionA: 3.1,
  flowDistortionB: 2.4,
  flowScale: 1.5,
  flowEase: 0.31,
  flowEnabled: true,
  enableProceduralTexture: false,
  transparentTextureVoid: false,
  textureMode: "bitmap",
  bakeEdgeSoftness: 1,
  textureVoidLikelihood: 0.06,
  textureVoidWidthMin: 10,
  textureVoidWidthMax: 500,
  textureBandDensity: 0.8,
  textureColorBlending: 0.06,
  textureSeed: 333,
  textureEase: 0.65,
  proceduralBackgroundColor: "#FFED00",
  textureShapeTriangles: 20,
  textureShapeCircles: 15,
  textureShapeBars: 15,
  textureShapeSquiggles: 10,
  domainWarpEnabled: false,
  domainWarpIntensity: 0.6,
  domainWarpScale: 3,
  vignetteIntensity: 0.85,
  vignetteRadius: 0.65,
  fresnelEnabled: true,
  fresnelPower: 3.7,
  fresnelIntensity: 0.7,
  iridescenceEnabled: true,
  iridescenceIntensity: 0.35,
  iridescenceSpeed: 3.9,
  prismEdgeEnabled: false,
  prismEdgeIntensity: 0.5,
  prismEdgeThinness: 3,
  prismEdgeSpread: 1,
  prismEdgeSpeed: 0.5,
  prismEdgeRipple: 1,
  bloomIntensity: 0.8,
  bloomThreshold: 0.9,
  chromaticAberration: 4,
  shapeType: "plane",
  shapeRotationX: 0,
  shapeRotationY: 0,
  shapeRotationZ: 0,
  shapeAutoRotateSpeedX: 0,
  shapeAutoRotateSpeedY: 0,
  sphereRadius: 15,
  torusRadius: 15,
  torusTube: 5,
  cylinderRadius: 10,
  cylinderHeight: 40,
  planeBend: 0,
  planeTwist: 0,
  silhouetteFade: 0.25,
  cylinderFade: 0.08,
  ribbonFade: 0.05,
  flatShading: true,
  cameraLock: true,
  cameraX: 0,
  cameraY: 0,
  cameraZ: 0,
  cameraRotationX: 0,
  cameraRotationY: 0,
  cameraRotationZ: 0,
  cameraZoom: 1,
} as const;

export function MobileBGGradient2({
  speed = presetConfig2.speed,
  height = "400px",
  width = "600px",
}: {
  speed?: number;
  height?: string;
  width?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const reducedMotion = prefersReducedMotion();

    const gradient = new NeatGradient({
      ref: canvas,
      ...presetConfig2,
      colors: presetConfig2.colors.map((c) => ({ ...c })),
      speed: reducedMotion ? 0 : speed,
    });

    const onScroll = () => {
      gradient.yOffset = window.scrollY;
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      (gradient as unknown as { destroy?: () => void }).destroy?.();
    };
  }, [speed]);

  return (
    <div className="relative h-screen w-screen overflow-hidden rounded-xl">
      <canvas
        ref={canvasRef}
        className="absolute left-0 top-0 w-screen h-screen"
      />
      <div className="pointer-events-none h-[50%] mt-auto absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white" />
    </div>
  );
}

