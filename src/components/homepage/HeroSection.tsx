"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";
import Image from "next/image";

interface HeroSectionProps {
  videoPhase: "fullscreen" | "minimizing" | "minimized";
  typewriterComplete: boolean;
  setTypewriterComplete: (complete: boolean) => void;
  currentBgImage: number;
  showVideoIntro: boolean;
  onAboutClick: () => void;
}

export default function HeroSection({
  videoPhase,
  typewriterComplete,
  setTypewriterComplete,
  currentBgImage,
  showVideoIntro,
  onAboutClick,
}: HeroSectionProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const fullText = "A1 IRON & STEEL";

  // Custom typing effect
  useEffect(() => {
    if (showVideoIntro) {
      setDisplayedText("");
      return;
    }

    const startDelay = setTimeout(() => {
      let currentIndex = 0;

      const typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayedText(fullText.slice(0, currentIndex + 1));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTypewriterComplete(true);
        }
      }, 150);

      return () => clearInterval(typeInterval);
    }, 1000);

    return () => clearTimeout(startDelay);
  }, [showVideoIntro, fullText, setTypewriterComplete]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {/* f2.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 0 ? 0.6 : 0,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/f2.jpg"
            alt="Background Image 1"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* f3.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 1 ? 0.6 : 0,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/f3.jpg"
            alt="Background Image 2"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* f4.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 2 ? 0.6 : 0,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/f4.jpg"
            alt="Background Image 3"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* f6.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 3 ? 0.6 : 0,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/f6.jpg"
            alt="Background Image 4"
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        {/* f7.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 4 ? 0.6 : 0,
          }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src="/f7.jpg"
            alt="Background Image 5"
            fill
            className="object-cover"
            priority
          />
        </motion.div>
      </div>

      {/* White overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80" />
      {/* Navigation Bar - Only show when video intro is not showing */}
      {!showVideoIntro && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 md:h-18 lg:h-20">
              {/* Logo */}
              <div className="flex items-center">
                <Logo />
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300 font-medium"
                >
                  Home
                </a>
                <button
                  onClick={onAboutClick}
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300 font-medium"
                >
                  About
                </button>
                <a
                  href="#products"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300 font-medium"
                >
                  Products
                </a>
                <a
                  href="#contact"
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-300 font-medium"
                >
                  Contact
                </a>
              </nav>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2">
                <svg
                  className="w-6 h-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Main Content */}
        <div className="text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* A1 IRON & STEEL Title */}
          <div className="flex justify-center items-center mb-4 sm:mb-6">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 50, scale: 0.5 }}
              animate={{
                opacity: showVideoIntro ? 0 : 1,
                y: showVideoIntro ? 50 : 0,
                scale: showVideoIntro ? 0.5 : 1,
              }}
              transition={{
                duration: 1.2,
                delay: showVideoIntro ? 0 : 0.5,
                ease: [0.68, -0.55, 0.265, 1.55], // Bounce effect
              }}
            >
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight mb-2 whitespace-nowrap">
                <span className="text-gray-800">
                  {displayedText.includes("&")
                    ? displayedText.split("&")[0]
                    : displayedText}
                </span>
                {displayedText.includes("&") && (
                  <>
                    <span className="text-orange-500">&</span>
                    <span className="text-orange-500">
                      {displayedText.split("&")[1] || ""}
                    </span>
                  </>
                )}
                <span
                  className={`inline-block w-[0.08em] ml-0.5 align-baseline bg-gray-800 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                ></span>
              </span>
            </motion.div>
          </div>

          {/* Subtitle */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: showVideoIntro ? 0 : 1,
              y: showVideoIntro ? 30 : 0,
            }}
            transition={{
              duration: 1,
              delay: showVideoIntro ? 0 : 0.8,
            }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6 sm:mb-8"
          >
            The Metal That Builds a Nation
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: showVideoIntro ? 0 : 1,
              y: showVideoIntro ? 30 : 0,
            }}
            transition={{
              duration: 1,
              delay: showVideoIntro ? 0 : 1.1,
            }}
            className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Forging strength and shaping the future{" "}
            <span className="text-orange-500 font-semibold">
              — where raw metal becomes enduring power.
            </span>{" "}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: showVideoIntro ? 0 : 1,
              y: showVideoIntro ? 30 : 0,
            }}
            transition={{
              duration: 1,
              delay: showVideoIntro ? 0 : 1.4,
            }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 bg-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-base sm:text-lg"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-8 h-8 border-2 border-gray-400 rounded-full flex items-center justify-center mx-auto mb-2"
          >
            <ArrowUp className="w-4 h-4 text-gray-400 rotate-180" />
          </motion.div>
          <p className="text-sm text-gray-500">Scroll</p>
        </motion.div>
      </div>
    </section>
  );
}
