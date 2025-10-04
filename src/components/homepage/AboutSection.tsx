"use client";

import { motion } from "framer-motion";
import React from "react";
import { CheckCircle, Users, Shield, Zap } from "lucide-react";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-y-auto py-8 sm:py-12 lg:py-16 bg-gradient-to-br from-gray-50 to-white"
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
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-gray-900 mb-2 sm:mb-3"
          >
            ABOUT US
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-2 sm:mb-3"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg text-orange-500 font-medium"
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
        </div>

        {/* Bottom spacing */}
        <div className="h-8 sm:h-12 md:h-16 lg:h-20"></div>
      </div>
    </section>
  );
}
