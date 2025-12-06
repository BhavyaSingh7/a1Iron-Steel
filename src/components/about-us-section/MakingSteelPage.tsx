"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  Shield,
  Gauge,
  Thermometer,
  Sparkles,
} from "lucide-react";

interface MakingSteelPageProps {
  onClose?: () => void;
}

interface ProcessStep {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  shortDesc: string;
  description: string;
  details: string[];
  color: string;
  temperature?: string;
  visualData?: {
    particles?: number;
    flow?: string;
  };
}

export default function MakingSteelPage({ onClose }: MakingSteelPageProps) {
  const [activeStep, setActiveStep] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClose = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/?skipIntro=true`;
    if (onClose) {
      onClose();
    }
  };

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const processes: ProcessStep[] = [
    {
      id: 1,
      icon: Factory,
      title: "Raw Materials",
      shortDesc: "Iron Ore • Coal • Limestone",
      description:
        "We source premium-grade raw materials from trusted suppliers, ensuring the highest quality inputs for our steel production. Our rigorous material testing and quality control begin at this foundational stage.",
      details: [
        "Premium iron ore with high iron content (62%+)",
        "High-grade coking coal for optimal carbon content",
        "Pure limestone for fluxing and slag formation",
        "Quality testing and material certification",
        "Sustainable sourcing practices",
      ],
      color: "from-blue-500 to-blue-700",
      temperature: "Ambient",
      visualData: { particles: 3, flow: "down" },
    },
    {
      id: 2,
      icon: Flame,
      title: "Iron Making",
      shortDesc: "Blast Furnace Process",
      description:
        "In our state-of-the-art blast furnace, iron ore is reduced to molten iron at extreme temperatures. This critical process transforms raw materials into high-quality pig iron through precise temperature and chemical control.",
      details: [
        "Blast furnace operation at 1,500-1,600°C",
        "Carbon monoxide reduction of iron oxide",
        "Slag formation for impurity removal",
        "Continuous monitoring and process optimization",
        "Energy-efficient operation with waste heat recovery",
      ],
      color: "from-orange-500 to-red-600",
      temperature: "1,500-1,600°C",
      visualData: { particles: 8, flow: "up" },
    },
    {
      id: 3,
      icon: Droplets,
      title: "Steel Making",
      shortDesc: "Basic Oxygen Furnace",
      description:
        "The molten iron is refined into steel through our Basic Oxygen Furnace (BOF) process. We precisely control carbon content and alloy composition to produce steel grades that meet exact specifications for various applications.",
      details: [
        "Oxygen injection for carbon removal",
        "Alloying elements added for specific grades",
        "Temperature control at 1,600-1,700°C",
        "Chemical composition fine-tuning",
        "Slag management for quality steel",
      ],
      color: "from-cyan-500 to-blue-600",
      temperature: "1,600-1,700°C",
      visualData: { particles: 5, flow: "circular" },
    },
    {
      id: 4,
      icon: Zap,
      title: "Continuous Casting",
      shortDesc: "Molten Steel to Billets",
      description:
        "Our continuous casting process transforms molten steel into semi-finished products. This advanced technology ensures uniform quality, improved yield, and consistent dimensions across all our steel products.",
      details: [
        "Continuous casting machines for efficiency",
        "Water-cooled molds for rapid solidification",
        "Billet, bloom, and slab production",
        "Real-time quality monitoring",
        "Automated cutting to required lengths",
      ],
      color: "from-purple-500 to-pink-600",
      temperature: "1,400-1,500°C",
      visualData: { particles: 6, flow: "down" },
    },
    {
      id: 5,
      icon: Cog,
      title: "Hot Rolling",
      shortDesc: "Shape Formation & Sizing",
      description:
        "The hot rolling mill shapes and sizes our steel products to exact specifications. Through controlled deformation at high temperatures, we produce TMT bars, round bars, angles, and other structural steel products with superior mechanical properties.",
      details: [
        "Hot rolling at 1,100-1,200°C",
        "Precise dimensional control",
        "TMT (Thermo-Mechanical Treatment) process",
        "Multiple passes for desired shapes",
        "Surface quality enhancement",
      ],
      color: "from-gray-600 to-gray-800",
      temperature: "1,100-1,200°C",
      visualData: { particles: 4, flow: "horizontal" },
    },
    {
      id: 6,
      icon: CheckCircle,
      title: "Quality Control",
      shortDesc: "Testing & Certification",
      description:
        "Every batch undergoes comprehensive quality testing to ensure it meets international standards. Our quality control laboratory performs mechanical, chemical, and dimensional tests before certification and dispatch.",
      details: [
        "Tensile strength and yield point testing",
        "Chemical composition analysis",
        "Dimensional accuracy verification",
        "Surface quality inspection",
        "ISO 9001:2015 certified processes",
      ],
      color: "from-green-500 to-emerald-600",
      temperature: "Room Temperature",
      visualData: { particles: 2, flow: "static" },
    },
  ];

  // Disable body scroll when this page is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  // Auto-advance through steps
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processes.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [processes.length]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 z-50 overflow-y-auto">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Header */}
      <motion.div
        className={`sticky top-0 z-30 transition-all duration-300 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={handleClose}
              className="flex items-center space-x-2 text-white hover:text-[#f1852e] transition-colors duration-200 font-medium group"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </motion.button>
            <motion.button
              onClick={handleClose}
              className="p-2 text-white hover:text-[#f1852e] transition-colors duration-200 rounded-lg hover:bg-white/10"
              whileHover={{ rotate: 90 }}
              transition={{ duration: 0.3 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-28 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          >
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full mx-auto" />
          </motion.div>
          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, type: "spring" }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
              Steel Manufacturing
            </span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Precision Engineering. Advanced Technology.{" "}
            <span className="text-orange-400 font-semibold">
              Uncompromising Quality.
            </span>
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            {[
              { icon: Shield, text: "ISO 9001 Certified" },
              { icon: Gauge, text: "250K TPA Capacity" },
              { icon: Thermometer, text: "1,500°C+ Operations" },
            ].map((badge, index) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.15)" }}
                >
                  <Icon className="w-4 h-4 text-orange-400" />
                  <span className="text-sm text-white font-medium">{badge.text}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Interactive Visual Process Flow */}
      <section className="relative py-12 md:py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-orange-400">Manufacturing Process</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              A comprehensive journey from raw materials to finished steel products
            </p>
          </motion.div>

          {/* Process Flow Diagram */}
          <div className="relative">
            {/* Connection Lines with Animation */}
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
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full"
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
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 relative z-10">
              {processes.map((process, index) => {
                const IconComponent = process.icon;
                const isActive = activeStep === index;
                const isPast = activeStep > index;

                return (
                  <motion.div
                    key={process.id}
                    className="relative"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.15 }}
                    onClick={() => setActiveStep(index)}
                    whileHover={{ y: -5 }}
                  >
                    {/* Step Circle with Enhanced Animation */}
                    <motion.div
                      className={`relative w-24 h-24 md:w-28 md:h-28 mx-auto mb-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "scale-125 shadow-2xl"
                          : isPast
                          ? "scale-100 opacity-90"
                          : "scale-90 opacity-60"
                      }`}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${
                              process.color.split(" ")[1]
                            }, ${process.color.split(" ")[3]})`
                          : "rgba(255, 255, 255, 0.1)",
                      }}
                      whileHover={{ scale: isActive ? 1.35 : 1.15 }}
                      animate={{
                        boxShadow: isActive
                          ? `0 0 40px ${
                              process.color.split(" ")[1]
                            }90, 0 0 80px ${process.color.split(" ")[1]}50`
                          : "0 4px 15px rgba(0,0,0,0.3)",
                        rotate: isActive ? [0, 5, -5, 0] : 0,
                      }}
                      transition={{
                        boxShadow: { duration: 0.3 },
                        rotate: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                      }}
                    >
                      <motion.div
                        animate={{
                          scale: isActive ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      >
                        <IconComponent
                          className={`w-12 h-12 md:w-14 md:h-14 ${
                            isActive ? "text-white" : "text-white/60"
                          } transition-colors duration-300`}
                        />
                      </motion.div>

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

                      {/* Step Number with Pulse */}
                      <motion.div
                        className={`absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full flex items-center justify-center text-xs md:text-sm font-bold ${
                          isActive
                            ? "bg-white text-orange-600 shadow-lg"
                            : "bg-white/20 text-white/60"
                        }`}
                        animate={{
                          scale: isActive ? [1, 1.2, 1] : 1,
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                        }}
                      >
                        {process.id}
                      </motion.div>
                    </motion.div>

                    {/* Step Info */}
                    <div className="text-center">
                      <motion.h3
                        className={`text-sm md:text-base font-bold mb-2 ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                        animate={{
                          scale: isActive ? 1.1 : 1,
                        }}
                      >
                        {process.title}
                      </motion.h3>
                      <p className="text-xs md:text-sm text-white/50 leading-tight">
                        {process.shortDesc}
                      </p>
                      {isActive && process.temperature && (
                        <motion.div
                          className="mt-2 text-xs text-orange-400 font-semibold flex items-center justify-center gap-1"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          <Thermometer className="w-3 h-3" />
                          {process.temperature}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Step Detailed Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="mt-16 md:mt-24"
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -50, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              {(() => {
                const currentProcess = processes[activeStep];
                const ProcessIcon = currentProcess.icon;
                return (
                  <div className="bg-gradient-to-br from-black/60 via-black/40 to-black/60 backdrop-blur-xl rounded-3xl p-8 md:p-12 border-2 border-white/10 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
                      {/* Enhanced Visual Representation */}
                      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-white/10">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${currentProcess.color} opacity-30`}
                        />
                        {/* Animated grid pattern */}
                        <div
                          className="absolute inset-0 opacity-10"
                          style={{
                            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                            backgroundSize: "50px 50px",
                          }}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="relative"
                            animate={{
                              scale: [1, 1.15, 1],
                              rotate: [0, 10, -10, 0],
                            }}
                            transition={{
                              duration: 5,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <ProcessIcon className="w-40 h-40 md:w-48 md:h-48 text-white/40" />
                          </motion.div>

                          {/* Enhanced Animated Particles */}
                          {Array.from({
                            length: currentProcess.visualData?.particles || 5,
                          }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-3 h-3 rounded-full"
                              style={{
                                background: `linear-gradient(135deg, ${
                                  currentProcess.color.split(" ")[1]
                                }, ${currentProcess.color.split(" ")[3]})`,
                                left: "50%",
                                top: "50%",
                                boxShadow: `0 0 20px ${
                                  currentProcess.color.split(" ")[1]
                                }80`,
                              }}
                              animate={{
                                x: [
                                  0,
                                  (Math.random() - 0.5) * 300,
                                  (Math.random() - 0.5) * 300,
                                  0,
                                ],
                                y: [
                                  0,
                                  (Math.random() - 0.5) * 300,
                                  (Math.random() - 0.5) * 300,
                                  0,
                                ],
                                opacity: [0, 1, 1, 0],
                                scale: [0, 1.5, 1, 0],
                              }}
                              transition={{
                                duration: 4,
                                repeat: Infinity,
                                delay: i * 0.4,
                                ease: "easeInOut",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Enhanced Step Details */}
                      <div className="text-white space-y-6">
                        <div>
                          <motion.div
                            className="inline-block mb-4"
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                          >
                            <div
                              className={`w-20 h-1.5 bg-gradient-to-r ${currentProcess.color} rounded-full shadow-lg`}
                            />
                          </motion.div>
                          <motion.h2
                            className="text-4xl md:text-5xl font-black mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3 }}
                          >
                            {currentProcess.title}
                          </motion.h2>
                          <motion.p
                            className="text-lg md:text-xl text-white/80 leading-relaxed mb-6"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                          >
                            {currentProcess.description}
                          </motion.p>
                        </div>

                        {/* Process Details List */}
                        <div className="space-y-3">
                          {currentProcess.details.map((detail, index) => (
                            <motion.div
                              key={index}
                              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.5 + index * 0.1 }}
                              whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
                            >
                              <div
                                className={`w-6 h-6 rounded-full bg-gradient-to-br ${currentProcess.color} flex items-center justify-center flex-shrink-0 mt-0.5`}
                              >
                                <CheckCircle className="w-4 h-4 text-white" />
                              </div>
                              <p className="text-sm md:text-base text-white/90 leading-relaxed">
                                {detail}
                              </p>
                            </motion.div>
                          ))}
                        </div>

                        {/* Temperature Badge */}
                        {currentProcess.temperature && (
                          <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/20 border border-orange-500/50"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.8, type: "spring" }}
                          >
                            <Thermometer className="w-5 h-5 text-orange-400" />
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

      {/* Enhanced Stats Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black/40 via-black/20 to-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Manufacturing <span className="text-orange-400">Excellence</span>
            </h2>
            <p className="text-lg text-white/70">
              Key metrics that define our production capabilities
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                label: "Process Steps",
                value: "6",
                icon: Cog,
                color: "from-blue-500 to-cyan-500",
                description: "Comprehensive manufacturing stages",
              },
              {
                label: "Temperature Range",
                value: "1,500°C+",
                icon: Flame,
                color: "from-orange-500 to-red-500",
                description: "Extreme heat operations",
              },
              {
                label: "Quality Standards",
                value: "ISO 9001",
                icon: Shield,
                color: "from-green-500 to-emerald-500",
                description: "International certification",
              },
              {
                label: "Production Capacity",
                value: "250K TPA",
                icon: Factory,
                color: "from-purple-500 to-pink-500",
                description: "Tons per annum",
              },
            ].map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center p-6 md:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 relative overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(255,255,255,0.3)",
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                  <div className="relative z-10">
                    <motion.div
                      className="inline-block mb-4"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-xl`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>
                    <motion.div
                      className="text-4xl md:text-5xl font-black text-white mb-2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-sm md:text-base font-semibold text-white/90 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-xs text-white/60">{stat.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technology & Innovation Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Advanced <span className="text-orange-400">Technology</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Cutting-edge equipment and processes for superior steel production
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Automated Control Systems",
                description:
                  "State-of-the-art automation ensures precise control over every stage of production, optimizing efficiency and quality.",
                icon: Zap,
                color: "from-yellow-500 to-orange-500",
              },
              {
                title: "Energy Efficiency",
                description:
                  "Advanced waste heat recovery systems and energy-efficient processes reduce environmental impact while maintaining productivity.",
                icon: Sparkles,
                color: "from-green-500 to-emerald-500",
              },
              {
                title: "Quality Assurance",
                description:
                  "Comprehensive testing and monitoring systems ensure every product meets the highest international quality standards.",
                icon: Shield,
                color: "from-blue-500 to-cyan-500",
              },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-xl`}
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-white/70 leading-relaxed">{feature.description}</p>
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
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Experience Our <span className="text-orange-400">Excellence</span>
            </h2>
            <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
              Partner with A1 Iron & Steel for premium quality steel products manufactured
              with precision and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
                  window.location.href = `${basePath}/contactus/`;
                }}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => {
                  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
                  window.location.href = `${basePath}/about/`;
                }}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200 flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
