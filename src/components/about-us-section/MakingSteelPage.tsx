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
      title: "Raw Material Preparation",
      shortDesc: "Iron ore, coal, and dolomite are sourced and prepared as the primary raw materials for steel production.",
      color: "from-blue-500 to-blue-700",
      temperature: "Ambient",
      visualData: { particles: 3, flow: "down" },
    },
    {
      id: 2,
      icon: Factory,
      title: "DRI Process (Sponge Iron Production)",
      shortDesc: "The raw materials are processed in the Direct Reduced Iron (DRI) unit, where iron ore is converted into sponge iron by removing oxygen.",
      color: "from-orange-500 to-red-600",
      temperature: "1,200°C",
      visualData: { particles: 8, flow: "up" },
    },
    {
      id: 3,
      icon: Zap,
      title: "Melting in Furnace",
      shortDesc: "Sponge iron is melted in an Induction Furnace or Electric Arc Furnace (EAF) under controlled conditions.",
      color: "from-cyan-500 to-blue-600",
      temperature: "1,600°C",
      visualData: { particles: 5, flow: "circular" },
    },
    {
      id: 4,
      icon: Droplets,
      title: "Liquid Metal Formation",
      shortDesc: "The molten steel is refined to achieve the required chemical composition and quality.",
      color: "from-purple-500 to-pink-600",
      temperature: "1,500°C",
      visualData: { particles: 6, flow: "down" },
    },
    {
      id: 5,
      icon: Cog,
      title: "Production Line & Rolling",
      shortDesc: "The liquid metal is cast and rolled into finished steel products, including 5.5 mm wire rods, TMT bars, round bars, binding wire, BRC mesh, wire nails, barbed wire, fencing mesh, angles, channels, flats, and other structural steel sections.",
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

  // Auto-advance through steps
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % processes.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [processes.length, isAutoPlaying]);

  // Calculate progress percentage
  const progressPercentage = ((activeStep + 1) / processes.length) * 100;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 overflow-y-auto">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <div className="sticky top-0 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-wide" style={{ letterSpacing: "0.05em", fontWeight: 700 }}>
              <span className="logo-blue-gradient">Steel Making</span>{" "}
              <span className="logo-orange-gradient">Process</span>
            </h1>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white hover:text-[#f1852e] transition-colors border border-white/20 rounded-lg hover:border-[#f1852e] bg-white/10 backdrop-blur-md hover:bg-white/20"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    <span>Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    <span>Play</span>
                  </>
                )}
              </button>
              <button
                onClick={handleClose}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white hover:text-[#f1852e] transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                <span>Back</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        {/* Process Overview Image */}
        <section className="mb-12">
          <div className="bg-black/60 backdrop-blur-xl rounded-lg shadow-2xl overflow-hidden border border-white/10">
            <div className="relative w-full aspect-video">
              <Image
                src={`${
                  process.env.NEXT_PUBLIC_BASE_PATH || ""
                }/making-of-a-steel/makingofsteel.jpeg`}
                alt="Steel Manufacturing Process Flow"
                fill
                className="object-contain"
                quality={90}
                priority
                sizes="100vw"
              />
            </div>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="mb-12">
          <div className="bg-black/60 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 p-6 md:p-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 tracking-wide" style={{ letterSpacing: "0.05em", fontWeight: 700, lineHeight: "1.2" }}>
                <span className="logo-blue-gradient">Manufacturing</span>{" "}
                <span className="logo-orange-gradient">Process Steps</span>
              </h2>
              <div className="w-24 sm:w-32 h-1 logo-orange-bg mx-auto" />
            </div>
            
            {/* Progress Indicator */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                <span className="text-base sm:text-lg font-semibold text-white tracking-wide" style={{ letterSpacing: "0.02em" }}>
                  Step {activeStep + 1} of {processes.length}
                </span>
                <span className="text-base sm:text-lg font-semibold text-[#f1852e] tracking-wide" style={{ letterSpacing: "0.02em" }}>
                  {Math.round(progressPercentage)}%
                </span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#f1852e] to-orange-500 transition-all duration-500 ease-out"
                  style={{ width: `${progressPercentage}%` }}
                />
              </div>
            </div>

            {/* Process Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processes.map((process, index) => {
                const IconComponent = process.icon;
                const isActive = activeStep === index;
                const isPast = activeStep > index;

                return (
                  <div
                    key={process.id}
                    className="relative"
                    onClick={() => {
                      setActiveStep(index);
                      setIsAutoPlaying(false);
                    }}
                    onMouseEnter={() => setHoveredStep(index)}
                    onMouseLeave={() => setHoveredStep(null)}
                  >
                    {/* Connection Line */}
                    {index < processes.length - 1 && (
                      <div className="hidden md:block absolute top-12 left-[60%] w-[80%] h-0.5 bg-white/10 z-0">
                        <div
                          className={`h-full transition-all duration-500 ${
                            isPast ? "bg-gradient-to-r from-[#f1852e] to-orange-500" : "bg-white/10"
                          }`}
                          style={{ width: isPast ? "100%" : "0%" }}
                        />
                      </div>
                    )}

                    {/* Step Card */}
                    <div
                      className={`relative bg-black/40 backdrop-blur-md border-2 rounded-lg p-4 cursor-pointer transition-all duration-200 ${
                        isActive
                          ? "border-[#f1852e] shadow-lg shadow-[#f1852e]/20 scale-105"
                          : hoveredStep === index
                          ? "border-[#f1852e]/50 shadow-md"
                          : isPast
                          ? "border-white/30"
                          : "border-white/20"
                      }`}
                    >
                      {/* Step Number Badge */}
                      <div
                        className={`absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          isActive
                            ? "bg-[#f1852e] text-white"
                            : isPast
                            ? "bg-white/30 text-white"
                            : "bg-white/20 text-white/70"
                        }`}
                      >
                        {process.id}
                      </div>

                      {/* Icon */}
                      <div
                        className={`w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center ${
                          isActive
                            ? "bg-gradient-to-br from-[#f1852e] to-orange-600"
                            : isPast
                            ? "bg-white/20"
                            : "bg-white/10"
                        }`}
                      >
                        <IconComponent
                          className={`w-8 h-8 ${
                            isActive || isPast ? "text-white" : "text-white/70"
                          }`}
                        />
                      </div>

                      {/* Title */}
                      <h3
                        className={`text-sm sm:text-base md:text-lg font-bold mb-3 text-center leading-snug ${
                          isActive
                            ? "text-white"
                            : hoveredStep === index
                            ? "text-white/90"
                            : "text-white/70"
                        }`}
                        style={{ letterSpacing: "0.01em", fontWeight: isActive ? 700 : 600 }}
                      >
                        {process.title}
                      </h3>

                      {/* Temperature */}
                      {process.temperature && (
                        <div className="flex items-center justify-center gap-2 mb-3">
                          <Flame className="w-4 h-4 text-[#f1852e]" />
                          <span className="text-xs sm:text-sm text-[#f1852e] font-semibold tracking-wide" style={{ letterSpacing: "0.05em" }}>
                            {process.temperature}
                          </span>
                        </div>
                      )}

                      {/* Details Button */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowDetails(showDetails === index ? null : index);
                        }}
                        className={`w-full text-xs sm:text-sm px-4 py-2 rounded-md transition-all duration-200 font-semibold tracking-wide ${
                          showDetails === index
                            ? "bg-[#f1852e] text-white shadow-lg shadow-[#f1852e]/30"
                            : "bg-white/10 text-white/90 hover:bg-white/20 border border-white/20"
                        }`}
                        style={{ letterSpacing: "0.03em" }}
                      >
                        {showDetails === index ? "Hide Details" : "View Details"}
                      </button>

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
                            <div className="bg-black/60 backdrop-blur-sm rounded-md p-4 border border-white/10">
                              <p className="text-sm sm:text-base text-white/90 leading-relaxed font-normal" style={{ lineHeight: "1.7" }}>
                                {process.shortDesc}
                              </p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Active Step Details */}
        <section className="mb-12">
          <div className="bg-black/60 backdrop-blur-xl rounded-lg shadow-2xl border border-white/10 p-6 md:p-8">
            {(() => {
              const currentProcess = processes[activeStep];
              const ProcessIcon = currentProcess.icon;
              return (
                <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                  {/* Process Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-gradient-to-br from-[#f1852e] to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-[#f1852e]/20">
                      <ProcessIcon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                    </div>
                  </div>

                  {/* Process Details */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-1.5 w-20 bg-gradient-to-r from-[#f1852e] to-orange-500 rounded-full" />
                      <span className="text-sm sm:text-base font-semibold text-white/80 tracking-wide uppercase" style={{ letterSpacing: "0.1em" }}>
                        Step {currentProcess.id}
                      </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-wide logo-primary-gradient" style={{ letterSpacing: "0.05em", fontWeight: 700, lineHeight: "1.2" }}>
                      {currentProcess.title}
                    </h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed mb-6 font-light" style={{ lineHeight: "1.8" }}>
                      {currentProcess.shortDesc}
                    </p>
                    {currentProcess.temperature && (
                      <div className="inline-flex items-center gap-3 px-5 py-3 bg-[#f1852e]/20 border border-[#f1852e]/50 rounded-lg backdrop-blur-sm shadow-lg shadow-[#f1852e]/20">
                        <Flame className="w-5 h-5 text-[#f1852e]" />
                        <span className="text-base font-bold text-[#f1852e] tracking-wide" style={{ letterSpacing: "0.05em" }}>
                          {currentProcess.temperature}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </section>
      </div>
    </div>
  );
}
