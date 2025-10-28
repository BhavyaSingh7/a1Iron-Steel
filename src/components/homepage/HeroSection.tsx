"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ArrowUp, Trees } from "lucide-react";
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
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [slideTriggered, setSlideTriggered] = useState(false);
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
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/f2.jpg`}
            alt="Background Image 1"
            fill
            className="object-cover"
            priority
            loading="eager"
          />
        </motion.div>

        {/* f3.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 1 ? 0.6 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/f3.jpg`}
            alt="Background Image 2"
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* f4.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 2 ? 0.6 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/f4.jpg`}
            alt="Background Image 3"
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* f6.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 3 ? 0.6 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/f6.jpg`}
            alt="Background Image 4"
            fill
            className="object-cover"
            loading="lazy"
          />
        </motion.div>

        {/* f7.jpg */}
        <motion.div
          animate={{
            opacity: currentBgImage === 4 ? 0.6 : 0,
          }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/f7.jpg`}
            alt="Background Image 5"
            fill
            className="object-cover"
            loading="lazy"
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
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-14 md:h-16">
              {/* Logo */}
              <div className="flex items-center h-full -ml-2">
                <motion.a
                  href="#home"
                  className="flex items-center h-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative h-full w-auto">
                    <Image
                      src={`${
                        process.env.NEXT_PUBLIC_BASE_PATH || ""
                      }/logo-1.png`}
                      alt="A1 Iron & Steel Logo"
                      width={80}
                      height={80}
                      className="h-full w-auto object-contain"
                      priority
                    />
                  </div>
                </motion.a>
              </div>

              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-6">
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 font-bold text-sm hover:text-logo-orange-1 transition-all duration-300 cursor-pointer"
                >
                  Home
                </motion.a>
                <motion.button
                  onClick={onAboutClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 font-bold text-sm hover:text-logo-orange-1 transition-all duration-300"
                >
                  About
                </motion.button>
                <motion.button
                  onClick={onProductsClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 font-bold text-sm hover:text-logo-orange-1 transition-all duration-300"
                >
                  Products
                </motion.button>
                <motion.button
                  onClick={onContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 font-bold text-sm hover:text-logo-orange-1 transition-all duration-300"
                >
                  Contact
                </motion.button>
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
              <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-tight mb-2 whitespace-nowrap tracking-tight">
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
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold logo-blue-gradient mb-6 sm:mb-8 tracking-tight"
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
            className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-10 sm:mb-12 md:mb-16 leading-relaxed max-w-4xl mx-auto font-medium"
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
            className="flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-6"
          >
            <motion.button
              onClick={onProductsClick}
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 sm:px-12 py-4 sm:py-5 logo-orange-bg text-white font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 text-lg sm:text-xl tracking-wide"
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{
                scale: 1.1,
                y: -4,
                transition: { type: "spring", stiffness: 300, damping: 20 },
              }}
              whileTap={{ scale: 0.95 }}
              className="px-10 sm:px-12 py-4 sm:py-5 border-2 border-logo-orange-medium text-logo-orange-medium font-bold rounded-full hover:border-logo-orange-medium hover:text-white hover:shadow-xl transition-all duration-300 text-lg sm:text-xl tracking-wide group relative overflow-hidden bg-white"
            >
              <span className="relative z-10 transition-all duration-300 text-logo-orange-medium group-hover:text-white">
                Learn More
              </span>
              <div
                className="absolute inset-0 logo-orange-bg scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 ease-out"
                style={{ borderRadius: "inherit" }}
              />
            </motion.button>
            {/* Interactive Slider CTA to Sustainability */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{
                opacity: showVideoIntro ? 0 : 1,
                y: showVideoIntro ? 30 : 0,
              }}
              transition={{ duration: 1, delay: showVideoIntro ? 0 : 1.6 }}
              className="relative select-none"
            >
              <div className="sustainability-slider w-48 sm:w-56 h-14 sm:h-16 bg-white/90 backdrop-blur-sm border border-gray-300 rounded-full shadow-md relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="text-xs font-semibold text-gray-700 z-10 transition-opacity duration-300 px-2"
                    style={{ opacity: sliderPosition > 15 ? 0 : 1 }}
                  >
                    Sustainability
                  </span>
                </div>
                <motion.div
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0}
                  onDrag={(e, info) => {
                    const sliderElement = (e.target as HTMLElement)
                      .parentElement!;
                    const buttonWidth = 40; // w-10 = 40px
                    const maxWidth = sliderElement.offsetWidth - buttonWidth;
                    const newPos = Math.max(
                      0,
                      Math.min(info.point.x - buttonWidth / 2, maxWidth)
                    );
                    setSliderPosition(newPos);

                    if (newPos >= maxWidth * 0.9 && !slideTriggered) {
                      setSlideTriggered(true);
                      setTimeout(() => {
                        const el = document.querySelector("#sustainability");
                        if (el) {
                          el.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                        }
                        setTimeout(() => {
                          setSliderPosition(0);
                          setSlideTriggered(false);
                        }, 1500);
                      }, 300);
                    }
                  }}
                  onDragEnd={() => {
                    if (!slideTriggered) {
                      setSliderPosition(0);
                    }
                  }}
                  style={{ left: `${Math.max(2, sliderPosition)}px` }}
                  className={`absolute top-2 sm:top-2 w-10 h-10 rounded-full shadow-lg flex items-center justify-center cursor-grab active:cursor-grabbing z-20 hover:shadow-xl transition-all duration-300 ${
                    sliderPosition > 120
                      ? "bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-green-400"
                      : "bg-white border border-gray-400"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Trees
                    className={`w-6 h-6 ${
                      sliderPosition > 120 ? "text-white" : "text-green-600"
                    }`}
                  />
                </motion.div>
                {sliderPosition > 10 && (
                  <motion.div
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: sliderPosition + 4, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 150, damping: 15 }}
                    className={`absolute left-0 top-0 h-full rounded-full ${
                      sliderPosition > 120
                        ? "bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 shadow-inner"
                        : "bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 shadow-sm"
                    }`}
                  />
                )}
              </div>
            </motion.div>
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
