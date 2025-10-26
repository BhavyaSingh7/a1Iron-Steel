"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Logo from "@/components/Logo";
import Image from "next/image";

interface HeroSectionProps {
  setTypewriterComplete: (complete: boolean) => void;
  currentBgImage: number;
  showVideoIntro: boolean;
  onAboutClick: () => void;
  onProductsClick: () => void;
  onContactClick: () => void;
}

export default function HeroSection({
  setTypewriterComplete,
  currentBgImage,
  showVideoIntro,
  onAboutClick,
  onProductsClick,
  onContactClick,
}: HeroSectionProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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

  // Mobile menu toggle function
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking on navigation items
  const handleMobileNavClick = (action: () => void) => {
    action();
    setIsMobileMenuOpen(false);
  };

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen) {
        const target = event.target as Element;
        if (
          !target.closest(".mobile-menu-container") &&
          !target.closest('[aria-label="Toggle mobile menu"]')
        ) {
          setIsMobileMenuOpen(false);
        }
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full">
        {/* Fallback background color */}
        <div className="absolute inset-0 logo-gray-bg" />
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

      {/* Light overlay for better text readability */}
      <div className="absolute inset-0 bg-white/60" />
      {/* Navigation Bar - Only show when video intro is not showing */}
      {!showVideoIntro && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg border-b border-logo-orange-medium/30"
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
                  className="text-logo-orange-medium hover:text-logo-orange-dark transition-colors duration-300 font-medium"
                >
                  Home
                </a>
                <button
                  onClick={onAboutClick}
                  className="text-logo-orange-medium hover:text-logo-orange-dark transition-colors duration-300 font-medium"
                >
                  About
                </button>
                <button
                  onClick={onProductsClick}
                  className="text-logo-orange-medium hover:text-logo-orange-dark transition-colors duration-300 font-medium"
                >
                  Products
                </button>
                <button
                  onClick={onContactClick}
                  className="text-logo-orange-medium hover:text-logo-orange-dark transition-colors duration-300 font-medium"
                >
                  Contact
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-logo-gray-dark hover:text-logo-orange-medium transition-colors duration-300"
                aria-label="Toggle mobile menu"
              >
                <motion.svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </motion.svg>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="mobile-menu-container fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur-sm shadow-lg border-b border-logo-orange-medium/30 md:hidden"
        >
          <nav className="px-4 py-6 space-y-4">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-logo-orange-medium hover:text-logo-orange-dark transition-colors duration-300 py-2"
            >
              Home
            </a>
            <button
              onClick={() => handleMobileNavClick(onAboutClick)}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left"
            >
              About
            </button>
            <button
              onClick={() => handleMobileNavClick(onProductsClick)}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left"
            >
              Products
            </button>
            <button
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left"
            >
              Contact
            </button>
          </nav>
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
                <span className="logo-blue-gradient">
                  {displayedText.includes("&")
                    ? displayedText.split("&")[0]
                    : displayedText}
                </span>
                {displayedText.includes("&") && (
                  <>
                    <span className="logo-orange-gradient">&</span>
                    <span className="logo-orange-gradient">
                      {displayedText.split("&")[1] || ""}
                    </span>
                  </>
                )}
                <span
                  className={`inline-block w-[0.08em] ml-0.5 align-baseline logo-blue-bg ${
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold logo-blue-gradient mb-6 sm:mb-8"
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
            className="text-base sm:text-lg md:text-xl text-logo-gray-dark mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-4xl mx-auto"
          >
            Forging strength and shaping the future{" "}
            <span className="logo-orange-gradient font-semibold">
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
              onClick={onProductsClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 logo-orange-bg text-white font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 text-base sm:text-lg"
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 sm:px-10 py-3 sm:py-4 border-2 border-logo-orange-medium text-logo-orange-medium font-bold rounded-full hover:logo-orange-bg hover:text-white transition-all duration-300 text-base sm:text-lg"
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
            className="w-8 h-8 border-2 border-logo-orange-medium rounded-full flex items-center justify-center mx-auto mb-2"
          >
            <ArrowUp className="w-4 h-4 text-logo-orange-medium rotate-180" />
          </motion.div>
          <p className="text-sm text-logo-gray-dark">Scroll</p>
        </motion.div>
      </div>
    </section>
  );
}
