"use client";
import { motion } from "framer-motion";

export default function Container({
  children,
  id,
  className = "",
}: {
  children: any;
  id: string;
  className?: string;
}) {
  return (
    <motion.div
      className={`border-b-[1px] border-gray px-4 py-14 md:py-32 ${className}`}
      id={id}
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
}
