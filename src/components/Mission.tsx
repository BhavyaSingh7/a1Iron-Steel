"use client";

import { motion } from "framer-motion";
import { Award, Cog, Handshake, Users } from "lucide-react";

export default function Mission() {
  const items = [
    {
      icon: Award,
      title: "Quality",
      description: "Attain quality at the heart of everything we manufacture",
    },
    {
      icon: Cog,
      title: "Standard",
      description: "Maintain the highest standards across production process",
    },
    {
      icon: Handshake,
      title: "Clients",
      description: "Create long term partnerships with each of our customers",
    },
    {
      icon: Users,
      title: "Leadership",
      description: "Develop next generation of Rwandan business leaders",
    },
  ];

  return (
    <motion.section
      id="about"
      className="relative min-h-screen flex items-start justify-center overflow-y-auto pt-12 sm:pt-16 lg:pt-20 pb-16 sm:pb-20 lg:pb-24"
      style={{
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        scrollSnapAlign: "start",
      }}
    >
      {/* Animated Background Glow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        viewport={{ once: true }}
        className="absolute inset-0 overflow-hidden"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 20% 50%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 60% 20%, rgba(59, 130, 246, 0.08) 0%, transparent 50%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glowing Title */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1.5,
            type: "spring",
            stiffness: 100,
            damping: 20,
          }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-white mb-4 sm:mb-6 tracking-wide"
            style={{
              letterSpacing: "0.03em",
              textShadow:
                "0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2), 0 0 30px rgba(255, 255, 255, 0.1)",
            }}
          >
            WHY WE DO WHAT WE DO
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-20 sm:w-24 h-0.5 logo-orange-bg mx-auto mb-6 sm:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 font-light"
            style={{
              textShadow: "0 0 20px rgba(156, 163, 175, 0.3)",
            }}
          >
            {/* OUR MISSION */}
          </motion.p>
        </motion.div>

        {/* Mission Cards Grid */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
          {items.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 60, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 1.2,
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
                damping: 20,
              }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{
                scale: 1.05,
                y: -10,
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                },
              }}
              className="relative group"
            >
              {/* Glowing Background */}
              <div
                className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-2xl backdrop-blur-sm border border-white/20"
                style={{
                  boxShadow: `
                    0 0 30px rgba(249, 115, 22, 0.2),
                    0 0 60px rgba(249, 115, 22, 0.1),
                    inset 0 1px 0 rgba(255, 255, 255, 0.1)
                  `,
                }}
              />

              {/* Content */}
              <div className="relative z-10 p-4 sm:p-6 md:p-8 text-center">
                {/* Number Badge */}
                <div className="absolute top-2 sm:top-3 md:top-4 right-2 sm:right-3 md:right-4 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xs sm:text-sm">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4 md:mb-6"
                  style={{
                    boxShadow: "0 0 20px rgba(249, 115, 22, 0.5)",
                  }}
                >
                  <mission.icon className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </motion.div>

                {/* Title */}
                <h3
                  className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 md:mb-4"
                  style={{
                    textShadow: "0 0 10px rgba(249, 115, 22, 0.5)",
                  }}
                >
                  {mission.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  {mission.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Spacing */}
        <div className="h-8 sm:h-12 md:h-16 lg:h-20"></div>
      </div>
    </motion.section>
  );
}
