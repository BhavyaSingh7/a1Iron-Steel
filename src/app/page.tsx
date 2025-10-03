"use client";

import { motion } from "framer-motion";
import {
  Award,
  Cog,
  Handshake,
  Users,
  Phone,
  Mail,
  MapPin,
  Grip,
  Circle,
  Square,
  AlignRight,
  Minus,
  Maximize,
  GripVertical,
  Factory,
  ArrowUp,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { useState, useEffect } from "react";
import Logo from "@/components/Logo";
import LetterReveal from "@/components/LetterReveal";
import Typewriter from "@/components/Typewriter";
import CounterAnimation from "@/components/CounterAnimation";

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
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
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
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

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
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
            To enhance competitiveness, we are transitioning to{" "}
            <strong className="text-blue-400">
              carbon reduced manufacturing processes
            </strong>{" "}
            and realigning businesses.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Explore Products
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-orange-400 text-orange-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-orange-400 hover:text-white transition-colors"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-6 border-r-2 border-b-2 border-white transform rotate-45"></div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About A1 Iron & Steel
            </h2>
            <p className="text-xl text-gray-600">
              The Metal That Builds a Nation
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-6">
                GET TO KNOW US
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>A1 Iron & Steel Rwanda Ltd</strong> is a company
                dedicated to quality and innovation in the iron and steel
                industry. With decades of experience, we provide high-quality,
                precision-engineered steel solutions for sectors like
                construction, engineering, and infrastructure worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The company is driven by a passionate team that combines
                advanced technology with traditional craftsmanship. Our steel
                products are known for precision, durability, and
                sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: 1000, label: "Clients Served" },
                { number: 50, label: "Years Experience" },
                { number: 100, label: "Awards" },
                { number: 25, label: "Partners" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow"
                >
                  <div className="text-3xl font-bold text-orange-600 mb-2">
                    <CounterAnimation
                      target={stat.number}
                      start={1}
                      durationMs={3500}
                    />
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Quality",
                description:
                  "Attain quality at the heart of everything we manufacture",
              },
              {
                icon: Cog,
                title: "Standard",
                description:
                  "Maintain the highest standards across production process",
              },
              {
                icon: Handshake,
                title: "Clients",
                description:
                  "Create long term partnerships with each of our customers",
              },
              {
                icon: Users,
                title: "Leadership",
                description:
                  "Develop next generation of Rwandan business leaders",
              },
            ].map((mission, index) => (
              <motion.div
                key={mission.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <mission.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {mission.title}
                </h3>
                <p className="text-gray-600">{mission.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600">
              Diversified Range of Premium Iron and Steel Products
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Grip,
                title: "TMT Bars",
                description:
                  "Thermo Mechanical Treatment Steel bars used in Earthquake-resistant construction",
              },
              {
                icon: Circle,
                title: "5.5MM Wire Rod",
                description: "A low-carbon general-purpose manufacturing wire",
              },
              {
                icon: Square,
                title: "Hot Rolled Strip",
                description: "High-strength hot-rolled construction material",
              },
              {
                icon: AlignRight,
                title: "V Angle",
                description: "Versatile stainless steel structural connector",
              },
              {
                icon: Minus,
                title: "Flat Bar",
                description:
                  "Steel flat bar for versatile industrial applications",
              },
              {
                icon: Maximize,
                title: "C Channel",
                description:
                  "Corrosion-resistant hot-dip galvanized channel steel",
              },
              {
                icon: GripVertical,
                title: "I-Beam",
                description: "Corrosion-resistant galvanized I-beam steel",
              },
              {
                icon: Circle,
                title: "Round Bar",
                description: "Corrosion-resistant stainless steel round bar",
              },
            ].map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4"
                >
                  <product.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {product.title}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to work with us? Let's discuss your project
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: Phone,
                  title: "Phone",
                  details: ["+250 790 060 555", "+250 795 555 555"],
                },
                {
                  icon: Mail,
                  title: "Email",
                  details: ["a1steelrwanda@gmail.com"],
                },
                {
                  icon: MapPin,
                  title: "Address",
                  details: [
                    "2nd Floor, BPR Tower, Kigali",
                    "Musanze Industrial Park",
                  ],
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl shadow-lg"
                >
                  <contact.icon className="w-6 h-6 text-orange-600 mt-1" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">
                      {contact.title}
                    </h4>
                    {contact.details.map((detail, i) => (
                      <p key={i} className="text-gray-600">
                        {detail}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Your Phone"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-shadow"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
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
                  <h3 className="text-xl font-bold text-orange-400">
                    A1 IRON & STEEL
                  </h3>
                  <p className="text-sm text-orange-300">RWANDA LIMITED</p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                The Metal That Builds a Nation
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    href="#"
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-600 transition-colors"
                  >
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
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Products</h4>
              <ul className="space-y-2">
                {["TMT Bars", "Wire Rods", "Hot Rolled Strip", "I-Beams"].map(
                  (product) => (
                    <li key={product}>
                      <a
                        href="#"
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {product}
                      </a>
                    </li>
                  )
                )}
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

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: isScrolled ? 1 : 0, scale: isScrolled ? 1 : 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}
