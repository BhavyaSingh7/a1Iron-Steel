"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
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
  Award,
} from "lucide-react";
import Image from "next/image";

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

  const handleClose = () => {
    // Use window.location for immediate navigation with skipIntro parameter
    window.location.href = `/?skipIntro=true`;
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
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [processes.length]);

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

      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 overflow-hidden min-h-[40vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40" />
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center"
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
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
              Our Manufacturing
            </span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Visual Journey Through Our Manufacturing Process
          </motion.p>
        </motion.div>
      </section>

      {/* Interactive Visual Process Flow */}
      <section className="relative py-12 md:py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Process Flow Diagram */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 -translate-y-1/2 z-0">
              <div className="relative h-full">
                {processes.map((_, index) => {
                  if (index === processes.length - 1) return null;
                  const width = 100 / processes.length;
                  return (
                    <motion.div
                      key={`line-${index}`}
                      className="absolute h-1 bg-gradient-to-r from-orange-500 to-orange-600"
                      style={{
                        left: `${index * width}%`,
                        width: `${width}%`,
                      }}
                      initial={{ scaleX: 0 }}
                      animate={{
                        scaleX: activeStep > index ? 1 : 0.3,
                        opacity: activeStep > index ? 1 : 0.3,
                      }}
                      transition={{ duration: 0.5 }}
                    />
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
                    onClick={() => setActiveStep(index)}
                  >
                    {/* Step Circle with Animation */}
                    <motion.div
                      className={`relative w-20 h-20 md:w-24 md:h-24 mx-auto mb-4 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                        isActive
                          ? "scale-125 shadow-2xl"
                          : isPast
                          ? "scale-100 opacity-80"
                          : "scale-90 opacity-60"
                      }`}
                      style={{
                        background: isActive
                          ? `linear-gradient(135deg, ${
                              process.color.split(" ")[1]
                            }, ${process.color.split(" ")[3]})`
                          : "rgba(255, 255, 255, 0.1)",
                      }}
                      whileHover={{ scale: isActive ? 1.3 : 1.1 }}
                      animate={{
                        boxShadow: isActive
                          ? `0 0 30px ${
                              process.color.split(" ")[1]
                            }80, 0 0 60px ${process.color.split(" ")[1]}40`
                          : "0 4px 15px rgba(0,0,0,0.2)",
                      }}
                    >
                      <IconComponent
                        className={`w-10 h-10 md:w-12 md:h-12 ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                      />

                      {/* Animated Ring */}
                      {isActive && (
                        <motion.div
                          className="absolute inset-0 rounded-full border-2 border-white/50"
                          animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.5, 0, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
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

                    {/* Step Info */}
                    <div className="text-center">
                      <motion.h3
                        className={`text-sm md:text-base font-bold mb-1 ${
                          isActive ? "text-white" : "text-white/60"
                        }`}
                        animate={{
                          scale: isActive ? 1.1 : 1,
                        }}
                      >
                        {process.title}
                      </motion.h3>
                      <p className="text-xs md:text-sm text-white/50">
                        {process.shortDesc}
                      </p>
                      {isActive && process.temperature && (
                        <motion.div
                          className="mt-2 text-xs text-orange-400 font-semibold"
                          initial={{ opacity: 0, y: -5 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {process.temperature}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Active Step Visual Display */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              className="mt-16 md:mt-24"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.5 }}
            >
              {(() => {
                const currentProcess = processes[activeStep];
                const ProcessIcon = currentProcess.icon;
                return (
                  <div className="bg-black/40 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                      {/* Visual Representation */}
                      <div className="relative h-64 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900">
                        <div
                          className={`absolute inset-0 bg-gradient-to-br ${currentProcess.color} opacity-20`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <motion.div
                            className="relative"
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, -5, 0],
                            }}
                            transition={{
                              duration: 4,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                          >
                            <ProcessIcon className="w-32 h-32 md:w-40 md:h-40 text-white/30" />
                          </motion.div>

                          {/* Animated Particles */}
                          {Array.from({
                            length: currentProcess.visualData?.particles || 5,
                          }).map((_, i) => (
                            <motion.div
                              key={i}
                              className="absolute w-2 h-2 bg-orange-400 rounded-full"
                              animate={{
                                x: [
                                  0,
                                  Math.random() * 200 - 100,
                                  Math.random() * 200 - 100,
                                  0,
                                ],
                                y: [
                                  0,
                                  Math.random() * 200 - 100,
                                  Math.random() * 200 - 100,
                                  0,
                                ],
                                opacity: [0, 1, 1, 0],
                                scale: [0, 1, 1, 0],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                delay: i * 0.3,
                                ease: "easeInOut",
                              }}
                              style={{
                                left: "50%",
                                top: "50%",
                              }}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Step Details */}
                      <div className="text-white">
                        <motion.div
                          className="inline-block mb-4"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <div
                            className={`w-16 h-1 bg-gradient-to-r ${currentProcess.color} rounded-full`}
                          />
                        </motion.div>
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                          {currentProcess.title}
                        </h2>
                        <div className="space-y-4 text-white/80">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-12 h-12 rounded-xl bg-gradient-to-br ${currentProcess.color} flex items-center justify-center`}
                            >
                              <ProcessIcon className="w-6 h-6 text-white" />
                            </div>
                            <div>
                              <p className="font-semibold">
                                {currentProcess.shortDesc}
                              </p>
                              {currentProcess.temperature && (
                                <p className="text-sm text-orange-400">
                                  Temperature: {currentProcess.temperature}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
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

      {/* Our Quality Section */}
      <section className="py-16 md:py-24 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Uncompromising <span className="text-orange-400">Quality</span>
            </motion.h2>
            <motion.p
              className="text-xl text-white/70 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              At A1 Iron & Steel, quality is not just a metric; it&apos;s a
              foundational principle embedded in every stage of our
              manufacturing process.
            </motion.p>
          </motion.div>

          {/* Quality Image and Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH || ""
                }/homepage/our-quality.png`}
                alt="Quality Control at A1 Iron & Steel"
                fill
                className="object-cover"
                quality={90}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Commitment to{" "}
                <span className="text-orange-400">Quality Excellence</span>
              </h3>
              <p className="text-lg text-white/70 mb-6">
                From the careful selection of raw materials to the final
                inspection of finished products, we adhere to the most stringent
                international standards to ensure unparalleled durability,
                reliability, and performance.
              </p>
              <p className="text-lg text-white/70">
                Our state-of-the-art facilities and highly skilled team are
                dedicated to delivering steel products that not only meet but
                exceed customer expectations, contributing to safer and more
                resilient infrastructure across Rwanda and beyond.
              </p>
            </motion.div>
          </div>

          {/* Quality Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "International Standards",
                description:
                  "Adhering to global benchmarks like ISO 9001, ASTM, and local regulatory standards for superior product integrity.",
                color: "text-orange-400",
              },
              {
                icon: CheckCircle,
                title: "Rigorous Testing",
                description:
                  "Each batch undergoes comprehensive mechanical, chemical, and visual inspections to guarantee performance and safety.",
                color: "text-green-400",
              },
              {
                icon: Cog,
                title: "Precision Manufacturing",
                description:
                  "Utilizing advanced technology for exact specifications and consistent quality across all production lines.",
                color: "text-blue-400",
              },
              {
                icon: Shield,
                title: "Quality Assurance",
                description:
                  "Comprehensive quality control protocols ensuring every product meets our exacting standards before delivery.",
                color: "text-purple-400",
              },
              {
                icon: Factory,
                title: "State-of-the-Art Facilities",
                description:
                  "Modern manufacturing equipment and processes designed to maintain the highest quality standards.",
                color: "text-cyan-400",
              },
              {
                icon: CheckCircle,
                title: "Continuous Improvement",
                description:
                  "Ongoing monitoring and enhancement of our processes to ensure we remain at the forefront of quality.",
                color: "text-yellow-400",
              },
            ].map((pillar, index) => {
              const IconComponent = pillar.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.08)",
                    borderColor: "rgba(241, 133, 46, 0.3)",
                  }}
                >
                  <IconComponent className={`w-12 h-12 ${pillar.color} mb-6`} />
                  <h3 className="text-2xl font-semibold text-white mb-4">
                    {pillar.title}
                  </h3>
                  <p className="text-white/70">{pillar.description}</p>
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
