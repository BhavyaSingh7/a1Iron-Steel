"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  Shield,
  CheckCircle,
  Award,
  TrendingUp,
  FileCheck,
  BarChart3,
  Target,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";

interface OurQualityPageProps {
  onClose?: () => void;
}

interface QualityStandard {
  id: number;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  color: string;
}

export default function OurQualityPage({ onClose }: OurQualityPageProps) {
  const router = useRouter();
  const [activeStandard, setActiveStandard] = useState(0);

  const handleClose = () => {
    // Use window.location for immediate navigation with skipIntro parameter
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/?skipIntro=true`;
    if (onClose) {
      onClose();
    }
  };

  const qualityStandards: QualityStandard[] = [
    {
      id: 1,
      icon: Shield,
      title: "International Standards",
      description:
        "We adhere to global quality standards including ISO 9001:2015, ensuring consistent excellence across all our products.",
      color: "from-blue-500 to-blue-700",
    },
    {
      id: 2,
      icon: CheckCircle,
      title: "Precision Manufacturing",
      description:
        "State-of-the-art facilities with advanced quality control systems ensuring every product meets exact specifications.",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 3,
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous testing and inspection at every stage of production, from raw materials to finished products.",
      color: "from-orange-500 to-red-600",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "Ongoing process optimization and quality enhancement initiatives to exceed customer expectations.",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 5,
      icon: FileCheck,
      title: "Certifications",
      description:
        "BIS Certified, ISI Mark, and other industry certifications validating our commitment to quality.",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 6,
      icon: BarChart3,
      title: "Performance Metrics",
      description:
        "Comprehensive quality metrics and analytics ensuring consistent product performance and reliability.",
      color: "from-indigo-500 to-purple-600",
    },
  ];

  // Auto-advance through standards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStandard((prev) => (prev + 1) % qualityStandards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [qualityStandards.length]);

  // Disable body scroll when this page is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

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
              Our Quality
            </span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Rigorous quality control ensuring every product meets international
            standards and exceeds customer expectations.
          </motion.p>
        </motion.div>
      </section>

      {/* Quality Image Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="relative w-full aspect-[16/9] rounded-2xl overflow-hidden shadow-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/our-quality.png`}
              alt="Our Quality - A1 Iron & Steel"
              fill
              className="object-cover"
              quality={90}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </motion.div>
        </div>
      </section>

      {/* Quality Standards Carousel */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quality <span className="text-orange-400">Excellence</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Our commitment to quality is reflected in every aspect of our
              operations
            </p>
          </motion.div>

          {/* Main Quality Standard Display */}
          <div className="relative min-h-[500px] mb-12">
            <AnimatePresence mode="wait">
              {qualityStandards.map(
                (standard, index) =>
                  activeStandard === index && (
                    <motion.div
                      key={standard.id}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0"
                    >
                      <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/10 shadow-2xl">
                        <div className="flex flex-col md:flex-row items-center gap-8">
                          <div className="flex-shrink-0">
                            <div
                              className={`w-32 h-32 rounded-full bg-gradient-to-br ${standard.color} flex items-center justify-center shadow-lg`}
                            >
                              <standard.icon className="w-16 h-16 text-white" />
                            </div>
                          </div>
                          <div className="flex-1 text-center md:text-left">
                            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                              {standard.title}
                            </h3>
                            <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                              {standard.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Quality Standards Indicators */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {qualityStandards.map((standard, index) => {
              const Icon = standard.icon;
              const isActive = activeStandard === index;
              return (
                <button
                  key={standard.id}
                  onClick={() => setActiveStandard(index)}
                  className={`relative group transition-all duration-300 ${
                    isActive ? "scale-110" : "scale-100"
                  }`}
                >
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-br ${standard.color} flex items-center justify-center shadow-lg transition-all duration-300 ${
                      isActive
                        ? "ring-4 ring-orange-400 ring-offset-2 ring-offset-gray-900"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <span className="text-sm font-semibold text-white bg-black/70 px-3 py-1 rounded">
                        {standard.title}
                      </span>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Metrics Section */}
      <section className="py-16 sm:py-24 bg-black/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10">
              <Target className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">99.8%</h3>
              <p className="text-white/70">Quality Pass Rate</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10">
              <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">ISO 9001</h3>
              <p className="text-white/70">Certified Quality Management</p>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl border border-white/10">
              <CheckCircle className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-white mb-2">100%</h3>
              <p className="text-white/70">Tested Products</p>
            </div>
          </motion.div>
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
              Experience <span className="text-orange-400">Quality</span>
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => router.push("/contactus")}
                className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => router.push("/about")}
                className="border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-200 hover:scale-105 flex items-center justify-center gap-2"
              >
                <span>About Us</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

