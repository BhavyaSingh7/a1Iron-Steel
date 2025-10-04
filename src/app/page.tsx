"use client";

import { motion, useScroll } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Grip,
  Circle,
  Square,
  AlignRight,
  Minus,
  Maximize,
  ArrowUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import React, { useState, useEffect, useCallback } from "react";
import Logo from "@/components/Logo";
import Typewriter from "@/components/Typewriter";
import CounterAnimation from "@/components/CounterAnimation";
import Mission from "@/components/Mission";
import Image from "next/image";

// Product type definition
type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  details: string;
  specifications: string[];
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, scrollOffset: 0 });
  const [velocity, setVelocity] = useState(0);
  const [lastMoveTime, setLastMoveTime] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [videoPhase, setVideoPhase] = useState<
    "fullscreen" | "minimizing" | "minimized"
  >("fullscreen");
  const [typewriterComplete, setTypewriterComplete] = useState(false);

  // Helper function to get selected product
  const getSelectedProduct = () => {
    return products.find((p) => p.id === selectedProduct);
  };

  // Products data for 3D carousel
  const products = [
    {
      id: 1,
      title: "TMT Bars",
      description:
        "Thermo Mechanical Treatment Steel bars used in Earthquake-resistant construction",
      image:
        "https://images.unsplash.com/photo-1606229365485-67a3c44f3b4a?q=80&w=1600&auto=format&fit=crop",
      icon: Grip,
      details:
        "High-strength steel bars with superior bonding properties, ideal for reinforced concrete structures. Features excellent ductility and weldability.",
      specifications: [
        "Grade: Fe500D",
        "Diameter: 8mm - 32mm",
        "Length: 12m",
        "Standards: IS 1786",
      ],
    },
    {
      id: 2,
      title: "5.5MM Wire Rod",
      description: "A low-carbon general-purpose manufacturing wire",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
      icon: Circle,
      details:
        "Versatile wire rod perfect for various manufacturing applications including wire drawing, mesh production, and general construction.",
      specifications: [
        "Grade: SAE 1008",
        "Diameter: 5.5mm",
        "Surface: Bright",
        "Standards: ASTM A510",
      ],
    },
    {
      id: 3,
      title: "Hot Rolled Strip",
      description: "High-strength hot-rolled construction material",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
      icon: Square,
      details:
        "Durable hot-rolled steel strip with excellent formability and strength, suitable for structural applications and manufacturing.",
      specifications: [
        "Grade: SAE 1010",
        "Thickness: 1.5mm - 6mm",
        "Width: 25mm - 200mm",
        "Standards: ASTM A1011",
      ],
    },
    {
      id: 4,
      title: "V Angle",
      description: "Versatile stainless steel structural connector",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
      icon: AlignRight,
      details:
        "Precision-engineered V-angle steel for structural connections and framework applications with superior strength and durability.",
      specifications: [
        "Grade: SAE 1020",
        "Size: 25x25mm - 100x100mm",
        "Thickness: 3mm - 12mm",
        "Standards: ASTM A36",
      ],
    },
    {
      id: 5,
      title: "Flat Bar",
      description: "Steel flat bar for versatile industrial applications",
      image:
        "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1600&auto=format&fit=crop",
      icon: Minus,
      details:
        "High-quality flat steel bars ideal for brackets, supports, and structural components with excellent machinability.",
      specifications: [
        "Grade: SAE 1018",
        "Width: 10mm - 200mm",
        "Thickness: 3mm - 50mm",
        "Standards: ASTM A108",
      ],
    },
    {
      id: 6,
      title: "C Channel",
      description: "Corrosion-resistant hot-dip galvanized channel steel",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
      icon: Maximize,
      details:
        "Structural C-channel steel with hot-dip galvanized coating for superior corrosion resistance and long-term durability.",
      specifications: [
        "Grade: SAE 1020",
        "Size: 50x25mm - 200x75mm",
        "Thickness: 2mm - 8mm",
        "Coating: Hot-dip galvanized",
      ],
    },
  ];

  // Create circular products array (duplicate for seamless looping)
  const circularProducts = [...products, ...products, ...products];

  useEffect(() => {
    setIsClient(true);
    // Initialize scroll offset to middle set for circular behavior
    const itemWidth = 256 + 24; // Responsive calculation
    setScrollOffset(-products.length * itemWidth);

    return () => {};
  }, [products.length]);

  // Trigger video vanishing when typewriter completes
  useEffect(() => {
    if (typewriterComplete) {
      const timer1 = setTimeout(() => {
        setVideoPhase("minimizing");
      }, 500); // Start minimizing 0.5 seconds after typewriter completes

      const timer2 = setTimeout(() => {
        setVideoPhase("minimized");
      }, 3000); // Complete minimization after 3 seconds (text covers video)

      return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
      };
    }
  }, [typewriterComplete]);

  useEffect(() => {
    if (!isClient) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isClient]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Drag controls for carousel
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({
      x: e.clientX,
      scrollOffset: scrollOffset,
    });
    setVelocity(0);
    setLastMoveTime(Date.now());
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - dragStart.x;
    const newOffset = dragStart.scrollOffset + deltaX;

    // Apply circular bounds to prevent white spaces
    const itemWidth = 256 + 24; // Responsive calculation
    const totalWidth = products.length * itemWidth;
    const maxOffset = itemWidth; // Allow one item beyond start
    const minOffset = -totalWidth * 2 - itemWidth; // Allow one item beyond end

    const clampedOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));
    setScrollOffset(clampedOffset);

    // Calculate velocity for momentum
    const currentTime = Date.now();
    const timeDelta = currentTime - lastMoveTime;
    if (timeDelta > 0) {
      const newVelocity = deltaX / timeDelta;
      setVelocity(newVelocity);
    }
    setLastMoveTime(currentTime);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Apply momentum scrolling
    if (Math.abs(velocity) > 0.1) {
      const momentum = velocity * 100; // Adjust momentum strength
      const targetOffset = scrollOffset + momentum;

      // Apply circular bounds to momentum
      const itemWidth = 256 + 24; // Responsive calculation
      const totalWidth = products.length * itemWidth;
      const maxOffset = itemWidth;
      const minOffset = -totalWidth * 2 - itemWidth;

      const boundedOffset = Math.max(
        minOffset,
        Math.min(maxOffset, targetOffset)
      );

      // Smooth animation to final position
      const startOffset = scrollOffset;
      const startTime = Date.now();
      const duration = 300; // milliseconds

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        const currentOffset =
          startOffset + (boundedOffset - startOffset) * easeOut;
        setScrollOffset(currentOffset);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }

    setVelocity(0);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
  };

  // Touch support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    setDragStart({
      x: touch.clientX,
      scrollOffset: scrollOffset,
    });
    setVelocity(0);
    setLastMoveTime(Date.now());
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;

    e.preventDefault(); // Prevent scrolling

    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStart.x;
    const newOffset = dragStart.scrollOffset + deltaX;

    // Calculate bounds
    const maxOffset = 0;
    const carouselWidth = products.length * 256 + (products.length - 1) * 24;
    const visibleWidth = window.innerWidth - 128; // Account for 64px padding on each side
    const minOffset = visibleWidth - carouselWidth;

    // Apply bounds
    const clampedOffset = Math.max(minOffset, Math.min(maxOffset, newOffset));
    setScrollOffset(clampedOffset);

    // Calculate velocity for momentum
    const currentTime = Date.now();
    const timeDelta = currentTime - lastMoveTime;
    if (timeDelta > 0) {
      const newVelocity = deltaX / timeDelta;
      setVelocity(newVelocity);
    }
    setLastMoveTime(currentTime);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    setIsDragging(false);

    // Apply momentum scrolling
    if (Math.abs(velocity) > 0.1) {
      const momentum = velocity * 100; // Adjust momentum strength
      const targetOffset = scrollOffset + momentum;

      // Apply circular bounds to momentum
      const itemWidth = 256 + 24; // Responsive calculation
      const totalWidth = products.length * itemWidth;
      const maxOffset = itemWidth;
      const minOffset = -totalWidth * 2 - itemWidth;

      const boundedOffset = Math.max(
        minOffset,
        Math.min(maxOffset, targetOffset)
      );

      // Smooth animation to final position
      const startOffset = scrollOffset;
      const startTime = Date.now();
      const duration = 300; // milliseconds

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easeOut = 1 - Math.pow(1 - progress, 3); // ease-out cubic

        const currentOffset =
          startOffset + (boundedOffset - startOffset) * easeOut;
        setScrollOffset(currentOffset);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }

    setVelocity(0);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Calculate current index based on scroll offset
  const calculateCurrentIndex = useCallback(
    (offset: number) => {
      const itemWidth = 256 + 24; // Responsive calculation // width + gap
      const index = Math.round(-offset / itemWidth);
      return ((index % products.length) + products.length) % products.length;
    },
    [products.length]
  );

  // Update current index when scroll offset changes
  useEffect(() => {
    setCurrentIndex(calculateCurrentIndex(scrollOffset));
  }, [scrollOffset, calculateCurrentIndex]);

  // Handle circular wrapping
  const handleCircularWrap = useCallback(() => {
    const itemWidth = 256 + 24; // Responsive calculation
    const totalWidth = products.length * itemWidth;

    // If we're at the beginning (first set), jump to middle set
    if (scrollOffset > -itemWidth) {
      setScrollOffset(scrollOffset - totalWidth);
    }
    // If we're at the end (third set), jump to middle set
    else if (scrollOffset < -totalWidth * 2) {
      setScrollOffset(scrollOffset + totalWidth);
    }
  }, [scrollOffset, products.length]);

  // Circular arrow navigation functions
  const navigateLeft = useCallback(() => {
    const itemWidth = 256 + 24; // Responsive calculation // width + gap
    const newOffset = scrollOffset + itemWidth;

    // Smooth animation to target position
    const startOffset = scrollOffset;
    const startTime = Date.now();
    const duration = 300;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentOffset = startOffset + (newOffset - startOffset) * easeOut;
      setScrollOffset(currentOffset);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Check for circular wrap after animation completes
        setTimeout(handleCircularWrap, 50);
      }
    };

    requestAnimationFrame(animate);
  }, [scrollOffset, handleCircularWrap]);

  const navigateRight = useCallback(() => {
    const itemWidth = 256 + 24; // Responsive calculation // width + gap
    const newOffset = scrollOffset - itemWidth;

    // Smooth animation to target position
    const startOffset = scrollOffset;
    const startTime = Date.now();
    const duration = 300;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentOffset = startOffset + (newOffset - startOffset) * easeOut;
      setScrollOffset(currentOffset);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        // Check for circular wrap after animation completes
        setTimeout(handleCircularWrap, 50);
      }
    };

    requestAnimationFrame(animate);
  }, [scrollOffset, handleCircularWrap]);

  // Navigate to specific product by index
  const navigateToProduct = (index: number) => {
    const itemWidth = 256 + 24; // Responsive calculation // width + gap
    const targetOffset = -(products.length + index) * itemWidth; // Navigate to middle set

    // Smooth animation to target position
    const startOffset = scrollOffset;
    const startTime = Date.now();
    const duration = 300;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);

      const currentOffset =
        startOffset + (targetOffset - startOffset) * easeOut;
      setScrollOffset(currentOffset);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        navigateLeft();
      } else if (e.key === "ArrowRight") {
        navigateRight();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [scrollOffset, navigateLeft, navigateRight]);

  // Handle circular wrapping after drag ends
  useEffect(() => {
    if (!isDragging) {
      const timer = setTimeout(handleCircularWrap, 100);
      return () => clearTimeout(timer);
    }
  }, [isDragging, handleCircularWrap]);

  // Product Modal Component
  const ProductModal = ({
    product,
    onClose,
  }: {
    product: Product;
    onClose: () => void;
  }) => (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {product.title}
            </h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="mb-4">
            <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center mb-4">
              <div className="text-6xl text-gray-400">
                {React.createElement(product.icon)}
              </div>
            </div>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>
          <div className="flex gap-4">
            <button
              onClick={onClose}
              className="flex-1 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors"
            >
              Close
            </button>
            <button className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative" style={{ scrollBehavior: "smooth" }}>
      {/* Navigation - Fixed */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{
          y: videoPhase === "minimized" ? 0 : -100,
          opacity: videoPhase === "minimized" ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 20,
          duration: 0.8,
        }}
        className="fixed top-0 w-full z-50 bg-white/10 backdrop-blur-2xl border-b border-white/20 shadow-2xl transition-all duration-500 ease-out"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-18 lg:h-20">
            {/* Logo on the left - Bigger and more prominent */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <div className="scale-110">
                <Logo />
              </div>
            </motion.div>

            {/* Navigation items on the right */}
            <div className="hidden sm:flex space-x-1 font-medium tracking-wide">
              {["home", "about", "products", "contact"].map(
                (section, index) => (
                  <motion.button
                    key={section}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      delay: index * 0.1 + 0.3,
                      type: "spring",
                      stiffness: 100,
                      damping: 20,
                    }}
                    onClick={() => scrollToSection(section)}
                    className="capitalize px-6 py-3 rounded-full transition-all duration-300 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 text-orange-500 hover:text-orange-400 hover:bg-white/10 focus-visible:ring-orange-400 focus-visible:ring-offset-transparent"
                    whileHover={{
                      scale: 1.05,
                      transition: {
                        type: "spring",
                        stiffness: 400,
                        damping: 25,
                      },
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {section === "home" ? "Home" : section}
                  </motion.button>
                )
              )}
            </div>

            {/* Mobile Navigation - Hamburger menu for small screens */}
            <div className="sm:hidden">
              <button className="text-orange-500 hover:text-orange-400 p-2">
                <svg
                  className="w-6 h-6"
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
        </div>
      </motion.nav>

      {/* Full-screen sections container */}
      <div className="relative" style={{ scrollSnapType: "y mandatory" }}>
        {/* Section 1: Hero with Video Animation */}
        <motion.section
          id="home"
          className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
          style={{
            background:
              videoPhase === "fullscreen"
                ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
                : "linear-gradient(135deg, #fefefe 0%, #f8f6f0 50%, #f5f3ed 100%)",
            scrollSnapAlign: "start",
          }}
          animate={{
            background:
              videoPhase === "fullscreen"
                ? "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)"
                : "linear-gradient(135deg, #fefefe 0%, #f8f6f0 50%, #f5f3ed 100%)",
          }}
          transition={{
            duration: 2,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          {/* Full Screen Video */}
          <motion.div
            initial={{ scale: 1, opacity: 1, x: 0, y: 0 }}
            animate={{
              scale:
                videoPhase === "fullscreen"
                  ? 1
                  : videoPhase === "minimizing"
                  ? 0.8
                  : 0,
              opacity:
                videoPhase === "fullscreen"
                  ? 1
                  : videoPhase === "minimizing"
                  ? 0.7
                  : 0,
              x: 0, // Keep centered
              y: 0, // Keep centered
            }}
            transition={{
              duration: videoPhase === "minimizing" ? 2.5 : 1.0,
              ease:
                videoPhase === "minimizing" ? [0.4, 0.0, 0.2, 1] : "easeOut",
            }}
            className={`absolute ${
              videoPhase === "fullscreen"
                ? "inset-0 w-full h-full"
                : videoPhase === "minimizing"
                ? "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-auto aspect-video rounded-lg overflow-hidden shadow-2xl"
                : "top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-0 h-0"
            }`}
          >
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="./bg-video.mp4" type="video/mp4" />
            </video>

            {/* Video Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-gray-900/50 to-black/70" />
          </motion.div>

          {/* A1 IRON Text - Appears at top during video */}
          <motion.div
            initial={{ opacity: 1, scale: 1, y: 100 }}
            animate={{
              opacity:
                videoPhase === "fullscreen"
                  ? 1
                  : videoPhase === "minimizing"
                  ? 1
                  : videoPhase === "minimized"
                  ? 1
                  : 0,
              scale:
                videoPhase === "fullscreen"
                  ? 1
                  : videoPhase === "minimizing"
                  ? 1.1
                  : videoPhase === "minimized"
                  ? 1.2
                  : 1,
              y:
                videoPhase === "fullscreen"
                  ? 0
                  : videoPhase === "minimizing"
                  ? -100
                  : videoPhase === "minimized"
                  ? -200
                  : 50,
            }}
            transition={{
              duration: 1.8,
              delay: videoPhase === "minimizing" ? 1.2 : 0,
              ease: [0.68, -0.55, 0.265, 1.55], // Bounce effect
            }}
            className={`relative z-10 ${
              videoPhase === "fullscreen"
                ? "absolute top-16 sm:top-20 left-1/2 transform -translate-x-1/2 px-4"
                : "text-center px-4"
            }`}
          >
            <motion.h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-bold leading-tight ${
                videoPhase === "fullscreen" ? "text-white" : "text-gray-800"
              }`}
              style={{
                textShadow:
                  videoPhase === "fullscreen"
                    ? "0 0 30px rgba(249, 115, 22, 0.3), 0 0 60px rgba(249, 115, 22, 0.2)"
                    : "0 0 20px rgba(0, 0, 0, 0.1)",
              }}
            >
              {videoPhase === "fullscreen" ? (
                <Typewriter
                  text="A1 IRON"
                  speedMs={100}
                  startDelayMs={1000}
                  className="block"
                  caretClassName="inline-block w-[0.05em] ml-2 align-baseline bg-orange-400"
                  onComplete={() => setTypewriterComplete(true)}
                />
              ) : (
                <>
                  A1 IRON <span className="text-orange-500">& STEEL</span>
                </>
              )}
            </motion.h1>
          </motion.div>

          {/* Professional Steel Industry Visualization - Appears after video vanishes */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: videoPhase === "minimized" ? 1 : 0,
              y: videoPhase === "minimized" ? 0 : 50,
            }}
            transition={{
              duration: 1.5,
              delay: videoPhase === "minimized" ? 0.8 : 0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute top-2/5 sm:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
          >
            {/* Professional Steel Industry Design */}
            <div className="relative w-20 h-20 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 xl:w-80 xl:h-80">
              {/* Central Company Symbol */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 sm:w-18 sm:h-18 bg-gradient-to-br from-orange-500 to-orange-700 opacity-90 rounded-lg shadow-lg"
              />

              {/* Steel Bars - Professional Representation */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-8 left-8 w-3 h-24 bg-gradient-to-b from-gray-600 to-gray-800 opacity-80 shadow-md hidden sm:block"
              />

              <motion.div
                animate={{
                  y: [0, 6, 0],
                  opacity: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-12 right-12 w-3 h-20 bg-gradient-to-b from-orange-500 to-orange-700 opacity-75 shadow-md hidden sm:block"
              />

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-16 left-16 w-3 h-28 bg-gradient-to-b from-gray-500 to-gray-700 opacity-70 shadow-md hidden md:block"
              />

              {/* Steel Plates - Industrial Look */}
              <motion.div
                animate={{
                  rotate: [0, 2, 0],
                  scale: [1, 1.02, 1],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-20 left-1/2 transform -translate-x-1/2 w-16 h-10 bg-gradient-to-br from-gray-400 to-gray-600 opacity-80 shadow-lg hidden sm:block"
              />

              <motion.div
                animate={{
                  rotate: [0, -1, 0],
                  scale: [1, 0.98, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.5,
                }}
                className="absolute bottom-20 right-1/2 transform translate-x-1/2 w-12 h-8 bg-gradient-to-br from-orange-400 to-orange-600 opacity-75 shadow-lg hidden sm:block"
              />

              {/* Steel Beams - Structural Elements */}
              <motion.div
                animate={{
                  y: [0, -5, 0],
                  x: [0, 2, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 left-20 w-20 h-4 bg-gradient-to-r from-gray-600 to-gray-800 opacity-80 shadow-md hidden md:block"
              />

              <motion.div
                animate={{
                  y: [0, 4, 0],
                  x: [0, -1, 0],
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-12 right-20 w-16 h-4 bg-gradient-to-r from-orange-500 to-orange-700 opacity-75 shadow-md hidden md:block"
              />

              {/* Professional Accent Elements */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.6, 1, 0.6],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/3 left-12 w-4 h-4 bg-gradient-to-br from-orange-500 to-orange-700 opacity-80 shadow-sm hidden sm:block"
              />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/3 right-12 w-3 h-3 bg-gradient-to-br from-gray-600 to-gray-800 opacity-75 shadow-sm hidden sm:block"
              />

              {/* Subtle Connection Lines */}
              <motion.div
                animate={{
                  scaleX: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-1/2 left-8 w-24 h-0.5 bg-gradient-to-r from-gray-500 to-transparent hidden sm:block"
              />

              <motion.div
                animate={{
                  scaleY: [1, 1.1, 1],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute bottom-1/2 right-8 w-0.5 h-20 bg-gradient-to-b from-orange-500 to-transparent hidden sm:block"
              />

              {/* Professional Glow Effects */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-16 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-orange-400 to-orange-600 opacity-50 rounded-full hidden sm:block"
                style={{
                  boxShadow: "0 0 15px rgba(249, 115, 22, 0.3)",
                }}
              />

              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute bottom-16 right-1/2 transform translate-x-1/2 w-4 h-4 bg-gradient-to-br from-gray-500 to-gray-700 opacity-40 rounded-full hidden sm:block"
                style={{
                  boxShadow: "0 0 10px rgba(107, 114, 128, 0.2)",
                }}
              />

              {/* Quality Assurance Indicators */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  opacity: [0.4, 0.7, 0.4],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute top-8 right-8 w-2 h-2 bg-orange-500 opacity-60 rounded-full hidden sm:block"
              />

              <motion.div
                animate={{
                  rotate: [0, -360],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "linear",
                  delay: 1,
                }}
                className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-gray-600 opacity-50 rounded-full hidden sm:block"
              />
            </div>
          </motion.div>

          {/* Expanded Content - Only visible after minimization */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: videoPhase === "minimized" ? 1 : 0,
              y: videoPhase === "minimized" ? 0 : 50,
            }}
            transition={{
              duration: 1.5,
              delay: videoPhase === "minimized" ? 1 : 0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light text-gray-600 mb-2 sm:mb-4">
              The Metal That Builds a Nation
            </motion.h2>

            <motion.p className="text-sm sm:text-base md:text-lg text-gray-500 mb-4 sm:mb-6 md:mb-8 leading-relaxed">
              To enhance competitiveness, we are transitioning to{" "}
              <span className="text-orange-500 font-semibold">
                carbon reduced manufacturing processes
              </span>{" "}
              and realigning businesses.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: videoPhase === "minimized" ? 1 : 0,
                y: videoPhase === "minimized" ? 0 : 20,
              }}
              transition={{
                duration: 1.2,
                delay: videoPhase === "minimized" ? 1.8 : 0,
                ease: [0.25, 0.1, 0.25, 1],
              }}
              className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 lg:gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => scrollToSection("products")}
                className="px-6 sm:px-8 py-2 sm:py-3 bg-orange-500 text-white font-semibold rounded-full hover:bg-orange-600 transition-colors duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Products
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("about")}
                className="px-6 sm:px-8 py-2 sm:py-3 border-2 border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300 text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator - Only visible after minimization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: videoPhase === "minimized" ? 1 : 0,
              y: videoPhase === "minimized" ? 0 : 20,
            }}
            transition={{
              duration: 1,
              delay: videoPhase === "minimized" ? 2.5 : 0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            className="absolute bottom-2 sm:bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={
                videoPhase === "minimized" ? { y: [0, 10, 0] } : { y: 0 }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="flex flex-col items-center space-y-2"
            >
              <motion.div className="w-6 h-6 border-2 border-gray-400 rounded-full flex items-center justify-center">
                <motion.div
                  className="w-2 h-2 bg-gray-400 rounded-full"
                  animate={
                    videoPhase === "minimized"
                      ? {
                          backgroundColor: [
                            "rgba(107, 114, 128, 1)",
                            "rgba(249, 115, 22, 1)",
                            "rgba(107, 114, 128, 1)",
                          ],
                        }
                      : { backgroundColor: "rgba(107, 114, 128, 1)" }
                  }
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </motion.div>
              <motion.p
                className="text-gray-500 text-sm font-light"
                animate={
                  videoPhase === "minimized"
                    ? {
                        opacity: [0.5, 1, 0.5],
                      }
                    : { opacity: 0.5 }
                }
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                Scroll
              </motion.p>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Section 2: About Us */}
        <motion.section
          id="about"
          className="relative min-h-screen flex items-center justify-center overflow-y-auto py-8 sm:py-12 lg:py-16"
          style={{
            background:
              "linear-gradient(135deg, #fefefe 0%, #f8f6f0 50%, #f5f3ed 100%)",
            scrollSnapAlign: "start",
          }}
        >
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-6 sm:mb-8 md:mb-12"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base md:text-lg text-gray-600 mb-2 sm:mb-3 md:mb-4"
              >
                // ABOUT US
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6"
              >
                ABOUT US
              </motion.h2>
            </motion.div>

            {/* Single Column Layout - Centered */}
            <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
              {/* Company Introduction */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-center mb-6 sm:mb-8 md:mb-12"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border border-gray-100"
                >
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
                  >
                    <span className="text-orange-500 font-semibold text-sm sm:text-base md:text-lg lg:text-xl">
                      A1 Iron & Steel Rwanda Ltd
                    </span>{" "}
                    is dedicated to quality and innovation in the iron and steel
                    industry. With decades of experience, we provide
                    high-quality, precision-engineered steel solutions for
                    construction, engineering, and infrastructure worldwide. Our
                    passionate team combines advanced technology with
                    traditional craftsmanship, delivering steel products known
                    for precision, durability, and sustainability.
                  </motion.p>
                </motion.div>
              </motion.div>

              {/* Leadership Excellence Components */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-6 sm:space-y-8 md:space-y-12"
              >
                {/* Leadership Excellence Header */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                    Leadership Excellence
                  </h3>
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "80px" }}
                    transition={{ duration: 1, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto mb-2 sm:mb-3 md:mb-4"
                  />
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                    className="text-orange-500 font-medium text-sm sm:text-base md:text-lg"
                  >
                    Exemplary leadership that transforms challenges into
                    opportunities
                  </motion.p>
                </motion.div>

                {/* Leadership Components Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
                  {/* Component 1: Vision & Strategy */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                      Vision
                    </h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Inspiring teams and driving innovation for excellence
                    </p>
                  </motion.div>

                  {/* Component 2: Team Excellence */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                      </svg>
                    </motion.div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                      Team
                    </h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Industry-leading performance and customer satisfaction
                    </p>
                  </motion.div>

                  {/* Component 3: Integrity & Values */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.2 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                      Integrity
                    </h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Strategic foresight and operational excellence
                    </p>
                  </motion.div>

                  {/* Component 4: Innovation & Growth */}
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 1.4 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto"
                    >
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </motion.div>
                    <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                      Innovation
                    </h4>
                    <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                      Efficient steel production and competitive edge
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Spacing */}
            <div className="h-8 sm:h-12 md:h-16 lg:h-20"></div>
          </div>
        </motion.section>

        {/* Section 3: Mission */}
        <Mission />

        {/* Section 4: Products - Minimalistic Carousel */}
        <motion.section
          id="products"
          className="relative h-screen flex items-center justify-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #fefefe 0%, #f8f6f0 50%, #f5f3ed 100%)",
            scrollSnapAlign: "start",
          }}
        >
          {/* Subtle Background Pattern */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2 }}
            viewport={{ once: true }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 20% 30%, rgba(156, 163, 175, 0.03) 0%, transparent 50%)",
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(circle at 80% 70%, rgba(107, 114, 128, 0.02) 0%, transparent 50%)",
              }}
            />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Title */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-8 sm:mb-12 lg:mb-16"
            >
              <motion.h2
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light text-gray-800 mb-3 sm:mb-4 tracking-tight"
              >
                Our <span className="text-orange-500">Products</span>
              </motion.h2>
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "120px" }}
                transition={{ duration: 1.5, delay: 0.8 }}
                viewport={{ once: true }}
                className="h-px bg-gradient-to-r from-orange-400 to-blue-400 mx-auto mb-4 sm:mb-6"
              />
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                viewport={{ once: true }}
                className="text-sm sm:text-base md:text-lg text-gray-600 font-light tracking-wide"
              >
                Premium Steel Solutions
              </motion.p>
            </motion.div>

            {/* Carousel Container with Navigation */}
            <div className="relative px-2 sm:px-4 md:px-8 lg:px-16">
              {/* Left Arrow */}
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                onClick={navigateLeft}
                className="absolute left-2 sm:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-orange-200 rounded-full flex items-center justify-center text-orange-600 hover:bg-orange-50 hover:border-orange-300 hover:text-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Right Arrow */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                viewport={{ once: true }}
                onClick={navigateRight}
                className="absolute right-2 sm:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center text-blue-600 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.button>

              {/* Drag-Controlled Carousel */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] overflow-hidden cursor-grab active:cursor-grabbing select-none"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                {/* Straight Line Container */}
                <div
                  className="flex gap-4 sm:gap-6 md:gap-8 h-full"
                  style={{
                    transform: `translateX(${scrollOffset}px)`,
                    transition: isDragging ? "none" : "transform 0.3s ease-out",
                  }}
                >
                  {circularProducts.map((product, index) => (
                    <div
                      key={`${product.id}-${index}`}
                      className="flex-shrink-0 w-48 sm:w-64 md:w-72 lg:w-80 cursor-pointer group"
                      onClick={() => setSelectedProduct(product.id)}
                    >
                      <div className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 hover:shadow-md hover:border-orange-200 transition-all duration-300">
                        {/* Product Image */}
                        <div className="relative h-40 sm:h-48 md:h-56 w-full overflow-hidden bg-gray-50">
                          <Image
                            src={product.image}
                            alt={product.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent" />

                          {/* Product Icon */}
                          <div className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-gray-100 group-hover:border-orange-200 group-hover:bg-orange-50 transition-all duration-300">
                            <product.icon className="w-4 h-4 text-gray-700 group-hover:text-orange-600 transition-colors duration-300" />
                          </div>
                        </div>

                        {/* Product Info */}
                        <div className="p-3 sm:p-4 md:p-6">
                          <h3 className="text-sm sm:text-base md:text-lg font-medium text-gray-900 mb-2 sm:mb-3 tracking-tight">
                            {product.title}
                          </h3>
                          <p className="text-gray-600 text-xs sm:text-sm leading-relaxed font-light">
                            {product.description}
                          </p>

                          {/* Subtle divider */}
                          <div className="mt-2 sm:mt-3 md:mt-4 pt-2 sm:pt-3 md:pt-4 border-t border-gray-100 group-hover:border-orange-200 transition-colors duration-300">
                            <span className="text-xs text-gray-500 font-medium tracking-wide uppercase group-hover:text-orange-600 transition-colors duration-300">
                              Learn More
                            </span>
                          </div>
                        </div>

                        {/* Minimal hover effect */}
                        <div className="absolute inset-0 bg-gray-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Mobile Navigation Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.3 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-4 sm:hidden mt-4"
            >
              <motion.button
                onClick={navigateLeft}
                className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-orange-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={navigateRight}
                className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </motion.div>

            {/* Carousel Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.5 }}
              viewport={{ once: true }}
              className="flex justify-center space-x-2 mt-4 sm:mt-6 lg:mt-8"
            >
              {products.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => navigateToProduct(index)}
                  className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-300 hover:bg-orange-300"
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </motion.div>

            {/* Instructions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2 }}
              viewport={{ once: true }}
              className="text-center mt-3 sm:mt-4 md:mt-6 px-4"
            >
              <p className="text-gray-500 text-xs sm:text-sm font-light tracking-wide leading-relaxed">
                Drag to navigate • Use arrow buttons • Click dots to jump •
                Click on any product to learn more
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Section 5: Contact */}
        <motion.section
          id="contact"
          className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-16"
          style={{
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
            scrollSnapAlign: "start",
          }}
        >
          {/* Animated Background Elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="absolute inset-0 overflow-hidden"
          >
            {/* Gradient Orbs */}
            <motion.div
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-20 left-20 w-48 h-48 bg-gradient-to-r from-orange-500/15 to-orange-600/15 rounded-full blur-3xl"
            />
            <motion.div
              animate={{
                x: [0, -40, 0],
                y: [0, 40, 0],
                scale: [1, 0.9, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2,
              }}
              className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"
            />
          </motion.div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex flex-col justify-center">
            {/* Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-3 sm:mb-4 md:mb-6"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-block mb-2 sm:mb-3 md:mb-4"
              >
                <span className="text-orange-500 font-semibold text-sm sm:text-base md:text-lg tracking-wider">
                  // GET IN TOUCH
                </span>
              </motion.div>
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-white mb-2 sm:mb-3 md:mb-4"
                style={{
                  textShadow: `
                    0 0 20px rgba(249, 115, 22, 0.3),
                    0 0 40px rgba(249, 115, 22, 0.2),
                    0 0 60px rgba(249, 115, 22, 0.1)
                  `,
                }}
              >
                Let&apos;s Connect
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
              >
                Ready to work with us? Let&apos;s discuss your project and bring
                your vision to life
              </motion.p>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-1 space-y-2 sm:space-y-3"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center lg:text-left mb-2 sm:mb-3 md:mb-4"
                >
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">
                    Contact Information
                  </h3>
                  <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto lg:mx-0"></div>
                </motion.div>

                {[
                  {
                    icon: Phone,
                    title: "Phone",
                    details: ["+250 790 060 555", "+250 795 555 555"],
                    description: "Call us for immediate assistance",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    details: ["a1steelrwanda@gmail.com"],
                    description: "Send us your inquiries",
                  },
                  {
                    icon: MapPin,
                    title: "Address",
                    details: [
                      "2nd Floor, BPR Tower, Kigali",
                      "Musanze Industrial Park",
                    ],
                    description: "Visit our locations",
                  },
                ].map((contact, index) => (
                  <motion.div
                    key={contact.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-lg sm:rounded-xl p-2 sm:p-3 shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20 hover:border-orange-500/30">
                      <div className="flex items-start space-x-3 sm:space-x-4">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg"
                        >
                          <contact.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <h4 className="font-bold text-white mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">
                            {contact.title}
                          </h4>
                          <p className="text-gray-300 text-xs mb-0.5 sm:mb-1">
                            {contact.description}
                          </p>
                          {contact.details.map((detail, idx) => (
                            <p key={idx} className="text-gray-200 font-medium">
                              {detail}
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="lg:col-span-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-2xl border border-white/20"
                  style={{
                    boxShadow: `
                      0 0 30px rgba(249, 115, 22, 0.1),
                      0 0 60px rgba(249, 115, 22, 0.05),
                      inset 0 1px 0 rgba(255, 255, 255, 0.1)
                    `,
                  }}
                >
                  <div className="mb-2 sm:mb-3 md:mb-4">
                    <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-1 sm:mb-2">
                      Send us a Message
                    </h3>
                    <p className="text-gray-300 text-xs">
                      Fill out the form below and we&apos;ll get back to you
                      within 24 hours
                    </p>
                  </div>

                  <form className="space-y-2 sm:space-y-3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-white font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">
                          Your Name
                        </label>
                        <input
                          type="text"
                          placeholder="Enter your full name"
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 text-xs sm:text-sm"
                          required
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-white font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">
                          Your Email
                        </label>
                        <input
                          type="email"
                          placeholder="Enter your email address"
                          className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 text-xs sm:text-sm"
                          required
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-white font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 text-xs sm:text-sm"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-white font-medium mb-0.5 sm:mb-1 text-xs sm:text-sm">
                        Your Message
                      </label>
                      <textarea
                        placeholder="Tell us about your project requirements..."
                        rows={2}
                        className="w-full px-2 sm:px-3 py-1.5 sm:py-2 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 resize-none text-xs sm:text-sm"
                        required
                      ></textarea>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.7 }}
                      viewport={{ once: true }}
                      className="pt-1 sm:pt-2"
                    >
                      <motion.button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-1.5 sm:py-2 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        style={{
                          boxShadow: "0 0 30px rgba(249, 115, 22, 0.3)",
                        }}
                      >
                        <span className="flex items-center justify-center space-x-2">
                          <span>Send Message</span>
                          <motion.svg
                            className="w-4 h-4 sm:w-5 sm:h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </motion.svg>
                        </span>
                      </motion.button>
                    </motion.div>
                  </form>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>
      </div>

      {/* Product Modal */}
      {selectedProduct && getSelectedProduct() && (
        <ProductModal
          product={getSelectedProduct()!}
          onClose={() => setSelectedProduct(null)}
        />
      )}

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
