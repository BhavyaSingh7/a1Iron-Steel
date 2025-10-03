"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterProps = {
  text: string;
  speedMs?: number;
  startDelayMs?: number;
  className?: string;
  caretClassName?: string;
};

export default function Typewriter({
  text,
  speedMs = 50,
  startDelayMs = 200,
  className,
  caretClassName,
}: TypewriterProps) {
  const characters = useMemo(() => Array.from(text), [text]);
  const [index, setIndex] = useState(0);
  const [showCaret, setShowCaret] = useState(true);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      const interval = setInterval(() => {
        setIndex((prev) => {
          if (prev >= characters.length) return prev;
          return prev + 1;
        });
      }, speedMs);
      return () => clearInterval(interval);
    }, startDelayMs);
    return () => clearTimeout(startTimer);
  }, [characters.length, speedMs, startDelayMs]);

  useEffect(() => {
    const blink = setInterval(() => setShowCaret((v) => !v), 500);
    return () => clearInterval(blink);
  }, []);

  const visible = characters.slice(0, index).join("");
  const done = index >= characters.length;

  return (
    <span className={className} aria-label={text}>
      {visible}
      <span
        className={
          caretClassName ??
          "inline-block w-[0.08em] ml-0.5 align-baseline bg-white"
        }
        style={{ opacity: showCaret && !done ? 1 : 0 }}
      ></span>
    </span>
  );
}
