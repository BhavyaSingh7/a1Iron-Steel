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
      icon: Factory,
      title: "Raw Materials",
      shortDesc: "Iron Ore • Coal • Limestone",
      color: "from-blue-500 to-blue-700",
      temperature: "Ambient",
      visualData: { particles: 3, flow: "down" },
    },
    {
      id: 2,
      icon: Flame,
      title: "Iron Making",
      shortDesc: "Blast Furnace",
      color: "from-orange-500 to-red-600",
      temperature: "1,500°C+",
      visualData: { particles: 8, flow: "up" },
    },
    {
      id: 3,
      icon: Droplets,
      title: "Steel Making",
      shortDesc: "Refining Process",
      color: "from-cyan-500 to-blue-600",
      temperature: "1,600°C",
      visualData: { particles: 5, flow: "circular" },
    },
    {
      id: 4,
      icon: Zap,
      title: "Casting",
      shortDesc: "Continuous Casting",
      color: "from-purple-500 to-pink-600",
      temperature: "1,400°C",
      visualData: { particles: 6, flow: "down" },
    },
    {
      id: 5,
      icon: Cog,
      title: "Hot Rolling",
      shortDesc: "Shape Formation",
      color: "from-gray-600 to-gray-800",
      temperature: "1,200°C",
      visualData: { particles: 4, flow: "horizontal" },
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "Quality Control",
      shortDesc: "Testing & Finishing",
      color: "from-green-500 to-emerald-600",
      temperature: "Room Temp",
      visualData: { particles: 2, flow: "static" },
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

  // Auto-advance through steps
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [processes.length, isAutoPlaying]);

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
          {/* Play/Pause Control */}
          <motion.button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="mt-8 flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white hover:bg-white/20 transition-all duration-200 mx-auto group"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isAutoPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                <span>Pause Auto-Play</span>
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                <span>Resume Auto-Play</span>
              </>
            )}
          </motion.button>
        </motion.div>
      </section>

      {/* Main Manufacturing Process Image Section */}
      <section className="relative py-12 md:py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Large Manufacturing Process Image */}
          <motion.div
            className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-white/20 mb-12 md:mb-16"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ borderColor: "rgba(255,255,255,0.4)" }}
          >
            <div className="relative aspect-video w-full">
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH || ""
                }/making-of-a-steel/image.png`}
                alt="Steel Manufacturing Process - Complete Overview"
                fill
                className="object-contain"
                quality={90}
                priority
                sizes="100vw"
              />
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
                    { top: "10%", left: "5%" }, // Raw Materials
                    { top: "15%", right: "10%" }, // Iron Making
                    { top: "50%", left: "5%" }, // Steel Making
                    { top: "50%", right: "10%" }, // Casting
                    { bottom: "15%", left: "10%" }, // Hot Rolling
                    { bottom: "10%", right: "5%" }, // Quality Control
                  ];
                  const position = positions[index] || { top: "50%", left: "50%" };

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
                      style={position}
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative z-10">
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
                    {/* Step Circle with Enhanced Animation */}
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
                      }}
                      whileHover={{
                        scale: isActive
                          ? 1.35
                          : hoveredStep === index
                          ? 1.2
                          : 1.15,
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
                      {isActive && process.temperature && (
                        <motion.div
                          className="mt-2 text-xs text-orange-400 font-semibold flex items-center justify-center gap-1"
                          initial={{ opacity: 0, y: -5, scale: 0.8 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <Flame className="w-3 h-3" />
                          {process.temperature}
                        </motion.div>
                      )}
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

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              { label: "Process Steps", value: "6", icon: Cog },
              { label: "Temperature Range", value: "1,500°C+", icon: Flame },
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
