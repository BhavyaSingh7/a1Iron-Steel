"use client";

import { useState, useEffect, Suspense, useRef, useMemo } from "react";
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

  // Check if this is a fresh page load (no referrer) vs navigation from another page
  const isFreshLoad = useMemo(() => {
    if (typeof window === "undefined") return true;
    // If there's no referrer or referrer is from a different origin, it's a fresh load
    const referrer = document.referrer;
    if (!referrer) return true;
    try {
      const referrerUrl = new URL(referrer);
      const currentUrl = new URL(window.location.href);
      // If referrer is from same origin, it's navigation (not fresh load)
      return referrerUrl.origin !== currentUrl.origin;
    } catch {
      return true;
    }
  }, []);

  // Check skipIntro - skip if skipIntro=true is in URL, regardless of fresh load
  const skipIntro = useMemo(() => {
    if (typeof window === "undefined") return false;
    const skipFromParams = searchParams?.get("skipIntro") === "true";
    const skipFromWindow =
      new URLSearchParams(window.location.search).get("skipIntro") === "true";
    const hasSkipIntro = skipFromParams || skipFromWindow;

    // If skipIntro is in URL, always skip video (even on fresh load)
    if (hasSkipIntro) {
      return true;
    }

    // On fresh load without skipIntro, show video
    if (isFreshLoad) return false;

    return false;
  }, [searchParams, isFreshLoad]);

  // Background image carousel now handled in HeroSection component
  // Initialize showVideoIntro - check skipIntro first, then check if fresh load
  const [showVideoIntro, setShowVideoIntro] = useState(() => {
    if (typeof window === "undefined") return true;

    // First check if skipIntro is in URL - if yes, always skip video
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("skipIntro") === "true") {
      return false;
    }

    // Check if we're navigating from same origin (not a fresh load)
    const referrer = typeof document !== "undefined" ? document.referrer : "";
    if (referrer) {
      try {
        const referrerUrl = new URL(referrer);
        const currentUrl = new URL(window.location.href);
        // If referrer is from same origin, it's navigation - don't show video by default
        if (referrerUrl.origin === currentUrl.origin) {
          return false;
        }
      } catch {
        // If URL parsing fails, treat as fresh load
      }
    }
    
    // On fresh load without skipIntro, show video
    return true;
  });
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  // Removed unused showBubbles state for performance

  // Optimized video preloading - only preload when needed
  useEffect(() => {
    if (!skipIntro && typeof document !== "undefined" && showVideoIntro) {
      // Start loading the video element immediately for faster playback
      if (videoRef1.current) {
        videoRef1.current.load();
      }
    }
  }, [skipIntro, showVideoIntro]);

  // Ensure video intro is skipped if skipIntro is true
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check URL params directly for immediate response
    const urlParams = new URLSearchParams(window.location.search);
    const hasSkipIntro = urlParams.get("skipIntro") === "true";

    // If skipIntro is true, always skip video immediately
    if (hasSkipIntro || skipIntro) {
      setShowVideoIntro(false);
      setShowSecondVideo(false);

      // Clean up URL after processing
      if (hasSkipIntro) {
        urlParams.delete("skipIntro");
        const newUrl =
          window.location.pathname +
          (urlParams.toString() ? `?${urlParams.toString()}` : "");
        window.history.replaceState({}, "", newUrl);
      }
      return;
    }

    // If not skipping and it's a fresh load, show video
    if (isFreshLoad && !skipIntro) {
      setShowVideoIntro(true);
    }
  }, [skipIntro, isFreshLoad, searchParams]);

  // Show second video after 5 seconds - lazy load it
  useEffect(() => {
    if (showVideoIntro && !skipIntro) {
      const secondVideoTimer = setTimeout(() => {
        setShowSecondVideo(true);
      }, 5000);
      return () => clearTimeout(secondVideoTimer);
    }
  }, [showVideoIntro, skipIntro]);

  // Auto-slide to home screen after 10 seconds (5s first video + 5s second video)
  // Skip this if skipIntro is true
  useEffect(() => {
    if (skipIntro) {
      setShowVideoIntro(false);
      return;
    }

    const timer = setTimeout(() => {
      // Hide the video intro with slide-up animation
      setShowVideoIntro(false);
    }, 10000); // 10 seconds total

    return () => clearTimeout(timer);
  }, [skipIntro]);

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
      {/* Video Intro Screen - Shows for 8 seconds then slides up */}
      {showVideoIntro && (
        <div
          className="fixed inset-0 z-50"
          style={{
            background:
              "linear-gradient(135deg, #1a5f82 0%, #113d59 50%, #0a2a3d 100%)",
            transform: showVideoIntro ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.3s ease-out",
          }}
        >
          {/* Loading Background - Shows immediately, fades when video loads */}
          <div
            id="video-intro-bg"
            className="absolute inset-0 w-full h-full transition-opacity duration-300"
            style={{
              background:
                "linear-gradient(135deg, #1a5f82 0%, #113d59 50%, #0a2a3d 100%)",
            }}
          />

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
              onLoadedMetadata={() => {
                // Start playing as soon as metadata is loaded
                if (videoRef1.current) {
                  videoRef1.current.play().catch(() => {});
                  // Hide background immediately when metadata loads
                  const bg = document.getElementById("video-intro-bg");
                  if (bg) bg.style.opacity = "0";
                }
              }}
              onLoadedData={() => {
                // Hide background as soon as first frame loads
                const bg = document.getElementById("video-intro-bg");
                if (bg) bg.style.opacity = "0";
              }}
              onCanPlay={() => {
                // Ensure video continues playing smoothly
                if (videoRef1.current) {
                  videoRef1.current.play().catch(() => {});
                }
              }}
              onWaiting={() => {
                // Show background if video is buffering
                const bg = document.getElementById("video-intro-bg");
                if (bg) bg.style.opacity = "0.3";
              }}
              onPlaying={() => {
                // Hide background when video is playing
                const bg = document.getElementById("video-intro-bg");
                if (bg) bg.style.opacity = "0";
              }}
              onError={(e) => {
                const videoElement = e.target as HTMLVideoElement;
                videoElement.style.display = "none";
                const bg = document.getElementById("video-intro-bg");
                if (bg) bg.style.opacity = "1";
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
              onLoadedMetadata={() => {
                if (videoRef2.current && showSecondVideo) {
                  videoRef2.current.play().catch(() => {});
                }
              }}
              onError={(e) => {
                const videoElement = e.target as HTMLVideoElement;
                videoElement.style.display = "none";
              }}
              style={{ display: showSecondVideo ? "block" : "none" }}
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

      {/* Hero Section */}
      <HeroSection
        showVideoIntro={showVideoIntro}
        onProductsClick={() => setShowProducts(true)}
      />

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
