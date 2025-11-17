"use client";

import { useEffect, useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [opacity, setOpacity] = useState(0);

  // Intersection Observer - control video playback and opacity
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const ratio = entry.intersectionRatio;
          if (entry.isIntersecting && ratio > 0.1) {
            // Section is visible - play video and show
            setIsInView(true);
            setOpacity(Math.min(1, ratio * 1.5));
            if (videoRef.current && !isPlaying) {
              videoRef.current
                .play()
                .then(() => {
                  setIsPlaying(true);
                })
                .catch((error) => {
                  console.error("Video autoplay failed:", error);
                });
            }
          } else {
            // Section is not visible - pause video and hide
            setIsInView(false);
            setOpacity(0);
            if (videoRef.current && isPlaying) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        threshold: [0, 0.1, 0.3, 0.5, 0.7, 1],
        rootMargin: "0px",
      }
    );

    const currentContainer = containerRef.current;
    if (currentContainer) {
      observer.observe(currentContainer);
    }

    return () => {
      if (currentContainer) {
        observer.unobserve(currentContainer);
      }
    };
  }, [isPlaying]);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden mb-8 sm:mb-12 lg:mb-16"
      id="video-section"
      style={{ minHeight: "100vh" }}
    >
      {/* Fixed fullscreen video overlay */}
      <div
        className="fixed inset-0 w-full h-screen z-40"
        style={{
          opacity,
          pointerEvents: isInView ? "auto" : "none",
          transition: "opacity 0.3s ease-out",
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
        <div
          className="absolute bottom-0 left-0 right-0 z-10 px-4 sm:px-6 md:px-8 pb-8 sm:pb-12 md:pb-16 lg:pb-20"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
            transitionDelay: "0.1s",
          }}
        >
          <div className="text-center max-w-4xl mx-auto">
            <p
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
            </p>
          </div>
        </div>
      </div>

      {/* Minimal spacer - just enough for scroll detection */}
      <div className="relative h-1 w-full pointer-events-none" />
    </section>
  );
}
