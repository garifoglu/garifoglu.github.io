"use client";
import { motion } from "framer-motion";
import { h5pWorkflow } from "@/utils/ProjectInfo";

const svgProps = {
  width: 26,
  height: 26,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

// One icon per step, in the same order as h5pWorkflow in utils/ProjectInfo.ts
const icons = [
  // Moodle: stack of activities
  <svg key="moodle" {...svgProps}>
    <ellipse cx="12" cy="5" rx="8" ry="3" />
    <path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5" />
    <path d="M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" />
  </svg>,
  // Python + API: code
  <svg key="code" {...svgProps}>
    <path d="m8 7-5 5 5 5" />
    <path d="m16 7 5 5-5 5" />
    <path d="m14 4-4 16" />
  </svg>,
  // Code + AI: sparkles
  <svg key="ai" {...svgProps}>
    <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
    <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
  </svg>,
  // Manual check: check in circle
  <svg key="check" {...svgProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.5 3 3 5-6" />
  </svg>,
  // Canvas: graduation cap
  <svg key="canvas" {...svgProps}>
    <path d="M2 9l10-5 10 5-10 5z" />
    <path d="M6 11.5V16c0 1.4 2.7 3 6 3s6-1.6 6-3v-4.5" />
  </svg>,
];

const fixedTypes = ["Drag-and-drop", "Image + audio", "Interactive video"];

export default function Workflow() {
  return (
    <div>
      <p className="pb-6 text-sm uppercase tracking-widest text-accent">
        How the H5P conversion worked
      </p>

      <div className="rounded-md border-[1px] border-gray bg-black/30 p-6 md:p-8">
        {/* Pipeline */}
        <ol className="relative grid gap-6 lg:grid-cols-5 lg:gap-4">
          {/* connecting line behind the icons (desktop) */}
          <div
            className="absolute left-[10%] right-[10%] top-8 hidden border-t-2 border-dashed border-accent/40 lg:block"
            aria-hidden="true"
          />
          {h5pWorkflow.map((step, index) => (
            <motion.li
              key={step.title}
              className="relative flex gap-4 lg:flex-col lg:items-center lg:gap-3 lg:text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
            >
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-black text-accent">
                {icons[index]}
                <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-accent text-xs font-medium text-black">
                  {index + 1}
                </span>
              </div>
              <div>
                <p className="text-base text-white">{step.title}</p>
                <p className="pt-1 text-sm text-white/70">{step.desc}</p>
              </div>
            </motion.li>
          ))}
        </ol>

        <div className="my-8 border-t-[1px] border-gray" />

        <div className="grid gap-8 lg:grid-cols-2">
          {/* What had to be rebuilt */}
          <div>
            <p className="pb-3 text-base text-white">
              Rebuilt with HTML and CSS in Canvas quizzes
            </p>
            <p className="pb-4 text-sm text-white/70">
              These H5P types do not work natively in Canvas, so I rebuilt and checked each one by hand.
            </p>
            <div className="flex flex-wrap gap-2">
              {fixedTypes.map((type) => (
                <span
                  key={type}
                  className="rounded-full border-[1px] border-accent/40 px-3 py-1 text-sm text-accent"
                >
                  {type}
                </span>
              ))}
            </div>
          </div>

          {/* Time comparison */}
          <div>
            <p className="pb-4 text-base text-white">Estimated time</p>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between pb-1 text-sm">
                  <span className="text-white/70">Rebuilding by hand</span>
                  <span className="text-white/70">≈ 6 months</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-gray">
                  <motion.div
                    className="h-full rounded-full bg-white/40"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between pb-1 text-sm">
                  <span className="text-accent">Code + AI workflow</span>
                  <span className="text-accent">2 weeks</span>
                </div>
                <div className="h-3 overflow-hidden rounded-full bg-gray">
                  <motion.div
                    className="h-full rounded-full bg-accent"
                    initial={{ width: 0 }}
                    whileInView={{ width: "8%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
