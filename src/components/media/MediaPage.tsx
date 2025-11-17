"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  ArrowLeft,
  X,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  ExternalLink,
  Newspaper,
  FileText,
  TrendingUp,
  Heart,
  MessageCircle,
  Share2,
  Bookmark,
  ThumbsUp,
  Send,
} from "lucide-react";

interface MediaPageProps {
  onClose?: () => void;
}

export default function MediaPage({ onClose }: MediaPageProps) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/?skipIntro=true");
    if (onClose) {
      onClose();
    }
  };

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(
      `social-${sectionName.toLowerCase().replace(/\s+/g, "-")}`
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const articles = [
    {
      title:
        "Rwanda's First steel manufacturing plant through metal ores to be constructed",
      source: "RBA News Article",
      description:
        "Rwanda's First steel manufacturing plant through metal ores to be constructed",
      icon: Newspaper,
      color: "from-blue-600 to-blue-700",
      url: "https://www.youtube.com/watch?v=3Hhj5RCXhVA",
    },
    {
      title:
        "How Rwanda's first steel processing plant will impact the economy",
      source: "NewsTimes Article",
      description:
        "How Rwanda's first steel processing plant will impact the economy",
      icon: FileText,
      color: "from-green-600 to-green-700",
      url: "https://www.newtimes.co.rw/article/21687/news/rwanda/how-rwandas-first-steel-processing-plant-will-impact-economy",
    },
    {
      title:
        "Rwanda's industrial growth takes a step forward with the groundbreaking of A1 Iron and Steel Rwanda Ltd. in Musanze District",
      source: "RDB Post",
      description:
        "Rwanda's industrial growth takes a step forward with the groundbreaking of A1 Iron and Steel Rwanda Ltd. in @MusanzeDistrict",
      icon: TrendingUp,
      color: "from-orange-600 to-orange-700",
      url: "https://x.com/RDBrwanda/status/1854648216265830683",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://www.instagram.com/a1steelrwandaa/",
      icon: Instagram,
      color: "from-pink-500 via-red-500 to-orange-500",
      hoverColor: "hover:from-pink-600 hover:via-red-600 hover:to-orange-600",
      description: "Follow us for behind-the-scenes content and updates",
      followers: "Join our community",
      username: "@a1steelrwandaa",
    },
    {
      name: "Facebook",
      url: "https://www.facebook.com/profile.php?id=61581502731027",
      icon: Facebook,
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800",
      description: "Connect with us and stay updated on our latest news",
      followers: "Like our page",
      username: "A1 Iron & Steel Rwanda",
    },
    {
      name: "Twitter / X",
      url: "https://x.com/a1steelrwanda",
      icon: Twitter,
      color: "from-gray-900 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-700",
      description: "Get real-time updates and industry insights",
      followers: "Follow us",
      username: "@a1steelrwanda",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/a1-iron-steel-rwanda/?viewAsMember=true",
      icon: Linkedin,
      color: "from-blue-700 to-blue-600",
      hoverColor: "hover:from-blue-800 hover:to-blue-700",
      description: "Connect professionally and explore career opportunities",
      followers: "Connect with us",
      username: "A1 Iron & Steel Rwanda",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto"
      style={{
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* Header */}
      <div className="sticky top-0 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleClose}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#f1852e] transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-gray-700 hover:text-[#f1852e] transition-colors duration-200 rounded-lg hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section with Articles */}
      <section
        className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-gray-50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(32,132,177,0.05),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(241,133,46,0.05),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-4xl mx-auto mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Highlights from A1 Iron & Steel Rwanda
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Follow our journey, get the latest updates, and connect with our
              community across all our social media platforms.
            </p>
          </motion.div>

          {/* Articles Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
              Pioneering Perspectives
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <motion.a
                  key={article.title}
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-[#f1852e] transition-all duration-300 cursor-pointer shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${article.color} flex items-center justify-center mb-4`}
                  >
                    <article.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-sm font-semibold text-[#f1852e] mb-2">
                    {article.source}
                  </h4>
                  <h5 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                    {article.title}
                  </h5>
                  <p className="text-gray-600 text-sm line-clamp-3">
                    {article.description}
                  </p>
                  <div className="mt-4 flex items-center text-[#f1852e] text-sm font-semibold">
                    <span>Read More</span>
                    <motion.span
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Media Sections - One per screen */}
      {socialLinks.map((social) => (
        <section
          key={social.name}
          id={`social-${social.name.toLowerCase().replace(/\s+/g, "-")}`}
          className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 overflow-hidden"
          style={{ scrollSnapAlign: "start" }}
        >
          {/* Background with subtle gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-gray-50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(32,132,177,0.05),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(241,133,46,0.05),transparent_50%)]" />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <div className="flex items-center justify-between">
                  <motion.div
                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${social.color} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <social.icon className="w-10 h-10 text-white" />
                  </motion.div>
                  <motion.a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-[#f1852e] hover:text-[#2084b1] transition-colors font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    {social.name}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {social.description}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-[#f1852e] font-semibold text-lg">
                      {social.followers}
                    </span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-700">{social.username}</span>
                  </div>
                </div>

                <motion.a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-2 px-8 py-4 rounded-full bg-gradient-to-r ${social.color} text-white font-semibold hover:shadow-xl transition-all duration-300 text-lg`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />
                  <span>Follow on {social.name}</span>
                </motion.a>
              </motion.div>

              {/* Right Side - Realistic Preview */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="relative"
              >
                {social.name === "Instagram" && (
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    {/* Instagram Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 border-2 border-white flex items-center justify-center">
                          <Instagram className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-gray-900">
                            {social.username}
                          </div>
                        </div>
                      </div>
                      <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                    </div>
                    {/* Instagram Image Grid */}
                    <div className="grid grid-cols-3 gap-0.5 p-0.5 bg-gray-200">
                      {[1, 2, 3, 5, 6].map((num) => (
                        <div
                          key={num}
                          className="aspect-square bg-gray-100 relative overflow-hidden group cursor-pointer"
                        >
                          <Image
                            src={`${
                              process.env.NEXT_PUBLIC_BASE_PATH || ""
                            }/media/${num}.jpeg`}
                            alt={`A1 Steel Rwanda ${num}`}
                            fill
                            className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                            unoptimized
                          />
                          {/* Hover overlay with buttons */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                            <motion.button
                              className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Like"
                            >
                              <Heart className="w-5 h-5 text-red-500" />
                            </motion.button>
                            <motion.button
                              className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Comment"
                            >
                              <MessageCircle className="w-5 h-5 text-gray-700" />
                            </motion.button>
                            <motion.button
                              className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Share"
                            >
                              <Share2 className="w-5 h-5 text-gray-700" />
                            </motion.button>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Instagram Actions */}
                    <div className="px-4 py-3 space-y-2">
                      <div className="flex items-center space-x-4">
                        <button
                          className="hover:opacity-70 transition-opacity"
                          aria-label="Like"
                        >
                          <Heart className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                          className="hover:opacity-70 transition-opacity"
                          aria-label="Comment"
                        >
                          <MessageCircle className="w-6 h-6 text-gray-800" />
                        </button>
                        <button
                          className="hover:opacity-70 transition-opacity"
                          aria-label="Share"
                        >
                          <Share2 className="w-6 h-6 text-gray-800" />
                        </button>
                        <div className="flex-1"></div>
                        <button
                          className="hover:opacity-70 transition-opacity"
                          aria-label="Save"
                        >
                          <Bookmark className="w-6 h-6 text-gray-800" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {social.name === "Facebook" && (
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    {/* Facebook Header */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                          <Facebook className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">
                            {social.username}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Facebook Image Grid */}
                    <div className="grid grid-cols-2 gap-1 p-1 bg-gray-100">
                      {[1, 2, 3, 5].map((num) => (
                        <div
                          key={num}
                          className="aspect-square bg-gray-200 relative overflow-hidden rounded group cursor-pointer"
                        >
                          <Image
                            src={`${
                              process.env.NEXT_PUBLIC_BASE_PATH || ""
                            }/media/${num}.jpeg`}
                            alt={`A1 Steel Rwanda ${num}`}
                            fill
                            className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                            unoptimized
                          />
                          {/* Hover overlay with buttons */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                            <motion.button
                              className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Like"
                            >
                              <ThumbsUp className="w-5 h-5 text-blue-600" />
                            </motion.button>
                            <motion.button
                              className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Comment"
                            >
                              <MessageCircle className="w-5 h-5 text-gray-700" />
                            </motion.button>
                            <motion.button
                              className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Share"
                            >
                              <Share2 className="w-5 h-5 text-gray-700" />
                            </motion.button>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* Facebook Actions */}
                    <div className="px-4 py-3 border-t border-gray-200">
                      <div className="flex items-center space-x-6 text-gray-600">
                        <button
                          className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                          aria-label="Like"
                        >
                          <ThumbsUp className="w-5 h-5" />
                          <span className="text-sm font-medium">Like</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 hover:text-gray-800 transition-colors"
                          aria-label="Comment"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">Comment</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 hover:text-gray-800 transition-colors"
                          aria-label="Share"
                        >
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm font-medium">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {social.name === "Twitter / X" && (
                  <div className="bg-black rounded-2xl shadow-2xl overflow-hidden border border-gray-800">
                    {/* Twitter Header */}
                    <div className="px-4 py-3 border-b border-gray-800">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                          <Twitter className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-300">
                            {social.username}
                          </div>
                        </div>
                        <div className="w-6 h-6 rounded bg-gray-700"></div>
                      </div>
                    </div>
                    {/* Twitter Image Grid */}
                    <div className="px-4 py-3">
                      <div className="grid grid-cols-2 gap-1 mb-3">
                        {[1, 2, 3, 5].map((num) => (
                          <div
                            key={num}
                            className="aspect-square bg-gray-800 relative overflow-hidden rounded-lg group cursor-pointer"
                          >
                            <Image
                              src={`${
                                process.env.NEXT_PUBLIC_BASE_PATH || ""
                              }/media/${num}.jpeg`}
                              alt={`A1 Steel Rwanda ${num}`}
                              fill
                              className="object-cover opacity-80 transition-opacity duration-300 group-hover:opacity-60"
                              unoptimized
                            />
                            {/* Hover overlay with buttons */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                              <motion.button
                                className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Like"
                              >
                                <Heart className="w-5 h-5 text-red-500" />
                              </motion.button>
                              <motion.button
                                className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Repost"
                              >
                                <Share2 className="w-5 h-5 text-gray-700" />
                              </motion.button>
                              <motion.button
                                className="bg-white/90 rounded-full p-2 hover:bg-white transition-colors"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                                aria-label="Comment"
                              >
                                <MessageCircle className="w-5 h-5 text-gray-700" />
                              </motion.button>
                            </div>
                          </div>
                        ))}
                      </div>
                      {/* Twitter Actions */}
                      <div className="flex items-center space-x-8 pt-2">
                        <button
                          className="hover:text-red-500 transition-colors"
                          aria-label="Like"
                        >
                          <Heart className="w-5 h-5 text-gray-500" />
                        </button>
                        <button
                          className="hover:text-blue-500 transition-colors"
                          aria-label="Repost"
                        >
                          <Share2 className="w-5 h-5 text-gray-500" />
                        </button>
                        <button
                          className="hover:text-blue-500 transition-colors"
                          aria-label="Comment"
                        >
                          <MessageCircle className="w-5 h-5 text-gray-500" />
                        </button>
                        <button
                          className="hover:text-blue-500 transition-colors"
                          aria-label="Share"
                        >
                          <Send className="w-5 h-5 text-gray-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {social.name === "LinkedIn" && (
                  <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
                    {/* LinkedIn Header */}
                    <div className="px-4 py-3 border-b border-gray-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                          <Linkedin className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-gray-900">
                            {social.username}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* LinkedIn Image Grid */}
                    <div className="grid grid-cols-3 gap-1 p-1 bg-gray-50">
                      {[1, 2, 3, 5, 6].map((num) => (
                        <div
                          key={num}
                          className="aspect-square bg-gray-200 relative overflow-hidden rounded group cursor-pointer"
                        >
                          <Image
                            src={`${
                              process.env.NEXT_PUBLIC_BASE_PATH || ""
                            }/media/${num}.jpeg`}
                            alt={`A1 Steel Rwanda ${num}`}
                            fill
                            className="object-cover transition-opacity duration-300 group-hover:opacity-80"
                            unoptimized
                          />
                          {/* Hover overlay with buttons */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                            <motion.button
                              className="bg-white/90 rounded-full p-1.5 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Like"
                            >
                              <ThumbsUp className="w-4 h-4 text-blue-600" />
                            </motion.button>
                            <motion.button
                              className="bg-white/90 rounded-full p-1.5 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Comment"
                            >
                              <MessageCircle className="w-4 h-4 text-gray-700" />
                            </motion.button>
                            <motion.button
                              className="bg-white/90 rounded-full p-1.5 hover:bg-white transition-colors"
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              aria-label="Share"
                            >
                              <Share2 className="w-4 h-4 text-gray-700" />
                            </motion.button>
                          </div>
                        </div>
                      ))}
                    </div>
                    {/* LinkedIn Actions */}
                    <div className="px-4 py-3 border-t border-gray-200">
                      <div className="flex items-center space-x-4 text-gray-600">
                        <button
                          className="flex items-center space-x-2 hover:text-blue-600 transition-colors"
                          aria-label="Like"
                        >
                          <ThumbsUp className="w-5 h-5" />
                          <span className="text-sm font-medium">Like</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 hover:text-gray-800 transition-colors"
                          aria-label="Comment"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">Comment</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 hover:text-gray-800 transition-colors"
                          aria-label="Share"
                        >
                          <Share2 className="w-5 h-5" />
                          <span className="text-sm font-medium">Share</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom Navigation Bar - Floating Icons */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          {socialLinks.map((social) => (
            <motion.button
              key={social.name}
              onClick={() => scrollToSection(social.name)}
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${social.color} text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center`}
              whileHover={{ scale: 1.15, y: -8 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Scroll to ${social.name} section`}
            >
              <social.icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
