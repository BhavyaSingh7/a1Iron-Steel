"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  X,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Shield,
  ChevronRight,
  Search,
  Filter,
} from "lucide-react";
import Image from "next/image";

interface Product {
  id: number;
  title: string;
  category: string;
  description: string;
  shortDescription: string;
  carouselDescription: string;
  image: string;
  specifications: string[];
  applications: string[];
  features: string[];
  benefits: string[];
  certifications: string[];
  priceRange?: string;
  availability: string;
}

// Complete products data from A1 Steel Rwanda website - ordered as requested
const PRODUCTS_DATA: Product[] = [
  {
    id: 1,
    title: "TMT Bars",
    category: "Construction",
    description:
      "Thermo Mechanical Treatment (TMT) Steel bars used in Earthquake-resistant construction. The backbone of modern construction, providing superior strength, durability, and safety for projects that demand exceptional resistance to seismic forces, corrosion, and high temperatures. Manufactured using state-of-the-art technology, our TMT bars are designed to meet the highest industry standards, ensuring both structural integrity and long-lasting performance.",
    shortDescription:
      "Thermo Mechanical Treatment (TMT) Steel bars used in Earthquake-resistant construction",
    carouselDescription:
      "High-performance TMT bars crafted with advanced technology for unmatched strength, corrosion resistance, and seismic safety.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/tmt bars.jpg`,
    specifications: [
      "Grade: Fe 500 & Fe 550D",
      "Diameter: 6 mm – 40 mm",
      "Standards Followed: RS EAS 412-2(IDT), RS ISO 6935-2, BS 4449; Rwanda Standards Board (RSB) Product Certified",
      "Yield Strength: 500 MPa (Fe 500), 550 MPa (Fe 550D)",
      "Tensile Strength: ≥ 600 MPa (Fe 550D)",
      "Elongation: Minimum 12% (Fe 550D – high ductility grade)",
    ],
    applications: [
      "Power Dam",
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
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "RS EAS 412-2(IDT)", "RS ISO 6935-2", "BS 4449"],
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
    carouselDescription:
      "Precision-engineered round bars built to meet the highest standards for construction, manufacturing, automotive, and more.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/Round bars.jpg`,
    specifications: [
      "Diameter: 4 mm – 40 mm",
      "Length: 6 m & 12 m",
      "Grade: Carbon Steel",
      "Surface: Smooth",
      "Standards Followed: RS ISO 683 (Carbon Steel Bars); Rwanda Standards Board (RSB) Product Certified",
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
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "RS ISO 683 (Carbon Steel Bars)"],
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
    carouselDescription:
      "Durable, general-purpose wire rods crafted for diverse industrial applications with excellent mechanical properties.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/5.5mm.webp`,
    specifications: [
      "Diameter: 5.5 mm, 6 mm and 7 mm",
      "Grade: Low Carbon Steel",
      "Tolerance: ±0.1 mm",
      "Yield Strength: 195 – 280 MPa",
      "Tensile Strength: 315 – 430 MPa",
      "Elongation: Minimum 20%",
      "Standards Followed: RS ISO 16120, ASTM A510; Rwanda Standards Board (RSB) Product Certified",
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
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "RS ISO 16120", "ASTM A510"],
    priceRange: "Contact for pricing",
    availability: "In Stock",
  },
  {
    id: 4,
    title: "V Angle",
    category: "Construction",
    description:
      "Versatile structural steel connector designed to meet the demands of the most rigorous construction and industrial applications. Perfect for structural framing, support brackets, and reinforcement work.",
    shortDescription: "Versatile structural steel connector",
    carouselDescription:
      "Versatile structural steel connectors engineered for high-demand structural and industrial applications.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/V-ANGLES.jpg`,
    specifications: [
      "Size: 16 mm × 16 mm – 75 mm × 75 mm",
      "Thickness: 2 mm – 8 mm",
      "Length: 6 m",
      "Grade: Structural Steel",
      "Surface: Mill Finish / Polished",
      "Standards Followed: RS ISO 657-1 (Hot-rolled steel sections – angles), ASTM A36, IS 2062; Rwanda Standards Board (RSB) Product Certified",
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
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "RS ISO 657-1 (Hot-rolled steel sections – angles)", "ASTM A36", "IS 2062"],
    priceRange: "Contact for pricing",
    availability: "In Stock",
  },
  {
    id: 5,
    title: "C Channel",
    category: "Construction",
    description:
      "MS Channel steel engineered to provide outstanding structural support, stability, and versatility. Features durable coating for long-lasting performance. Ideal for structural support, framing systems, and industrial applications.",
    shortDescription: "MS Channel with durable coating",
    carouselDescription:
      "Long-lasting MS Channel steel ideal for stable, versatile structural and industrial solutions.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/C-Chanel.jpg`,
    specifications: [
      "Size: 75 × 40 mm – 150 × 75 mm",
      "Thickness: 3 mm – 6 mm",
      "Length: 6 m",
      "Grade: Structural Steel",
      "Standards Followed: RS ISO 657-1 (Hot-rolled steel sections – channels), ASTM A36, IS 2062; Rwanda Standards Board (RSB) Product Certified",
    ],
    applications: [
      "Structural Support",
      "Framing Systems",
      "Industrial Racking",
      "Construction",
      "Building Infrastructure",
    ],
    features: [
      "High Load Capacity",
      "Easy Installation",
      "Long-lasting Performance",
      "Cost-effective Solution",
      "MS Channel Construction",
    ],
    benefits: [
      "Versatile applications",
      "Superior corrosion protection",
      "Long-lasting performance",
      "Cost competitive",
      "Easy installation",
      "High structural integrity",
    ],
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "RS ISO 657-1 (Hot-rolled steel sections – channels)", "ASTM A36", "IS 2062"],
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
    carouselDescription:
      "Steel flat bar for versatile industrial applications. Crafted to provide reliable strength and versatility for a range of manufacturing, construction, and fabrication needs.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/Flat-Bars.jpg`,
    specifications: [
      "Width: 16 mm – 75 mm",
      "Thickness: 2 mm – 8 mm",
      "Length: 6 m",
      "Grade: Mild Steel / Structural Steel",
      "Surface: Mill Finish",
      "Standards Followed: ASTM A36, IS 2062; Rwanda Standards Board (RSB) Product Certified",
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
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "ASTM A36", "IS 2062"],
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
    carouselDescription:
      "High-strength hot-rolled strips engineered for versatile performance across automotive, construction, manufacturing, and fabrication industries.",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/products/HOT-ROLLED-STRIP.webp`,
    specifications: [
      "Thickness: 0.8 mm – 2 mm",
      "Width: 80 mm – 240 mm",
      "Surface: Mill Finish",
      "Grade: Mild Steel / Low Carbon Steel",
      "Tensile Strength: 340 – 480 MPa",
      "Elongation: ≥ 20%",
      "Standards Followed: ASTM A36, IS 2062; Rwanda Standards Board (RSB) Product Certified",
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
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "ASTM A36", "IS 2062"],
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
    carouselDescription:
      "High-strength hollow sections offering an excellent strength-to-weight ratio for structural and engineering applications.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/HS.jpg`,
    specifications: [
      "Size: 12 mm × 12 mm – 60 mm × 60 mm",
      "Thickness: 0.8 mm – 2 mm",
      "Length: 6 m",
      "Grade: Structural Steel",
      "Shape: Square / Rectangular / Circular",
      "Standards Followed: ASTM A500, IS 4923; Rwanda Standards Board (RSB) Product Certified",
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
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "ASTM A500", "IS 4923"],
    priceRange: "Contact for pricing",
    availability: "In Stock",
  },
  {
    id: 10,
    title: "Wire Nails",
    category: "Manufacturing",
    description:
      "MS wire nails: versatile, durable fasteners for construction. Perfect for both industrial and construction applications, offering reliable fastening solutions with superior quality and performance.",
    shortDescription:
      "MS wire nails: versatile, durable fasteners for construction",
    carouselDescription:
      "Reliable, long-lasting MS wire nails engineered for superior grip in construction and industrial use.",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/products/Wire-Nails (1).avif`,
    specifications: [
      "Size: 1.5 inch – 6 inch",
      "Material: MS (Mild Steel)",
      "Head Type: Flat / Round / Countersunk",
      "Point Type: Diamond / Blunt",
      "Surface Finish: Bright / Polished",
      "Shank Type: Smooth",
      "Tensile Strength: 300 – 500 MPa (typical for mild steel wire nails)",
      "Standards Followed: ASTM F1667, IS 723; Rwanda Standards Board (RSB) Product Certified",
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
      "Sharp Points",
      "Consistent Quality",
      "Strong Holding Power",
      "Easy to Use",
      "MS Material",
    ],
    benefits: [
      "High durability for long-lasting performance",
      "Reliable fastening in various materials",
      "Cost effective solution",
      "Strong holding power",
      "Easy to use and install",
      "MS material quality",
    ],
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "ASTM F1667", "IS 723"],
    priceRange: "Contact for pricing",
    availability: "In Stock",
  },
  {
    id: 11,
    title: "Binding Wire",
    category: "Construction",
    description:
      "Durable MS annealed binding wire that delivers reliable performance in a range of applications, from construction to general industrial use. Essential for concrete reinforcement and construction tying.",
    shortDescription: "Durable MS annealed binding wire",
    carouselDescription:
      "MS annealed binding wire designed for dependable reinforcement and versatile fastening applications.",
    image: `${
      process.env.NEXT_PUBLIC_BASE_PATH || ""
    }/products/Binding-Wire (1).jpg`,
    specifications: [
      "Diameter: 1.4 mm – 2.5 mm",
      "Material: MS Annealed Wire",
      "Packing: 50 kg bag",
      "Surface Finish: Black Annealed",
      "Tensile Strength: 300 – 450 MPa",
      "Elongation: ≥ 20%",
      "Standards Followed: IS 280, ASTM A641; Rwanda Standards Board (RSB) Product Certified",
    ],
    applications: [
      "Concrete Reinforcement",
      "Construction Tying",
      "General Binding",
      "Industrial Use",
      "Rebar Tying",
    ],
    features: [
      "MS Annealed Material",
      "Flexible",
      "Easy to Use",
      "High Tensile Strength",
      "Long-lasting Performance",
      "50kg Bag Packing",
    ],
    benefits: [
      "MS annealed material quality",
      "Easy to use and handle",
      "Reliable performance in all conditions",
      "Cost effective solution",
      "High tensile strength",
      "Convenient 50kg bag packing",
    ],
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "IS 280", "ASTM A641"],
    priceRange: "Contact for pricing",
    availability: "In Stock",
  },
  {
    id: 12,
    title: "BRC",
    category: "Construction",
    description:
      "Premium BRC reinforcement mesh crafted to strengthen concrete structures and deliver durable, high-performance results.",
    shortDescription:
      "Premium BRC reinforcement mesh for concrete strengthening",
    carouselDescription:
      "Premium BRC reinforcement mesh crafted to strengthen concrete structures and deliver durable, high-performance results.",
    image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/brc.jpg`,
    specifications: [
      "Mesh Size: 100 × 100 mm – 200 × 200 mm",
      "Wire Diameter: 4 mm – 8 mm",
      "Material: High Tensile Steel",
      "Sheet Size: Standard 2.4 m × 4.8 m (custom sizes available)",
      "Surface Finish: Black / Plain",
      "Tensile Strength: ≥ 485 MPa (typical for high tensile welded wire mesh)",
      "Standards Followed: BS 4483, IS 1566; Rwanda Standards Board (RSB) Product Certified",
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
    certifications: ["Rwanda Standards Board (RSB) Product Certified", "BS 4483", "IS 1566"],
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
    carouselDescription:
      "Corrosion-resistant GI chain-link fencing providing robust and affordable protection for all types of properties.",
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
    carouselDescription:
      "Effective and long-lasting barbed wire fencing engineered for robust security applications.",
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

export default function ProductPage({ onClose }: { onClose: () => void }) {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const products = PRODUCTS_DATA;
  const TRANSITION_DURATION = 5000; // 5 seconds per product

  // Get unique categories
  const categories = [
    "All",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  // Filter products based on search and category
  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      searchQuery === "" ||
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.shortDescription
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.features.some((f) =>
        f.toLowerCase().includes(searchQuery.toLowerCase())
      ) ||
      product.applications.some((a) =>
        a.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const handleClose = () => {
    // Use window.location for immediate navigation with skipIntro parameter
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/?skipIntro=true`;
    if (onClose) {
      onClose();
    }
  };

  // Auto-advance products with progress indicator
  useEffect(() => {
    // Reset progress when index changes (either auto or manual)
    setProgress(0);
    const startTime = Date.now();
    let animationFrame: number;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / TRANSITION_DURATION) * 100, 100);

      setProgress(newProgress);

      if (newProgress >= 100) {
        setCurrentIndex((current) => (current + 1) % products.length);
        // Progress will reset automatically when currentIndex changes
      }

      animationFrame = requestAnimationFrame(updateProgress);
    };

    animationFrame = requestAnimationFrame(updateProgress);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [currentIndex, products.length, TRANSITION_DURATION]);

  // Handle manual product selection
  const handleProductClick = useCallback((index: number) => {
    setCurrentIndex(index);
    // Progress will reset automatically via useEffect when currentIndex changes
  }, []);

  // Disable body scroll when this page is open to prevent double scrollbars
  useEffect(() => {
    // Store original overflow values
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    // Disable scrolling on body and html
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    return () => {
      // Restore original overflow values on unmount
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-gray-50 overflow-y-auto"
      style={{ zIndex: 10001 }}
    >
      {/* Floating Back/Close Buttons - Always visible */}
      <div
        className="fixed top-4 right-4 flex items-center gap-3"
        style={{ zIndex: 10000 }}
      >
        <button
          onClick={handleClose}
          className="flex items-center space-x-2 transition-all duration-200 font-medium px-4 py-2 rounded-lg text-white hover:text-orange-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
          style={{
            textShadow:
              "2px 2px 8px rgba(0, 0, 0, 0.8), 0 0 20px rgba(0, 0, 0, 0.5)",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            zIndex: 10000,
          }}
          aria-label="Back to home"
        >
          <ArrowLeft
            className="w-5 h-5"
            style={{
              filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))",
            }}
          />
          <span className="hidden sm:inline">Back to Home</span>
        </button>
        <button
          onClick={handleClose}
          className="p-2 transition-all duration-200 rounded-lg text-white hover:text-orange-300 hover:bg-white/20 backdrop-blur-sm border border-white/20"
          style={{
            filter: "drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.8))",
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)",
            zIndex: 10000,
          }}
          aria-label="Close products page"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* ArcelorMittal Style Layout - Hero Carousel */}
      <div
        className="relative h-screen w-full overflow-hidden"
        style={{ zIndex: 1 }}
      >
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

        {/* Background Image Carousel - Based on selected product */}
        <div className="absolute inset-0 w-full h-full" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-900" />
          {products.map((product, index) => (
            <div
              key={product.id}
              style={{
                opacity: currentIndex === index ? 1 : 0,
                zIndex:
                  currentIndex === index
                    ? 2
                    : currentIndex === (index + 1) % products.length
                    ? 1
                    : 0,
                pointerEvents: "none",
                transition: "opacity 0.8s ease-in-out",
              }}
              className="absolute inset-0"
              aria-hidden="true"
            >
              <Image
                src={product.image}
                alt={`${product.title} background`}
                fill
                className="object-cover"
                quality={60}
                priority={
                  currentIndex === index ||
                  currentIndex === (index + 1) % products.length
                }
                loading={
                  currentIndex === index ||
                  currentIndex === (index + 1) % products.length
                    ? "eager"
                    : "lazy"
                }
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
          ))}
        </div>

        {/* Main Content - ArcelorMittal Style */}
        <div className="relative h-full flex items-center pt-16">
          <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Side - Main Content */}
            <div className="text-left">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                {products[currentIndex].title}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-2xl">
                {products[currentIndex].carouselDescription}
              </p>
              <button
                onClick={() => setSelectedProduct(products[currentIndex])}
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Find out more</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right Side - Products List */}
            <div className="lg:pl-8 max-w-full">
              <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
                Our Products
              </h2>
              <ul className="space-y-4 max-h-[60vh] overflow-y-auto pr-2 product-list-scrollbar">
                {products.map((product, index) => {
                  const isActive = currentIndex === index;
                  const circumference = 2 * Math.PI * 10; // radius = 10 (matches circle r="10")
                  const strokeDashoffset =
                    circumference - (progress / 100) * circumference;

                  return (
                    <li key={product.id} className="min-w-0">
                      <button
                        onClick={() => handleProductClick(index)}
                        className="relative flex items-center gap-3 w-full text-left group min-w-0"
                      >
                        {/* Circular Progress Indicator */}
                        <div className="relative w-8 h-8 flex-shrink-0">
                          <svg
                            className="w-8 h-8 transform -rotate-90"
                            viewBox="0 0 24 24"
                          >
                            {/* Background circle */}
                            <circle
                              cx="12"
                              cy="12"
                              r="10"
                              fill="none"
                              stroke="rgba(255, 255, 255, 0.3)"
                              strokeWidth="2"
                            />
                            {/* Animated outer circle - rotates as progress fills */}
                            {isActive && (
                              <circle
                                cx="12"
                                cy="12"
                                r="11"
                                fill="none"
                                stroke="#f1852e"
                                strokeWidth="1.5"
                                strokeDasharray="2 4"
                                opacity="0.6"
                                style={{
                                  transformOrigin: "12px 12px",
                                  transform: `rotate(${
                                    (progress / 100) * 360
                                  }deg)`,
                                  transition: "transform 0.1s ease-out",
                                }}
                              />
                            )}
                            {/* Progress circle - only show for active item */}
                            {isActive && (
                              <circle
                                cx="12"
                                cy="12"
                                r="10"
                                fill="none"
                                stroke="#f1852e"
                                strokeWidth="2.5"
                                strokeDasharray={circumference}
                                strokeDashoffset={strokeDashoffset}
                                strokeLinecap="round"
                                style={{
                                  transformOrigin: "12px 12px",
                                }}
                              />
                            )}
                            {/* Active indicator dot */}
                            <circle
                              cx="12"
                              cy="12"
                              r="4"
                              fill={
                                isActive
                                  ? "#f1852e"
                                  : "rgba(255, 255, 255, 0.5)"
                              }
                              className="transition-all duration-300"
                            />
                          </svg>
                        </div>
                        {/* Product Name */}
                        <span
                          className={`text-base sm:text-lg text-white transition-colors duration-300 truncate flex-1 min-w-0 ${
                            isActive
                              ? "font-semibold"
                              : "font-normal opacity-70 group-hover:opacity-100"
                          }`}
                          title={product.title}
                        >
                          {product.title}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid - Below Hero Carousel */}
      <div className="relative bg-gray-50 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              All <span className="logo-blue-gradient">Products</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Explore our comprehensive range of premium steel products designed
              for various industries and applications
            </p>
          </div>

          {/* Search and Filter Bar */}
          <div className="mb-8 space-y-4">
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search products by name, description, features, or applications..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2084b1] focus:border-transparent text-gray-900 placeholder-gray-400"
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap items-center justify-center gap-2">
              <div className="flex items-center gap-2 text-gray-600 font-medium">
                <Filter className="w-4 h-4" />
                <span>Category:</span>
              </div>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? "bg-[#2084b1] text-white shadow-md"
                      : "bg-white text-gray-700 border border-gray-300 hover:border-[#2084b1] hover:text-[#2084b1]"
                  }`}
                  aria-label={`Filter by ${category}`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Results Count */}
            <div className="text-center text-gray-600">
              {filteredProducts.length === 0 ? (
                <p className="text-lg">
                  No products found matching your criteria.
                </p>
              ) : (
                <p className="text-sm">
                  Showing{" "}
                  <span className="font-semibold">
                    {filteredProducts.length}
                  </span>{" "}
                  {filteredProducts.length === 1 ? "product" : "products"}
                  {searchQuery && ` for "${searchQuery}"`}
                  {selectedCategory !== "All" && ` in ${selectedCategory}`}
                </p>
              )}
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 && (
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              role="list"
              aria-label="Product catalog"
            >
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden flex flex-col"
                  onClick={() => setSelectedProduct(product)}
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
                  {/* Product Image */}
                  <div className="relative h-48 overflow-hidden bg-gray-100">
                    <Image
                      src={product.image}
                      alt={product.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {/* Arrow Icon */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <ArrowRight className="w-5 h-5 text-gray-700" />
                      </div>
                    </div>

                    {/* Availability Badge */}
                    <div className="absolute bottom-4 right-4">
                      <span className="flex items-center px-3 py-1 bg-green-500 text-white text-xs font-semibold rounded-full shadow-md">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        {product.availability}
                      </span>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#2084b1] transition-colors duration-300">
                        {product.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {product.shortDescription}
                      </p>
                      {/* Full Description */}
                      <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-4">
                        {product.description}
                      </p>
                    </div>

                    {/* Features Preview */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {product.features
                        .slice(0, 3)
                        .map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2.5 py-1 bg-gray-100 text-gray-700 text-xs rounded-md border border-gray-200"
                          >
                            {feature}
                          </span>
                        ))}
                      {product.features.length > 3 && (
                        <span className="px-2.5 py-1 bg-[#2084b1]/10 text-[#2084b1] text-xs rounded-md border border-[#2084b1]/20">
                          +{product.features.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Applications Preview */}
                    <div className="mb-4">
                      <p className="text-xs font-semibold text-gray-500 mb-2">
                        Applications:
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {product.applications.slice(0, 2).map((app, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-blue-50 text-blue-700 text-xs rounded border border-blue-200"
                          >
                            {app}
                          </span>
                        ))}
                        {product.applications.length > 2 && (
                          <span className="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded">
                            +{product.applications.length - 2}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Price - Pushed to bottom */}
                    <div className="pt-4 border-t border-gray-200 mt-auto">
                      <div className="flex items-center justify-between">
                        <span className="text-[#f1852e] font-bold text-base">
                          {product.priceRange}
                        </span>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedProduct(product);
                          }}
                          className="text-[#2084b1] hover:text-[#f1852e] text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedProduct(null)}
        >
          <div
            className="bg-white rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto shadow-2xl border border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 p-6 sm:p-8 rounded-t-2xl shadow-sm z-10">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                    {selectedProduct.title}
                  </h2>
                  <div className="flex items-center">
                    <span className="flex items-center text-green-600 font-medium text-sm">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      {selectedProduct.availability}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200 rounded-lg hover:bg-gray-100"
                  aria-label="Close product details"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Product Image */}
                <div className="relative h-80 lg:h-96 rounded-xl overflow-hidden bg-gray-100 shadow-lg">
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                      <div className="w-1 h-6 logo-blue-bg mr-3 rounded-full" />
                      Description
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProduct.description}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-1 h-6 logo-orange-bg mr-3 rounded-full" />
                      Key Features
                    </h3>
                    <div className="space-y-2">
                      {selectedProduct.features.map((feature, index) => (
                        <div
                          key={index}
                          className="flex items-start p-3 bg-gray-50 rounded-lg border border-gray-200"
                        >
                          <CheckCircle className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                      <div className="w-1 h-6 logo-blue-bg mr-3 rounded-full" />
                      Applications
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProduct.applications.map((app, index) => (
                        <span
                          key={index}
                          className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-md border border-blue-200"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Specifications & Certifications */}
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-1 h-6 logo-orange-bg mr-3 rounded-full" />
                    Specifications
                  </h3>
                  <div className="space-y-3">
                    {selectedProduct.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-3 px-4 bg-white rounded-lg border border-gray-200"
                      >
                        <span className="text-gray-600 text-sm font-medium">
                          {spec.split(":")[0]}
                        </span>
                        <span className="font-semibold text-gray-900 text-right text-sm">
                          {spec.split(":")[1]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <div className="w-1 h-6 logo-blue-bg mr-3 rounded-full" />
                    Certifications Followed
                  </h3>
                  <div className="space-y-3">
                    {selectedProduct.certifications.map((cert, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-white rounded-lg border border-gray-200"
                      >
                        <Shield className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700 text-sm font-medium">
                          {cert}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Price and CTA */}
              <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                  <div className="text-center lg:text-left">
                    <p className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedProduct.priceRange}
                    </p>
                    <div className="flex items-center justify-center lg:justify-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                      <p className="text-green-600 font-medium text-sm">
                        {selectedProduct.availability}
                      </p>
                    </div>
                  </div>
                  <button
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
                    className="logo-orange-bg text-white px-8 py-3 rounded-lg font-bold text-base hover:opacity-90 transition-opacity duration-200 shadow-md hover:shadow-lg flex items-center gap-2"
                  >
                    Request Quote
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
