"use client";

import React, { useState, useEffect } from "react";
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
  Sparkles,
  Zap,
  Gauge,
  Layers,
  Star,
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
  gradient: string;
  stats?: string;
}

export default function OurQualityPage({ onClose }: OurQualityPageProps) {
  const [activeStandard, setActiveStandard] = useState(0);

  const handleClose = () => {
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
        "We adhere to global quality standards including ISO 9001:2015, ASTM, and BIS certifications, ensuring consistent excellence across all our products and maintaining the highest international benchmarks.",
      color: "from-blue-500 to-blue-700",
      gradient: "from-blue-500/20 via-blue-600/10 to-transparent",
      stats: "ISO 9001:2015 Certified",
    },
    {
      id: 2,
      icon: CheckCircle,
      title: "Precision Manufacturing",
      description:
        "State-of-the-art facilities with advanced quality control systems, automated testing equipment, and precision engineering ensuring every product meets exact specifications with zero tolerance for defects.",
      color: "from-green-500 to-emerald-600",
      gradient: "from-green-500/20 via-emerald-600/10 to-transparent",
      stats: "99.8% Accuracy Rate",
    },
    {
      id: 3,
      icon: Award,
      title: "Quality Assurance",
      description:
        "Rigorous multi-stage testing and inspection protocols at every stage of production, from raw material sourcing to final product delivery, ensuring unparalleled quality and reliability.",
      color: "from-orange-500 to-red-600",
      gradient: "from-orange-500/20 via-red-600/10 to-transparent",
      stats: "100% Tested Products",
    },
    {
      id: 4,
      icon: TrendingUp,
      title: "Continuous Improvement",
      description:
        "Ongoing process optimization, quality enhancement initiatives, and innovation programs to exceed customer expectations and stay at the forefront of industry excellence.",
      color: "from-purple-500 to-pink-600",
      gradient: "from-purple-500/20 via-pink-600/10 to-transparent",
      stats: "24/7 Monitoring",
    },
    {
      id: 5,
      icon: FileCheck,
      title: "Certifications",
      description:
        "BIS Certified, ISI Mark, and other industry certifications validating our commitment to quality, safety, and environmental responsibility in all our operations.",
      color: "from-cyan-500 to-blue-600",
      gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
      stats: "Multiple Certifications",
    },
    {
      id: 6,
      icon: BarChart3,
      title: "Performance Metrics",
      description:
        "Comprehensive quality metrics, real-time analytics, and data-driven insights ensuring consistent product performance, reliability, and customer satisfaction across all metrics.",
      color: "from-indigo-500 to-purple-600",
      gradient: "from-indigo-500/20 via-purple-600/10 to-transparent",
      stats: "Real-time Analytics",
    },
  ];

  // Auto-advance through standards
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStandard((prev) => (prev + 1) % qualityStandards.length);
    }, 5000);

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
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 z-50 overflow-y-auto snap-y snap-mandatory scroll-smooth">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 bg-black/60 backdrop-blur-xl border-b border-white/10 shadow-2xl z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleClose}
              className="flex items-center space-x-2 text-white hover:text-[#f1852e] transition-all duration-200 font-medium group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-white hover:text-[#f1852e] transition-all duration-200 rounded-lg hover:bg-white/10 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always pt-16" style={{ scrollSnapAlign: "start" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 z-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(32,132,177,0.1),transparent_70%)] z-0" />
        
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-white">Quality Excellence</span>
          </motion.div>

          <motion.h1
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 via-blue-400 to-orange-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
              Uncompromising
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient" style={{ animationDelay: "0.5s" }}>
              Quality
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Where precision meets excellence. Every product, every process, every detail
            <span className="text-orange-400 font-semibold"> crafted to perfection</span>.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            className="grid grid-cols-3 gap-6 mt-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            {[
              { value: "99.8%", label: "Quality Pass", icon: CheckCircle },
              { value: "ISO 9001", label: "Certified", icon: Award },
              { value: "100%", label: "Tested", icon: Shield },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:scale-105"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <Icon className="w-8 h-8 text-orange-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white/70">{stat.label}</div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </section>

      {/* Quality Image Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always" style={{ scrollSnapAlign: "start" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-full flex items-center justify-center">
          <motion.div
            className="relative w-full max-w-6xl aspect-[16/9] rounded-3xl overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Image
              src={`${
                process.env.NEXT_PUBLIC_BASE_PATH || ""
              }/homepage/our-quality.png`}
              alt="Our Quality - A1 Iron & Steel"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
              quality={95}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
            
            {/* Overlay Content */}
            <div className="absolute bottom-0 left-0 right-0 p-8 sm:p-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
                  Quality That <span className="text-orange-400">Speaks</span>
                </h3>
                <p className="text-lg sm:text-xl text-white/90 max-w-2xl">
                  From raw materials to finished products, every step is meticulously controlled
                  to ensure the highest standards of excellence.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quality Standards - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always py-20" style={{ scrollSnapAlign: "start" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Pillars of <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Excellence</span>
            </h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Six fundamental principles that drive our commitment to uncompromising quality
            </p>
          </motion.div>

          {/* Main Quality Standard Display - Enhanced */}
          <div className="relative min-h-[500px] mb-12">
            <AnimatePresence mode="wait">
              {qualityStandards.map(
                (standard, index) =>
                  activeStandard === index && (
                    <motion.div
                      key={standard.id}
                      initial={{ opacity: 0, x: 100, scale: 0.95 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: -100, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <div className="relative bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/10 shadow-2xl overflow-hidden">
                        {/* Animated Background Gradient */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${standard.gradient} opacity-50`} />
                        
                        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
                          {/* Icon Section */}
                          <div className="flex flex-col items-center md:items-start">
                            <motion.div
                              className={`relative w-40 h-40 rounded-3xl bg-gradient-to-br ${standard.color} flex items-center justify-center shadow-2xl mb-6`}
                              animate={{
                                boxShadow: [
                                  `0 0 40px ${standard.color.split(" ")[1]}80`,
                                  `0 0 80px ${standard.color.split(" ")[1]}40`,
                                  `0 0 40px ${standard.color.split(" ")[1]}80`,
                                ],
                              }}
                              transition={{
                                duration: 3,
                                repeat: Infinity,
                                ease: "easeInOut",
                              }}
                            >
                              <standard.icon className="w-20 h-20 text-white" />
                              {/* Rotating Ring */}
                              <motion.div
                                className="absolute inset-0 rounded-3xl border-4 border-white/30"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                              />
                            </motion.div>
                            
                            {standard.stats && (
                              <motion.div
                                className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full border border-white/20"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.3 }}
                              >
                                <span className="text-sm font-semibold text-white">{standard.stats}</span>
                              </motion.div>
                            )}
                          </div>

                          {/* Content Section */}
                          <div className="text-center md:text-left">
                            <motion.h3
                              className="text-4xl md:text-5xl font-bold text-white mb-6"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.2 }}
                            >
                              {standard.title}
                            </motion.h3>
                            <motion.p
                              className="text-lg md:text-xl text-white/80 leading-relaxed"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.3 }}
                            >
                              {standard.description}
                            </motion.p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )
              )}
            </AnimatePresence>
          </div>

          {/* Quality Standards Indicators - Enhanced */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            {qualityStandards.map((standard, index) => {
              const Icon = standard.icon;
              const isActive = activeStandard === index;
              return (
                <motion.button
                  key={standard.id}
                  onClick={() => setActiveStandard(index)}
                  className={`relative group transition-all duration-300 ${
                    isActive ? "scale-110 z-10" : "scale-100 hover:scale-105"
                  }`}
                  whileHover={{ scale: isActive ? 1.15 : 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${standard.color} flex items-center justify-center shadow-xl transition-all duration-300 ${
                      isActive
                        ? "ring-4 ring-orange-400 ring-offset-4 ring-offset-gray-900 scale-110"
                        : "opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  
                  {isActive && (
                    <motion.div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                    >
                      <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg">
                        {standard.title}
                      </div>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quality Metrics Section - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center bg-black/40 backdrop-blur-sm overflow-hidden snap-start snap-always" style={{ scrollSnapAlign: "start" }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(241,133,46,0.1),transparent_70%)] z-0" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Quality <span className="text-orange-400">Metrics</span>
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Numbers that reflect our unwavering commitment to excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: Target, 
                value: "99.8%", 
                label: "Quality Pass Rate",
                description: "Products meeting or exceeding standards",
                color: "from-green-500 to-emerald-600",
              },
              { 
                icon: Award, 
                value: "ISO 9001", 
                label: "Certified Quality",
                description: "International quality management system",
                color: "from-blue-500 to-cyan-600",
              },
              { 
                icon: CheckCircle, 
                value: "100%", 
                label: "Tested Products",
                description: "Every product undergoes rigorous testing",
                color: "from-orange-500 to-red-600",
              },
            ].map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md rounded-3xl p-8 border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6 shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-xl font-semibold text-orange-400 mb-2">{metric.label}</div>
                    <div className="text-sm text-white/60">{metric.description}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Quality Features - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always" style={{ scrollSnapAlign: "start" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose <span className="text-orange-400">Our Quality</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Advanced Technology", description: "Cutting-edge equipment and processes" },
              { icon: Gauge, title: "Precision Control", description: "Exact specifications every time" },
              { icon: Layers, title: "Multi-Stage Testing", description: "Comprehensive quality checks" },
              { icon: Star, title: "Customer Satisfaction", description: "Exceeding expectations consistently" },
              { icon: Shield, title: "Safety First", description: "Highest safety standards maintained" },
              { icon: TrendingUp, title: "Continuous Innovation", description: "Always improving our processes" },
            ].map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 hover:shadow-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-600/20 flex items-center justify-center mb-4 border border-orange-400/30">
                    <Icon className="w-7 h-7 text-orange-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action - Full Screen */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden snap-start snap-always" style={{ scrollSnapAlign: "start" }}>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-0" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <Star className="w-16 h-16 text-orange-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Experience <span className="bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent">Quality</span> That Matters
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Join thousands of satisfied customers who trust A1 Iron & Steel for their quality needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
                  window.location.href = `${basePath}/contactus/`;
                }}
                className="group bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2"
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
                className="group border-2 border-white/30 text-white px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>About Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
