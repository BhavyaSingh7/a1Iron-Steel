"use client";

import { motion } from "framer-motion";
import { Award, Cog, Handshake, Users } from "lucide-react";

export default function Mission() {
  const items = [
    { icon: Award, title: "Quality", description: "Attain quality at the heart of everything we manufacture" },
    { icon: Cog, title: "Standard", description: "Maintain the highest standards across production process" },
    { icon: Handshake, title: "Clients", description: "Create long term partnerships with each of our customers" },
    { icon: Users, title: "Leadership", description: "Develop next generation of Rwandan business leaders" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {items.map((mission, index) => (
            <motion.div
              key={mission.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="w-20 h-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <mission.icon className="w-10 h-10 text-white" />
              </motion.div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{mission.title}</h3>
              <p className="text-gray-600">{mission.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


