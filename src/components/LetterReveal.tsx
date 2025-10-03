"use client";

import { motion } from "framer-motion";
import React from "react";

type LetterRevealProps = {
  text: string;
  className?: string;
  delay?: number;
  durationPerCharMs?: number;
};

export default function LetterReveal({
  text,
  className,
  delay = 0,
  durationPerCharMs = 40,
}: LetterRevealProps) {
  const characters = Array.from(text);

  return (
    <span className={className} aria-label={text} role="heading">
      {characters.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ y: `0.6em`, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: delay + index * (durationPerCharMs / 1000),
            type: "spring",
            stiffness: 400,
            damping: 30,
          }}
          style={{ display: "inline-block", whiteSpace: "pre" }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}
