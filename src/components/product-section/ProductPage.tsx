"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  ArrowRight,
  ArrowLeft,
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
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleClose = () => {
    router.push("/?skipIntro=true");
    if (onClose) {
      onClose();
    }
  };

  // Complete products data from A1 Steel Rwanda website - ordered as requested
  const products: Product[] = [
    {
      id: 1,
      title: "TMT Bars",
      category: "Construction",
      description:
        "Thermo Mechanical Treatment (TMT) Steel bars used in Earthquake-resistant construction. The backbone of modern construction, providing superior strength, durability, and safety for projects that demand exceptional resistance to seismic forces, corrosion, and high temperatures. Manufactured using state-of-the-art technology, our TMT bars are designed to meet the highest industry standards, ensuring both structural integrity and long-lasting performance.",
      shortDescription:
        "Thermo Mechanical Treatment (TMT) Steel bars used in Earthquake-resistant construction",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/tmt bars.jpg`,
      specifications: [
        "Grade: Fe500",
        "Diameter: 8mm-32mm",
        "Standard: IS 1786:2008",
        "Yield Strength: 500 MPa",
        "Tensile Strength: 545 MPa",
        "Elongation: 12% minimum",
      ],
      applications: [
        "Reinforced Concrete Construction",
        "High-rise Buildings",
        "Bridges & Infrastructure",
        "Earthquake-resistant Structures",
        "Industrial Buildings",
      ],
      features: [
        "High Strength and Durability",
        "Corrosion Resistance",
        "Earthquake Resistance",
        "Enhanced Workability",
        "Superior Bonding with Concrete",
        "Sustainable Manufacturing",
      ],
      benefits: [
        "Superior structural integrity",
        "Exceptional resistance to seismic forces",
        "Long-term durability and performance",
        "Cost-effective solution",
        "Enhanced safety in construction",
        "Environmentally sustainable",
      ],
      certifications: ["ISI Mark", "BIS Certified", "ISO 9001:2015"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 2,
      title: "Round Bar",
      category: "Manufacturing",
      description:
        "Precision and Strength for Diverse Applications. At A1 Iron & Steel, we specialize in the production of high-quality round bars, engineered to meet the needs of a wide range of industries, including construction, manufacturing, automotive, and more. Our round bars are crafted with precision and durability in mind, offering superior strength and reliability for both standard and customized applications. With advanced manufacturing processes and strict quality control, our round bars meet the highest industry standards.",
      shortDescription: "Precision and Strength for Diverse Applications",
      image: `${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/products/Round bars.jpg`,
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
        "High Strength and Durability",
        "Versatile Applications",
        "Precision Manufacturing",
        "Corrosion Resistance",
        "Customizable to Your Needs",
        "Cost-Effective and Efficient",
        "Sustainable Production",
      ],
      benefits: [
        "High strength and durability",
        "Versatile applications across industries",
        "Precision manufacturing with strict quality control",
        "Corrosion resistance for long-lasting performance",
        "Customizable to meet specific project needs",
        "Cost-effective and efficient solution",
        "Sustainable production practices",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 3,
      title: "5.5MM Wire Rod",
      category: "Manufacturing",
      description:
        "A low-carbon general-purpose manufacturing wire used in a wide range of industries. Versatile and reliable for multiple applications, our wire rods are manufactured with precision, ensuring uniformity and superior mechanical properties. Ideal for construction, automotive, fencing, and engineering applications.",
      shortDescription: "A low-carbon general-purpose manufacturing wire",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/5.5mm.webp`,
      specifications: [
        "Diameter: 5.5mm",
        "Grade: Low Carbon Steel",
        "Surface: Bright",
        "Tolerance: ±0.1mm",
        "Tensile Strength: 350-450 MPa",
        "Elongation: 20% minimum",
      ],
      applications: [
        "Construction: For reinforcing concrete, manufacturing nails, and other wire products",
        "Automotive: In the production of automotive components such as springs and wires",
        "Fencing: Used for making robust, durable fencing solutions",
        "Engineering & Manufacturing: As raw material for precision wire products like cables, coils, and more",
      ],
      features: [
        "Superior Strength and Flexibility",
        "Precision and Uniformity",
        "Corrosion Resistance",
        "Wide Range of Applications",
        "Excellent Formability",
        "Environmentally Sustainable",
      ],
      benefits: [
        "Superior strength and flexibility for diverse applications",
        "Precision manufacturing ensuring uniformity",
        "Corrosion resistance for long-lasting performance",
        "Wide range of applications across industries",
        "Excellent formability for various manufacturing needs",
        "Environmentally sustainable production",
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
        "Versatile stainless steel structural connector designed to meet the demands of the most rigorous construction and industrial applications. Perfect for structural framing, support brackets, and reinforcement work.",
      shortDescription: "Versatile stainless steel structural connector",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/V-ANGLES.jpg`,
      specifications: [
        "Size: 25x25mm to 200x200mm",
        "Thickness: 3mm-20mm",
        "Grade: Structural Steel / Stainless Steel",
        "Length: 6m-12m",
        "Standard: ASTM A36 / IS 2062",
        "Surface: Mill Finish / Polished",
      ],
      applications: [
        "Structural Framing",
        "Support Brackets",
        "Reinforcement",
        "Fabrication",
        "Architectural Applications",
      ],
      features: [
        "High Strength",
        "Easy Welding",
        "Corrosion Resistance",
        "Versatile Design",
        "Precise Dimensions",
        "Durable Construction",
      ],
      benefits: [
        "Structural stability",
        "Easy installation",
        "Long-term durability",
        "Cost effective",
        "Versatile applications",
        "Superior quality",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 5,
      title: "C Channel",
      category: "Construction",
      description:
        "Corrosion-resistant hot-dip galvanized channel steel engineered to provide outstanding structural support, stability, and versatility. Ideal for structural support, framing systems, and industrial applications.",
      shortDescription: "Corrosion-resistant hot-dip galvanized channel steel",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/C-Chanel.jpg`,
      specifications: [
        "Size: 75x40mm to 200x75mm",
        "Thickness: 2mm-8mm",
        "Coating: Hot-dip Galvanized",
        "Length: 6m-12m",
        "Grade: Structural Steel",
        "Standard: ASTM A36 / IS 2062",
      ],
      applications: [
        "Structural Support",
        "Framing Systems",
        "Industrial Racking",
        "Construction",
        "Building Infrastructure",
      ],
      features: [
        "Corrosion Protection",
        "High Load Capacity",
        "Easy Installation",
        "Durable Coating",
        "Long-lasting Performance",
        "Cost-effective Solution",
      ],
      benefits: [
        "Versatile applications",
        "Superior corrosion protection",
        "Long-lasting performance",
        "Cost competitive",
        "Easy installation",
        "High structural integrity",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 6,
      title: "I-Beam",
      category: "Construction",
      description:
        "Corrosion-resistant galvanized I-beam steel specifically designed to provide maximum structural strength, stability, and reliability. Perfect for structural framing, bridge construction, and heavy load support applications.",
      shortDescription: "Corrosion-resistant galvanized I-beam steel",
      image: `${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/products/STEEL-BEAMS.jpg`,
      specifications: [
        "Size: 100x50mm to 600x200mm",
        "Thickness: 3mm-25mm",
        "Coating: Hot-dip Galvanized",
        "Length: 6m-12m",
        "Grade: Structural Steel",
        "Standard: ASTM A36 / IS 2062",
      ],
      applications: [
        "Structural Framing",
        "Bridge Construction",
        "Industrial Buildings",
        "Heavy Load Support",
        "High-rise Construction",
      ],
      features: [
        "Maximum Load Capacity",
        "Structural Stability",
        "Corrosion Resistance",
        "Easy Installation",
        "Superior Strength-to-Weight Ratio",
        "Long-term Durability",
      ],
      benefits: [
        "Long-term durability",
        "Easy installation",
        "Structural stability",
        "Cost effective",
        "Superior load-bearing capacity",
        "Excellent corrosion protection",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 7,
      title: "Flat Bar",
      category: "Manufacturing",
      description:
        "Steel flat bar for versatile industrial applications. Crafted to provide reliable strength and versatility for a range of manufacturing, construction, and fabrication needs.",
      shortDescription: "Steel flat bar for versatile industrial applications",
      image: `${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/products/Flat-Bars.jpg`,
      specifications: [
        "Width: 10mm-200mm",
        "Thickness: 3mm-50mm",
        "Grade: Mild Steel / Structural Steel",
        "Surface: Mill Finish",
        "Length: 3m-6m (standard), Custom lengths available",
        "Standard: ASTM A36 / IS 2062",
      ],
      applications: [
        "Machinery Parts",
        "Fabrication",
        "Construction",
        "Manufacturing",
        "Industrial Components",
      ],
      features: [
        "Precise Dimensions",
        "Good Machinability",
        "Consistent Quality",
        "Weldability",
        "Versatile Applications",
        "Cost-effective Solution",
      ],
      benefits: [
        "Precise dimensions for accurate manufacturing",
        "Good machinability for easy processing",
        "Consistent quality across all batches",
        "Easy installation and fabrication",
        "Versatile applications",
        "Cost-effective solution",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
    {
      id: 8,
      title: "Hot Rolled Strip",
      category: "Manufacturing",
      description:
        "High-strength hot-rolled construction material engineered to meet the diverse needs of various industries. Strong hot-rolled strip perfect for automotive, construction, manufacturing, and fabrication applications.",
      shortDescription: "High-strength hot-rolled construction material",
      image: `${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/products/HOT-ROLLED-STRIP.webp`,
      specifications: [
        "Thickness: 1.5mm-12mm",
        "Width: 25mm-200mm",
        "Grade: Mild Steel / Low Carbon Steel",
        "Surface: Mill Scale",
        "Tensile Strength: 400-500 MPa",
        "Standard: ASTM A36 / IS 2062",
      ],
      applications: [
        "Automotive Industry",
        "Construction",
        "Manufacturing",
        "Fabrication",
        "Industrial Components",
      ],
      features: [
        "Dimensional Accuracy",
        "Good Surface Finish",
        "Machinability",
        "Formability",
        "High Strength",
        "Consistent Quality",
      ],
      benefits: [
        "Dimensional accuracy for precise applications",
        "High strength for demanding uses",
        "Easy machining and forming",
        "Versatile applications across industries",
        "Consistent quality in every batch",
        "Cost-effective manufacturing solution",
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
        "Versatile hollow section for structural construction with exceptional strength. Perfect for construction, structural, and engineering applications, offering an excellent strength-to-weight ratio.",
      shortDescription: "Versatile hollow section for structural construction",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/HS.jpg`,
      specifications: [
        "Size: 20x20mm to 400x400mm",
        "Thickness: 1.5mm-12mm",
        "Grade: Structural Steel",
        "Length: 6m-12m",
        "Shape: Square / Rectangular / Circular",
        "Standard: ASTM A500 / IS 4923",
      ],
      applications: [
        "Structural Construction",
        "Architectural Applications",
        "Industrial Framing",
        "Engineering Projects",
        "Building Infrastructure",
      ],
      features: [
        "Exceptional Strength",
        "Lightweight Design",
        "Easy Fabrication",
        "Versatile Applications",
        "Superior Strength-to-Weight Ratio",
        "Aesthetic Appeal",
      ],
      benefits: [
        "High strength-to-weight ratio",
        "Easy fabrication and installation",
        "Versatile applications",
        "Cost effective",
        "Aesthetic appeal for architectural use",
        "Superior structural performance",
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
        "Wire nails: versatile, durable fasteners for construction. Perfect for both industrial and construction applications, offering reliable fastening solutions with superior quality and performance.",
      shortDescription:
        "Wire nails: versatile, durable fasteners for construction",
      image: `${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/products/Wire-Nails (1).avif`,
      specifications: [
        "Length: 25mm-150mm",
        "Diameter: 2mm-6mm",
        "Material: Carbon Steel",
        "Coating: Galvanized / Electro-galvanized",
        "Head Type: Flat / Round / Countersunk",
        "Point Type: Diamond / Blunt",
      ],
      applications: [
        "Construction",
        "Carpentry",
        "Furniture Making",
        "General Fastening",
        "Woodworking",
      ],
      features: [
        "High Durability",
        "Corrosion Resistance",
        "Sharp Points",
        "Consistent Quality",
        "Strong Holding Power",
        "Easy to Use",
      ],
      benefits: [
        "High durability for long-lasting performance",
        "Corrosion resistance for outdoor use",
        "Reliable fastening in various materials",
        "Cost effective solution",
        "Strong holding power",
        "Easy to use and install",
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
        "Durable, corrosion-resistant galvanized binding wire that delivers reliable performance in a range of applications, from construction to general industrial use. Essential for concrete reinforcement and construction tying.",
      shortDescription: "Durable, corrosion-resistant galvanized binding wire",
      image: `${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/products/Binding-Wire (1).jpg`,
      specifications: [
        "Diameter: 0.8mm-2.5mm",
        "Material: Galvanized Steel",
        "Coating: Hot-dip Galvanized",
        "Length: 50kg-100kg coils",
        "Tensile Strength: 350-450 MPa",
        "Standard: IS 280 / ASTM A641",
      ],
      applications: [
        "Concrete Reinforcement",
        "Construction Tying",
        "General Binding",
        "Industrial Use",
        "Rebar Tying",
      ],
      features: [
        "Durable Coating",
        "Corrosion Resistance",
        "Flexible",
        "Easy to Use",
        "High Tensile Strength",
        "Long-lasting Performance",
      ],
      benefits: [
        "Corrosion resistance for long-term use",
        "Easy to use and handle",
        "Reliable performance in all conditions",
        "Cost effective solution",
        "High tensile strength",
        "Long-lasting durability",
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
        "British Reinforcement Concrete (BRC) reinforcement mesh for concrete strengthening. High-quality mesh designed to enhance the structural integrity and durability of concrete structures.",
      shortDescription:
        "British Reinforcement Concrete mesh for concrete strengthening",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/brc.jpg`,
      specifications: [
        "Mesh Size: 100x100mm to 200x200mm",
        "Wire Diameter: 4mm-8mm",
        "Material: High Tensile Steel",
        "Coating: Galvanized",
        "Sheet Size: Standard 2.4m x 4.8m (custom sizes available)",
        "Standard: BS 4483 / IS 1566",
      ],
      applications: [
        "Concrete Reinforcement",
        "Slab Construction",
        "Foundation Work",
        "Structural Strengthening",
        "Pavement Construction",
      ],
      features: [
        "High Tensile Strength",
        "Corrosion Resistance",
        "Easy Installation",
        "Consistent Quality",
        "Uniform Mesh Pattern",
        "Cost-effective Solution",
      ],
      benefits: [
        "Structural strengthening for concrete",
        "Easy installation and handling",
        "Corrosion resistance for durability",
        "Cost effective solution",
        "Uniform mesh pattern for consistent performance",
        "Enhanced structural integrity",
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
        "Durable galvanized chain-link fencing material. GI (Galvanized Iron) Chain Link fencing that provides a strong, durable, and cost-effective solution for securing properties and enclosures.",
      shortDescription: "Durable galvanized chain-link fencing material",
      image: `${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/products/gi chain link.jpg`,
      specifications: [
        "Mesh Size: 50mm-100mm",
        "Wire Gauge: 8-12 gauge",
        "Coating: Hot-dip Galvanized",
        "Height: 1m-3m",
        "Post Spacing: 2.5m-3m",
        "Standard: ASTM A392 / BS 1722",
      ],
      applications: [
        "Security Fencing",
        "Property Boundaries",
        "Industrial Enclosures",
        "Sports Facilities",
        "Perimeter Protection",
      ],
      features: [
        "Durable Coating",
        "Weather Resistance",
        "Easy Installation",
        "Cost Effective",
        "Long-lasting Performance",
        "Low Maintenance",
      ],
      benefits: [
        "Security solution for properties",
        "Weather resistance for outdoor use",
        "Easy installation and maintenance",
        "Cost effective long-term solution",
        "Long-lasting performance",
        "Low maintenance requirements",
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
        "Secure, cost-effective barbed wire fencing solution. Widely used in various security applications to deter trespassers and enhance safety. Known for its sharpness, durability, and effectiveness as a security deterrent.",
      shortDescription: "Secure, cost-effective barbed wire fencing solution",
      image: `${
        process.env.NEXT_PUBLIC_BASE_PATH || ""
      }/products/barbed-wires.jpg`,
      specifications: [
        "Wire Gauge: 12-14 gauge",
        "Barb Spacing: 75mm-150mm",
        "Coating: Galvanized",
        "Length: 400m-500m rolls",
        "Barb Type: 2-point / 4-point",
        "Standard: ASTM A121 / BS 4102",
      ],
      applications: [
        "Security Fencing",
        "Property Protection",
        "Agricultural Use",
        "Perimeter Security",
        "Boundary Marking",
      ],
      features: [
        "Sharp Barbs",
        "High Durability",
        "Weather Resistance",
        "Effective Deterrent",
        "Easy Installation",
        "Cost-effective Security",
      ],
      benefits: [
        "Security deterrent for properties",
        "High durability for long-term use",
        "Weather resistance for all conditions",
        "Cost effective security solution",
        "Easy installation",
        "Effective perimeter protection",
      ],
      certifications: ["ISO 9001", "ASTM Standards"],
      priceRange: "Contact for pricing",
      availability: "In Stock",
    },
  ];

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
            <div className="flex items-center gap-4">
              <motion.button
                onClick={handleClose}
                className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-orange-400/50 text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                aria-label="Back to home"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Home</span>
              </motion.button>
              <motion.button
                onClick={handleClose}
                className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-orange-400/50"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                aria-label="Close products page"
              >
                <X className="w-6 h-6 text-white group-hover:text-orange-400 transition-colors duration-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Structured Data for Products */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "A1 Iron & Steel",
              description: "Rwanda's premier steel manufacturer",
              url: "https://a1steelrwanda.com",
              logo: "https://a1steelrwanda.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kigali",
                addressCountry: "RW",
              },
            }),
          }}
        />
        {/* Products Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          role="list"
          aria-label="Product catalog"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              className="group relative bg-white/5 backdrop-blur-xl rounded-3xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-500 cursor-pointer overflow-hidden flex flex-col"
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 25px 50px rgba(249, 115, 22, 0.15)",
              }}
              onClick={() => setSelectedProduct(product)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              role="listitem"
              aria-label={`View details for ${product.title}`}
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setSelectedProduct(product);
                }
              }}
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
              <div className="space-y-4 relative z-10 flex flex-col flex-1">
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

                {/* Price - Pushed to bottom */}
                <div className="pt-2 border-t border-white/10 mt-auto">
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
                    <span className="flex items-center text-green-600 font-medium">
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
                  aria-label="Close product details"
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
                      className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-orange-600 bg-clip-text text-transparent mb-2 text-center lg:text-left"
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
                    onClick={() => {
                      if (selectedProduct) {
                        const subject = encodeURIComponent(
                          `Product Quote Request - ${selectedProduct.title}`
                        );
                        const body = encodeURIComponent(
                          `Hello,\n\nI am interested in getting a quote for ${selectedProduct.title}.\n\nPlease provide me with pricing and availability information.\n\nThank you.`
                        );
                        window.location.href = `mailto:marketing@a1steelrwanda.com?subject=${subject}&body=${body}`;
                      }
                    }}
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
