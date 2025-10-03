"use client";

import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 relative">
                  <div className="absolute left-0 top-0 w-0.5 h-6 bg-gradient-to-b from-blue-400 to-blue-700 transform rotate-12 origin-bottom"></div>
                  <div className="absolute right-0 top-0 w-0.5 h-6 bg-gradient-to-b from-blue-400 to-blue-700 transform -rotate-12 origin-bottom"></div>
                  <div className="absolute left-1 top-2 w-4 h-0.5 bg-gradient-to-r from-blue-400 to-blue-700 transform rotate-12"></div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-orange-400">A1 IRON & STEEL</h3>
                <p className="text-sm text-orange-300">RWANDA LIMITED</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">The Metal That Builds a Nation</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                <motion.a key={index} whileHover={{ scale: 1.1, y: -2 }} href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors">
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Products", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Products</h4>
            <ul className="space-y-2">
              {["TMT Bars", "Wire Rods", "Hot Rolled Strip", "I-Beams"].map((product) => (
                <li key={product}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Contact Info</h4>
            <p className="text-gray-400 mb-2">+250 790 060 555</p>
            <p className="text-gray-400 mb-2">a1steelrwanda@gmail.com</p>
            <p className="text-gray-400">Kigali, Rwanda</p>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 A1 Iron & Steel Rwanda Ltd. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}


