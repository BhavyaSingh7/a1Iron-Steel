"use client";

import { motion } from "framer-motion";
import React from "react";
import { ArrowLeft, X } from "lucide-react";

interface AboutUsPageProps {
  onClose: () => void;
}

export default function AboutUsPage({ onClose }: AboutUsPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-white z-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={onClose}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors group"
              whileHover={{ x: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </motion.button>
            <motion.button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-full hover:bg-gray-100"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 sm:py-20 md:py-24 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-5xl mx-auto"
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
            >
              Get To Know Us
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <strong className="text-gray-900">A1 Iron & Steel</strong> is a
              company dedicated to quality and innovation in the iron and steel
              industry. With decades of experience, we provide high-quality,
              precision-engineered steel solutions for sectors like
              construction, engineering, and infrastructure worldwide.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            >
              The company is driven by a passionate team that combines advanced
              technology with traditional craftsmanship. Our steel products are
              known for precision, durability, and sustainability. A1 Iron &
              Steel views steel as a catalyst for growth, contributing to iconic
              structures like skyscrapers and bridges while prioritizing
              environmentally responsible practices.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Factory Images */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16"
          >
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Factory
              </motion.h3>
              <motion.div
                className="relative rounded-2xl h-64 sm:h-80 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                whileHover={{ scale: 1.02, rotateY: 5 }}
                transition={{ duration: 0.5 }}
              >
                <motion.video
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.0 }}
                  whileHover={{ scale: 1.1 }}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35571b2cdfd&profile_id=165&oauth2_token_id=57447761"
                    type="video/mp4"
                  />
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </motion.video>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 text-white font-semibold text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                >
                  Industrial Steel Mill
                </motion.div>
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              <motion.h3
                className="text-2xl sm:text-3xl font-bold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                Making of steel
              </motion.h3>
              <motion.div
                className="relative rounded-2xl h-64 sm:h-80 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
                whileHover={{ scale: 1.02, rotateY: -5 }}
                transition={{ duration: 0.5 }}
              >
                <motion.video
                  className="w-full h-full object-cover"
                  initial={{ scale: 1.1, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.2 }}
                  whileHover={{ scale: 1.1 }}
                  autoPlay
                  muted
                  loop
                  playsInline
                >
                  <source
                    src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35571b2cdfd&profile_id=165&oauth2_token_id=57447761"
                    type="video/mp4"
                  />
                  <source
                    src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </motion.video>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-orange-900/30 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 text-white font-semibold text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.6 }}
                >
                  Steel Making Process
                </motion.div>
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-orange-500 rounded-full"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.8 }}
                >
                  <motion.div
                    className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <svg
                      className="w-8 h-8 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              </motion.div>
              <motion.button
                className="bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.8 }}
              >
                Click Here
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Excellence */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="max-w-5xl mx-auto text-center"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              Leadership Excellence
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-12 font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Exemplary leadership that transforms challenges into
              opportunities.
            </motion.p>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed text-left">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
              >
                At A1 Iron & Steel, we believe that true leadership is defined
                by more than just making decisions—it&apos;s about inspiring teams,
                driving innovation, and fostering an environment where
                excellence thrives. Our leadership is the driving force behind
                our continued success, setting the standard for industry-leading
                performance, sustainability, and customer satisfaction.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              >
                We take pride in a management team that exemplifies the values
                of integrity, vision, and strategic foresight. The company aims
                to produce economical and efficient steel through backward and
                forward integration. Each leader within our organization is
                committed not only to operational excellence but also to
                creating a culture of collaboration, trust, and empowerment.
                Their collective experience spans decades across diverse
                industries, ensuring that our company remains at the forefront
                of innovation and competitive edge.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Statement */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-center mb-16 sm:mb-20"
          >
            <motion.div
              className="text-sm font-medium text-orange-500 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* MISSION VISION STATEMENT */}
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Why we do what we do
            </motion.h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Mission
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm sm:text-base">
                <p>
                  1. At A1, our mission is to forge the future by producing
                  innovative, high-quality iron and steel products that shape
                  industries, drive sustainability, and support the development
                  of resilient infrastructures worldwide.
                </p>
                <p>
                  2. We are committed to advancing technology, ensuring
                  environmental responsibility, and empowering our partners
                  through customized, reliable solutions.
                </p>
                <p>
                  3. By blending tradition with innovation, we aim to build
                  stronger communities, elevate industries, and lay the
                  groundwork for a more sustainable tomorrow, one alloy at a
                  time.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                To forge a world of possibility, where the strength of our steel
                builds not just structures, but communities, industries, and a
                sustainable future. We aspire to be the catalyst for progress,
                shaping a global landscape where innovation, resilience, and
                environmental harmony go hand in hand, creating a legacy that
                lasts for generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long-term Achievement */}
      <section className="py-16 sm:py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="max-w-5xl mx-auto"
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8 sm:mb-12 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            >
              Laying the groundwork for long-term achievement
            </motion.h2>
            <div className="space-y-6 sm:space-y-8 text-base sm:text-lg text-gray-600 leading-relaxed">
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
              >
                The company has a well spread out installed Steel capacity of
                0.250 MTPA prudently spread over SMS, TMT Bars Mills, Strip
                Mill, Medium and Light Structural Mill and Wire Rod Mill & ERW
                Pipe Plant.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
              >
                Alongside contributing to Rwanda&apos;s growth story, the company is
                driving an ambitious global expansion plan with its sights set
                on emerging as a leading business group. The company aims to
                capitalize on opportunities in high growth markets, expanding
                into its core areas as well as diversifying into new businesses.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
              >
                From the flat products to a whole range of long products, A1 has
                a unique product portfolio that caters to markets across the
                steel value chain. A1 Iron and Steel aims to pioneer production
                of 100% value added steel products in the country.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
              >
                The company endeavors to strengthen Rwanda&apos;s industrial base by
                aiding infrastructural development through sustainable
                infrastructural development approaches and inclusive growth. It
                deploys its resources to improve infrastructure, education,
                health, water, sanitation, environment and so on in the areas it
                operates in.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A1 in Numbers */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-center mb-16 sm:mb-20"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              A1 in numbers
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {[
              { number: "2012", label: "The company was founded in 2012" },
              { number: "40+", label: "Creative thinkers and engineers" },
              { number: "16", label: "Countries we serve globally" },
              { number: "$2.8b", label: "Value of projects completed" },
              { number: "450m", label: "Tons of steel produced annually" },
              { number: "500+", label: "Projects completed successfully" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.6 + index * 0.1,
                  ease: "easeOut",
                }}
                className="text-center bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            className="text-center"
          >
            <motion.div
              className="text-sm font-medium text-orange-500 mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Contact US */}
            </motion.div>
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Get In Touch
            </motion.h2>
            <motion.p
              className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.0, ease: "easeOut" }}
            >
              Thank you for choosing A1 Iron & Steel as your trusted partner in
              strength and progress!
            </motion.p>

            {/* Contact Information */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
            >
              <div className="text-left bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Contacts
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    <strong>Phone:</strong> +250 790 060 555
                  </p>
                  <p>
                    <strong>Phone:</strong> +250 795 555 555
                  </p>
                  <p>
                    <strong>Email:</strong> a1steelrwanda@gmail.com
                  </p>
                  <p>
                    <strong>Address:</strong> 2nd Floor, BPR Tower, Kigali
                  </p>
                  <p>
                    <strong>Factory:</strong> Musanze Industrial Park
                  </p>
                </div>
              </div>

              <div className="text-left bg-white rounded-2xl p-6 sm:p-8 shadow-lg">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                  Useful Links
                </h3>
                <div className="space-y-2 text-gray-600">
                  <p>Home</p>
                  <p>About Us</p>
                  <p>Our Products</p>
                  <p>Contact Us</p>
                  <p>Request Quote</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4, ease: "easeOut" }}
            >
              <motion.button
                className="bg-orange-500 text-white px-8 py-4 rounded-full font-bold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Request Quote
              </motion.button>
              <motion.button
                className="border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
