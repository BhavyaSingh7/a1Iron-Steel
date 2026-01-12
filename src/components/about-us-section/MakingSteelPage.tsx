"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ArrowLeft,
  X,
  Factory,
  Flame,
  Droplets,
  Zap,
  Cog,
  CheckCircle,
  ArrowRight,
  Play,
  Pause,
  Package,
  ArrowDown,
  ArrowRight as ArrowRightIcon,
  Circle,
} from "lucide-react";

interface MakingSteelPageProps {
  onClose?: () => void;
}

interface ProcessStep {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDesc: string;
  color: string;
  temperature?: string;
  visualData?: {
    particles?: number;
    flow?: string;
  };
}

export default function MakingSteelPage({ onClose }: MakingSteelPageProps) {
  const router = useRouter();
  const [activeStep, setActiveStep] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isImageZoomed, setIsImageZoomed] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [showDetails, setShowDetails] = useState<number | null>(null);

  const handleClose = () => {
    // Use window.location for immediate navigation with skipIntro parameter
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/?skipIntro=true`;
    if (onClose) {
      onClose();
    }
  };

  const processes: ProcessStep[] = [
    {
      id: 1,
      icon: Package,
      title: "Raw Materials (RM)",
      shortDesc: "Ore • Coal • Dolomite",
      color: "from-blue-500 to-blue-700",
      temperature: "Ambient",
      visualData: { particles: 3, flow: "down" },
    },
    {
      id: 2,
      icon: Factory,
      title: "DR1",
      shortDesc: "Direct Reduced Iron",
      color: "from-orange-500 to-red-600",
      temperature: "1,200°C",
      visualData: { particles: 8, flow: "up" },
    },
    {
      id: 3,
      icon: Zap,
      title: "Induction Furnace + EAF",
      shortDesc: "Electric Arc Furnace",
      color: "from-cyan-500 to-blue-600",
      temperature: "1,600°C",
      visualData: { particles: 5, flow: "circular" },
    },
    {
      id: 4,
      icon: Droplets,
      title: "Liquid Steel",
      shortDesc: "Molten Steel",
      color: "from-purple-500 to-pink-600",
      temperature: "1,500°C",
      visualData: { particles: 6, flow: "down" },
    },
    {
      id: 5,
      icon: Cog,
      title: "Wire Rod 5.5",
      shortDesc: "Final Product",
      color: "from-green-500 to-emerald-600",
      temperature: "Cooled",
      visualData: { particles: 4, flow: "horizontal" },
    },
  ];

  // Disable body scroll when this page is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Track mouse position for 3D effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-advance through steps with speed control
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processes.length);
    }, 4000 / playbackSpeed);

    return () => clearInterval(interval);
  }, [processes.length, isAutoPlaying, playbackSpeed]);

  // Calculate progress percentage
  const progressPercentage = ((activeStep + 1) / processes.length) * 100;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 overflow-y-auto">
      {/* Header */}
      <div className="sticky top-0 bg-black/50 backdrop-blur-md border-b border-white/10 shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleClose}
              className="flex items-center space-x-2 text-white hover:text-[#f1852e] transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-white hover:text-[#f1852e] transition-colors duration-200 rounded-lg hover:bg-white/10"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with Image */}
      <section className="relative py-16 sm:py-20 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black/60" />
        {/* Background Image */}
        <motion.div
          className="absolute inset-0 opacity-30"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            src={`${
              process.env.NEXT_PUBLIC_BASE_PATH || ""
            }/making-of-a-steel/image.png`}
            alt="Steel Manufacturing Process"
            fill
            className="object-cover"
            quality={75}
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/80" />
        </motion.div>
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
              Our Manufacturing
            </span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Visual Journey Through Our Manufacturing Process
          </motion.p>
          {/* Interactive Controls */}
          <motion.div
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {/* Play/Pause Control */}
            <motion.button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-200 group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isAutoPlaying ? (
                <>
                  <Pause className="w-5 h-5" />
                  <span>Pause</span>
                </>
              ) : (
                <>
                  <Play className="w-5 h-5" />
                  <span>Play</span>
                </>
              )}
            </motion.button>

            {/* Speed Control */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <span className="text-white/70 text-sm">Speed:</span>
              <div className="flex gap-2">
                {[0.5, 1, 1.5, 2].map((speed) => (
                  <button
                    key={speed}
                    onClick={() => setPlaybackSpeed(speed)}
                    className={`px-3 py-1 rounded-lg text-sm font-semibold transition-all ${
                      playbackSpeed === speed
                        ? "bg-orange-500 text-white scale-110"
                        : "bg-white/10 text-white/70 hover:bg-white/20"
                    }`}
                  >
                    {speed}x
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Bar */}
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 min-w-[200px]">
              <span className="text-white/70 text-sm whitespace-nowrap">
                Step {activeStep + 1}/{processes.length}
              </span>
              <div className="flex-1 h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercentage}%` }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Main Manufacturing Process Image Section */}
      <section className="relative py-12 md:py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large Manufacturing Process Image with Interactive Zoom */}
          <motion.div
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 mb-12 md:mb-16 cursor-zoom-in group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ borderColor: "rgba(255,255,255,0.4)" }}
            onClick={() => setIsImageZoomed(!isImageZoomed)}
          >
            <div className={`relative aspect-video w-full transition-all duration-500 ${
              isImageZoomed ? "scale-150" : "scale-100"
            }`}>
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH || ""
                }/making-of-a-steel/image.png`}
                alt="Steel Manufacturing Process - Complete Overview"
                fill
                className="object-contain transition-transform duration-500"
                quality={90}
                priority
                sizes="100vw"
              />
              {/* Zoom Indicator */}
              <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                <p className="text-white text-xs font-semibold">
                  {isImageZoomed ? "Click to zoom out" : "Click to zoom in"}
                </p>
              </div>
              {/* Gradient overlay that changes based on active step */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${processes[activeStep].color} opacity-20`}
                key={activeStep}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2 }}
                transition={{ duration: 0.5 }}
              />
              {/* Process step indicators on image */}
              <div className="absolute inset-0">
                {processes.map((process, index) => {
                  const Icon = process.icon;
                  const isActive = activeStep === index;
                  // Position indicators around the image
                  const positions = [
                    { top: "10%", left: "50%", transform: "translateX(-50%)" }, // Raw Materials
                    { top: "30%", left: "50%", transform: "translateX(-50%)" }, // DR1
                    { top: "50%", left: "50%", transform: "translateX(-50%)" }, // Induction Furnace + EAF
                    { bottom: "25%", left: "25%", transform: "translateX(-50%)" }, // Liquid
                    { bottom: "25%", right: "25%", transform: "translateX(50%)" }, // Wire Rod 5.5
                  ];
                  const position = positions[index] || { top: "50%", left: "50%", transform: "translate(-50%, -50%)" };

                  return (
                    <motion.button
                      key={process.id}
                      onClick={() => {
                        setActiveStep(index);
                        setIsAutoPlaying(false);
                      }}
                      className={`absolute z-20 flex flex-col items-center gap-2 group ${
                        isActive ? "scale-110" : "scale-100 opacity-70"
                      }`}
                      style={{
                        ...position,
                        transform: position.transform || "translate(-50%, -50%)",
                      }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: isActive ? 1 : 0.7, scale: isActive ? 1.1 : 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <motion.div
                        className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-2xl ${
                          isActive
                            ? `bg-gradient-to-br ${process.color}`
                            : "bg-white/20 backdrop-blur-sm"
                        }`}
                        animate={{
                          boxShadow: isActive
                            ? `0 0 30px ${process.color.split(" ")[1]}80, 0 0 60px ${process.color.split(" ")[1]}40`
                            : "0 4px 15px rgba(0,0,0,0.3)",
                        }}
                      >
                        <Icon
                          className={`w-6 h-6 md:w-8 md:h-8 ${
                            isActive ? "text-white" : "text-white/80"
                          }`}
                        />
                      </motion.div>
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/60"
                          animate={{
                            scale: [1, 1.5, 1],
                            opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        />
                      )}
                      <motion.div
                        className="text-center bg-black/70 backdrop-blur-sm px-3 py-1 rounded-lg border border-white/20"
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: isActive ? 1 : 0.8, y: 0 }}
                      >
                        <p className="text-xs md:text-sm font-bold text-white whitespace-nowrap">
                          {process.title}
                        </p>
                        {isActive && process.temperature && (
                          <p className="text-xs text-orange-400 mt-1">
                            {process.temperature}
                          </p>
                        )}
                      </motion.div>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Process Steps Navigation Below Image */}
          <div className="relative">
            {/* Enhanced Connection Lines with Flow Animation */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-2 -translate-y-1/2 z-0">
              <div className="relative h-full">
                {processes.map((_, index) => {
                  if (index === processes.length - 1) return null;
                  const width = 100 / processes.length;
                  return (
                    <motion.div
                      key={`line-${index}`}
                      className="absolute h-2 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500 rounded-full"
                      style={{
                        left: `${index * width}%`,
                        width: `${width}%`,
                      }}
                      initial={{ scaleX: 0, opacity: 0 }}
                      animate={{
                        scaleX: activeStep > index ? 1 : 0.2,
                        opacity: activeStep > index ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      {/* Animated flow effect */}
                      {activeStep > index && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-full"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Process Steps */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 relative z-10">
              {processes.map((process, index) => {
                const IconComponent = process.icon;
                const isActive = activeStep === index;
                const isPast = activeStep > index;

                return (
                  <motion.div
                    key={process.id}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => {
                      setActiveStep(index);
                      setIsAutoPlaying(false); // Pause auto-play when user clicks
                    }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Step Circle with 3D Tilt Effect */}
                    <motion.div
                      className={`relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "scale-125 shadow-2xl"
                          : hoveredStep === index
                          ? "scale-110 opacity-90"
                          : isPast
                          ? "scale-100 opacity-80"
                          : "scale-90 opacity-60"
                      }`}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${
                              process.color.split(" ")[1]
                            }, ${process.color.split(" ")[3]})`
                          : hoveredStep === index
                          ? `linear-gradient(135deg, ${
                              process.color.split(" ")[1]
                            }60, ${process.color.split(" ")[3]}60)`
                          : "rgba(255, 255, 255, 0.1)",
                        transformStyle: "preserve-3d",
                      }}
                      onMouseMove={(e) => {
                        if (hoveredStep === index) {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const x = e.clientX - rect.left - rect.width / 2;
                          const y = e.clientY - rect.top - rect.height / 2;
                          e.currentTarget.style.transform = `perspective(1000px) rotateX(${-y / 10}deg) rotateY(${x / 10}deg) scale(${isActive ? 1.25 : 1.1})`;
                        }
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "";
                      }}
                      }}
                      whileHover={{
                        scale: isActive
                          ? 1.35
                          : hoveredStep === index
                          ? 1.2
                          : 1.15,
                        z: 50,
                      }}
                      whileTap={{ scale: 0.95 }}
                      animate={{
                        boxShadow: isActive
                          ? `0 0 40px ${
                              process.color.split(" ")[1]
                            }90, 0 0 80px ${process.color.split(" ")[1]}50`
                          : hoveredStep === index
                          ? `0 0 20px ${
                              process.color.split(" ")[1]
                            }60, 0 0 40px ${process.color.split(" ")[1]}30`
                          : "0 4px 15px rgba(0,0,0,0.2)",
                        rotate: isActive ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{
                        boxShadow: { duration: 0.3 },
                        rotate: {
                          duration: 4,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        },
                        transform: { duration: 0.1 },
                      }}
                    >
                      <IconComponent
                        className={`w-10 h-10 md:w-12 md:h-12 ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      />

                      {/* Multiple Animated Rings */}
                      {isActive && (
                        <>
                        <motion.div
                            className="absolute inset-0 rounded-full border-2 border-white/60"
                          animate={{
                              scale: [1, 1.4, 1],
                              opacity: [0.6, 0, 0.6],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                          />
                          <motion.div
                            className="absolute inset-0 rounded-full border border-white/40"
                            animate={{
                              scale: [1, 1.6, 1],
                              opacity: [0.4, 0, 0.4],
                            }}
                            transition={{
                              duration: 2.5,
                              repeat: Infinity,
                              ease: "easeInOut",
                              delay: 0.5,
                            }}
                          />
                        </>
                      )}
                      {/* Hover indicator */}
                      {hoveredStep === index && !isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/30"
                          initial={{ scale: 1, opacity: 0 }}
                          animate={{ scale: 1.2, opacity: 0.5 }}
                          exit={{ scale: 1, opacity: 0 }}
                        />
                      )}

                      {/* Step Number */}
                      <div
                        className={`absolute -top-2 -right-2 w-6 h-6 md:w-7 md:h-7 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                          isActive
                            ? "bg-white text-orange-600"
                            : "bg-white/20 text-white/60"
                        }`}
                      >
                        {process.id}
                      </div>
                    </motion.div>

                    {/* Step Info with Enhanced Interactivity */}
                    <div className="text-center">
                      <motion.h3
                        className={`text-sm md:text-base font-bold mb-1 transition-colors duration-300 ${
                          isActive
                            ? "text-white"
                            : hoveredStep === index
                            ? "text-white/90"
                            : "text-white/60"
                        }`}
                        animate={{
                          scale: isActive
                            ? 1.15
                            : hoveredStep === index
                            ? 1.05
                            : 1,
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {process.title}
                      </motion.h3>
                      <motion.p
                        className="text-xs md:text-sm text-white/50 transition-colors duration-300"
                        animate={{
                          color:
                            hoveredStep === index
                              ? "rgba(255,255,255,0.7)"
                              : undefined,
                        }}
                      >
                        {process.shortDesc}
                      </motion.p>
                      {/* Interactive Temperature Gauge */}
                      {isActive && process.temperature && (
                        <motion.div
                          className="mt-3 w-full"
                          initial={{ opacity: 0, y: -5, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <div className="flex items-center justify-center gap-1 mb-2">
                            <Flame className="w-3 h-3 text-orange-400" />
                            <span className="text-xs text-orange-400 font-semibold">
                              {process.temperature}
                            </span>
                          </div>
                          {/* Temperature Bar */}
                          <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full bg-gradient-to-r ${process.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{
                                width: process.temperature.includes("°C")
                                  ? `${(parseInt(process.temperature) / 1600) * 100}%`
                                  : process.temperature === "Ambient"
                                  ? "10%"
                                  : "50%",
                              }}
                              transition={{ duration: 1, delay: 0.3 }}
                            />
                          </div>
                        </motion.div>
                      )}
                      
                      {/* Interactive Details Button */}
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDetails(showDetails === index ? null : index);
                        }}
                        className={`mt-2 text-xs px-3 py-1 rounded-full transition-all ${
                          showDetails === index
                            ? "bg-orange-500 text-white"
                            : "bg-white/10 text-white/70 hover:bg-white/20"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {showDetails === index ? "Hide" : "Details"}
                      </motion.button>
                      
                      {/* Expandable Details */}
                      <AnimatePresence>
                        {showDetails === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-3 overflow-hidden"
                          >
                            <div className="bg-black/60 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                              <p className="text-xs text-white/80 leading-relaxed">
                                {process.shortDesc}
                              </p>
                              {process.temperature && (
                                <div className="mt-2 flex items-center gap-2">
                                  <Flame className="w-3 h-3 text-orange-400" />
                                  <span className="text-xs text-orange-400">
                                    {process.temperature}
                                  </span>
                                </div>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Step Details Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="mt-12 md:mt-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
            >
              {(() => {
                const currentProcess = processes[activeStep];
                const ProcessIcon = currentProcess.icon;
                return (
                  <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-white/10 shadow-2xl">
                    <div className="flex flex-col md:flex-row items-center gap-8">
                      {/* Process Icon */}
                          <motion.div
                        className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br ${currentProcess.color} flex items-center justify-center shadow-2xl flex-shrink-0`}
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        whileHover={{ rotate: 360, scale: 1.1 }}
                      >
                        <ProcessIcon className="w-12 h-12 md:w-16 md:h-16 text-white" />
                          </motion.div>

                      {/* Process Details */}
                      <div className="flex-1 text-center md:text-left">
                        <motion.div
                          className="inline-block mb-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", delay: 0.2 }}
                        >
                          <div
                            className={`w-24 h-1.5 bg-gradient-to-r ${currentProcess.color} rounded-full shadow-lg mx-auto md:mx-0`}
                          />
                        </motion.div>
                        <motion.h2
                          className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                        >
                          {currentProcess.title}
                        </motion.h2>
                        <motion.p
                          className="text-lg md:text-xl text-white/90 mb-4 font-semibold"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.4 }}
                        >
                                {currentProcess.shortDesc}
                        </motion.p>
                              {currentProcess.temperature && (
                          <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/50"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.5, type: "spring" }}
                          >
                            <Flame className="w-5 h-5 text-orange-400" />
                            <span className="text-orange-400 font-bold">
                              {currentProcess.temperature}
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Visual Flowchart Section */}
      <section className="py-16 md:py-24 bg-black/40 backdrop-blur-sm relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Steel Making <span className="text-orange-400">Process Flow</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              From raw materials to finished product - our streamlined manufacturing process
            </p>
          </motion.div>

          {/* Flowchart Visualization with Interactive Elements */}
          <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl overflow-hidden group">
            {/* Animated Background Particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-orange-400/30 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
            </div>
            
            {/* Flowchart Steps */}
            <div className="space-y-8 relative z-10">
              {/* Step 1: Raw Materials - Interactive */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl p-6 shadow-xl w-full max-w-md cursor-pointer group/item"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" }}
                  onClick={() => setActiveStep(0)}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity }}
                    >
                      <Package className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Raw Materials (RM)</h3>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    {["Ore", "Coal", "Dolomite"].map((material, idx) => (
                      <motion.div
                        key={idx}
                        className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.3)" }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <p className="text-white font-semibold text-sm">{material}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                <motion.div
                  className="my-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowDown className="w-8 h-8 text-orange-400" />
                </motion.div>
              </motion.div>

              {/* Step 2: DR1 - Interactive */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl p-6 shadow-xl w-full max-w-md cursor-pointer"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)" }}
                  onClick={() => setActiveStep(1)}
                >
                  <div className="flex items-center justify-center gap-3">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Factory className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">DR1</h3>
                    <span className="text-white/80 text-sm">(Direct Reduced Iron)</span>
                  </div>
                </motion.div>
                <motion.div
                  className="my-4"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                >
                  <ArrowDown className="w-8 h-8 text-orange-400" />
                </motion.div>
              </motion.div>

              {/* Step 3: Induction Furnace + EAF - Interactive */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.02 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-xl w-full max-w-md cursor-pointer"
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
                  onClick={() => setActiveStep(2)}
                >
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <motion.div
                      animate={{ rotate: [0, 180, 360] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white">Induction Furnace + EAF</h3>
                  </div>
                  <p className="text-white/90 text-center text-sm">Electric Arc Furnace</p>
                </motion.div>
                
                {/* Two paths from EAF */}
                <div className="grid grid-cols-2 gap-8 mt-6 w-full max-w-2xl">
                  {/* Path to Liquid - Interactive */}
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="mb-4"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRightIcon className="w-8 h-8 text-orange-400" />
                    </motion.div>
                    <motion.div
                      className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 shadow-xl w-full cursor-pointer"
                      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.4)" }}
                      onClick={() => setActiveStep(3)}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <motion.div
                          animate={{ y: [0, -5, 0] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          <Droplets className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white">Liquid</h3>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Path to Wire Rod - Interactive */}
                  <motion.div
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <motion.div
                      className="mb-4"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      <ArrowRightIcon className="w-8 h-8 text-orange-400" />
                    </motion.div>
                    <motion.div
                      className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 shadow-xl w-full cursor-pointer"
                      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.4)" }}
                      onClick={() => setActiveStep(4)}
                    >
                      <div className="flex items-center justify-center gap-3">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                          <Cog className="w-8 h-8 text-white" />
                        </motion.div>
                        <h3 className="text-xl font-bold text-white">Wire Rod 5.5</h3>
                      </div>
                      <p className="text-white/90 text-center text-xs mt-2">Add Wire Rod 5.5</p>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Process Steps", value: "5", icon: Cog },
              { label: "Temperature Range", value: "1,600°C", icon: Flame },
              {
                label: "Quality Standards",
                value: "ISO 9001",
                icon: CheckCircle,
              },
              {
                label: "Production Capacity",
                value: "250K TPA",
                icon: Factory,
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                >
                  <IconComponent className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Explore <span className="text-orange-400">More?</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/about")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>About Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => router.push("/contactus")}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
