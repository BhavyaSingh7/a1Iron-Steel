"use client";

import { motion } from "framer-motion";
import Typewriter from "@/components/Typewriter";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover">
          <source src="./bg-video.mp4" type="video/mp4" />
          <source src="./bg-video.mp4" type="video/mp4" />
          <source src="./bg-video.mp4" type="video/mp4" />
          <source src="./bg-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/80 via-orange-900/60 to-gray-900/80"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          <Typewriter
            text={"The Metal That Builds a Nation!"}
            speedMs={45}
            startDelayMs={200}
            className="block"
            caretClassName="inline-block w-[0.08em] ml-1 align-baseline bg-orange-400"
          />
          <motion.span
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="block bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent"
          ></motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 text-gray-200"
        >
          To enhance competitiveness, we are transitioning to <strong className="text-blue-400">carbon reduced manufacturing processes</strong> and realigning businesses.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow">
            Explore Products
          </motion.button>
          <motion.button whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 hover:text-white transition-colors">
            Learn More
          </motion.button>
        </motion.div>
      </div>

      <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
      </motion.div>
    </section>
  );
}


