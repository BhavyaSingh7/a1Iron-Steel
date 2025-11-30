"use client";

import { useState, useEffect, Suspense, useRef } from "react";
import { useSearchParams } from "next/navigation";
import dynamic from "next/dynamic";
import HeroSection from "@/components/homepage/HeroSection";

// Lazy load sections for better performance
const AboutSection = dynamic(
  () => import("@/components/homepage/AboutSection"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);
const Mission = dynamic(() => import("@/components/Mission"), {
  loading: () => <div className="min-h-screen" />,
});
const ProductsSection = dynamic(
  () => import("@/components/homepage/ProductsSection"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);
const ContactSection = dynamic(
  () => import("@/components/homepage/ContactSection"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);
const VideoSection = dynamic(
  () => import("@/components/homepage/VideoSection"),
  {
    loading: () => <div className="min-h-screen" />,
  }
);
const AboutUsPage = dynamic(() =>
  import("@/components/about-us-section").then((mod) => ({
    default: mod.AboutUsPage,
  }))
);
const ProductPage = dynamic(() =>
  import("@/components/product-section").then((mod) => ({
    default: mod.ProductPage,
  }))
);
const ContactPage = dynamic(() =>
  import("@/components/contact").then((mod) => ({ default: mod.ContactPage }))
);

function HomeContent() {
  const searchParams = useSearchParams();
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);
  const [mounted, setMounted] = useState(false);

  // Helper function to check skipIntro - used everywhere
  const checkSkipIntro = () => {
    if (typeof window === "undefined") return false;
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("skipIntro") === "true";
  };

  // Initialize showVideoIntro - always false initially to prevent hydration mismatch
  const [showVideoIntro, setShowVideoIntro] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [hasShownVideo, setHasShownVideo] = useState(false); // Track if video has been shown once

  // Set mounted state and check skipIntro IMMEDIATELY on mount
  useEffect(() => {
    setMounted(true);

    // CRITICAL: Check skipIntro IMMEDIATELY when component mounts
    // This must happen synchronously to prevent video from showing
    if (typeof window !== "undefined") {
      const hasSkipIntro = checkSkipIntro();

      if (hasSkipIntro) {
        // Skip video immediately - don't wait
        setShowVideoIntro(false);
        setShowSecondVideo(false);
        setHasShownVideo(true); // Mark as shown so it never shows again

        // Clean up URL after processing
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.delete("skipIntro");
        const newUrl =
          window.location.pathname +
          (urlParams.toString() ? `?${urlParams.toString()}` : "");
        window.history.replaceState({}, "", newUrl);
        return; // Exit early - don't set video to true
      }
    }
  }, []);

  // Ensure video intro is skipped if skipIntro is true, otherwise show it ONCE
  // This runs after mount to prevent hydration mismatch
  useEffect(() => {
    if (!mounted || typeof window === "undefined") return;

    // If we've already shown the video once, never show it again
    if (hasShownVideo) {
      setShowVideoIntro(false);
      return;
    }

    // CRITICAL: Check skipIntro FIRST - this takes absolute priority
    const hasSkipIntro = checkSkipIntro();

    // If skipIntro is true, ALWAYS skip video immediately (this handles back/close button navigation)
    if (hasSkipIntro) {
      // Set to false immediately - don't wait
      setShowVideoIntro(false);
      setShowSecondVideo(false);
      setHasShownVideo(true); // Mark as shown so it never shows again

      // Clean up URL after processing
      const urlParams = new URLSearchParams(window.location.search);
      urlParams.delete("skipIntro");
      const newUrl =
        window.location.pathname +
        (urlParams.toString() ? `?${urlParams.toString()}` : "");
      window.history.replaceState({}, "", newUrl);
      return; // Exit early - don't check anything else
    }

    // No skipIntro parameter - this is a fresh load or reload, SHOW VIDEO ONCE
    // Only set to true if we haven't shown it yet
    if (!hasShownVideo && !showVideoIntro) {
      setShowVideoIntro(true);
    }
  }, [mounted, searchParams]); // Removed showVideoIntro from dependencies to prevent loop

  // Track video play state to prevent race conditions
  const videoPlayStateRef = useRef<{
    isPlaying: boolean;
    playPromise: Promise<void> | null;
  }>({
    isPlaying: false,
    playPromise: null,
  });

  // Optimized video preloading - start loading immediately when video intro shows
  useEffect(() => {
    if (typeof document === "undefined" || !showVideoIntro || !mounted) return;

    const videoStarted = false;
    let loadingTimeout: NodeJS.Timeout | null = null;

    // Reset play state when video intro shows
    videoPlayStateRef.current = { isPlaying: false, playPromise: null };

    // Start loading video immediately (no delay) for faster playback
    // Use requestAnimationFrame for better performance
    const rafId = requestAnimationFrame(() => {
      // Start loading the video element immediately for faster playback
      if (videoRef1.current) {
        // Use "metadata" to start loading early but not the entire video
        videoRef1.current.preload = "metadata";
        videoRef1.current.load();
        // Don't call play() here - let the video element's autoPlay handle it
        // This prevents race conditions
      }
    });

    // If video doesn't start playing within 12 seconds, skip intro
    loadingTimeout = setTimeout(() => {
      if (
        !videoStarted &&
        videoRef1.current &&
        videoRef1.current.readyState < 2
      ) {
        // Video hasn't loaded enough, skip intro
        setShowVideoIntro(false);
        setShowSecondVideo(false);
        setHasShownVideo(true); // Mark as shown so it never shows again
      }
    }, 12000);

    return () => {
      cancelAnimationFrame(rafId);
      if (loadingTimeout) clearTimeout(loadingTimeout);
    };
  }, [showVideoIntro, mounted]);

  // Show second video after 5 seconds - lazy load it
  useEffect(() => {
    if (showVideoIntro) {
      const secondVideoTimer = setTimeout(() => {
        setShowSecondVideo(true);
      }, 5000);
      return () => clearTimeout(secondVideoTimer);
    }
  }, [showVideoIntro]);

  // Auto-slide to home screen after 10 seconds (5s first video + 5s second video)
  // Also add a maximum timeout to ensure video always transitions
  useEffect(() => {
    if (!showVideoIntro || !mounted) return;

    const timer = setTimeout(() => {
      // Hide the video intro with slide-up animation
      setShowVideoIntro(false);
      setShowSecondVideo(false);
      setHasShownVideo(true); // Mark as shown so it never shows again
    }, 10000); // 10 seconds total

    // Safety fallback: force hide after 12 seconds if still showing
    const fallbackTimer = setTimeout(() => {
      setShowVideoIntro(false);
      setShowSecondVideo(false);
      setHasShownVideo(true); // Mark as shown so it never shows again
    }, 12000);

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, [showVideoIntro, mounted]);

  // Background image carousel now handled in HeroSection component

  // Disable scrolling and hide scrollbar when video intro is showing
  useEffect(() => {
    if (showVideoIntro) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.classList.add("video-intro-active");
      document.documentElement.classList.add("video-intro-active");
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.classList.remove("video-intro-active");
      document.documentElement.classList.remove("video-intro-active");
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.classList.remove("video-intro-active");
      document.documentElement.classList.remove("video-intro-active");
    };
  }, [showVideoIntro]);

  return (
    <main
      className={`min-h-screen snap-y snap-mandatory ${
        showVideoIntro ? "overflow-hidden" : ""
      }`}
    >
      {/* Video Intro Screen - Shows for 10 seconds then slides up */}
      {/* CRITICAL: Check skipIntro FIRST - if present, NEVER render video, even if showVideoIntro is true */}
      {/* Only render after mount to prevent hydration mismatch */}
      {mounted && !checkSkipIntro() && showVideoIntro && (
        <div
          className="fixed inset-0 z-50"
          style={{
            background:
              "linear-gradient(135deg, #1a5f82 0%, #113d59 50%, #0a2a3d 100%)",
            transform: showVideoIntro ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.5s ease-out",
            pointerEvents: showVideoIntro ? "auto" : "none",
          }}
          onClick={() => {
            // Allow clicking to skip video
            setShowVideoIntro(false);
            setShowSecondVideo(false);
            setHasShownVideo(true); // Mark as shown so it never shows again
          }}
          onKeyDown={(e) => {
            // Allow ESC key to skip video
            if (e.key === "Escape") {
              setShowVideoIntro(false);
              setShowSecondVideo(false);
              setHasShownVideo(true); // Mark as shown so it never shows again
            }
          }}
          tabIndex={0}
          role="button"
          aria-label="Click to skip intro video"
        >
          {/* Loading Background - Shows immediately, fades when video plays */}
          <div
            id="video-intro-bg"
            className="absolute inset-0 w-full h-full transition-opacity duration-700 z-10"
            style={{
              background:
                "linear-gradient(135deg, #1a5f82 0%, #113d59 50%, #0a2a3d 100%)",
              opacity: 1,
              zIndex: 10,
            }}
          />

          {/* Loading indicator */}
          <div
            id="video-loading-indicator"
            className="absolute inset-0 flex items-center justify-center z-20"
            style={{
              opacity: 1,
              transition: "opacity 0.5s ease-out",
            }}
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-white/80 text-sm">Loading...</p>
            </div>
          </div>

          {/* First Video Background */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: showSecondVideo ? 0 : 1,
              transition: "opacity 0.2s ease-out",
            }}
          >
            <video
              ref={videoRef1}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              preload="metadata"
              style={{
                willChange: "opacity, transform",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
              onLoadedMetadata={() => {
                // Video metadata loaded - let autoPlay handle playback
                // Don't call play() here to avoid race conditions
              }}
              onCanPlay={() => {
                // Video can play - hide loading indicators
                requestAnimationFrame(() => {
                  const bg = document.getElementById("video-intro-bg");
                  if (bg) bg.style.opacity = "0";
                  const indicator = document.getElementById(
                    "video-loading-indicator"
                  );
                  if (indicator) indicator.style.opacity = "0";

                  // Only call play() if video is not already playing and no play promise exists
                  if (
                    videoRef1.current &&
                    !videoPlayStateRef.current.isPlaying &&
                    !videoPlayStateRef.current.playPromise
                  ) {
                    if (videoRef1.current.paused) {
                      const playPromise = videoRef1.current.play();
                      if (playPromise !== undefined) {
                        videoPlayStateRef.current.playPromise = playPromise;
                        playPromise
                          .then(() => {
                            videoPlayStateRef.current.isPlaying = true;
                            videoPlayStateRef.current.playPromise = null;
                          })
                          .catch(() => {
                            // Autoplay prevented or interrupted - reset state
                            videoPlayStateRef.current.playPromise = null;
                          });
                      }
                    } else {
                      videoPlayStateRef.current.isPlaying = true;
                    }
                  }
                });
              }}
              onWaiting={() => {
                // Show background if video is buffering
                requestAnimationFrame(() => {
                  const bg = document.getElementById("video-intro-bg");
                  if (bg) bg.style.opacity = "0.5";
                });
              }}
              onPlaying={() => {
                // Video is playing - update state and hide loading indicators
                videoPlayStateRef.current.isPlaying = true;
                videoPlayStateRef.current.playPromise = null;
                requestAnimationFrame(() => {
                  const bg = document.getElementById("video-intro-bg");
                  if (bg) bg.style.opacity = "0";
                  const indicator = document.getElementById(
                    "video-loading-indicator"
                  );
                  if (indicator) indicator.style.opacity = "0";
                });
              }}
              onPause={() => {
                // Video paused - update state
                videoPlayStateRef.current.isPlaying = false;
                videoPlayStateRef.current.playPromise = null;
              }}
              onLoadStart={() => {
                // Keep background visible while loading starts
                requestAnimationFrame(() => {
                  const bg = document.getElementById("video-intro-bg");
                  if (bg) bg.style.opacity = "1";
                });
              }}
              onError={(e) => {
                requestAnimationFrame(() => {
                  const videoElement = e.target as HTMLVideoElement;
                  videoElement.style.display = "none";
                  const bg = document.getElementById("video-intro-bg");
                  if (bg) bg.style.opacity = "1";
                  // If video fails to load, skip intro after 2 seconds
                  setTimeout(() => {
                    setShowVideoIntro(false);
                    setShowSecondVideo(false);
                    setHasShownVideo(true); // Mark as shown so it never shows again
                  }, 2000);
                });
              }}
            >
              <source
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/bg-video.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Second Video Background */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              opacity: showSecondVideo ? 1 : 0,
              transition: "opacity 0.2s ease-out",
            }}
          >
            <video
              ref={videoRef2}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              preload="none"
              style={{
                display: showSecondVideo ? "block" : "none",
                willChange: "opacity, transform",
                transform: "translateZ(0)",
                backfaceVisibility: "hidden",
              }}
              onLoadedMetadata={() => {
                // Video metadata loaded - let autoPlay handle playback
                // Don't call play() here to avoid race conditions
              }}
              onCanPlay={() => {
                // Video can play - ensure it's playing if autoPlay didn't work
                requestAnimationFrame(() => {
                  if (
                    videoRef2.current &&
                    showSecondVideo &&
                    videoRef2.current.paused
                  ) {
                    const playPromise = videoRef2.current.play();
                    if (playPromise !== undefined) {
                      playPromise.catch(() => {
                        // Autoplay prevented or interrupted - ignore
                      });
                    }
                  }
                });
              }}
              onError={(e) => {
                requestAnimationFrame(() => {
                  const videoElement = e.target as HTMLVideoElement;
                  videoElement.style.display = "none";
                  // If second video fails, just continue with first video or skip
                  if (
                    !videoRef1.current ||
                    videoRef1.current.readyState === 0
                  ) {
                    setTimeout(() => {
                      setShowVideoIntro(false);
                      setShowSecondVideo(false);
                      setHasShownVideo(true); // Mark as shown so it never shows again
                    }, 2000);
                  }
                });
              }}
            >
              <source
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/bg-video3.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Light overlay for better text readability without hiding video */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Bouncing Bubbles - Disabled for performance */}

          {/* A1 IRON & STEEL Text */}
          <div className="relative z-10 h-full flex items-center justify-center">
            <div className="text-center">
              {/* Background Glow Effect */}
              <div
                className="absolute inset-0 blur-3xl opacity-10"
                style={{
                  background:
                    "linear-gradient(135deg, #f0ae28 0%, #f1852e 25%, #2084b1 60%, #1a5f82 100%)",
                  transform: "scale(1.8)",
                }}
              />

              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black relative z-10 tracking-wide gradient-title"
                style={{
                  background:
                    "linear-gradient(135deg, #FFFFFF 0%, #f0ae28 25%, #2084b1 60%, #1a5f82 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  backgroundSize: "200% auto",
                  textShadow: "0 0 80px rgba(32, 132, 177, 0.4)",
                  letterSpacing: "0.05em",
                  fontFamily: "'Helvetica Neue', 'Arial Black', sans-serif",
                }}
              >
                A1 IRON & STEEL
              </h1>

              {/* Animated Underline */}
              <div
                className="h-1 mt-4 mx-auto"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #f0ae28 25%, #2084b1 50%, #1a5f82 75%, transparent)",
                  maxWidth: "600px",
                  boxShadow: "0 2px 20px rgba(32, 132, 177, 0.5)",
                }}
              />

              {/* Info text that appears with second video */}
              <div
                className="mt-12 max-w-3xl mx-auto"
                style={{
                  opacity: showSecondVideo ? 1 : 0,
                  transition: "opacity 0.3s ease-out",
                }}
              >
                <p
                  className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight"
                  style={{
                    opacity: showSecondVideo ? 1 : 0,
                    transition: "opacity 0.3s ease-out",
                    textShadow:
                      "2px 2px 10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(32, 132, 177, 0.3)",
                    letterSpacing: "0.03em",
                    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  }}
                >
                  Forging Excellence in Steel Manufacturing
                </p>
                <div
                  className="mt-6 flex items-center justify-center gap-3"
                  style={{
                    opacity: showSecondVideo ? 1 : 0,
                    transition: "opacity 0.3s ease-out",
                  }}
                >
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
                  <p
                    className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold"
                    style={{
                      textShadow: "1px 1px 8px rgba(0, 0, 0, 0.7)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Where Innovation Meets Industrial Strength
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section - Always rendered, just behind video overlay */}
      {!showProducts && (
        <HeroSection
          showVideoIntro={showVideoIntro}
          onProductsClick={() => setShowProducts(true)}
        />
      )}

      {/* About Section */}
      <AboutSection />

      {/* Video Section - Fullscreen between About and Mission */}
      <VideoSection />

      {/* Mission Section */}
      <Mission />

      {/* Products Section */}
      <ProductsSection />

      {/* Contact Section */}
      <ContactSection />

      {/* About Us Page */}
      {showAboutUs && <AboutUsPage onClose={() => setShowAboutUs(false)} />}

      {/* Products Page */}
      {showProducts && <ProductPage onClose={() => setShowProducts(false)} />}

      {/* Contact Page */}
      {showContact && <ContactPage onClose={() => setShowContact(false)} />}
    </main>
  );
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <div
          className="min-h-screen flex items-center justify-center"
          style={{
            background:
              "linear-gradient(135deg, #1a5f82 0%, #113d59 50%, #0a2a3d 100%)",
          }}
        >
          {/* Minimal fallback - just background, no text to reduce flash */}
        </div>
      }
    >
      <HomeContent />
    </Suspense>
  );
}
