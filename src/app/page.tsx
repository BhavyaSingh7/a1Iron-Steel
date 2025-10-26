"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/homepage/HeroSection";
import AboutSection from "@/components/homepage/AboutSection";
import Mission from "@/components/Mission";
import ProductsSection from "@/components/homepage/ProductsSection";
import ContactSection from "@/components/homepage/ContactSection";
import { AboutUsPage } from "@/components/about-us-section";
import { ProductPage } from "@/components/product-section";
import { ContactPage } from "@/components/contact";

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

  // Background image carousel effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBgImage((prev) => (prev + 1) % 5); // Cycle through 5 images
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [videoPhase]);

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
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Video error:", e);
              const videoElement = e.target as HTMLVideoElement;
              videoElement.style.display = "none";
            }}
            onLoadStart={() => console.log("Video loading started")}
            onCanPlay={() => console.log("Video can play")}
            preload="auto"
          >
            <source src="/bg-video.mp4" type="video/mp4" />
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
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
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Second video error:", e);
              const videoElement = e.target as HTMLVideoElement;
              videoElement.style.display = "none";
            }}
            preload="auto"
          >
            <source src="/bg-video3.mp4" type="video/mp4" />
            <source
              src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_2mb.mp4"
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

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Bouncing Bubbles */}
        {showBubbles && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-4 h-4 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.random() * 20 - 10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}

        {/* A1 IRON & STEEL Text */}
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-white"
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: 0.5,
                ease: [0.68, -0.55, 0.265, 1.55], // Bounce effect
              }}
            >
              A1 IRON & STEEL
            </motion.h1>

            {/* Info text that appears with second video */}
            <motion.div
              className="mt-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: showSecondVideo ? 1 : 0,
                y: showSecondVideo ? 0 : 30,
              }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <p className="text-xl sm:text-2xl md:text-3xl text-white/90 font-light leading-relaxed">
                Forging Excellence in Steel Manufacturing
              </p>
              <p className="text-lg sm:text-xl text-white/70 mt-4">
                Where Innovation Meets Industrial Strength
              </p>
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
