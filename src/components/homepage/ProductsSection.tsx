"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Product type definition
type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
  specifications: string[];
  applications: string[];
  features: string[];
};

export default function ProductsSection() {
  // Products data for homepage carousel (6 products)
  const products: Product[] = useMemo(
    () => [
      {
        id: 1,
        title: "TMT Bars",
        description:
          "Thermo Mechanical Treatment Steel bars used in Earthquake-resistant construction",
        image:
          "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 2,
        title: "5.5MM Wire Rod",
        description:
          "A low-carbon general-purpose manufacturing wire used in a wide range of industries",
        image:
          "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 3,
        title: "Hot Rolled Strip",
        description:
          "Strong hot-rolled strip, engineered to meet the diverse needs of various industries",
        image:
          "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 4,
        title: "V Angle",
        description:
          "Designed to meet the demands of the most rigorous construction and industrial applications",
        image:
          "https://images.unsplash.com/photo-1518818608552-195ed130c1cd?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 5,
        title: "Flat Bar",
        description:
          "Bars Crafted to provide reliable strength and versatility for a range of manufacturing applications",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 6,
        title: "C Channel",
        description:
          "C Channels engineered to provide outstanding structural support, stability, and versatility",
        image:
          "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 7,
        title: "I-Beam",
        description:
          "Specifically designed to provide maximum structural strength, stability, and reliability",
        image:
          "https://images.unsplash.com/photo-1504307651254-35680f2df2c5?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 8,
        title: "Round Bar",
        description:
          "Engineered to meet the needs of construction, manufacturing, automotive, and more industries",
        image:
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 9,
        title: "Hollow Section",
        description:
          "Versatile hollow section with exceptional strength for construction, structural, & engineering applications",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 10,
        title: "Wire Nails",
        description:
          "Versatile and durable Wire nails, perfect for both industrial and construction applications",
        image:
          "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 11,
        title: "Binding Wire",
        description:
          "Deliver reliable performance in a range of applications, construction to general industrial use",
        image:
          "https://images.unsplash.com/photo-1560814330-8e5a270640dd?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 12,
        title: "BRC",
        description:
          "British Reinforcement Concrete mesh for concrete strengthening",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 13,
        title: "GI Chain Link",
        description:
          "GI (Galvanized Iron) Chain Link fencing that provides a strong, durable, and cost-effective solution for securing properties and enclosures",
        image:
          "https://images.unsplash.com/photo-1605244863941-a12801e952cc?q=80&w=2070&auto=format&fit=crop",
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
      },
      {
        id: 14,
        title: "Barbed Wire",
        description:
          "Widely used in various security applications to deter trespassers and enhance safety, Known for its sharpness and durability",
        image:
          "https://images.unsplash.com/photo-1578662996442-77f7473e3e81?q=80&w=2070&auto=format&fit=crop",
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
      },
    ],
    []
  );

  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(products.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [carouselItems, setCarouselItems] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Create infinite carousel by duplicating products
    setCarouselItems([...products, ...products, ...products]);
  }, [products]);

  const navigateLeft = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev - 1;
      if (newIndex < 0) {
        // Jump to the end of the second set (seamless loop)
        return products.length * 2 - 1;
      }
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  }, [products.length, isTransitioning]);

  const navigateRight = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= products.length * 2) {
        // Jump to the beginning of the second set (seamless loop)
        return products.length;
      }
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 500);
  }, [products.length, isTransitioning]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  const openProductModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  if (!isClient) {
    return <div className="h-[400px] bg-gray-100 animate-pulse" />;
  }

  return (
    <section
      id="products"
      aria-label="Product showcase section"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 bg-white overflow-hidden"
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-16 lg:mb-20"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-wide"
            style={{ letterSpacing: "0.03em" }}
          >
            <span className="logo-blue-gradient">OUR</span>{" "}
            <span className="logo-orange-gradient">PRODUCTS</span>
          </motion.h2>

          {/* Underline */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-20 sm:w-24 h-0.5 logo-orange-bg mx-auto mb-6 sm:mb-8"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-gray-600 font-light tracking-wide"
            style={{ letterSpacing: "0.02em" }}
          >
            Premium Steel Solutions for Your Needs
          </motion.p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            onClick={navigateLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white border border-orange-500 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-50 transition-all duration-300 shadow-md hover:shadow-lg"
            style={{
              boxShadow:
                "0 4px 12px -2px rgba(249, 115, 22, 0.25), 0 2px 6px -1px rgba(249, 115, 22, 0.15)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-6 h-6" />
          </motion.button>

          <motion.button
            onClick={navigateRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white border border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-all duration-300 shadow-md hover:shadow-lg"
            style={{
              boxShadow:
                "0 4px 12px -2px rgba(32, 132, 177, 0.25), 0 2px 6px -1px rgba(32, 132, 177, 0.15)",
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-6 h-6" />
          </motion.button>

          {/* Product Cards */}
          <div className="overflow-hidden px-16">
            <motion.div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * 320}px)`,
              }}
            >
              {/* Render all carousel items */}
              {carouselItems.map((product, index) => (
                <motion.div
                  key={`${product.id}-${index}`}
                  className="flex-shrink-0 w-80 md:w-96 px-4"
                  whileHover={{ y: -10, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full hover:border-gray-200 hover:shadow-lg transition-all duration-300 flex flex-col cursor-pointer group"
                    onClick={() => openProductModal(product)}
                    style={{
                      boxShadow:
                        "0 4px 12px -2px rgba(0, 0, 0, 0.08), 0 2px 6px -1px rgba(0, 0, 0, 0.04)",
                    }}
                  >
                    {/* Product Image */}
                    <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-50">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover"
                        quality={50}
                        loading="lazy"
                        priority={false}
                      />
                      {/* Top right icon */}
                      <div className="absolute top-4 right-4 w-8 h-8 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                        <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                      </div>
                    </div>

                    {/* Product Info */}
                    <div className="p-6 sm:p-8 flex flex-col flex-grow">
                      <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 tracking-tight">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 mb-6 leading-relaxed flex-grow text-sm sm:text-base font-light">
                        {product.description}
                      </p>

                      {/* Horizontal line */}
                      <div className="w-full h-px bg-gray-100 mb-5"></div>

                      {/* LEARN MORE button */}
                      <button
                        className="text-orange-500 font-medium text-left hover:text-orange-600 transition-colors text-sm tracking-wide group-hover:text-orange-600"
                        style={{ letterSpacing: "0.05em" }}
                      >
                        LEARN MORE →
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center mt-8 space-x-2"
          >
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-orange-500 scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </motion.div>

          {/* Instructions */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-500 mt-6"
          >
            Drag to navigate • Use arrow buttons • Click dots to jump • Click on
            any product to learn more
          </motion.p>
        </div>
      </div>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-100"
            style={{
              boxShadow:
                "0 20px 40px -10px rgba(0, 0, 0, 0.15), 0 10px 20px -5px rgba(0, 0, 0, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="relative">
              <div className="h-64 md:h-80 relative overflow-hidden rounded-t-2xl">
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {selectedProduct.title}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {selectedProduct.description}
              </p>

              <div className="grid md:grid-cols-3 gap-6">
                {/* Specifications */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Specifications
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.specifications.map((spec, index) => (
                      <li
                        key={index}
                        className="text-gray-600 flex items-start"
                      >
                        <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {spec}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Applications
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.applications.map((app, index) => (
                      <li
                        key={index}
                        className="text-gray-600 flex items-start"
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center mr-3">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProduct.features.map((feature, index) => (
                      <li
                        key={index}
                        className="text-gray-600 flex items-start"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Contact Button */}
              <div className="mt-8 text-center">
                <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors">
                  Request Quote
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
