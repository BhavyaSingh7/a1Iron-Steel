"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/components/Logo";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200"
          : "bg-black/20 backdrop-blur-sm border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div whileHover={{ scale: 1.05 }} className="flex items-center">
            <Logo />
          </motion.div>

          <div className="hidden md:flex space-x-2 font-medium tracking-wide">
            {["home", "about", "products", "sustainability", "contact"].map(
              (section) => (
                <motion.button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize px-5 py-2.5 rounded-full transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                    isScrolled
                      ? "text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus-visible:ring-blue-500 focus-visible:ring-offset-white"
                      : "text-white hover:text-orange-400 hover:bg-white/10 focus-visible:ring-orange-400 focus-visible:ring-offset-transparent"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {section === "home" ? "Home" : section}
                </motion.button>
              )
            )}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}


