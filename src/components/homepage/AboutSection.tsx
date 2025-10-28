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
      className="relative min-h-screen flex items-center justify-center overflow-y-auto py-8 sm:py-12 lg:py-16 logo-gray-bg"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 md:mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold logo-blue-gradient mb-2 sm:mb-3"
          >
            ABOUT US
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-16 sm:w-20 h-1 logo-orange-bg mx-auto mb-2 sm:mb-3"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg logo-orange-gradient font-medium"
          >
            {/* ABOUT US */}
          </motion.p>
        </motion.div>

        {/* Single Column Layout - Centered */}
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-4xl mx-auto">
          {/* Company Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-6 sm:mb-8 md:mb-12"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 shadow-xl border border-gray-100"
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
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
            transition={{ duration: 0.8, delay: 0.8 }}
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

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
              {/* Component 1: Vision & Strategy */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto"
                >
                  <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Vision
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Inspiring teams and driving innovation for excellence
                </p>
              </motion.div>

              {/* Component 2: Team Excellence */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto"
                >
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Excellence
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Industry-leading performance and customer satisfaction
                </p>
              </motion.div>

              {/* Component 3: Integrity & Values */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto"
                >
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Integrity
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Building trust through transparency and ethical practices
                </p>
              </motion.div>

              {/* Component 4: Innovation & Technology */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.4 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300 text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mb-2 sm:mb-3 mx-auto"
                >
                  <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </motion.div>
                <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                  Innovation
                </h4>
                <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                  Efficient steel production and competitive edge
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Sustainability Section - 100,000 Plants Initiative */}
          <motion.div
            id="sustainability"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative mt-12 sm:mt-16 md:mt-20 min-h-screen flex items-center justify-center overflow-hidden"
          >
            {/* Main Sustainability Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl w-full mx-auto bg-white/90 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border border-gray-100 relative overflow-hidden"
            >
              {/* Background decorative elements */}
              <div
                className="absolute inset-0 opacity-40 -z-10"
                style={{ background: "var(--logo-primary-gradient)" }}
              />
              <div className="absolute inset-0 bg-white/70 -z-10" />

              <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-6 sm:mb-8">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
                    viewport={{ once: true }}
                    className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full mb-4 sm:mb-6"
                  >
                    <Trees className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </motion.div>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 1.0 }}
                    viewport={{ once: true }}
                    className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
                  >
                    Our Green Commitment
                  </motion.h3>
                  <div
                    className="w-20 sm:w-24 h-1 mx-auto mb-4"
                    style={{ background: "var(--logo-blue-gradient)" }}
                  />
                </div>

                {/* Main Target - 100,000 Plants */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  viewport={{ once: true }}
                  className="text-center mb-8 sm:mb-12"
                >
                  <div className="inline-block bg-white/85 backdrop-blur-sm rounded-2xl sm:rounded-3xl px-6 sm:px-10 md:px-14 py-6 sm:py-10 shadow-lg border border-gray-100">
                    <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4">
                      <Leaf className="w-8 h-8 sm:w-10 sm:h-10 text-green-600" />
                      <h4 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-700">
                        Planting Target
                      </h4>
                    </div>
                    <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold logo-blue-gradient bg-clip-text text-transparent mb-2 sm:mb-3">
                      100,000
                    </div>
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 sm:mb-3">
                      Trees at Our Facility
                    </p>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600">
                      Creating a sustainable future for generations to come
                    </p>
                  </div>
                </motion.div>

                {/* Sustainability Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                  {/* Carbon Reduction */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 logo-blue-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Recycle className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h5 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                      Carbon Offset
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Significantly reducing our carbon footprint through
                      reforestation
                    </p>
                  </motion.div>

                  {/* Eco-Friendly Manufacturing */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 logo-orange-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Leaf className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h5 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                      Green Manufacturing
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Sustainable practices integrated into every aspect of our
                      operations
                    </p>
                  </motion.div>

                  {/* Future Generations */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.8 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 logo-primary-bg rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                      <Trees className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <h5 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                      Legacy Impact
                    </h5>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      Leaving a greener planet for future generations through
                      our commitment
                    </p>
                  </motion.div>
                </div>

                {/* Call to Action */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 2.0 }}
                  viewport={{ once: true }}
                  className="mt-8 sm:mt-10 md:mt-12 text-center"
                >
                  <p className="text-sm sm:text-base md:text-lg text-gray-700 font-medium">
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
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom spacing */}
        <div className="h-8 sm:h-12 md:h-16 lg:h-20"></div>
      </div>
    </section>
  );
}
