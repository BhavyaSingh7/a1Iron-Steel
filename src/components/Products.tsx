"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  AlignRight,
  Circle,
  Grip,
  GripVertical,
  Maximize,
  Minus,
  Square,
} from "lucide-react";

type Product = { icon: React.ComponentType<{ className?: string }>; title: string; description: string; image: string };

export default function Products() {
  const products: Product[] = [
    {
      icon: Grip,
      title: "TMT Bars",
      description:
        "Thermo Mechanical Treatment Steel bars used in Earthquake-resistant construction",
      image:
        "https://images.unsplash.com/photo-1606229365485-67a3c44f3b4a?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Circle,
      title: "5.5MM Wire Rod",
      description: "A low-carbon general-purpose manufacturing wire",
      image:
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Square,
      title: "Hot Rolled Strip",
      description: "High-strength hot-rolled construction material",
      image:
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: AlignRight,
      title: "V Angle",
      description: "Versatile stainless steel structural connector",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Minus,
      title: "Flat Bar",
      description: "Steel flat bar for versatile industrial applications",
      image:
        "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Maximize,
      title: "C Channel",
      description: "Corrosion-resistant hot-dip galvanized channel steel",
      image:
        "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: GripVertical,
      title: "I-Beam",
      description: "Corrosion-resistant galvanized I-beam steel",
      image:
        "https://images.unsplash.com/photo-1489769002049-ccd828976a6c?q=80&w=1600&auto=format&fit=crop",
    },
    {
      icon: Circle,
      title: "Round Bar",
      description: "Corrosion-resistant stainless steel round bar",
      image:
        "https://images.unsplash.com/photo-1517414204284-fb7e6fc50f1c?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 40, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-gray-200"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-sm">
                    <product.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    {product.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>

              <motion.div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 left-1/2 h-24 w-[120%] -translate-x-1/2 rounded-[100%] bg-orange-500/10 blur-2xl transition-all duration-500 group-hover:-bottom-6 group-hover:bg-orange-500/20"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
