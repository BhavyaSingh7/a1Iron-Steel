"use client";

import { motion, AnimatePresence } from "framer-motion";
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
  Sparkles,
  Zap,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface MediaPageProps {
  onClose?: () => void;
}

export default function MediaPage({ onClose }: MediaPageProps) {
  const router = useRouter();
  const [activeOccasion, setActiveOccasion] = React.useState<{
    title: string;
    images: string[];
  } | null>(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const handleClose = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/?skipIntro=true`;
    if (onClose) {
      onClose();
    }
  };

  // Disable body scroll when this page is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(
      `social-${sectionName.toLowerCase().replace(/\s+/g, "-")}`,
    );
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const openOccasionGallery = (title: string, images: string[]) => {
    setActiveOccasion({ title, images });
    setActiveImageIndex(0);
  };

  const closeOccasionGallery = () => {
    setActiveOccasion(null);
    setActiveImageIndex(0);
  };

  const nextOccasionImage = () => {
    if (!activeOccasion) return;
    setActiveImageIndex((prev) => (prev + 1) % activeOccasion.images.length);
  };

  const prevOccasionImage = () => {
    if (!activeOccasion) return;
    setActiveImageIndex(
      (prev) => (prev - 1 + activeOccasion.images.length) % activeOccasion.images.length,
    );
  };

  const articles = [
    {
      title:
        "Rwanda's First steel manufacturing plant through metal ores to be constructed",
      source: "RBA News Article",
      description:
        "Rwanda's First steel manufacturing plant through metal ores to be constructed",
      icon: Newspaper,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700",
      url: "https://www.youtube.com/watch?v=3Hhj5RCXhVA",
    },
    {
      title:
        "How Rwanda's first steel processing plant will impact the economy",
      source: "NewsTimes Article",
      description:
        "How Rwanda's first steel processing plant will impact the economy",
      icon: FileText,
      color: "from-green-500 to-green-600",
      hoverColor: "hover:from-green-600 hover:to-green-700",
      url: "https://www.newtimes.co.rw/article/21687/news/rwanda/how-rwandas-first-steel-processing-plant-will-impact-economy",
    },
    {
      title:
        "Rwanda's industrial growth takes a step forward with the groundbreaking of A1 Iron & Steel Rwanda Ltd. in Musanze District",
      source: "RDB Post",
      description:
        "Rwanda's industrial growth takes a step forward with the groundbreaking of A1 Iron & Steel Rwanda Ltd. in @MusanzeDistrict",
      icon: TrendingUp,
      color: "from-orange-500 to-orange-600",
      hoverColor: "hover:from-orange-600 hover:to-orange-700",
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

  const specialOccasions = [
    {
      id: 1,
      title: "Company Milestone",
      description: "Celebrating our achievements",
      image: "/media/company-milestone/1.jpeg",
      date: "2025",
      galleryImages: Array.from({ length: 18 }, (_, i) => `/media/company-milestone/${i + 1}.jpeg`),
    },
    {
      id: 2,
      title: "Team Celebration",
      description: "Our dedicated team",
      image: "/media/2.jpeg",
      date: "2025",
      galleryImages: ["/media/2.jpeg"],
    },
    {
      id: 3,
      title: "Award Ceremony",
      description: "Recognition and excellence",
      image: "/media/3.jpeg",
      date: "2025",
      galleryImages: ["/media/3.jpeg"],
    },
    {
      id: 4,
      title: "Community Event",
      description: "Engaging with our community",
      image: "/media/5.jpeg",
      date: "2025",
      galleryImages: ["/media/5.jpeg"],
    },
    {
      id: 5,
      title: "Opening Ceremony",
      description: "A new chapter begins",
      image: "/media/opening-ceremony/2.jpeg",
      date: "2025",
      galleryImages: [
        "/media/opening-ceremony/2.jpeg",
        "/media/opening-ceremony/3.jpeg",
        "/media/opening-ceremony/4.jpeg",
        "/media/opening-ceremony/5.jpeg",
        "/media/opening-ceremony/6.jpeg",
        "/media/opening-ceremony/7.jpeg",
        "/media/opening-ceremony/8.jpeg",
        "/media/opening-ceremony/9.jpeg",
        "/media/opening-ceremony/10.jpeg",
        "/media/opening-ceremony/11.jpeg",
        "/media/opening-ceremony/12.jpeg",
        "/media/opening-ceremony/13.jpeg",
        "/media/opening-ceremony/14.jpeg",
        "/media/opening-ceremony/15.jpeg",
        "/media/opening-ceremony/16.jpeg",
        "/media/opening-ceremony/17.jpeg",
        "/media/opening-ceremony/18.jpeg",
      ],
    },
    {
      id: 6,
      title: "Partnership Event",
      description: "Building strong relationships",
      image: "/media/partnership-events/libf1.jpeg",
      date: "2025",
      galleryImages: [
        "/media/partnership-events/libf1.jpeg",
        "/media/partnership-events/libf2.jpeg",
        "/media/partnership-events/libf3.jpeg",
        "/media/partnership-events/libf4.jpeg",
      ],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto"
      style={{
        scrollBehavior: "smooth",
        scrollSnapType: "y mandatory",
      }}
    >
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <motion.div
        className="sticky top-0 z-10 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.button
              onClick={handleClose}
              className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-orange-400/50 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </motion.button>
            <motion.button
              onClick={handleClose}
              className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-orange-400/50"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <X className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-300" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Hero Section with Articles */}
      <section
        className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Hero Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-md rounded-full border border-orange-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-semibold text-orange-300">
                Media & News
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Highlights from
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-white to-blue-400 bg-clip-text text-transparent">
                A1 Iron & Steel
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6 rounded-full" />
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Follow our journey, get the latest updates, and connect with our
              community across all our social media platforms.
            </p>
          </motion.div>

          {/* Enhanced Articles Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-10">
              <Zap className="w-6 h-6 text-orange-400" />
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Pioneering Perspectives
              </h3>
              <Globe className="w-6 h-6 text-blue-400" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {articles.map((article, index) => {
                const Icon = article.icon;
                return (
                  <motion.a
                    key={article.title}
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.4 + index * 0.15,
                      type: "spring",
                      stiffness: 100,
                    }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-orange-500/50 transition-all duration-500 cursor-pointer shadow-2xl overflow-hidden"
                  >
                    {/* Animated gradient background */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${article.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                    {/* Content */}
                    <div className="relative z-10">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${article.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                        whileHover={{ rotate: 5 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 bg-orange-500/20 backdrop-blur-sm rounded-full text-xs font-semibold text-orange-300 border border-orange-500/30">
                          {article.source}
                        </span>
                      </div>
                      <h5 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-orange-300 transition-colors duration-300">
                        {article.title}
                      </h5>
                      <p className="text-white/70 text-sm line-clamp-3 mb-6 leading-relaxed">
                        {article.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <motion.div
                          className="flex items-center text-orange-400 text-sm font-semibold"
                          whileHover={{ x: 5 }}
                        >
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
                        </motion.div>
                        <ExternalLink className="w-5 h-5 text-white/50 group-hover:text-orange-400 transition-colors duration-300" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Special Occasions Gallery Section */}
      <section
        className="relative min-h-screen flex items-center justify-center py-20 sm:py-24 md:py-32 overflow-hidden"
        style={{ scrollSnapAlign: "start" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-500/30 mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Sparkles className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-semibold text-blue-300">
                Special Moments
              </span>
            </motion.div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 via-white to-orange-400 bg-clip-text text-transparent">
                Special Occasions
              </span>
              <br />
              <span className="bg-gradient-to-r from-orange-400 via-white to-blue-400 bg-clip-text text-transparent">
                & Celebrations
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-6 rounded-full" />
            <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Capturing the memorable moments, milestones, and celebrations that
              define our journey at A1 Iron & Steel.
            </p>
          </motion.div>

          {/* Modern Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {specialOccasions.map((occasion, index) => (
              <motion.div
                key={occasion.id}
                onClick={() =>
                  openOccasionGallery(occasion.title, occasion.galleryImages)
                }
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 hover:border-orange-500/50 transition-all duration-500 cursor-pointer shadow-2xl"
              >
                {/* Image Container */}
                <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
                      occasion.image
                    }`}
                    alt={occasion.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                  {/* Date Badge */}
                  <motion.div
                    className="absolute top-4 right-4 px-3 py-1.5 bg-orange-500/90 backdrop-blur-md rounded-full text-white text-xs font-semibold border border-orange-400/50"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    {occasion.date}
                  </motion.div>

                  {/* Hover Content Overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {occasion.title}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {occasion.description}
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Content Section (Visible on mobile, hidden on hover for desktop) */}
                <div className="p-6 group-hover:hidden lg:block">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {occasion.title}
                  </h3>
                  <p className="text-white/70 text-sm mb-3">
                    {occasion.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-orange-400 font-semibold">
                      {occasion.date}
                    </span>
                    <motion.button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        openOccasionGallery(occasion.title, occasion.galleryImages);
                      }}
                      className="flex items-center text-blue-400 text-sm font-semibold"
                      whileHover={{ x: 5 }}
                    >
                      <span>View</span>
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
                    </motion.button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-blue-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-blue-500 group-hover:w-full transition-all duration-700" />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-16"
          >
            <motion.button
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-semibold rounded-full hover:shadow-2xl transition-all duration-300 text-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles className="w-5 h-5" />
              <span>View All Occasions</span>
            </motion.button>
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
                    className="flex items-center space-x-2 text-orange-400 hover:text-blue-400 transition-colors font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    <span>Visit</span>
                    <ExternalLink className="w-5 h-5" />
                  </motion.a>
                </div>

                <div>
                  <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {social.name}
                  </h3>
                  <p className="text-white/80 mb-6 leading-relaxed text-lg">
                    {social.description}
                  </p>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-orange-400 font-semibold text-lg">
                      {social.followers}
                    </span>
                    <span className="text-white/40">•</span>
                    <span className="text-white/70">{social.username}</span>
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
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                    {/* Instagram Header */}
                    <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 border-2 border-white flex items-center justify-center">
                          <Instagram className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <div className="text-sm font-semibold text-white">
                            {social.username}
                          </div>
                        </div>
                      </div>
                      <div className="w-1 h-1 bg-white/40 rounded-full"></div>
                    </div>
                    {/* Instagram Image Grid */}
                    <div className="grid grid-cols-3 gap-0.5 p-0.5 bg-black/20">
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
                    <div className="px-4 py-3 space-y-2 bg-black/10">
                      <div className="flex items-center space-x-4">
                        <button
                          className="hover:opacity-70 transition-opacity"
                          aria-label="Like"
                        >
                          <Heart className="w-6 h-6 text-white/80" />
                        </button>
                        <button
                          className="hover:opacity-70 transition-opacity"
                          aria-label="Comment"
                        >
                          <MessageCircle className="w-6 h-6 text-white/80" />
                        </button>
                        <button
                          className="hover:opacity-70 transition-opacity"
                          aria-label="Share"
                        >
                          <Share2 className="w-6 h-6 text-white/80" />
                        </button>
                        <div className="flex-1"></div>
                        <button
                          className="hover:opacity-70 transition-opacity"
                          aria-label="Save"
                        >
                          <Bookmark className="w-6 h-6 text-white/80" />
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {social.name === "Facebook" && (
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                    {/* Facebook Header */}
                    <div className="px-4 py-3 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center">
                          <Facebook className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">
                            {social.username}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Facebook Image Grid */}
                    <div className="grid grid-cols-2 gap-1 p-1 bg-black/20">
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
                    <div className="px-4 py-3 border-t border-white/10 bg-black/10">
                      <div className="flex items-center space-x-6 text-white/80">
                        <button
                          className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                          aria-label="Like"
                        >
                          <ThumbsUp className="w-5 h-5" />
                          <span className="text-sm font-medium">Like</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 hover:text-white transition-colors"
                          aria-label="Comment"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">Comment</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 hover:text-white transition-colors"
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
                  <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/10">
                    {/* Twitter Header */}
                    <div className="px-4 py-3 border-b border-white/10">
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
                  <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden border border-white/20">
                    {/* LinkedIn Header */}
                    <div className="px-4 py-3 border-b border-white/10">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-700 flex items-center justify-center">
                          <Linkedin className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-white">
                            {social.username}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* LinkedIn Image Grid */}
                    <div className="grid grid-cols-3 gap-1 p-1 bg-black/20">
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
                    <div className="px-4 py-3 border-t border-white/10 bg-black/10">
                      <div className="flex items-center space-x-4 text-white/80">
                        <button
                          className="flex items-center space-x-2 hover:text-blue-400 transition-colors"
                          aria-label="Like"
                        >
                          <ThumbsUp className="w-5 h-5" />
                          <span className="text-sm font-medium">Like</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 hover:text-white transition-colors"
                          aria-label="Comment"
                        >
                          <MessageCircle className="w-5 h-5" />
                          <span className="text-sm font-medium">Comment</span>
                        </button>
                        <button
                          className="flex items-center space-x-2 hover:text-white transition-colors"
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
              className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br ${social.color} text-white shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center backdrop-blur-sm border border-white/20`}
              whileHover={{ scale: 1.15, y: -8 }}
              whileTap={{ scale: 0.9 }}
              aria-label={`Scroll to ${social.name} section`}
            >
              <social.icon className="w-7 h-7 sm:w-8 sm:h-8" />
            </motion.button>
          ))}
        </div>
      </div>

      {/* Occasion Gallery Modal */}
      <AnimatePresence>
        {activeOccasion && (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeOccasionGallery}
          >
            <motion.div
              className="relative w-full max-w-6xl max-h-[92vh] bg-slate-900/95 border border-white/10 rounded-2xl overflow-hidden"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <h3 className="text-white text-lg sm:text-xl font-semibold">
                  {activeOccasion.title}
                </h3>
                <button
                  type="button"
                  onClick={closeOccasionGallery}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white"
                  aria-label="Close gallery"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="relative p-4">
                <div className="relative h-[50vh] sm:h-[58vh] rounded-xl overflow-hidden bg-black/30">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${
                      activeOccasion.images[activeImageIndex]
                    }`}
                    alt={`${activeOccasion.title} ${activeImageIndex + 1}`}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </div>

                {activeOccasion.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={prevOccasionImage}
                      className="absolute left-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                    <button
                      type="button"
                      onClick={nextOccasionImage}
                      className="absolute right-6 top-1/2 -translate-y-1/2 p-2 sm:p-3 rounded-full bg-black/50 hover:bg-black/70 text-white"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                  </>
                )}
              </div>

              {activeOccasion.images.length > 1 && (
                <div className="px-4 pb-4">
                  <div className="flex gap-2 overflow-x-auto">
                    {activeOccasion.images.map((img, idx) => (
                      <button
                        key={img}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={`relative w-20 h-16 rounded-md overflow-hidden border-2 flex-shrink-0 ${
                          idx === activeImageIndex
                            ? "border-orange-500"
                            : "border-white/20"
                        }`}
                        aria-label={`Open image ${idx + 1}`}
                      >
                        <Image
                          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}${img}`}
                          alt={`${activeOccasion.title} thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
