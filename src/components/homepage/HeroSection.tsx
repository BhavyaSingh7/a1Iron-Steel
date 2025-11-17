"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Trees, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface HeroSectionProps {
  showVideoIntro: boolean;
  onProductsClick: () => void;
}

interface Industry {
  id: number;
  title: string;
  description: string;
  image: string;
  action?: () => void;
}

// Industries data - mapped to homepage images
const INDUSTRIES: Industry[] = [
  {
    id: 0,
    title: "Our Company",
    description:
      "Rwanda's premier steel manufacturer delivering exceptional quality, sustainable solutions, and unwavering reliability.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/homepage/hm1.png`,
  },
  {
    id: 1,
    title: "Our Products",
    description:
      "Premium steel solutions for construction, manufacturing, and infrastructure development.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/homepage/hm2.jpeg`,
  },
  {
    id: 2,
    title: "Our Manufacturing",
    description:
      "State-of-the-art facilities producing high-quality steel with precision and excellence.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/homepage/hm3.jpeg`,
  },
  {
    id: 3,
    title: "Our Quality",
    description:
      "Rigorous quality control ensuring every product meets international standards.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/homepage/hm4.jpeg`,
  },
  {
    id: 4,
    title: "Our Impact",
    description:
      "Building the infrastructure that drives Rwanda forward with sustainable steel solutions.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/homepage/hm5.jpeg`,
  },
  {
    id: 5,
    title: "Get in Touch",
    description:
      "Connect with us to discuss your steel requirements and discover how we can help.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/homepage/hm6.jpeg`,
  },
];

export default function HeroSection({
  showVideoIntro,
  onProductsClick,
}: HeroSectionProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [slideTriggered, setSlideTriggered] = useState(false);

  // ArcelorMittal-style carousel state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const TRANSITION_DURATION = 5000; // 5 seconds per industry

  const handleHomeClick = () => {
    router.push("/?skipIntro=true");
  };

  const handleAboutClick = useCallback(() => {
    router.push("/about");
  }, [router]);

  const handleContactClick = useCallback(() => {
    router.push("/contactus");
  }, [router]);

  const handleMediaClick = () => {
    router.push("/media");
  };

  const handleCareerClick = () => {
    router.push("/career");
  };

  const handleSustainabilityClick = () => {
    // Scroll to sustainability section
    const el = document.querySelector("#sustainability");
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Auto-advance industries with progress indicator
  useEffect(() => {
    if (showVideoIntro) {
      setProgress(0);
      return;
    }

    // Reset progress when index changes (either auto or manual)
    setProgress(0);
    const startTime = Date.now();
    let animationFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / TRANSITION_DURATION) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        setCurrentIndex((current) => (current + 1) % INDUSTRIES.length);
        // Progress will reset automatically when currentIndex changes
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [currentIndex, showVideoIntro, TRANSITION_DURATION]);

  // Handle manual industry selection
  const handleIndustryClick = useCallback((index: number) => {
    setCurrentIndex(index);
    // Progress will reset automatically via useEffect when currentIndex changes
  }, []);

  // Handle industry action
  const handleIndustryAction = useCallback(() => {
    const industry = INDUSTRIES[currentIndex];
    if (industry.id === 1) {
      onProductsClick();
    } else if (industry.id === 0) {
      handleAboutClick();
    } else if (industry.id === 5) {
      handleContactClick();
    }
  }, [currentIndex, onProductsClick, handleAboutClick, handleContactClick]);

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

  if (showVideoIntro) {
    return null; // Don't render hero section during video intro
  }

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero section with company introduction"
    >
      {/* Background Image Carousel - Based on selected industry */}
      <div className="absolute inset-0 w-full h-full" aria-hidden="true">
        <div className="absolute inset-0 bg-gray-900" />
        {INDUSTRIES.map((industry, index) => (
          <div
            key={industry.id}
            style={{
              opacity: currentIndex === index ? 1 : 0,
              zIndex:
                currentIndex === index
                  ? 2
                  : currentIndex === (index + 1) % INDUSTRIES.length
                  ? 1
                  : 0,
              pointerEvents: "none",
              transition: "opacity 0.8s ease-in-out",
            }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <Image
              src={industry.image}
              alt={`${industry.title} background`}
              fill
              className="object-cover"
              quality={40}
              priority={
                currentIndex === index ||
                currentIndex === (index + 1) % INDUSTRIES.length
              }
              loading={
                currentIndex === index ||
                currentIndex === (index + 1) % INDUSTRIES.length
                  ? "eager"
                  : "lazy"
              }
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Navigation Bar */}
      <div
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
              <button
                onClick={handleHomeClick}
                className="flex items-center h-full cursor-pointer hover:scale-105 active:scale-95 transition-transform duration-200"
                aria-label="Navigate to home"
              >
                <div
                  className="relative w-auto py-2"
                  style={{ height: "120%", minHeight: "80px" }}
                >
                  <Image
                    src={`${
                      process.env.NEXT_PUBLIC_BASE_PATH || ""
                    }/logo-1.png`}
                    alt="A1 Iron & Steel Logo"
                    width={140}
                    height={140}
                    className="h-full w-auto object-contain"
                    priority
                  />
                </div>
              </button>
            </div>

            {/* Navigation Links */}
            <nav
              className="hidden md:flex items-center space-x-6"
              aria-label="Main navigation"
            >
              <button
                onClick={handleHomeClick}
                className="text-gray-800 font-medium text-base md:text-lg hover:text-logo-orange-1 transition-colors duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2 tracking-wide hover:scale-105 active:scale-95"
                aria-label="Navigate to home section"
                tabIndex={0}
              >
                Home
              </button>
              <button
                onClick={handleAboutClick}
                className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                aria-label="Navigate to about section"
                tabIndex={0}
              >
                About
              </button>
              <button
                onClick={onProductsClick}
                className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                aria-label="View our products"
                tabIndex={0}
              >
                Products
              </button>
              <button
                onClick={handleMediaClick}
                className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                aria-label="View our media and social links"
                tabIndex={0}
              >
                Media
              </button>
              <button
                onClick={handleCareerClick}
                className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                aria-label="View career opportunities"
                tabIndex={0}
              >
                Career
              </button>
              <button
                onClick={handleSustainabilityClick}
                className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                aria-label="View sustainability section"
                tabIndex={0}
              >
                Sustainability
              </button>
              <button
                onClick={handleContactClick}
                className="text-gray-700 font-bold text-base md:text-lg hover:text-logo-orange-1 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
                aria-label="Contact us"
                tabIndex={0}
              >
                Contact
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-logo-gray-dark hover:text-logo-orange-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded"
              aria-label={
                isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"
              }
              aria-expanded={isMobileMenuOpen}
              tabIndex={0}
            >
              <svg
                className="w-6 h-6 transition-transform duration-200"
                style={{
                  transform: isMobileMenuOpen
                    ? "rotate(90deg)"
                    : "rotate(0deg)",
                }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-container fixed top-16 left-0 right-0 z-40 bg-white backdrop-blur-sm shadow-lg border-b border-logo-orange-medium/30 md:hidden"
          role="dialog"
          aria-label="Mobile navigation menu"
          aria-modal="true"
          style={{
            opacity: isMobileMenuOpen ? 1 : 0,
            transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-20px)",
            transition: "opacity 0.2s ease-out, transform 0.2s ease-out",
          }}
        >
          <nav className="px-4 py-6 space-y-4" aria-label="Mobile navigation">
            <button
              onClick={() => {
                handleHomeClick();
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-logo-orange-medium hover:text-logo-orange-dark transition-colors duration-300 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="Navigate to home section"
              tabIndex={0}
            >
              Home
            </button>
            <button
              onClick={() => handleMobileNavClick(handleAboutClick)}
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
                handleMediaClick();
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="View our media and social links"
              tabIndex={0}
            >
              Media
            </button>
            <button
              onClick={() => {
                handleCareerClick();
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="View career opportunities"
              tabIndex={0}
            >
              Career
            </button>
            <button
              onClick={() => {
                handleSustainabilityClick();
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="View sustainability section"
              tabIndex={0}
            >
              Sustainability
            </button>
            <button
              onClick={() => {
                handleContactClick();
                setIsMobileMenuOpen(false);
              }}
              className="block text-lg font-medium text-orange-500 hover:text-orange-600 transition-colors duration-300 py-2 w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 rounded px-2"
              aria-label="Contact us"
              tabIndex={0}
            >
              Contact
            </button>
          </nav>
        </div>
      )}

      {/* ArcelorMittal Style Layout */}
      <div className="relative h-full flex items-center pt-20">
        <div className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Side - Main Content */}
          <div className="text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
              {INDUSTRIES[currentIndex].title}
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
              {INDUSTRIES[currentIndex].description}
            </p>
            <button
              onClick={handleIndustryAction}
              className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 group"
            >
              <span>Find out more</span>
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Right Side - Industries List */}
          <div className="lg:pl-8">
            <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
              Explore
            </h2>
            <ul className="space-y-4">
              {INDUSTRIES.map((industry, index) => {
                const isActive = currentIndex === index;
                const circumference = 2 * Math.PI * 12; // radius = 12
                const strokeDashoffset =
                  circumference - (progress / 100) * circumference;

                return (
                  <li key={industry.id}>
                    <button
                      onClick={() => handleIndustryClick(index)}
                      className="relative flex items-center gap-4 w-full text-left group"
                    >
                      {/* Circular Progress Indicator */}
                      <div className="relative w-8 h-8 flex-shrink-0">
                        <svg
                          className="w-8 h-8 transform -rotate-90"
                          viewBox="0 0 24 24"
                        >
                          {/* Background circle */}
                          <circle
                            cx="12"
                            cy="12"
                            r="10"
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.3)"
                            strokeWidth="2"
                          />
                          {/* Animated outer circle - rotates as progress fills */}
                          {isActive && (
                            <circle
                              cx="12"
                              cy="12"
                              r="11"
                              fill="none"
                              stroke="#f1852e"
                              strokeWidth="1.5"
                              strokeDasharray="2 4"
                              opacity="0.6"
                              style={{
                                transformOrigin: "12px 12px",
                                transform: `rotate(${
                                  (progress / 100) * 360
                                }deg)`,
                                transition: "transform 0.05s linear",
                              }}
                            />
                          )}
                          {/* Progress circle - only show for active item */}
                          {isActive && (
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              stroke="#f1852e"
                              strokeWidth="2"
                              strokeDasharray={circumference}
                              strokeDashoffset={strokeDashoffset}
                              strokeLinecap="round"
                              style={{
                                transition: "stroke-dashoffset 0.05s linear",
                              }}
                            />
                          )}
                          {/* Active indicator dot */}
                          <circle
                            cx="12"
                            cy="12"
                            r="4"
                            fill={
                              isActive ? "#f1852e" : "rgba(255, 255, 255, 0.5)"
                            }
                            className="transition-all duration-300"
                          />
                        </svg>
                      </div>
                      {/* Industry Name */}
                      <span
                        className={`text-lg sm:text-xl text-white transition-colors duration-300 ${
                          isActive
                            ? "font-semibold"
                            : "font-normal opacity-70 group-hover:opacity-100"
                        }`}
                      >
                        {industry.title}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      {/* Sustainability Slider - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-20 hidden lg:block">
        <div className="flex flex-col items-end gap-2">
          <div className="sustainability-slider w-48 sm:w-56 h-14 sm:h-16 bg-white/95 backdrop-blur-sm border-2 border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden">
            {/* Text and arrows positioned on the right side */}
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
                <div className="animate-pulse">
                  <ChevronRight className="w-3 h-3 text-gray-500" />
                </div>
                <div
                  className="animate-pulse"
                  style={{ animationDelay: "0.2s" }}
                >
                  <ChevronRight className="w-3 h-3 text-gray-500" />
                </div>
              </div>
            </div>
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
              onDrag={(e, info) => {
                const sliderElement = (e.target as HTMLElement).parentElement!;
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
              className={`absolute top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl shadow-xl flex items-center justify-center cursor-grab active:cursor-grabbing z-20 hover:shadow-2xl transition-all duration-200 hover:scale-110 active:scale-95 ${
                sliderPosition > 120
                  ? "bg-gradient-to-br from-green-500 to-emerald-600 border-2 border-green-400"
                  : "bg-white border-2 border-gray-300 shadow-lg"
              }`}
            >
              <Trees
                className={`w-6 h-6 ${
                  sliderPosition > 120 ? "text-white" : "text-green-600"
                }`}
              />
            </motion.div>
            {sliderPosition > 10 && (
              <div
                className={`absolute left-0 top-0 h-full rounded-xl transition-all duration-200 ${
                  sliderPosition > 120
                    ? "bg-gradient-to-r from-green-500 via-emerald-600 to-teal-600 shadow-inner"
                    : "bg-gradient-to-r from-blue-500 via-blue-600 to-cyan-600 shadow-sm"
                }`}
                style={{
                  width: `${sliderPosition + 4}px`,
                  opacity: sliderPosition > 10 ? 1 : 0,
                }}
              />
            )}
          </div>
          {/* Swipe indicator text - positioned below the button */}
          <span
            className="text-[9px] sm:text-[10px] font-semibold text-white/80 z-10 transition-opacity duration-300 tracking-wider uppercase"
            style={{ opacity: sliderPosition > 15 ? 0 : 1 }}
          >
            Swipe →
          </span>
        </div>
      </div>
    </section>
  );
}
