"use client";

import { motion } from "framer-motion";
import CounterAnimation from "@/components/CounterAnimation";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About A1 Iron & Steel</h2>
          <p className="text-xl text-gray-600">The Metal That Builds a Nation</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
            <h3 className="text-2xl font-bold text-orange-600 mb-6">GET TO KNOW US</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              <strong>A1 Iron & Steel Rwanda Ltd</strong> is a company dedicated to quality and innovation in the iron and steel industry. With decades of experience, we provide high-quality, precision-engineered steel solutions for sectors like construction, engineering, and infrastructure worldwide.
            </p>
            <p className="text-gray-700 leading-relaxed">
              The company is driven by a passionate team that combines advanced technology with traditional craftsmanship. Our steel products are known for precision, durability, and sustainability.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="grid grid-cols-2 gap-6">
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
                  <CounterAnimation target={stat.number} start={1} durationMs={3500} />
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


