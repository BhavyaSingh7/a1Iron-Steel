"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
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
  const videoRef1 = React.useRef<HTMLVideoElement>(null);
  const videoRef2 = React.useRef<HTMLVideoElement>(null);

  // Check if this is a fresh page load (no referrer) vs navigation from another page
  const isFreshLoad = React.useMemo(() => {
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

  // Check skipIntro - skip if navigating from another page with skipIntro=true, or if explicitly set
  const skipIntro = React.useMemo(() => {
    if (typeof window === "undefined") return false;
    const skipFromParams = searchParams?.get("skipIntro") === "true";
    const skipFromWindow =
      new URLSearchParams(window.location.search).get("skipIntro") === "true";
    const hasSkipIntro = skipFromParams || skipFromWindow;

    // If skipIntro is in URL and we have a referrer from same origin, always skip
    if (hasSkipIntro && !isFreshLoad) {
      return true;
    }

    // On fresh load without skipIntro, always show video
    if (isFreshLoad) return false;

    return hasSkipIntro;
  }, [searchParams, isFreshLoad]);

  // Removed unused videoPhase state for performance
  const [currentBgImage, setCurrentBgImage] = useState(0);
  // Initialize showVideoIntro - always true on fresh load, otherwise check skipIntro
  const [showVideoIntro, setShowVideoIntro] = useState(() => {
    if (typeof window === "undefined") return true;
    // On fresh load, always show video
    const referrer = typeof document !== "undefined" ? document.referrer : "";
    if (!referrer) return true;
    try {
      const referrerUrl = new URL(referrer);
      const currentUrl = new URL(window.location.href);
      // If referrer is from different origin, it's fresh load - show video
      if (referrerUrl.origin !== currentUrl.origin) return true;
    } catch {
      return true;
    }
    // If navigating from same origin, check skipIntro
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("skipIntro") !== "true";
  });
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  // Removed unused showBubbles state for performance

  // Optimized video preloading - only preload first video
  useEffect(() => {
    if (!skipIntro && typeof document !== "undefined") {
      const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

      // Only preload the first video to reduce initial load
      const link1 = document.createElement("link");
      link1.rel = "preload";
      link1.href = `${basePath}/bg-video.mp4`;
      link1.as = "video";
      link1.type = "video/mp4";
      document.head.appendChild(link1);

      return () => {
        if (link1.parentNode) document.head.removeChild(link1);
      };
    }
  }, [skipIntro]);

  // Ensure video intro is skipped if skipIntro is true (only when navigating, not fresh load)
  useEffect(() => {
    // Only skip if this is NOT a fresh load
    if (isFreshLoad) {
      // On fresh load, remove skipIntro from URL and show video
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get("skipIntro") === "true") {
          urlParams.delete("skipIntro");
          const newUrl =
            window.location.pathname +
            (urlParams.toString() ? `?${urlParams.toString()}` : "");
          window.history.replaceState({}, "", newUrl);
        }
      }
      return;
    }

    // Check URL parameter on navigation (not fresh load)
    const checkSkipIntro = () => {
      if (typeof window !== "undefined") {
        const urlParams = new URLSearchParams(window.location.search);
        const shouldSkip = urlParams.get("skipIntro") === "true";
        if (shouldSkip) {
          setShowVideoIntro(false);
          setShowSecondVideo(false);
          // Clean up URL after processing
          urlParams.delete("skipIntro");
          const newUrl =
            window.location.pathname +
            (urlParams.toString() ? `?${urlParams.toString()}` : "");
          window.history.replaceState({}, "", newUrl);
        }
      }
    };

    // Check immediately on mount
    checkSkipIntro();

    // Also check on popstate (back/forward navigation)
    window.addEventListener("popstate", checkSkipIntro);

    return () => {
      window.removeEventListener("popstate", checkSkipIntro);
    };
  }, [isFreshLoad, searchParams]);

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

    // Check if video loads, if not show fallback image
    const video = document.querySelector("video");
    if (video) {
      const fallback = document.getElementById("video-fallback") as HTMLElement;

      const handleVideoError = () => {
        // Video failed to load, fallback will be shown
        if (fallback) {
          fallback.style.display = "block";
        }
      };

      const handleVideoLoad = () => {
        // Video loaded successfully
        if (fallback) {
          fallback.style.display = "none";
        }
      };

      video.addEventListener("error", handleVideoError);
      video.addEventListener("loadeddata", handleVideoLoad);

      return () => {
        clearTimeout(timer);
        video.removeEventListener("error", handleVideoError);
        video.removeEventListener("loadeddata", handleVideoLoad);
      };
    }

    return () => clearTimeout(timer);
  }, [skipIntro]);

  // Video phase logic removed for performance optimization

  // Background image carousel effect - only start when video intro is done
  useEffect(() => {
    if (showVideoIntro) return; // Don't start carousel until video intro is done

    let interval: NodeJS.Timeout | null = null;

    // Add delay before starting carousel to reduce initial load
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentBgImage((prev) => (prev + 1) % 7); // Cycle through 7 images
      }, 8000); // Change every 8 seconds to reduce transitions and improve performance
    }, 1000); // Wait 1 second after video intro ends for better performance

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [showVideoIntro]);

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
        <motion.section
          className="fixed inset-0 z-50"
          initial={{ y: 0 }}
          animate={{ y: showVideoIntro ? 0 : "-100%" }}
          transition={{
            duration: 0.4,
            ease: "easeOut",
          }}
          style={{
            background:
              "linear-gradient(135deg, #1a5f82 0%, #113d59 50%, #0a2a3d 100%)",
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
          <motion.div
            className="absolute inset-0 w-full h-full"
            animate={{ opacity: showSecondVideo ? 0 : 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <video
              ref={videoRef1}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                const videoElement = e.target as HTMLVideoElement;
                videoElement.style.display = "none";
              }}
              onCanPlay={() => {
                if (videoRef1.current) {
                  videoRef1.current.play().catch(() => {});
                  // Hide background once video can play
                  const bg = document.getElementById("video-intro-bg");
                  if (bg) bg.style.opacity = "0";
                }
              }}
              onLoadedData={() => {
                if (videoRef1.current) {
                  videoRef1.current.play().catch(() => {});
                  // Hide background once video loads
                  const bg = document.getElementById("video-intro-bg");
                  if (bg) bg.style.opacity = "0";
                }
              }}
              preload="auto"
            >
              <source
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/bg-video.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Second Video Background */}
          <motion.div
            className="absolute inset-0 w-full h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: showSecondVideo ? 1 : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <video
              ref={videoRef2}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                const videoElement = e.target as HTMLVideoElement;
                videoElement.style.display = "none";
              }}
              onCanPlay={() => {
                if (videoRef2.current && showSecondVideo) {
                  videoRef2.current.play().catch(() => {});
                }
              }}
              onLoadedData={() => {
                if (videoRef2.current && showSecondVideo) {
                  videoRef2.current.play().catch(() => {});
                }
              }}
              preload="auto"
              style={{ display: showSecondVideo ? "block" : "none" }}
            >
              <source
                src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/bg-video3.mp4`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </motion.div>

          {/* Fallback background image */}
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop)",
              display: "none",
            }}
            id="video-fallback"
          />

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

              <motion.h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black relative z-10 tracking-wide gradient-title"
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                }}
                transition={{
                  duration: 1.8,
                  delay: 0.3,
                  ease: [0.215, 0.61, 0.355, 1],
                }}
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
              </motion.h1>

              {/* Animated Underline */}
              <motion.div
                className="h-1 mt-4 mx-auto"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, #f0ae28 25%, #2084b1 50%, #1a5f82 75%, transparent)",
                  maxWidth: "600px",
                  boxShadow: "0 2px 20px rgba(32, 132, 177, 0.5)",
                }}
                initial={{ scaleX: 0, opacity: 0 }}
                animate={{ scaleX: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
              />

              {/* Info text that appears with second video */}
              <motion.div
                className="mt-12 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 50 }}
                animate={{
                  opacity: showSecondVideo ? 1 : 0,
                  y: showSecondVideo ? 0 : 50,
                }}
                transition={{
                  duration: 1.5,
                  delay: showSecondVideo ? 0.8 : 0,
                  ease: "easeOut",
                }}
              >
                <motion.p
                  className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-tight"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{
                    opacity: showSecondVideo ? 1 : 0,
                    scale: showSecondVideo ? 1 : 0.95,
                  }}
                  transition={{ delay: 1.0, duration: 1.0 }}
                  style={{
                    textShadow:
                      "2px 2px 10px rgba(0, 0, 0, 0.8), 0 0 30px rgba(32, 132, 177, 0.3)",
                    letterSpacing: "0.03em",
                    fontFamily: "'Helvetica Neue', 'Arial', sans-serif",
                  }}
                >
                  Forging Excellence in Steel Manufacturing
                </motion.p>
                <motion.div
                  className="mt-6 flex items-center justify-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: showSecondVideo ? 1 : 0,
                    x: showSecondVideo ? 0 : -20,
                  }}
                  transition={{ delay: 1.3, duration: 0.8 }}
                >
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-cyan-400" />
                  <motion.p
                    className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold"
                    style={{
                      textShadow: "1px 1px 8px rgba(0, 0, 0, 0.7)",
                      letterSpacing: "0.05em",
                    }}
                  >
                    Where Innovation Meets Industrial Strength
                  </motion.p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-cyan-400" />
                </motion.div>

                {/* Decorative Elements */}
                <motion.div
                  className="mt-8 flex items-center justify-center gap-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: showSecondVideo ? 1 : 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                >
                  {[...Array(5)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="h-1.5 w-1.5 rounded-full bg-white/60"
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "easeInOut",
                      }}
                    />
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      )}

      {/* Hero Section */}
      <HeroSection
        currentBgImage={currentBgImage}
        showVideoIntro={showVideoIntro}
        onAboutClick={() => setShowAboutUs(true)}
        onProductsClick={() => setShowProducts(true)}
        onContactClick={() => setShowContact(true)}
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
