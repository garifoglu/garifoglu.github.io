"use client";
import { animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/utils/ProjectInfo";

function Value({ prefix, value, text }: { prefix?: string; value?: number; text?: string }) {
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
    <p ref={ref} className="text-xl leading-none text-accent md:text-xl">
      {text ?? `${prefix ?? ""}${shown}`}
    </p>
  );
}

export default function Stats() {
  return (
    <div className="grid grid-cols-2 gap-4 pb-16 lg:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.label}
          className="flex flex-col justify-between gap-3 rounded-md border-[1px] border-gray bg-panel p-5"
        >
          <Value prefix={stat.prefix} value={stat.value} text={stat.text} />
          <p className="text-sm text-white/70">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
