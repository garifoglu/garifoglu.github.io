"use client";
import { motion } from "framer-motion";
import type { CardInfo } from "@/utils/ProjectInfo";
import Workflow from "../molecules/Workflow";
import StatTile from "./StatTile";

export default function Card({
  title,
  desc,
  points,
  tags,
  stats,
  workflow,
  index = 0,
}: CardInfo & { index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="rounded-md border-[1px] border-gray bg-panel p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-[0_8px_40px_rgb(var(--accent)/0.15)] md:p-8">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className={stats ? "lg:col-span-2" : "lg:col-span-3 lg:max-w-3xl"}>
            <p className="pb-2 text-sm tracking-widest text-accent">
              {String(index + 1).padStart(2, "0")}
            </p>
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
            <div className="flex flex-wrap gap-2">
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
          {stats && (
            <div className="grid content-start gap-4">
              {stats.map((stat) => (
                <StatTile key={stat.label} {...stat} />
              ))}
            </div>
          )}
        </div>
        {workflow && (
          <div className="pt-10">
            <Workflow />
          </div>
        )}
      </div>
    </motion.div>
  );
}
