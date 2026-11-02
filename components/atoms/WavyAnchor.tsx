"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function WavyAnchor({
  children,
  href,
}: {
  children: string;
  href: string;
}) {
  const MotionLink = motion(Link);
  return (
    <MotionLink
      href={href}
      initial="initial"
      whileHover="hovered"
      className="relative block overflow-hidden whitespace-nowrap text-sm uppercase"
    >
      <motion.div>
        {children.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.03 * index,
            }}
            className="inline-block"
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
      <motion.div className="absolute inset-0">
        {children.split("").map((letter, index) => (
          <motion.span
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
              delay: 0.03 * index,
            }}
            className="inline-block"
            key={index}
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </MotionLink>
  );
}
