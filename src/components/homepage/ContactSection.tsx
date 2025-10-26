"use client";

import { motion } from "framer-motion";
import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      description: "Call us for immediate assistance",
      details: ["+250 788 123 456", "+250 789 987 654"],
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us your inquiries",
      details: ["info@a1ironsteel.rw", "sales@a1ironsteel.rw"],
    },
    {
      icon: MapPin,
      title: "Address",
      description: "Visit our manufacturing facility",
      details: ["Kigali Industrial Zone", "Rwanda, East Africa"],
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-16"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/20 to-orange-600/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/20 to-blue-600/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8 lg:mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-orange-500 font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3"
          >
            {/* GET IN TOUCH */}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 sm:mb-3"
            style={{
              textShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
            }}
            style={{
              textShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
            }}
          >
            Let&apos;s Connect
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-2 sm:mb-3 md:mb-4"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
          >
            Ready to discuss your steel requirements? Get in touch with our team
            for personalized solutions and expert guidance.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-3 sm:space-y-4"
          >
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                Contact Information
              </h3>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-2 sm:mb-3" />
            </div>

            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 + index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 hover:bg-white/15"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">
                      {contact.title}
                    </h4>
                    <p className="text-gray-300 text-xs mb-0.5 sm:mb-1">
                      {contact.description}
                    </p>
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-200 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 text-xs sm:text-sm"
                      required
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    viewport={{ once: true }}
                  >
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 text-xs sm:text-sm"
                      required
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.0 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 text-xs sm:text-sm"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  viewport={{ once: true }}
                >
                  <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    Your Message
                  </label>
                  <textarea
                    placeholder="Tell us about your project requirements..."
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 resize-none text-xs sm:text-sm"
                    required
                  ></textarea>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  viewport={{ once: true }}
                  className="pt-1 sm:pt-2"
                >
                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 sm:py-3 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    style={{
                      boxShadow: "0 0 30px rgba(249, 115, 22, 0.3)",
                    }}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      <span>Send Message</span>
                      <motion.svg
                        className="w-4 h-4 sm:w-5 sm:h-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                      </motion.svg>
                    </span>
                  </motion.button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
