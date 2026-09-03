"use client";

import { Lottie } from "lottie-react";
import animationData from "@/public/lottie/Create-a-Curriculum-Loading.json";

export function AiPdfAnimation() {
  return (
    <div className="relative mx-auto h-full w-full max-w-[420px]">
      <Lottie src={animationData} loop autoplay style={{ width: "100%", height: "100%" }} />

      <div className="pointer-events-none w-[160px] absolute bottom-0 right-6  h-[40px] z-10 translate-x-2 translate-y-[-160px] rounded-md bg-white px-3 py-2">

      </div>

      <h1 className="text-lg font-bold text-slate-800">
        AI PDF
      </h1>
    </div>
  );
}