"use client";

import React, { useState, useEffect, useCallback, useMemo } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { CarouselSkeleton } from "@/components/LoadingSkeleton";

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
  // Products data for homepage carousel - ordered as requested
  const products: Product[] = useMemo(
    () => [
      // 1. TMT Bars
      {
        id: 1,
        title: "TMT Bars",
        description:
          "Thermo Mechanical Treatment (TMT) Steel bars used in Earthquake-resistant construction. The backbone of modern construction, providing superior strength, durability, and safety for projects that demand exceptional resistance to seismic forces, corrosion, and high temperatures.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/tmt bars.jpg`,
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
      },
      // 2. Round Bars
      {
        id: 2,
        title: "Round Bar",
        description:
          "Precision and Strength for Diverse Applications. At A1 Iron & Steel, we specialize in the production of high-quality round bars, engineered to meet the needs of a wide range of industries, including construction, manufacturing, automotive, and more. Our round bars are crafted with precision and durability in mind, offering superior strength and reliability for both standard and customized applications.",
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
      },
      // 3. Wire Rods
      {
        id: 3,
        title: "5.5MM Wire Rod",
        description:
          "A low-carbon general-purpose manufacturing wire used in a wide range of industries. Versatile and reliable for multiple applications, our wire rods are manufactured with precision, ensuring uniformity and superior mechanical properties. Ideal for construction, automotive, fencing, and engineering applications.",
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
      },
      // 4. Section Products (V Angle, C Channel, I-Beam, Flat Bar)
      {
        id: 4,
        title: "V Angle",
        description:
          "Versatile stainless steel structural connector designed to meet the demands of the most rigorous construction and industrial applications. Perfect for structural framing, support brackets, and reinforcement work.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/V-ANGLES.jpg`,
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
      },
      {
        id: 5,
        title: "C Channel",
        description:
          "Corrosion-resistant hot-dip galvanized channel steel engineered to provide outstanding structural support, stability, and versatility. Ideal for structural support, framing systems, and industrial applications.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/C-Chanel.jpg`,
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
      },
      {
        id: 6,
        title: "I-Beam",
        description:
          "Corrosion-resistant galvanized I-beam steel specifically designed to provide maximum structural strength, stability, and reliability. Perfect for structural framing, bridge construction, and heavy load support applications.",
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
      },
      {
        id: 7,
        title: "Flat Bar",
        description:
          "Steel flat bar for versatile industrial applications. Crafted to provide reliable strength and versatility for a range of manufacturing, construction, and fabrication needs.",
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
      },
      // 5. Hot Rolled Strip
      {
        id: 8,
        title: "Hot Rolled Strip",
        description:
          "High-strength hot-rolled construction material engineered to meet the diverse needs of various industries. Strong hot-rolled strip perfect for automotive, construction, manufacturing, and fabrication applications.",
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
      },
      // 6. Hollow Sections
      {
        id: 9,
        title: "Hollow Section",
        description:
          "Versatile hollow section for structural construction with exceptional strength. Perfect for construction, structural, and engineering applications, offering an excellent strength-to-weight ratio.",
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
      },
      // 7. Wire Products
      {
        id: 10,
        title: "Wire Nails",
        description:
          "Wire nails: versatile, durable fasteners for construction. Perfect for both industrial and construction applications, offering reliable fastening solutions with superior quality and performance.",
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
      },
      {
        id: 11,
        title: "Binding Wire",
        description:
          "Durable, corrosion-resistant galvanized binding wire that delivers reliable performance in a range of applications, from construction to general industrial use. Essential for concrete reinforcement and construction tying.",
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
      },
      {
        id: 12,
        title: "BRC",
        description:
          "British Reinforcement Concrete (BRC) reinforcement mesh for concrete strengthening. High-quality mesh designed to enhance the structural integrity and durability of concrete structures.",
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
      },
      {
        id: 13,
        title: "GI Chain Link",
        description:
          "Durable galvanized chain-link fencing material. GI (Galvanized Iron) Chain Link fencing that provides a strong, durable, and cost-effective solution for securing properties and enclosures.",
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
      },
      {
        id: 14,
        title: "Barbed Wire",
        description:
          "Secure, cost-effective barbed wire fencing solution. Widely used in various security applications to deter trespassers and enhance safety. Known for its sharpness, durability, and effectiveness as a security deterrent.",
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
      },
    ],
    []
  );

  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [carouselItems, setCarouselItems] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsClient(true);
    // Create infinite carousel by duplicating products only twice (was 3x)
    setCarouselItems([...products, ...products]);
    // Initialize to show the first product (index 0)
    setCurrentIndex(0);
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
    setTimeout(() => setIsTransitioning(false), 300);
  }, [products.length, isTransitioning]);

  const navigateRight = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => {
      const newIndex = prev + 1;
      if (newIndex >= products.length * 2) {
        // Jump to the beginning of the first set (seamless loop)
        return 0;
      }
      return newIndex;
    });
    setTimeout(() => setIsTransitioning(false), 300);
  }, [products.length, isTransitioning]);

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrentIndex(index);
      setTimeout(() => setIsTransitioning(false), 300);
    },
    [isTransitioning]
  );

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
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 tracking-wide"
            style={{ letterSpacing: "0.03em" }}
          >
            <span className="logo-blue-gradient">OUR</span>{" "}
            <span className="logo-orange-gradient">PRODUCTS</span>
          </h2>

          {/* Underline */}
          <div className="w-20 sm:w-24 h-0.5 logo-orange-bg mx-auto mb-6 sm:mb-8" />

          <p
            className="text-base sm:text-lg text-gray-600 font-light tracking-wide"
            style={{ letterSpacing: "0.02em" }}
          >
            Premium Steel Solutions for Your Needs
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={navigateLeft}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white border border-orange-500 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            style={{
              boxShadow:
                "0 4px 12px -2px rgba(249, 115, 22, 0.25), 0 2px 6px -1px rgba(249, 115, 22, 0.15)",
            }}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={navigateRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 bg-white border border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg"
            style={{
              boxShadow:
                "0 4px 12px -2px rgba(32, 132, 177, 0.25), 0 2px 6px -1px rgba(32, 132, 177, 0.15)",
            }}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Product Cards */}
          <div className="overflow-hidden px-16">
            {!isClient ? (
              <CarouselSkeleton />
            ) : (
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{
                  transform: `translateX(-${currentIndex * 320}px)`,
                  willChange: "transform",
                }}
              >
                {/* Render all carousel items */}
                {carouselItems.map((product, index) => (
                  <div
                    key={`${product.id}-${index}`}
                    className="flex-shrink-0 w-80 md:w-96 px-4"
                  >
                    <div
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full hover:border-gray-200 hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-2 flex flex-col cursor-pointer group"
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
                          sizes="(max-width: 768px) 320px, 384px"
                          loading="lazy"
                          priority={
                            index < 2 &&
                            currentIndex % products.length === index
                          }
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
                          className="text-orange-500 font-medium text-left hover:text-orange-600 transition-transform duration-200 ease-out hover:translate-x-1 text-sm tracking-wide group-hover:text-orange-600"
                          style={{ letterSpacing: "0.05em" }}
                        >
                          LEARN MORE →
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {products.map((_, index) => {
              const isActive = index === currentIndex % products.length;
              return (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 active:scale-95 ${
                    isActive
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              );
            })}
          </div>

          {/* Instructions */}
          <p className="text-center text-sm text-gray-500 mt-6">
            Drag to navigate • Use arrow buttons • Click dots to jump • Click on
            any product to learn more
          </p>
        </div>
      </div>

      {/* Product Detail Modal */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div
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
                  quality={60}
                  loading="eager"
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
                <button
                  onClick={() => {
                    const subject = encodeURIComponent(
                      `Product Quote Request - ${selectedProduct.title}`
                    );
                    const body = encodeURIComponent(
                      `Hello,\n\nI am interested in getting a quote for ${selectedProduct.title}.\n\nPlease provide me with pricing and availability information.\n\nThank you.`
                    );
                    window.location.href = `mailto:marketing@a1steelrwanda.com?subject=${subject}&body=${body}`;
                  }}
                  className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition-colors"
                >
                  Request Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
