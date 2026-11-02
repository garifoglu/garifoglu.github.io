"use client";
import { motion } from "framer-motion";

export default function Card({
  title,
  desc,
  points,
  tags,
  index = 0,
}: {
  title: string;
  desc: string;
  points: string[];
  tags: string[];
  index?: number;
}) {
  return (
    <motion.div
      className="h-full"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 2) * 0.12, ease: "easeOut" }}
    >
      <div className="flex h-full flex-col rounded-md border-[1px] border-gray bg-panel p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_40px_rgb(var(--accent)/0.15)]">
        <p className="pb-3 text-lg font-normal leading-tight">{title}</p>
        <p className="pb-4 text-base text-white/80">{desc}</p>
        <ul className="space-y-2 pb-6 text-sm leading-relaxed text-white/80">
          {points.map((point, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-accent">▹</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-[1px] border-gray px-3 py-1 text-xs text-white/70"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
