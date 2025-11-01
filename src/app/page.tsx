"use client";

import React, { useState, useEffect } from "react";
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

export default function Home() {
  const [videoPhase, setVideoPhase] = useState<
    "fullscreen" | "minimizing" | "minimized"
  >("fullscreen");
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const [showVideoIntro, setShowVideoIntro] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [showProducts, setShowProducts] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showSecondVideo, setShowSecondVideo] = useState(false);
  const [showBubbles, setShowBubbles] = useState(false);

  // Show bubbles after 1 second
  useEffect(() => {
    const bubbleTimer = setTimeout(() => {
      setShowBubbles(true);
    }, 1000);
    return () => clearTimeout(bubbleTimer);
  }, []);

  // Show second video after 5 seconds
  useEffect(() => {
    const secondVideoTimer = setTimeout(() => {
      setShowSecondVideo(true);
    }, 5000);
    return () => clearTimeout(secondVideoTimer);
  }, []);

  // Auto-slide to home screen after 10 seconds (5s first video + 5s second video)
  useEffect(() => {
    const timer = setTimeout(() => {
      // Hide the video intro with slide-up animation
      setShowVideoIntro(false);
    }, 10000); // 10 seconds total

    // Check if video loads, if not show fallback image
    const video = document.querySelector("video");
    if (video) {
      const fallback = document.getElementById("video-fallback") as HTMLElement;

      const handleVideoError = () => {
        console.log("Video failed to load, showing fallback image");
        if (fallback) {
          fallback.style.display = "block";
        }
      };

      const handleVideoLoad = () => {
        console.log("Video loaded successfully");
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
  }, []);

  // Trigger video vanishing when typewriter completes
  useEffect(() => {
    if (typewriterComplete) {
      const timer1 = setTimeout(() => {
        setVideoPhase("minimizing");
      }, 500); // Start minimizing 0.5 seconds after typewriter completes

      const timer2 = setTimeout(() => {
        setVideoPhase("minimized");
      }, 3000); // Complete minimizing after 3 seconds

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [typewriterComplete]);

  // Background image carousel effect - only start when video intro is done
  useEffect(() => {
    if (showVideoIntro) return; // Don't start carousel until video intro is done

    let interval: NodeJS.Timeout | null = null;

    // Add delay before starting carousel to reduce initial load
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        setCurrentBgImage((prev) => (prev + 1) % 7); // Cycle through 7 images
      }, 5000); // Change every 5 seconds for more moderate transitions
    }, 2000); // Wait 2 seconds after video intro ends for better performance

    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [showVideoIntro]);

  return (
    <main className="min-h-screen">
      {/* Video Intro Screen - Shows for 8 seconds then slides up */}
      <motion.section
        className="fixed inset-0 z-50 bg-black"
        initial={{ y: 0 }}
        animate={{ y: showVideoIntro ? 0 : "-100%" }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1], // Smooth slide-up
        }}
      >
        {/* First Video Background */}
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{ opacity: showSecondVideo ? 0 : 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-110 contrast-105"
            onError={(e) => {
              console.error("Video error:", e);
              const videoElement = e.target as HTMLVideoElement;
              videoElement.style.display = "none";
            }}
            onLoadStart={() => console.log("Video loading started")}
            onCanPlay={() => console.log("Video can play")}
            preload="auto"
            style={{
              filter: "brightness(1.15) contrast(1.1) saturate(1.1)",
            }}
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
          transition={{ duration: 2, ease: "easeInOut" }}
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-110 contrast-105"
            onError={(e) => {
              console.error("Second video error:", e);
              const videoElement = e.target as HTMLVideoElement;
              videoElement.style.display = "none";
            }}
            preload="auto"
            style={{
              filter: "brightness(1.15) contrast(1.1) saturate(1.1)",
            }}
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

        {/* Bouncing Bubbles - Reduced for performance */}
        {showBubbles && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full blur-sm"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: `${8 + Math.random() * 16}px`,
                  height: `${8 + Math.random() * 16}px`,
                  background:
                    i % 4 === 0
                      ? "radial-gradient(circle, rgba(240, 174, 40, 0.15), rgba(241, 133, 46, 0.08))"
                      : i % 4 === 1
                      ? "radial-gradient(circle, rgba(32, 132, 177, 0.18), rgba(26, 95, 130, 0.1))"
                      : i % 4 === 2
                      ? "radial-gradient(circle, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05))"
                      : "radial-gradient(circle, rgba(141, 188, 217, 0.18), rgba(32, 132, 177, 0.08))",
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, 10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: i * 0.5,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

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

      {/* Hero Section */}
      <HeroSection
        setTypewriterComplete={setTypewriterComplete}
        currentBgImage={currentBgImage}
        showVideoIntro={showVideoIntro}
        onAboutClick={() => setShowAboutUs(true)}
        onProductsClick={() => setShowProducts(true)}
        onContactClick={() => setShowContact(true)}
      />

      {/* About Section */}
      <AboutSection />

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
