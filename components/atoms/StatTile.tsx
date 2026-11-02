"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/utils/ProjectInfo";

export default function StatTile({ prefix, value, text, label }: Stat) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true });
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!inView || value === undefined) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => setShown(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <div className="flex flex-col justify-between gap-3 rounded-md border-[1px] border-gray bg-black/30 p-5">
      <p ref={ref} className="text-xl leading-none text-accent">
        {text ?? `${prefix ?? ""}${shown}`}
      </p>
      <p className="text-sm text-white/70">{label}</p>
    </div>
  );
}
