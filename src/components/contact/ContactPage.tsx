"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

interface ContactPageProps {
  onClose: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", number: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+250 790 060 555", "+250 795 555 555"],
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["a1steelrwanda@gmail.com"],
      color: "from-green-500 to-green-600",
    },
    {
      icon: MapPin,
      title: "Office Locations",
      details: ["2nd Floor, BPR Tower, Kigali", "Musanze Industrial Park"],
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
      ],
      color: "from-purple-500 to-purple-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto">
      {/* Header */}
      <motion.div
        className="sticky top-0 z-10 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-white/70 text-lg mt-2">
                Get in touch with A1 Iron & Steel Rwanda
              </p>
            </motion.div>
            <motion.button
              onClick={onClose}
              className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-orange-400/50"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <X className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-300" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Introduction Section */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get In Touch
          </motion.h2>
          <motion.p
            className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <strong className="text-orange-400">A1 Iron & Steel</strong> is
            built on a foundation of quality, innovation, and dedication to the
            iron and steel industry. As a trusted provider, we offer
            high-quality metal products designed to meet the demands of the
            construction, engineering, and infrastructure sectors.
          </motion.p>
          <motion.p
            className="text-lg text-white/70 mt-4 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <strong className="text-orange-400">Reach out to us</strong>, and
            one of our representatives will get back to you shortly.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></span>
              Contact Information
            </h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-500"
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.1)",
                  }}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className={`p-3 rounded-xl bg-gradient-to-r ${info.color} shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                        {info.title}
                      </h4>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <motion.p
                            key={detailIndex}
                            className="text-white/80 hover:text-white transition-colors duration-300"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            {detail}
                          </motion.p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center">
              <span className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></span>
              Leave Us a Message
            </h3>
            <motion.form
              onSubmit={handleSubmit}
              className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <div className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your full name"
                  />
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.1 }}
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </motion.div>

                {/* Phone Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 }}
                >
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    name="number"
                    value={formData.number}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="+250 XXX XXX XXX"
                  />
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white/90 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 }}
                >
                  <span className="flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full mr-3"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </motion.button>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    className="flex items-center p-4 bg-green-500/20 border border-green-500/50 rounded-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    <span className="text-green-300 font-medium">
                      Thank you! Your message has been sent successfully.
                      We&apos;ll get back to you shortly.
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="flex items-center p-4 bg-red-500/20 border border-red-500/50 rounded-xl"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AlertCircle className="w-5 h-5 text-red-400 mr-3" />
                    <span className="text-red-300 font-medium">
                      Sorry, there was an error sending your message. Please try
                      again.
                    </span>
                  </motion.div>
                )}
              </div>
            </motion.form>
          </motion.div>
        </div>

        {/* Footer Message */}
        <motion.div
          className="text-center mt-16 p-8 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl border border-orange-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Thank you for choosing A1 Iron & Steel
          </h3>
          <p className="text-white/80 text-lg">
            Your trusted partner in strength and progress!
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};
