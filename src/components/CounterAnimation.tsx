"use client";

import { useState, useEffect } from "react";

type CounterAnimationProps = {
  target: number;
  start?: number;
  durationMs?: number;
};

export default function CounterAnimation({
  target,
  start = 1,
  durationMs = 2000,
}: CounterAnimationProps) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const duration = durationMs;
    const totalTicks = Math.max(1, Math.floor(duration / 16));
    const distance = Math.max(0, target - start);
    const increment = distance / totalTicks;
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, start, durationMs]);

  return <span>{count}</span>;
}
