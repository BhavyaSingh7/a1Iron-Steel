"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import HeroSection from "@/components/homepage/HeroSection";
import AboutSection from "@/components/homepage/AboutSection";
import Mission from "@/components/Mission";
import ProductsSection from "@/components/homepage/ProductsSection";
import ContactSection from "@/components/homepage/ContactSection";
import { AboutUsPage } from "@/components/about-us-section";

export default function Home() {
  const [videoPhase, setVideoPhase] = useState<
    "fullscreen" | "minimizing" | "minimized"
  >("fullscreen");
  const [typewriterComplete, setTypewriterComplete] = useState(false);
  const [currentBgImage, setCurrentBgImage] = useState(0);
  const [showVideoIntro, setShowVideoIntro] = useState(true);
  const [showAboutUs, setShowAboutUs] = useState(false);

  // Auto-slide to home screen after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      // Hide the video intro with slide-up animation
      setShowVideoIntro(false);
    }, 2000); // 2 seconds

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
      {/* Video Intro Screen - Shows for 2 seconds then slides up */}
      <motion.section
        className="fixed inset-0 z-50 bg-black"
        initial={{ y: 0 }}
        animate={{ y: showVideoIntro ? 0 : "-100%" }}
        transition={{
          duration: 1.5,
          ease: [0.25, 0.1, 0.25, 1], // Smooth slide-up
        }}
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video autoPlay muted loop className="w-full h-full object-cover">
            <source src="/bg-video.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50" />

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
          </div>
        </div>
      </motion.section>

      {/* Hero Section */}
      <HeroSection
        videoPhase={videoPhase}
        typewriterComplete={typewriterComplete}
        setTypewriterComplete={setTypewriterComplete}
        currentBgImage={currentBgImage}
        showVideoIntro={showVideoIntro}
        onAboutClick={() => setShowAboutUs(true)}
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
    </main>
  );
}
