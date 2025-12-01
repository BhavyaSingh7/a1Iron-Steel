"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  X,
  Trees,
  Leaf,
  Recycle,
  Sprout,
  Globe,
  Droplets,
  Wind,
  Sun,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

interface SustainabilityPageProps {
  onClose?: () => void;
}

export default function SustainabilityPage({
  onClose,
}: SustainabilityPageProps) {
  const handleClose = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/?skipIntro=true`;
    if (onClose) {
      onClose();
    }
  };

  // Disable body scroll when this page is open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const sustainabilityFeatures = [
    {
      icon: Recycle,
      title: "Carbon Offset",
      description:
        "Significantly reducing our carbon footprint through strategic reforestation initiatives and sustainable manufacturing processes.",
      color: "from-blue-500 to-cyan-600",
      gradient: "from-blue-500/20 via-cyan-600/10 to-transparent",
    },
    {
      icon: Leaf,
      title: "Green Manufacturing",
      description:
        "Sustainable practices integrated into every aspect of our production operations, minimizing environmental impact while maximizing efficiency.",
      color: "from-green-500 to-emerald-600",
      gradient: "from-green-500/20 via-emerald-600/10 to-transparent",
    },
    {
      icon: Trees,
      title: "Legacy Impact",
      description:
        "Leaving a greener planet for future generations through our unwavering commitment to environmental stewardship and responsible business practices.",
      color: "from-emerald-500 to-teal-600",
      gradient: "from-emerald-500/20 via-teal-600/10 to-transparent",
    },
    {
      icon: Droplets,
      title: "Water Conservation",
      description:
        "Advanced water management systems ensuring efficient use and recycling of water resources throughout our manufacturing processes.",
      color: "from-cyan-500 to-blue-600",
      gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    },
    {
      icon: Wind,
      title: "Renewable Energy",
      description:
        "Transitioning to renewable energy sources to power our facilities, reducing dependence on fossil fuels and lowering emissions.",
      color: "from-purple-500 to-pink-600",
      gradient: "from-purple-500/20 via-pink-600/10 to-transparent",
    },
    {
      icon: Sun,
      title: "Energy Efficiency",
      description:
        "Optimizing energy consumption through modern equipment and smart manufacturing practices that reduce waste and improve efficiency.",
      color: "from-orange-500 to-yellow-600",
      gradient: "from-orange-500/20 via-yellow-600/10 to-transparent",
    },
  ];

  const impactMetrics = [
    {
      icon: Trees,
      value: "100,000",
      label: "Trees Target",
      description: "Trees to be planted at our facility",
      color: "from-green-500 to-emerald-600",
      gradient: "from-green-500/20 via-emerald-600/10 to-transparent",
    },
    {
      icon: TrendingUp,
      value: "50%",
      label: "Carbon Reduction",
      description: "Reduction in carbon footprint",
      color: "from-blue-500 to-cyan-600",
      gradient: "from-blue-500/20 via-cyan-600/10 to-transparent",
    },
    {
      icon: Recycle,
      value: "90%",
      label: "Waste Recycled",
      description: "Manufacturing waste recycled",
      color: "from-purple-500 to-pink-600",
      gradient: "from-purple-500/20 via-pink-600/10 to-transparent",
    },
    {
      icon: Droplets,
      value: "75%",
      label: "Water Saved",
      description: "Water conservation through recycling",
      color: "from-cyan-500 to-blue-600",
      gradient: "from-cyan-500/20 via-blue-600/10 to-transparent",
    },
  ];

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-green-50/30 to-white z-50 overflow-y-auto">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }} />
      </div>

      {/* Header */}
      <div className="sticky top-0 bg-white/80 backdrop-blur-xl border-b border-gray-200/50 shadow-lg z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleClose}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#f1852e] transition-all duration-200 font-medium group"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-gray-700 hover:text-[#f1852e] transition-all duration-200 rounded-lg hover:bg-gray-100 hover:scale-110"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
        
        <motion.div
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-green-100/80 backdrop-blur-md rounded-full border border-green-200/50 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sprout className="w-4 h-4 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Environmental Stewardship</span>
          </motion.div>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-green-600 via-emerald-600 to-green-600 bg-clip-text text-transparent">
              Our Green
            </span>
            <br />
            <span className="bg-gradient-to-r from-emerald-600 via-green-600 to-emerald-600 bg-clip-text text-transparent">
              Commitment
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl sm:text-2xl md:text-3xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Building a sustainable future through{" "}
            <span className="text-green-600 font-semibold">responsible manufacturing</span> and{" "}
            <span className="text-emerald-600 font-semibold">environmental stewardship</span>
          </motion.p>
        </motion.div>
      </section>

      {/* Main Target Section */}
      <section className="py-16 sm:py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left: Target Card */}
            <motion.div
              className="bg-gradient-to-br from-green-50 via-emerald-50 to-green-50 rounded-3xl p-8 sm:p-10 shadow-2xl border-2 border-green-200/50 relative overflow-hidden"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-green-200/20 rounded-full blur-3xl -mr-32 -mt-32" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-emerald-200/20 rounded-full blur-2xl -ml-24 -mb-24" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-xl">
                    <Trees className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                    Planting Target
                  </h3>
                </div>

                <div className="mb-6">
                  <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 leading-tight">
                    100,000
                  </div>
                  <p className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
                    Trees at Our Facility
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Creating a sustainable future for generations to come through our commitment to reforestation and environmental responsibility.
                  </p>
                </div>

                {/* Progress indicator */}
                <div className="pt-6 border-t-2 border-green-200/50">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-semibold text-gray-700">
                      Environmental Impact
                    </span>
                    <span className="text-sm font-bold text-green-600">
                      100%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right: Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {sustainabilityFeatures.slice(0, 3).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:border-green-200 transition-all duration-300 group hover:scale-105"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold text-gray-900 mb-2">
                          {feature.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Metrics Section */}
      <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-green-50/30 to-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.05),transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-block mb-4">
              <div className="w-20 h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent rounded-full" />
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from our commitment to sustainability
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {impactMetrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${metric.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${metric.color} flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                      {metric.value}
                    </div>
                    <div className="text-xl font-semibold text-gray-800 mb-2">
                      {metric.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {metric.description}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Sustainability Features */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Sustainability</span> Initiatives
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive environmental programs integrated throughout our operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sustainabilityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="relative bg-white rounded-3xl p-8 border border-gray-200 hover:border-green-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl overflow-hidden group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {/* Animated Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 md:py-28 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/50 to-white" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
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
              <Globe className="w-16 h-16 text-green-600" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Join Us in Building a{" "}
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                Sustainable Future
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Together, we can create a greener planet for future generations through responsible manufacturing and environmental stewardship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={() => {
                  const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
                  window.location.href = `${basePath}/contactus/`;
                }}
                className="group bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-full font-bold shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2"
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
                className="group border-2 border-green-600 text-green-700 px-10 py-4 rounded-full font-bold hover:bg-green-50 transition-all duration-300 hover:scale-110 flex items-center justify-center gap-2"
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

