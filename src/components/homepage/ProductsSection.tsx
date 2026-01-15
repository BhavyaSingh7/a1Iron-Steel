"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Product type definition
type Product = {
  id: number;
  title: string;
  description: string;
  carouselDescription: string;
  image: string;
  specifications: string[];
  applications: string[];
  features: string[];
};

export default function ProductsSection() {
  // All 14 products from ProductPage with carouselDescription as description
  const products: Product[] = useMemo(
    () => [
      {
        id: 1,
        title: "TMT Bars",
        description:
          "High-performance TMT bars crafted with advanced technology for unmatched strength, corrosion resistance, and seismic safety.",
        carouselDescription:
          "High-performance TMT bars crafted with advanced technology for unmatched strength, corrosion resistance, and seismic safety.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/tmt bars.jpg`,
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
      },
      {
        id: 2,
        title: "Round Bar",
        description:
          "Precision-engineered round bars built to meet the highest standards for construction, manufacturing, automotive, and more.",
        carouselDescription:
          "Precision-engineered round bars built to meet the highest standards for construction, manufacturing, automotive, and more.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/Round bars.jpg`,
        specifications: [
          "Diameter: 4mm - 40mm",
          "Length: 6m & 12m",
          "Grade: Carbon Steel",
          "Surface: Bright/Polished",
          "Certification: Rwandan Standard",
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
      {
        id: 3,
        title: "5.5MM Wire Rod",
        description:
          "Durable, general-purpose wire rods crafted for diverse industrial applications with excellent mechanical properties.",
        carouselDescription:
          "Durable, general-purpose wire rods crafted for diverse industrial applications with excellent mechanical properties.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/5.5mm.webp`,
        specifications: [
          "Diameter: 5.5mm, 6mm & 7mm",
          "Grade: Low Carbon Steel",
          "Surface: Bright",
          "Tolerance: ±0.1mm",
          "Tensile Strength: Check online for specifications",
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
      {
        id: 4,
        title: "V Angle",
        description:
          "Versatile structural steel connectors engineered for high-demand structural and industrial applications.",
        carouselDescription:
          "Versatile structural steel connectors engineered for high-demand structural and industrial applications.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/V-ANGLES.jpg`,
        specifications: [
          "Size: 16mm x 16mm - 75mm x 75mm",
          "Thickness: 2mm - 8mm",
          "Length: 6m",
          "Grade: Structural Steel",
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
          "MS Channel with durable coating ideal for stable, versatile structural and industrial solutions.",
        carouselDescription:
          "Long-lasting MS Channel steel ideal for stable, versatile structural and industrial solutions.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/C-Chanel.jpg`,
        specifications: [
          "Size: 75x40mm to 150x75mm",
          "Thickness: 3mm - 6mm",
          "Coating: Durable Coating (Not Galvanized)",
          "Length: 6m",
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
          "Durable Coating",
          "High Load Capacity",
          "Easy Installation",
          "Long-lasting Performance",
          "Cost-effective Solution",
          "MS Channel Construction",
        ],
      },
      {
        id: 6,
        title: "I-Beam",
        description:
          "Durable I-beam steel built to deliver exceptional stability and performance in demanding applications.",
        carouselDescription:
          "Durable I-beam steel built to deliver exceptional stability and performance in demanding applications.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/STEEL-BEAMS.jpg`,
        specifications: [
          "Size: 100x50mm",
          "Thickness: 3mm-25mm",
          "Length: 6m-12m",
          "Grade: Structural Steel",
          "Standard: ASTM A36 / IS 2062",
          "Coating: Not Galvanized",
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
          "Easy Installation",
          "Superior Strength-to-Weight Ratio",
          "Long-term Durability",
          "High Structural Integrity",
        ],
      },
      {
        id: 7,
        title: "Flat Bar",
        description:
          "Steel flat bar for versatile industrial applications. Crafted to provide reliable strength and versatility for a range of manufacturing, construction, and fabrication needs.",
        carouselDescription:
          "Steel flat bar for versatile industrial applications. Crafted to provide reliable strength and versatility for a range of manufacturing, construction, and fabrication needs.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/Flat-Bars.jpg`,
        specifications: [
          "Width: 16mm - 75mm",
          "Thickness: 2mm - 8mm",
          "Length: 6m",
          "Grade: Mild Steel / Structural Steel",
          "Surface: Mill Finish",
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
      {
        id: 8,
        title: "Hot Rolled Strip",
        description:
          "High-strength hot-rolled strips engineered for versatile performance across automotive, construction, manufacturing, and fabrication industries.",
        carouselDescription:
          "High-strength hot-rolled strips engineered for versatile performance across automotive, construction, manufacturing, and fabrication industries.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/HOT-ROLLED-STRIP.webp`,
        specifications: [
          "Thickness: 0.8mm - 2mm",
          "Width: 80mm - 240mm",
          "Surface: Mill Finish",
          "Tensile Strength: Check online for specifications",
          "Grade: Mild Steel / Low Carbon Steel",
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
      {
        id: 9,
        title: "Hollow Section",
        description:
          "High-strength hollow sections offering an excellent strength-to-weight ratio for structural and engineering applications.",
        carouselDescription:
          "High-strength hollow sections offering an excellent strength-to-weight ratio for structural and engineering applications.",
        image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/products/HS.jpg`,
        specifications: [
          "Size: 12mm x 12mm - 60mm x 60mm",
          "Thickness: 0.8mm - 2mm",
          "Length: 6m",
          "Grade: Structural Steel",
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
      {
        id: 10,
        title: "Wire Nails",
        description:
          "Reliable, long-lasting MS wire nails engineered for superior grip in construction and industrial use.",
        carouselDescription:
          "Reliable, long-lasting MS wire nails engineered for superior grip in construction and industrial use.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/Wire-Nails (1).avif`,
        specifications: [
          "Size: 1.5 inch - 6 inch",
          "Material: MS (Mild Steel)",
          "Head Type: Flat / Round / Countersunk",
          "Point Type: Diamond / Blunt",
          "Standard: Check MS nail specifications online",
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
      },
      {
        id: 11,
        title: "Binding Wire",
        description:
          "Corrosion-resistant binding wire designed for dependable reinforcement and versatile fastening applications.",
        carouselDescription:
          "Corrosion-resistant binding wire designed for dependable reinforcement and versatile fastening applications.",
        image: `${
          process.env.NEXT_PUBLIC_BASE_PATH || ""
        }/products/Binding-Wire (1).jpg`,
        specifications: [
          "Diameter: 1.4mm - 2.5mm",
          "Material: MS Annealed Wire",
          "Packing: 50kg bag",
          "Tensile Strength: Check specifications",
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
          "MS Annealed Material",
          "Flexible",
          "Easy to Use",
          "High Tensile Strength",
          "Long-lasting Performance",
          "50kg Bag Packing",
        ],
      },
      {
        id: 12,
        title: "BRC",
        description:
          "Premium BRC reinforcement mesh crafted to strengthen concrete structures and deliver durable, high-performance results.",
        carouselDescription:
          "Premium BRC reinforcement mesh crafted to strengthen concrete structures and deliver durable, high-performance results.",
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
          "Corrosion-resistant GI chain-link fencing providing robust and affordable protection for all types of properties.",
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
      },
      {
        id: 14,
        title: "Barbed Wire",
        description:
          "Effective and long-lasting barbed wire fencing engineered for robust security applications.",
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
      },
    ],
    []
  );

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const navigateLeft = useCallback(() => {
    setCurrentIndex((prev) => {
      const newIndex = prev === 0 ? Math.max(0, products.length - 1) : prev - 1;
      console.log("Navigate Left - Previous:", prev, "New:", newIndex);
      return newIndex;
    });
  }, [products.length]);

  const navigateRight = useCallback(() => {
    setCurrentIndex((prev) => {
      // Circular navigation: if at last product, go to first
      const newIndex = prev >= products.length - 1 ? 0 : prev + 1;
      console.log("Navigate Right - Previous:", prev, "New:", newIndex);
      return newIndex;
    });
  }, [products.length]);

  const goToSlide = useCallback(
    (index: number) => {
      // Direct navigation to any product index
      if (index >= 0 && index < products.length) {
        console.log("Go to slide - Index:", index);
        setCurrentIndex(index);
      }
    },
    [products.length]
  );

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    // Don't start dragging if clicking on a button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    setIsDragging(true);
    setStartX(e.pageX);
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = e.pageX - startX;
    setDragOffset(diff);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;
    const threshold = 100; // Minimum drag distance

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        navigateLeft();
      } else {
        navigateRight();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    // Don't start dragging if touching a button
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    setIsDragging(true);
    setStartX(e.touches[0].pageX);
    setDragOffset(0);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = e.touches[0].pageX - startX;
    setDragOffset(diff);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;
    const threshold = 100;

    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        navigateLeft();
      } else {
        navigateRight();
      }
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const openProductModal = useCallback((product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  }, []);

  // Calculate transform value
  const transformValue = useMemo(() => {
    return -currentIndex * 432 + dragOffset;
  }, [currentIndex, dragOffset]);

  // Debug: Log transform value when currentIndex changes
  useEffect(() => {
    console.log("Carousel Transform - currentIndex:", currentIndex, "dragOffset:", dragOffset, "transform:", transformValue, "px");
    if (carouselRef.current) {
      console.log("Applied transform:", carouselRef.current.style.transform);
      console.log("Carousel element:", carouselRef.current);
    }
  }, [currentIndex, dragOffset, transformValue]);

  return (
    <section
      id="products"
      aria-label="Product showcase section"
      className="relative min-h-screen flex items-center justify-center py-16 sm:py-20 lg:py-24 bg-white overflow-visible"
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
        <div className="relative -mx-4 sm:-mx-6 lg:-mx-8" style={{ overflow: "visible" }}>
          {/* Navigation Arrows - Responsive positioning */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigateLeft();
            }}
            className="absolute top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white border border-orange-500 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg left-4 md:left-[-48px] lg:left-[-64px] cursor-pointer"
            style={{
              boxShadow:
                "0 4px 12px -2px rgba(249, 115, 22, 0.25), 0 2px 6px -1px rgba(249, 115, 22, 0.15)",
              pointerEvents: "auto",
            }}
            aria-label="Previous products"
            type="button"
          >
            <ChevronLeft className="w-6 h-6 pointer-events-none" />
          </button>

          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              navigateRight();
            }}
            className="absolute top-1/2 -translate-y-1/2 z-50 w-12 h-12 bg-white border border-blue-500 rounded-full flex items-center justify-center text-blue-500 hover:bg-blue-50 transition-all duration-200 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg right-4 md:right-[-48px] lg:right-[-64px] cursor-pointer"
            style={{
              boxShadow:
                "0 4px 12px -2px rgba(32, 132, 177, 0.25), 0 2px 6px -1px rgba(32, 132, 177, 0.15)",
              pointerEvents: "auto",
            }}
            aria-label="Next products"
            type="button"
          >
            <ChevronRight className="w-6 h-6 pointer-events-none" />
          </button>

          {/* Product Cards */}
          <div
            ref={containerRef}
            className="relative overflow-x-hidden overflow-y-visible"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            style={{
              cursor: isDragging ? "grabbing" : "grab",
              paddingLeft: "0px",
              paddingRight: "0px",
              minHeight: "500px", // Ensure minimum height for visibility
              width: "100%",
              position: "relative",
            }}
          >
            <div
              ref={carouselRef}
              className="flex"
              style={{
                transform: `translate3d(${transformValue}px, 0, 0)`,
                transition: isDragging ? "none" : "transform 0.3s ease-out",
                willChange: "transform",
                minWidth: "max-content",
                position: "relative",
              }}
            >
                {/* Render all products - show 3 at a time */}
                {products.map((product, index) => (
                  <div
                    key={`product-${product.id}-${index}`}
                    className="flex-shrink-0"
                    style={{
                      width: "432px",
                      paddingLeft: "16px",
                      paddingRight: "16px",
                      minWidth: "432px",
                      flexShrink: 0,
                    }}
                  >
                    <div
                      className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full hover:border-gray-200 hover:shadow-lg transition-all duration-200 ease-out hover:-translate-y-2 flex flex-col cursor-pointer group"
                      onClick={(e) => {
                        e.stopPropagation();
                        openProductModal(product);
                      }}
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
                          sizes="400px"
                          priority={
                            index >= currentIndex && index < currentIndex + 3
                          }
                          loading={
                            index >= currentIndex && index < currentIndex + 3
                              ? "eager"
                              : "lazy"
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
                          {product.carouselDescription}
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
          </div>

          {/* Pagination Dots - One dot per product (14 dots) */}
          <div className="flex justify-center mt-8 space-x-2 flex-wrap gap-2">
            {products.map((product, index) => {
              // Show active dot for the first visible card in the current view
              // If showing cards 0,1,2 -> dot 0 is active
              // If showing cards 1,2,3 -> dot 1 is active
              // Each dot represents one product
              // First dot (index 0) is active when currentIndex is 0 (TMT Bars)
              const isActive = currentIndex === index;

              return (
                <button
                  key={product.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    // Direct navigation to the clicked product
                    goToSlide(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-125 active:scale-95 cursor-pointer ${
                    isActive
                      ? "bg-orange-500 scale-125"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                  title={product.title}
                  aria-label={`Go to ${product.title}`}
                  type="button"
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

      {/* Product Detail Modal - Dark Theme */}
      {isModalOpen && selectedProduct && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
          onClick={closeModal}
          style={{ zIndex: 10000 }}
        >
          <div
            className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl shadow-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden border border-white/10 flex flex-col"
            style={{
              boxShadow:
                "0 25px 70px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/80 to-transparent z-10" />
              <Image
                src={selectedProduct.image}
                alt={selectedProduct.title}
                fill
                className="object-cover"
                quality={80}
                loading="eager"
              />
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-200 border border-white/20 hover:scale-110"
                aria-label="Close modal"
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
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 drop-shadow-lg">
                  {selectedProduct.title}
                </h2>
                <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 md:p-8">
                <p className="text-lg md:text-xl text-white/80 mb-8 leading-relaxed">
                  {selectedProduct.description}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {/* Specifications */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
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
                      <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        Specifications
                      </span>
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.specifications.map((spec, index) => (
                        <li
                          key={index}
                          className="text-white/70 flex items-start group"
                        >
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="text-sm leading-relaxed">
                            {spec}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Applications */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
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
                      <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        Applications
                      </span>
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.applications.map((app, index) => (
                        <li
                          key={index}
                          className="text-white/70 flex items-start group"
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="text-sm leading-relaxed">{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Features */}
                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-green-500/50 transition-all duration-300">
                    <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                        <svg
                          className="w-5 h-5 text-white"
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
                      <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        Features
                      </span>
                    </h3>
                    <ul className="space-y-3">
                      {selectedProduct.features.map((feature, index) => (
                        <li
                          key={index}
                          className="text-white/70 flex items-start group"
                        >
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                          <span className="text-sm leading-relaxed">
                            {feature}
                          </span>
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
                    className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-4 rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto"
                  >
                    <span>Request Quote</span>
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
