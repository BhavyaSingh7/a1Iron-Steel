"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { ArrowUp, Trees, ChevronRight } from "lucide-react";
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
      aria-label="Hero section with company introduction"
    >
      {/* Background Image Carousel */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        {/* Fallback background color */}
        <div className="absolute inset-0 logo-gray-bg" />
        {/* hm1.png */}
        {(currentBgImage === 0 || currentBgImage === 6) && (
          <motion.div
            initial={{ opacity: currentBgImage === 0 ? 0.25 : 0 }}
            animate={{
              opacity: currentBgImage === 0 ? 0.25 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/hm1.png`}
              alt="Background Image 1"
              fill
              className="object-cover"
              quality={50}
              priority={currentBgImage === 0}
              loading={currentBgImage === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        )}

        {/* hm2.jpeg */}
        {(currentBgImage === 1 || currentBgImage === 0) && (
          <motion.div
            initial={{ opacity: currentBgImage === 1 ? 0.25 : 0 }}
            animate={{
              opacity: currentBgImage === 1 ? 0.25 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/hm2.jpeg`}
              alt="Background Image 2"
              fill
              className="object-cover"
              quality={50}
              priority={currentBgImage === 1}
              loading={currentBgImage === 1 ? "eager" : "lazy"}
            />
          </motion.div>
        )}

        {/* hm3.jpeg */}
        {(currentBgImage === 2 || currentBgImage === 1) && (
          <motion.div
            initial={{ opacity: currentBgImage === 2 ? 0.25 : 0 }}
            animate={{
              opacity: currentBgImage === 2 ? 0.25 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/hm3.jpeg`}
              alt="Background Image 3"
              fill
              className="object-cover"
              quality={50}
              priority={currentBgImage === 2}
              loading={currentBgImage === 2 ? "eager" : "lazy"}
            />
          </motion.div>
        )}

        {/* hm4.jpeg */}
        {(currentBgImage === 3 || currentBgImage === 2) && (
          <motion.div
            initial={{ opacity: currentBgImage === 3 ? 0.25 : 0 }}
            animate={{
              opacity: currentBgImage === 3 ? 0.25 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/hm4.jpeg`}
              alt="Background Image 4"
              fill
              className="object-cover"
              quality={50}
              priority={currentBgImage === 3}
              loading={currentBgImage === 3 ? "eager" : "lazy"}
            />
          </motion.div>
        )}

        {/* hm5.jpeg */}
        {(currentBgImage === 4 || currentBgImage === 3) && (
          <motion.div
            initial={{ opacity: currentBgImage === 4 ? 0.25 : 0 }}
            animate={{
              opacity: currentBgImage === 4 ? 0.25 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/hm5.jpeg`}
              alt="Background Image 5"
              fill
              className="object-cover"
              quality={50}
              priority={currentBgImage === 4}
              loading={currentBgImage === 4 ? "eager" : "lazy"}
            />
          </motion.div>
        )}

        {/* hm6.jpeg */}
        {(currentBgImage === 5 || currentBgImage === 4) && (
          <motion.div
            initial={{ opacity: currentBgImage === 5 ? 0.25 : 0 }}
            animate={{
              opacity: currentBgImage === 5 ? 0.25 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/hm6.jpeg`}
              alt="Background Image 6"
              fill
              className="object-cover"
              quality={50}
              priority={currentBgImage === 5}
              loading={currentBgImage === 5 ? "eager" : "lazy"}
            />
          </motion.div>
        )}

        {/* hm7.jpeg */}
        {(currentBgImage === 6 || currentBgImage === 5) && (
          <motion.div
            initial={{ opacity: currentBgImage === 6 ? 0.25 : 0 }}
            animate={{
              opacity: currentBgImage === 6 ? 0.25 : 0,
            }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            style={{ willChange: "opacity" }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/hm7.jpeg`}
              alt="Background Image 7"
              fill
              className="object-cover"
              quality={50}
              priority={currentBgImage === 6}
              loading={currentBgImage === 6 ? "eager" : "lazy"}
            />
          </motion.div>
        )}
      </div>

      {/* Removed white overlay to avoid tint on images */}
      {/* Navigation Bar - Only show when video intro is not showing */}
      {!showVideoIntro && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="fixed top-0 left-0 right-0 z-50 bg-white/98 backdrop-blur-md shadow-sm border-b border-gray-100"
          style={{
            boxShadow:
              "0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)",
          }}
        >
          <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-16 md:h-20 lg:h-20">
              {/* Logo */}
              <div className="flex items-center h-full -ml-4 md:-ml-6">
                <motion.a
                  href="#home"
                  className="flex items-center h-full"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="relative h-full w-auto py-2">
                    <Image
                      src={`${
                        process.env.NEXT_PUBLIC_BASE_PATH || ""
                      }/logo-1.png`}
                      alt="A1 Iron & Steel Logo"
                      width={100}
                      height={100}
                      className="h-full w-auto object-contain"
                      priority
                    />
                  </div>
                </motion.a>
              </div>

              {/* Navigation Links */}
              <nav
                className="hidden md:flex items-center space-x-6"
                aria-label="Main navigation"
              >
                <motion.a
                  href="#home"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-800 font-medium text-base md:text-lg hover:text-logo-orange-1 transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 tracking-wide"
                  aria-label="Navigate to home section"
                  tabIndex={0}
                >
                  Home
                </motion.a>
                <motion.button
                  onClick={onAboutClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                  aria-label="Navigate to about section"
                  tabIndex={0}
                >
                  About
                </motion.button>
                <motion.button
                  onClick={onProductsClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                  aria-label="View our products"
                  tabIndex={0}
                >
                  Products
                </motion.button>
                <motion.button
                  onClick={onContactClick}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                  aria-label="Contact us"
                  tabIndex={0}
                >
                  Contact
                </motion.button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-logo-gray-dark hover:text-logo-orange-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
                aria-label={
                  isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
                }
                aria-expanded={isMobileMenuOpen}
                tabIndex={0}
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
          className="mobile-menu-container fixed top-16 left-0 right-0 z-40 bg-white backdrop-blur-sm shadow-lg border-b border-logo-orange-medium/30 md:hidden"
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
        >
          <nav className="px-4 py-6 space-y-4" aria-label="Mobile navigation">
            <a
              href="#home"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-lg font-medium text-logo-orange-medium hover:text-logo-orange-dark transition-colors duration-300 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="Navigate to home section"
              tabIndex={0}
            >
              Home
            </a>
            <button
              onClick={() => handleMobileNavClick(onAboutClick)}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="Navigate to about section"
              tabIndex={0}
            >
              About
            </button>
            <button
              onClick={() => handleMobileNavClick(onProductsClick)}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="View our products"
              tabIndex={0}
            >
              Products
            </button>
            <button
              onClick={() => {
                onContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="Contact us"
              tabIndex={0}
            >
              Contact
            </button>
          </nav>
        </motion.div>
      )}

      {/* Hero Content */}
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Subtle overlay for text readability */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none"
          aria-hidden="true"
        />
        {/* Main Content */}
        <div className="text-center max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
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
              <h1
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black leading-[1.1] mb-3 sm:mb-4 whitespace-nowrap tracking-[-0.02em]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #8dbcd9, #2084b1, #f09b30, #f1852e, #2084b1)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  letterSpacing: "-0.02em",
                  textShadow: "0 0 80px rgba(32, 132, 177, 0.1)",
                }}
              >
                {displayedText}
                <span
                  className={`inline-block w-[0.08em] ml-0.5 align-baseline logo-blue-bg ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                  aria-hidden="true"
                ></span>
              </h1>
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
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold logo-blue-gradient mb-8 sm:mb-10 md:mb-12 tracking-wide"
            style={{ letterSpacing: "0.03em" }}
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
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-12 sm:mb-16 md:mb-20 leading-[1.8] max-w-3xl mx-auto font-light"
            style={{ letterSpacing: "0.01em" }}
          >
            Rwanda's premier steel manufacturer delivering{" "}
            <span className="logo-orange-gradient font-semibold">
              exceptional quality, sustainable solutions, and unwavering
              reliability.
            </span>{" "}
            Building the infrastructure that drives world forward.
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
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-52 sm:w-60 h-14 sm:h-16 logo-orange-bg text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base tracking-wider overflow-hidden group flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-orange-300 focus:ring-offset-2"
              aria-label="Explore our steel products and solutions"
              tabIndex={0}
              style={{
                boxShadow:
                  "0 10px 25px -5px rgba(241, 133, 46, 0.25), 0 4px 10px -2px rgba(241, 133, 46, 0.15)",
                letterSpacing: "0.05em",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Explore Products
                <motion.svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              />
            </motion.button>
            <motion.button
              onClick={onAboutClick}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-52 sm:w-60 h-14 sm:h-16 bg-white border border-gray-200 text-gray-800 font-medium rounded-lg hover:border-gray-300 transition-all duration-300 text-sm sm:text-base tracking-wider group overflow-hidden shadow-sm hover:shadow-md flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-blue-300 focus:ring-offset-2"
              aria-label="Learn more about our company"
              tabIndex={0}
              style={{
                letterSpacing: "0.05em",
              }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 text-gray-800 transition-colors duration-300">
                Learn More
                <motion.svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  initial={{ x: 0 }}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.3 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </motion.svg>
              </span>
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
              <div className="sustainability-slider w-48 sm:w-56 h-14 sm:h-16 bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                {/* Text and arrows positioned on the right side to avoid tree handle */}
                <div className="absolute inset-0 flex items-center justify-end gap-1 pr-3 sm:pr-4">
                  <span
                    className="text-xs font-bold text-gray-700 z-10 transition-opacity duration-300 tracking-wider"
                    style={{ opacity: sliderPosition > 15 ? 0 : 1 }}
                  >
                    Sustainability
                  </span>
                  {/* Animated arrow indicators */}
                  <div
                    className="flex items-center gap-0.5 z-10 transition-opacity duration-300"
                    style={{ opacity: sliderPosition > 15 ? 0 : 1 }}
                  >
                    <motion.div
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <ChevronRight className="w-3 h-3 text-gray-500" />
                    </motion.div>
                    <motion.div
                      animate={{
                        x: [0, 4, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    >
                      <ChevronRight className="w-3 h-3 text-gray-500" />
                    </motion.div>
                  </div>
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
                  style={{ left: `${Math.max(4, sliderPosition)}px` }}
                  className={`absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing z-20 hover:shadow-2xl transition-all duration-300 ${
                    sliderPosition > 120
                      ? "bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-green-400"
                      : "bg-white border-2 border-gray-300 shadow-lg"
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
                    className={`absolute left-0 top-0 h-full rounded-xl ${
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
