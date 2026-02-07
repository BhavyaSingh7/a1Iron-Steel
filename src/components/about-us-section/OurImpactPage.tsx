"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  X,
  Globe,
  Building2,
  Users,
  Leaf,
  Zap,
  Target,
  ChevronDown,
  Sparkles,
  Check,
} from "lucide-react";

interface OurImpactPageProps {
  onClose?: () => void;
}

const impactAreas = [
  {
    id: "industrial",
    icon: Building2,
    title: "Industrial Growth",
    shortLabel: "Industry",
    description:
      "Contributing to Rwanda's industrial development and creating a robust steel manufacturing sector that supports infrastructure and construction.",
    color: "from-blue-500 to-blue-700",
    borderColor: "border-blue-500/50",
    bgGlow: "bg-blue-500/20",
  },
  {
    id: "community",
    icon: Users,
    title: "Community & Employment",
    shortLabel: "Community",
    description:
      "Creating meaningful employment opportunities and supporting local communities through sustainable business practices and skills development.",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-500/50",
    bgGlow: "bg-orange-500/20",
  },
  {
    id: "environment",
    icon: Leaf,
    title: "Environmental Responsibility",
    shortLabel: "Environment",
    description:
      "Committed to environmentally responsible steel manufacturing, reducing our footprint and supporting a sustainable future for Rwanda and the region.",
    color: "from-green-500 to-emerald-600",
    borderColor: "border-green-500/50",
    bgGlow: "bg-green-500/20",
  },
  {
    id: "regional",
    icon: Globe,
    title: "Regional Reach",
    shortLabel: "Regional",
    description:
      "Making a meaningful difference in Rwanda and beyond through excellence in steel manufacturing and sustainable practices across East Africa.",
    color: "from-cyan-500 to-blue-600",
    borderColor: "border-cyan-500/50",
    bgGlow: "bg-cyan-500/20",
  },
  {
    id: "innovation",
    icon: Zap,
    title: "Innovation & Excellence",
    shortLabel: "Innovation",
    description:
      "Driving innovation in steel production and delivering high-quality products that meet the demands of construction, manufacturing, and infrastructure.",
    color: "from-purple-500 to-pink-600",
    borderColor: "border-purple-500/50",
    bgGlow: "bg-purple-500/20",
  },
  {
    id: "longterm",
    icon: Target,
    title: "Long-term Impact",
    shortLabel: "Long-term",
    description:
      "Building lasting value for stakeholders, the economy, and future generations through responsible growth and unwavering commitment to quality.",
    color: "from-indigo-500 to-purple-600",
    borderColor: "border-indigo-500/50",
    bgGlow: "bg-indigo-500/20",
  },
];

export default function OurImpactPage({ onClose }: OurImpactPageProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [hasRevealed, setHasRevealed] = useState(false);
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleClose = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/?skipIntro=true`;
    if (onClose) onClose();
  };

  const toggleSelect = (id: string) => {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else if (next.size < 3) next.add(id);
      return next;
    });
  };

  const handleReveal = () => {
    if (selectedIds.size === 0) return;
    setHasRevealed(true);
    const el = document.getElementById("impact-details");
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    setProgress((selectedIds.size / 3) * 100);
  }, [selectedIds]);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const selectedAreas = impactAreas.filter((a) => selectedIds.has(a.id));

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 z-50 overflow-y-auto">
      {/* Animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(32,132,177,0.08),transparent_50%)]" />
      </div>

      {/* Header */}
      <motion.header
        className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-xl border-b border-white/10 z-30"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          <button
            onClick={handleClose}
            className="flex items-center space-x-2 text-white/90 hover:text-orange-400 transition-all duration-200 font-medium group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Home</span>
          </button>
          <button
            onClick={handleClose}
            className="p-2 text-white/90 hover:text-orange-400 transition-all duration-200 rounded-xl hover:bg-white/10"
            aria-label="Close"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </motion.header>

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 pt-20 pb-20 md:pt-24 md:pb-24">
        <motion.div
          className="relative max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 text-center w-full"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-medium text-white/90">
              Our Impact
            </span>
          </motion.div>
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-5 leading-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="bg-gradient-to-r from-blue-400 via-orange-400 to-blue-400 bg-clip-text text-transparent">
              Making a Meaningful
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
              Difference
            </span>
          </motion.h1>
          <div className="w-16 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-6" />
          <motion.p
            className="text-lg sm:text-xl text-white/80 max-w-2xl mx-auto mb-4 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            In Rwanda and beyond through excellence in steel manufacturing and
            sustainable practices.
          </motion.p>
          <motion.p
            className="text-sm sm:text-base text-white/60 max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Choose up to 3 impact areas below that matter most to you —
            we&apos;ll show how A1 Iron & Steel is creating change there.
          </motion.p>
        </motion.div>
      </section>

      {/* Interactive: Choose Your Impact */}
      <section className="relative min-h-screen flex flex-col items-center justify-center z-10 pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-10 w-full flex flex-col items-center">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Choose your <span className="text-orange-400">impact</span>
          </motion.h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-5" />
          <motion.p
            className="text-white/70 text-center mb-8 max-w-md mx-auto text-sm sm:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Tap or click up to 3 areas. Then hit &quot;See my impact&quot; to
            get a tailored view.
          </motion.p>

          {/* Progress bar */}
          <motion.div
            className="w-full max-w-sm h-2 bg-white/10 rounded-full overflow-hidden mx-auto mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 20 }}
            />
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 mb-10 w-full">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              const isSelected = selectedIds.has(area.id);
              return (
                <motion.button
                  key={area.id}
                  type="button"
                  onClick={() => toggleSelect(area.id)}
                  className={`relative rounded-xl sm:rounded-2xl p-4 sm:p-5 border-2 text-left transition-all duration-300 overflow-hidden group ${
                    isSelected
                      ? `${area.borderColor} ${area.bgGlow} shadow-lg scale-[1.02]`
                      : "border-white/10 bg-white/5 hover:border-white/20 hover:bg-white/10"
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSelected && (
                    <motion.div
                      className="absolute top-2 right-2 w-6 h-6 rounded-full bg-green-500 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 15,
                      }}
                    >
                      <Check className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                  <div
                    className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-br ${area.color} flex items-center justify-center mb-2.5 sm:mb-3 group-hover:scale-105 transition-transform flex-shrink-0`}
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-white block leading-tight">
                    {area.shortLabel}
                  </span>
                </motion.button>
              );
            })}
          </div>

          <motion.div
            className="text-center mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.button
              type="button"
              onClick={handleReveal}
              disabled={selectedIds.size === 0}
              className="px-8 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-orange-500/25 text-sm sm:text-base"
              whileHover={selectedIds.size > 0 ? { scale: 1.05 } : {}}
              whileTap={selectedIds.size > 0 ? { scale: 0.98 } : {}}
            >
              See my impact
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Personalized result + expandable cards */}
      <section
        id="impact-details"
        className="relative min-h-screen flex flex-col justify-center z-10 pt-20 pb-20 md:pt-24 md:pb-24"
      >
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-10 w-full">
          <AnimatePresence>
            {hasRevealed && selectedAreas.length > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-10"
              >
                <motion.div
                  className="text-center p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-white/90 text-base sm:text-lg mb-2">
                    Your impact priorities:
                  </p>
                  <p className="text-orange-400 font-semibold text-lg sm:text-xl mb-3">
                    {selectedAreas.map((a) => a.title).join(" · ")}
                  </p>
                  <p className="text-white/70 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                    Here&apos;s how A1 Iron & Steel is creating lasting value in
                    these areas. Tap a card to expand.
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.h2
            className="text-xl sm:text-2xl md:text-3xl font-bold text-white text-center mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore <span className="text-orange-400">impact</span> areas
          </motion.h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-orange-500 to-orange-400 rounded-full mx-auto mb-8" />

          <div className="space-y-3 sm:space-y-4">
            {impactAreas.map((area, index) => {
              const Icon = area.icon;
              const isExpanded = expandedId === area.id;
              return (
                <motion.div
                  key={area.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="rounded-xl sm:rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedId(isExpanded ? null : area.id)}
                    className="w-full flex items-center gap-4 p-4 sm:p-5 text-left hover:bg-white/5 transition-colors"
                  >
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br ${area.color} flex items-center justify-center flex-shrink-0`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg font-bold text-white mb-0.5">
                        {area.title}
                      </h3>
                      <p className="text-white/70 text-xs sm:text-sm line-clamp-2 leading-snug">
                        {area.description}
                      </p>
                    </div>
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0 text-white/60"
                    >
                      <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6" />
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/10"
                      >
                        <div className="p-4 sm:p-5 pt-3 bg-white/5">
                          <p className="text-white/90 text-sm sm:text-base leading-relaxed">
                            {area.description}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-screen flex flex-col items-center justify-center border-t border-white/10 z-10 pt-20 pb-20 md:pt-24 md:pb-24">
        <div className="max-w-xl mx-auto px-6 sm:px-8 text-center">
          <p className="text-base sm:text-lg text-white/90 mb-8 leading-relaxed">
            Join us in building a stronger, more sustainable future.
          </p>
          <motion.button
            onClick={handleClose}
            className="px-8 py-3.5 sm:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl sm:rounded-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Back to Home
          </motion.button>
        </div>
      </section>
    </div>
  );
}
