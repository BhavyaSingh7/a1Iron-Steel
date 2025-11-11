"use client";

import { motion } from "framer-motion";
import React from "react";
import {
  CheckCircle,
  Users,
  Shield,
  Zap,
  Trees,
  Leaf,
  Recycle,
} from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-y-auto py-16 sm:py-20 lg:py-24 bg-white pb-0"
      aria-label="About A1 Iron and Steel company information"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold logo-blue-gradient mb-4 sm:mb-6 tracking-wide"
            style={{ letterSpacing: "0.03em" }}
          >
            ABOUT US
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="w-20 sm:w-24 h-0.5 logo-orange-bg mx-auto mb-6 sm:mb-8"
          />
        </motion.div>

        {/* Single Column Layout - Centered */}
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Company Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 sm:p-8 shadow-lg border border-gray-100"
              style={{
                boxShadow:
                  "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 4px 10px -2px rgba(0, 0, 0, 0.05)",
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                viewport={{ once: true }}
                className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed"
              >
                A1 Iron & Steel Rwanda Limited stands as a beacon of excellence
                in the steel manufacturing industry. With{" "}
                <span className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-orange-500">
                  unwavering commitment to quality and innovation
                </span>
                , we combine cutting-edge technology with traditional
                craftsmanship, delivering steel products known for precision,
                durability, and sustainability.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Leadership Excellence Components */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8 md:space-y-12"
          >
            <div className="text-center">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">
                Leadership Excellence
              </h3>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-2 sm:mb-3 md:mb-4" />
              <p className="text-orange-500 font-medium text-sm sm:text-base md:text-lg">
                Driving innovation and excellence in steel manufacturing
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6"
            >
              {/* Component 1: Vision & Strategy */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Vision
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Inspiring teams and driving innovation for excellence
                </p>
              </div>

              {/* Component 2: Team Excellence */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Excellence
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Industry-leading performance and customer satisfaction
                </p>
              </div>

              {/* Component 3: Integrity & Values */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Integrity
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Building trust through transparency and ethical practices
                </p>
              </div>

              {/* Component 4: Innovation & Technology */}
              <div className="bg-white rounded-lg p-4 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 text-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto">
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Innovation
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Efficient steel production and competitive edge
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Sustainability Section - 100,000 Plants Initiative */}
          <motion.div
            id="sustainability"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="relative mt-12 sm:mt-16 md:mt-20 py-8 sm:py-10 md:py-12 flex items-center justify-center overflow-hidden"
          >
            <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-center mb-6 sm:mb-8"
              >
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: 0.2,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl mb-4 sm:mb-6 shadow-xl"
                >
                  <Trees className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                </motion.div>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-gray-900 mb-4 sm:mb-6 tracking-wide"
                  style={{ letterSpacing: "0.03em" }}
                >
                  Our Green Commitment
                </motion.h3>
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "100px" }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="h-1.5 mx-auto mb-6 rounded-full"
                  style={{ background: "var(--logo-blue-gradient)" }}
                />
              </motion.div>

              {/* Main Layout: Two Column */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-stretch mb-4 sm:mb-6">
                {/* Left Side: Planting Target */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="order-2 lg:order-1 w-full flex"
                >
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 sm:p-8 shadow-sm border border-green-100 relative overflow-hidden w-full flex flex-col">
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/20 rounded-full blur-3xl -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-200/20 rounded-full blur-2xl -ml-12 -mb-12" />

                    <div className="relative z-10 w-full flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4 sm:mb-5">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                          <Leaf className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                        </div>
                        <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                          Planting Target
                        </h4>
                      </div>

                      <div className="mb-4 sm:mb-5 w-full overflow-hidden">
                        <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black logo-blue-gradient bg-clip-text text-transparent mb-2 sm:mb-3 leading-tight break-words">
                          100,000
                        </div>
                        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-3">
                          Trees at Our Facility
                        </p>
                        <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed">
                          Creating a sustainable future for generations to come
                        </p>
                      </div>

                      {/* Progress indicator */}
                      <div className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t-2 border-green-200/50">
                        <div className="flex items-center justify-between mb-2 gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-gray-700 truncate">
                            Environmental Impact
                          </span>
                          <span className="text-xs sm:text-sm font-bold text-green-600 flex-shrink-0">
                            100%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "100%" }}
                            transition={{
                              duration: 0.8,
                              delay: 0.5,
                              ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                            className="h-full bg-gradient-to-r from-green-500 to-emerald-600 rounded-full"
                          />
                        </div>
                      </div>

                      {/* Call to Action */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.7 }}
                        viewport={{ once: true }}
                        className="mt-auto pt-6 sm:pt-8 border-t-2 border-green-200/50"
                      >
                        <p className="text-xs sm:text-sm md:text-base text-gray-700 font-medium text-center leading-relaxed break-words">
                          Join us in building a sustainable future through{" "}
                          <span className="font-bold text-green-600">
                            responsible manufacturing
                          </span>{" "}
                          and{" "}
                          <span className="font-bold text-emerald-600">
                            environmental stewardship
                          </span>
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>

                {/* Right Side: Features Grid */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="order-1 lg:order-2 w-full flex flex-col"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-5 w-full flex-grow">
                    {/* Carbon Offset */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.03,
                        y: -8,
                        transition: { duration: 0.3 },
                      }}
                      className="bg-white rounded-lg p-5 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group w-full flex-shrink-0"
                      style={{
                        boxShadow:
                          "0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 logo-blue-bg rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Recycle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Carbon Offset
                          </h5>
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed break-words">
                            Significantly reducing our carbon footprint through
                            strategic reforestation initiatives
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Green Manufacturing */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.7 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.03,
                        y: -8,
                        transition: { duration: 0.3 },
                      }}
                      className="bg-white rounded-lg p-5 sm:p-6 shadow-md border border-gray-100 hover:shadow-lg hover:border-gray-200 transition-all duration-300 group w-full flex-shrink-0"
                      style={{
                        boxShadow:
                          "0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
                      }}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 logo-orange-bg rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Green Manufacturing
                          </h5>
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed break-words">
                            Sustainable practices integrated into every aspect
                            of our production operations
                          </p>
                        </div>
                      </div>
                    </motion.div>

                    {/* Legacy Impact */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.8 }}
                      viewport={{ once: true }}
                      whileHover={{
                        scale: 1.03,
                        y: -8,
                        transition: { duration: 0.3 },
                      }}
                      className="bg-white rounded-lg p-5 sm:p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300 group sm:col-span-2 lg:col-span-1 w-full flex-shrink-0"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 logo-primary-bg rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                          <Trees className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h5 className="text-base sm:text-lg md:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                            Legacy Impact
                          </h5>
                          <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed break-words">
                            Leaving a greener planet for future generations
                            through our unwavering commitment to environmental
                            stewardship
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
