"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);

  // Use scroll to control video visibility and playback
  // Video should appear immediately when scrolling from About section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transform scroll progress to opacity
  // Video appears when scrolling from About section (progress 0-0.5)
  // Video stays visible in the middle (progress 0.5-0.7)
  // Video fades out when scrolling to Mission section (progress 0.7-1)
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.5, 0.8, 1],
    [0, 1, 1, 1, 0]
  );

  // Watch scroll progress - but Intersection Observer is primary for video playback
  // This is mainly for opacity animation
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // Update isInView for text animation, but video playback is controlled by Intersection Observer
    if (latest > 0.1 && latest < 0.9) {
      if (!isInView) {
        setIsInView(true);
      }
    } else {
      if (isInView) {
        setIsInView(false);
      }
    }
  });

  // Intersection Observer - primary method to control video playback
  // Video only plays when scrolled to (when section is visible)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
            // Section is visible - play video
            if (videoRef.current && !isPlaying) {
              setIsInView(true);
              videoRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                })
                .catch((error) => {
                  console.error("Video autoplay failed:", error);
                });
            }
          } else if (!entry.isIntersecting || entry.intersectionRatio < 0.3) {
            // Section is not visible - pause video
            if (videoRef.current && isPlaying) {
              setIsInView(false);
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: [0, 0.3, 0.5, 1],
        rootMargin: "0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [isPlaying]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden mb-8 sm:mb-12 lg:mb-16 snap-start snap-always"
      id="video-section"
      style={{ minHeight: "100vh" }}
    >
      {/* Fixed fullscreen video overlay */}
      <motion.div
        className="fixed inset-0 w-full h-screen z-40"
        style={{
          opacity,
          pointerEvents: isInView ? "auto" : "none",
        }}
      >
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          playsInline
          loop
          preload="none"
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onError={(e) => {
            console.error("Video error:", e);
          }}
        >
          <source
            src={`${
              process.env.NEXT_PUBLIC_BASE_PATH || ""
            }/aboutUs/rwanda video.mp4`}
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Subtle overlay for better video visibility */}
        <div className="absolute inset-0 bg-black/10" />

        {/* Text Overlay - Positioned at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <motion.p
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed"
              style={{
                textShadow:
                  "2px 2px 8px rgba(0, 0, 0, 0.9), 0 0 20px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 0, 0, 0.5)",
                letterSpacing: "0.02em",
              }}
            >
              In the heart of Africa lies Rwanda — a land of resilience,
              innovation, and rising opportunity. Our steel plant here reflects
              our belief in the nation&apos;s potential and its commitment to
              transforming vision into reality.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Minimal spacer - just enough for scroll detection */}
      <div className="relative h-1 w-full pointer-events-none" />
    </section>
  );
}
