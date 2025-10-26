"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import {
  X,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  Shield,
  Award,
} from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  image: string;
  specifications: string[];
  applications: string[];
  features: string[];
  benefits: string[];
  certifications: string[];
  priceRange?: string;
  availability: string;
}

export default function ProductPage({ onClose }: { onClose: () => void }) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [filter, setFilter] = useState<string>("all");

  // Complete products data from A1 Steel Rwanda website
  const products: Product[] = [
    {
      id: 1,
      title: "TMT Bars",
      category: "Construction",
      description:
        "Thermo Mechanical Treatment Steel bars used in Earthquake-resistant construction with superior strength and durability.",
      shortDescription: "High-strength steel bars for construction",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Grade: Fe500",
        "Diameter: 8mm-32mm",
        "IS 1786:2008",
        "Yield Strength: 500 MPa",
      ],
      applications: [
        "Reinforced Concrete Construction",
        "High-rise Buildings",
        "Bridges & Infrastructure",
        "Earthquake-resistant Structures",
      ],
      features: [
        "Superior Ductility",
        "High Tensile Strength",
        "Corrosion Resistance",
        "Weldability",
      ],
      benefits: [
        "Superior structural integrity",
        "Reduced construction time",
        "Long-term durability",
        "Cost-effective solution",
      ],
      certifications: ["ISI Mark", "BIS Certified", "ISO 9001:2015"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 2,
      title: "5.5MM Wire Rod",
      category: "Manufacturing",
      description:
        "A low-carbon general-purpose manufacturing wire used in a wide range of industries.",
      shortDescription: "Low-carbon manufacturing wire",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Diameter: 5.5mm",
        "Grade: Low Carbon Steel",
        "Surface: Bright",
        "Tolerance: ±0.1mm",
      ],
      applications: [
        "Wire Drawing",
        "Nail Manufacturing",
        "Mesh Production",
        "Spring Manufacturing",
      ],
      features: [
        "Consistent Quality",
        "Excellent Drawability",
        "Uniform Cross-section",
        "High Purity",
      ],
      benefits: [
        "Versatile applications",
        "Consistent quality",
        "Easy processing",
        "Cost competitive",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 3,
      title: "Hot Rolled Strip",
      category: "Manufacturing",
      description:
        "Strong hot-rolled strip, engineered to meet the diverse needs of various industries.",
      shortDescription: "High-strength hot-rolled construction material",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Thickness: 1.5mm-12mm",
        "Width: 25mm-200mm",
        "Grade: Mild Steel",
        "Surface: Mill Scale",
      ],
      applications: [
        "Automotive Industry",
        "Construction",
        "Manufacturing",
        "Fabrication",
      ],
      features: [
        "Dimensional Accuracy",
        "Good Surface Finish",
        "Machinability",
        "Formability",
      ],
      benefits: [
        "Versatile applications",
        "Consistent quality",
        "Easy fabrication",
        "Long service life",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 4,
      title: "V Angle",
      category: "Construction",
      description:
        "Designed to meet the demands of the most rigorous construction and industrial applications.",
      shortDescription: "Versatile stainless steel structural connector",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Size: 25x25mm to 200x200mm",
        "Thickness: 3mm-20mm",
        "Grade: Structural Steel",
        "Length: 6m-12m",
      ],
      applications: [
        "Structural Framing",
        "Support Brackets",
        "Reinforcement",
        "Fabrication",
      ],
      features: [
        "High Strength",
        "Easy Welding",
        "Corrosion Resistance",
        "Versatile Design",
      ],
      benefits: [
        "Structural stability",
        "Easy installation",
        "Long-term durability",
        "Cost effective",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 5,
      title: "Flat Bar",
      category: "Manufacturing",
      description:
        "Bars Crafted to provide reliable strength and versatility for a range of manufacturing applications.",
      shortDescription: "Steel flat bar for versatile industrial applications",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Width: 10mm-200mm",
        "Thickness: 3mm-50mm",
        "Grade: Mild Steel",
        "Surface: Mill Finish",
      ],
      applications: [
        "Machinery Parts",
        "Fabrication",
        "Construction",
        "Manufacturing",
      ],
      features: [
        "Precise Dimensions",
        "Good Machinability",
        "Consistent Quality",
        "Weldability",
      ],
      benefits: [
        "Versatile applications",
        "Easy machining",
        "Consistent quality",
        "Cost competitive",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 6,
      title: "C Channel",
      category: "Construction",
      description:
        "C Channels engineered to provide outstanding structural support, stability, and versatility.",
      shortDescription: "Corrosion-resistant hot-dip galvanized channel steel",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Size: 75x40mm to 200x75mm",
        "Thickness: 2mm-8mm",
        "Coating: Hot-dip Galvanized",
        "Length: 6m-12m",
      ],
      applications: [
        "Structural Support",
        "Framing Systems",
        "Industrial Racking",
        "Construction",
      ],
      features: [
        "Corrosion Protection",
        "High Load Capacity",
        "Easy Installation",
        "Durable Coating",
      ],
      benefits: [
        "Long-term durability",
        "Easy installation",
        "Structural stability",
        "Cost effective",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 7,
      title: "I-Beam",
      category: "Construction",
      description:
        "Specifically designed to provide maximum structural strength, stability, and reliability.",
      shortDescription: "Corrosion-resistant galvanized I-beam steel",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Size: 100x50mm to 600x200mm",
        "Thickness: 3mm-25mm",
        "Coating: Hot-dip Galvanized",
        "Length: 6m-12m",
      ],
      applications: [
        "Structural Framing",
        "Bridge Construction",
        "Industrial Buildings",
        "Heavy Load Support",
      ],
      features: [
        "Maximum Load Capacity",
        "Structural Stability",
        "Corrosion Resistance",
        "Easy Installation",
      ],
      benefits: [
        "Maximum strength",
        "Structural stability",
        "Long-term durability",
        "Easy installation",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 8,
      title: "Round Bar",
      category: "Manufacturing",
      description:
        "Engineered to meet the needs of construction, manufacturing, automotive, and more industries.",
      shortDescription: "Corrosion-resistant stainless steel round bar",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Diameter: 6mm-100mm",
        "Grade: Stainless Steel",
        "Surface: Bright/Polished",
        "Length: 3m-6m",
      ],
      applications: [
        "Machinery Components",
        "Construction",
        "Automotive Parts",
        "Manufacturing",
      ],
      features: [
        "Corrosion Resistance",
        "High Strength",
        "Excellent Machinability",
        "Consistent Quality",
      ],
      benefits: [
        "Corrosion resistance",
        "High strength",
        "Easy machining",
        "Versatile applications",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 9,
      title: "Hollow Section",
      category: "Construction",
      description:
        "Versatile hollow section with exceptional strength for construction, structural, & engineering applications.",
      shortDescription: "Versatile hollow section for structural construction",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Size: 20x20mm to 400x400mm",
        "Thickness: 1.5mm-12mm",
        "Grade: Structural Steel",
        "Length: 6m-12m",
      ],
      applications: [
        "Structural Construction",
        "Architectural Applications",
        "Industrial Framing",
        "Engineering Projects",
      ],
      features: [
        "Exceptional Strength",
        "Lightweight Design",
        "Easy Fabrication",
        "Versatile Applications",
      ],
      benefits: [
        "High strength-to-weight ratio",
        "Easy fabrication",
        "Versatile applications",
        "Cost effective",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 10,
      title: "Wire Nails",
      category: "Manufacturing",
      description:
        "Versatile and durable Wire nails, perfect for both industrial and construction applications.",
      shortDescription:
        "Wire nails: versatile, durable fasteners for construction",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Length: 25mm-150mm",
        "Diameter: 2mm-6mm",
        "Material: Carbon Steel",
        "Coating: Galvanized",
      ],
      applications: [
        "Construction",
        "Carpentry",
        "Furniture Making",
        "General Fastening",
      ],
      features: [
        "High Durability",
        "Corrosion Resistance",
        "Sharp Points",
        "Consistent Quality",
      ],
      benefits: [
        "High durability",
        "Corrosion resistance",
        "Reliable fastening",
        "Cost effective",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 11,
      title: "Binding Wire",
      category: "Construction",
      description:
        "Deliver reliable performance in a range of applications, construction to general industrial use.",
      shortDescription: "Durable, corrosion-resistant galvanized binding wire",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Diameter: 0.8mm-2.5mm",
        "Material: Galvanized Steel",
        "Coating: Hot-dip Galvanized",
        "Length: 50kg-100kg coils",
      ],
      applications: [
        "Concrete Reinforcement",
        "Construction Tying",
        "General Binding",
        "Industrial Use",
      ],
      features: [
        "Durable Coating",
        "Corrosion Resistance",
        "Flexible",
        "Easy to Use",
      ],
      benefits: [
        "Corrosion resistance",
        "Easy to use",
        "Reliable performance",
        "Cost effective",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 12,
      title: "BRC",
      category: "Construction",
      description:
        "British Reinforcement Concrete mesh for concrete strengthening.",
      shortDescription:
        "British Reinforcement Concrete mesh for concrete strengthening",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Mesh Size: 100x100mm to 200x200mm",
        "Wire Diameter: 4mm-8mm",
        "Material: High Tensile Steel",
        "Coating: Galvanized",
      ],
      applications: [
        "Concrete Reinforcement",
        "Slab Construction",
        "Foundation Work",
        "Structural Strengthening",
      ],
      features: [
        "High Tensile Strength",
        "Corrosion Resistance",
        "Easy Installation",
        "Consistent Quality",
      ],
      benefits: [
        "Structural strengthening",
        "Easy installation",
        "Corrosion resistance",
        "Cost effective",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 13,
      title: "GI Chain Link",
      category: "Infrastructure",
      description:
        "GI (Galvanized Iron) Chain Link fencing that provides a strong, durable, and cost-effective solution for securing properties and enclosures.",
      shortDescription: "Durable galvanized chain-link fencing material",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Mesh Size: 50mm-100mm",
        "Wire Gauge: 8-12 gauge",
        "Coating: Hot-dip Galvanized",
        "Height: 1m-3m",
      ],
      applications: [
        "Security Fencing",
        "Property Boundaries",
        "Industrial Enclosures",
        "Sports Facilities",
      ],
      features: [
        "Durable Coating",
        "Weather Resistance",
        "Easy Installation",
        "Cost Effective",
      ],
      benefits: [
        "Security solution",
        "Weather resistance",
        "Easy installation",
        "Cost effective",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 14,
      title: "Barbed Wire",
      category: "Infrastructure",
      description:
        "Widely used in various security applications to deter trespassers and enhance safety, Known for its sharpness and durability.",
      shortDescription: "Secure, cost-effective barbed wire fencing solution",
      image:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=2070&auto=format&fit=crop",
      specifications: [
        "Wire Gauge: 12-14 gauge",
        "Barb Spacing: 75mm-150mm",
        "Coating: Galvanized",
        "Length: 400m-500m rolls",
      ],
      applications: [
        "Security Fencing",
        "Property Protection",
        "Agricultural Use",
        "Perimeter Security",
      ],
      features: [
        "Sharp Barbs",
        "High Durability",
        "Weather Resistance",
        "Effective Deterrent",
      ],
      benefits: [
        "Security deterrent",
        "High durability",
        "Weather resistance",
        "Cost effective",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
  ];

  const categories = ["all", "Construction", "Manufacturing", "Infrastructure"];

  const filteredProducts =
    filter === "all"
      ? products
      : products.filter((product) => product.category === filter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto">
      {/* Header */}
      <motion.div
        className="sticky top-0 z-10 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent">
                Our Products
              </h1>
              <p className="text-white/70 text-lg mt-2">
                Premium Steel Solutions for Every Industry
              </p>
            </motion.div>
            <motion.button
              onClick={onClose}
              className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-orange-400/50"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <X className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-300" />
            </motion.button>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap gap-3 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {categories.map((category, index) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`group relative px-6 py-3 rounded-full text-sm font-semibold transition-all duration-500 overflow-hidden ${
                filter === category
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl shadow-orange-500/25 scale-105"
                  : "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white border border-white/20 hover:border-orange-400/50"
              }`}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: "0 10px 25px rgba(249, 115, 22, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
            >
              <span className="relative z-10">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </span>
              {filter === category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full"
                  layoutId="activeFilter"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-500 cursor-pointer overflow-hidden"
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.15)",
              }}
              onClick={() => setSelectedProduct(product)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Product Image */}
              <div className="relative h-56 mb-6 rounded-2xl overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <motion.span
                    className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs font-bold rounded-full shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {product.category}
                  </motion.span>
                </div>

                {/* Arrow Icon */}
                <div className="absolute top-4 right-4">
                  <motion.div
                    className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30"
                    whileHover={{
                      scale: 1.2,
                      rotate: 90,
                      backgroundColor: "rgba(249, 115, 22, 0.2)",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5 text-white" />
                  </motion.div>
                </div>

                {/* Availability Badge */}
                <div className="absolute bottom-4 right-4">
                  <motion.span
                    className="flex items-center px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {product.availability}
                  </motion.span>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-4 relative z-10">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300 mb-2">
                    {product.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed line-clamp-2">
                    {product.shortDescription}
                  </p>
                </div>

                {/* Features Preview */}
                <div className="flex flex-wrap gap-2">
                  {product.features.slice(0, 3).map((feature, featureIndex) => (
                    <motion.span
                      key={featureIndex}
                      className="px-3 py-1 bg-white/10 text-white/90 text-xs rounded-full border border-white/20"
                      whileHover={{
                        scale: 1.05,
                        backgroundColor: "rgba(249, 115, 22, 0.2)",
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      {feature}
                    </motion.span>
                  ))}
                  {product.features.length > 3 && (
                    <span className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-400/30">
                      +{product.features.length - 3} more
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="pt-2 border-t border-white/10">
                  <span className="text-orange-400 font-bold text-lg">
                    {product.priceRange}
                  </span>
                </div>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            className="text-center py-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-orange-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-white/20"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Star className="w-16 h-16 text-orange-400" />
            </motion.div>
            <h3 className="text-3xl font-bold text-white mb-4 bg-gradient-to-r from-white to-orange-400 bg-clip-text text-transparent">
              No products found
            </h3>
            <p className="text-white/70 text-lg mb-6">
              Try selecting a different category to explore our products
            </p>
            <motion.button
              onClick={() => setFilter("all")}
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Products
            </motion.button>
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <motion.div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProduct(null)}
        >
          <motion.div
            className="bg-white rounded-3xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-gray-200"
            initial={{ scale: 0.7, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-gradient-to-r from-gray-50 to-white border-b border-gray-200 p-8 rounded-t-3xl shadow-sm">
              <div className="flex items-center justify-between">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent">
                    {selectedProduct.title}
                  </h2>
                  <div className="flex items-center mt-2">
                    <span className="px-4 py-2 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-semibold rounded-full">
                      {selectedProduct.category}
                    </span>
                    <span className="ml-4 flex items-center text-green-600 font-medium">
                      <CheckCircle className="w-5 h-5 mr-2" />
                      {selectedProduct.availability}
                    </span>
                  </div>
                </motion.div>
                <motion.button
                  onClick={() => setSelectedProduct(null)}
                  className="group p-3 rounded-full hover:bg-gray-100 transition-all duration-300 border border-gray-200 hover:border-orange-300"
                  whileHover={{ scale: 1.1, rotate: 90 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  <X className="w-6 h-6 text-gray-500 group-hover:text-orange-500 transition-colors duration-300" />
                </motion.button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Product Image */}
                <motion.div
                  className="relative h-96 rounded-2xl overflow-hidden shadow-xl"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Image Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-800 text-sm font-semibold rounded-full shadow-lg">
                      {selectedProduct.category}
                    </span>
                  </div>
                </motion.div>

                {/* Product Details */}
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Zap className="w-6 h-6 text-orange-500 mr-3" />
                      Description
                    </h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Star className="w-6 h-6 text-orange-500 mr-3" />
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 gap-3">
                      {selectedProduct.features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-center p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200"
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            duration: 0.4,
                            delay: 0.6 + index * 0.1,
                          }}
                        >
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Award className="w-6 h-6 text-orange-500 mr-3" />
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProduct.applications.map((app, index) => (
                        <motion.span
                          key={index}
                          className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 text-sm font-semibold rounded-full border border-orange-300 hover:from-orange-200 hover:to-orange-300 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.7 + index * 0.05,
                          }}
                          whileHover={{ scale: 1.05, y: -2 }}
                        >
                          {app}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Specifications & Certifications */}
              <motion.div
                className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 border border-gray-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Zap className="w-6 h-6 text-orange-500 mr-3" />
                    Specifications
                  </h3>
                  <div className="space-y-4">
                    {selectedProduct.specifications.map((spec, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between items-center py-4 px-4 bg-white rounded-xl border border-gray-200 hover:border-orange-300 transition-all duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: 5 }}
                      >
                        <span className="text-gray-600 font-medium">
                          {spec.split(":")[0]}
                        </span>
                        <span className="font-bold text-gray-900 text-right">
                          {spec.split(":")[1]}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="w-6 h-6 text-orange-500 mr-3" />
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    {selectedProduct.certifications.map((cert, index) => (
                      <motion.div
                        key={index}
                        className="flex items-center p-4 bg-white rounded-xl border border-blue-200 hover:border-orange-300 transition-all duration-300"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                        whileHover={{ scale: 1.02, x: -5 }}
                      >
                        <Shield className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 font-medium">
                          {cert}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Price and CTA */}
              <motion.div
                className="mt-12 p-8 bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl border border-orange-200 shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="text-center lg:text-left">
                    <motion.p
                      className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent mb-2"
                      initial={{ scale: 0.8 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 1.1 }}
                    >
                      {selectedProduct.priceRange}
                    </motion.p>
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                      <p className="text-green-600 font-semibold text-lg">
                        {selectedProduct.availability}
                      </p>
                    </div>
                  </div>
                  <motion.button
                    className="group px-10 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-full font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl"
                    whileHover={{
                      scale: 1.05,
                      y: -3,
                      boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                  >
                    <span className="flex items-center">
                      Request Quote
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}
