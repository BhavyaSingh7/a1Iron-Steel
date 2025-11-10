"use client";

import { motion } from "framer-motion";
import React from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  X,
  Target,
  Eye,
  Award,
  Users,
  Globe,
  DollarSign,
  TrendingUp,
  Building,
  Phone,
  CheckCircle,
} from "lucide-react";

interface AboutUsPageProps {
  onClose?: () => void;
}

export default function AboutUsPage({ onClose }: AboutUsPageProps) {
  const router = useRouter();

  const handleClose = () => {
    router.push("/?skipIntro=true");
    if (onClose) {
      onClose();
    }
  };

  const videoPath1 = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/aboutUs/process-1.mp4`;
  const videoPath2 = `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/aboutUs/process-2.mp4`;

  const videoRef1 = React.useRef<HTMLVideoElement>(null);
  const videoRef2 = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.load();
    }
    if (videoRef2.current) {
      videoRef2.current.load();
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto"
    >
      {/* Header */}
      <div className="sticky top-0 bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleClose}
              className="flex items-center space-x-2 text-gray-700 hover:text-[#f1852e] transition-colors duration-200 font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </button>
            <button
              onClick={handleClose}
              className="p-2 text-gray-700 hover:text-[#f1852e] transition-colors duration-200 rounded-lg hover:bg-gray-100"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-20 sm:py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="logo-blue-gradient">Get To Know Us</span>
            </h1>
            <div className="w-24 h-1 logo-orange-bg mx-auto mb-8" />
            <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
              <span className="font-semibold logo-blue-gradient">
                A1 Iron & Steel
              </span>{" "}
              is a company dedicated to quality and innovation in the iron and
              steel industry. With decades of experience, we provide
              high-quality, precision-engineered steel solutions for sectors
              like construction, engineering, and infrastructure worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Description */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="bg-gradient-to-br from-blue-50/50 to-gray-50 rounded-2xl p-8 sm:p-12 shadow-lg border"
              style={{ borderColor: "rgba(32, 132, 177, 0.2)" }}
            >
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed text-center">
                The company is driven by a passionate team that combines
                advanced technology with traditional craftsmanship. Our steel
                products are known for precision, durability, and
                sustainability. A1 Iron & Steel views steel as a catalyst for
                growth, contributing to iconic structures like skyscrapers and
                bridges while prioritizing environmentally responsible
                practices.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Factory Videos Section */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="logo-blue-gradient">Manufacturing</span>{" "}
              Excellence
            </h2>
            <div className="w-20 h-1 logo-orange-bg mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Factory Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <Building className="w-6 h-6" style={{ color: "#2084b1" }} />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Our Factory
                </h3>
              </div>
              <div className="relative rounded-xl h-72 sm:h-80 overflow-hidden shadow-xl group">
                <video
                  ref={videoRef2}
                  key={videoPath2}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls
                  onError={(e) => {
                    console.error("Video failed to load:", videoPath2, e);
                  }}
                  onLoadedData={() => {
                    console.log("Video loaded successfully:", videoPath2);
                  }}
                  onCanPlay={() => {
                    console.log("Video can play");
                  }}
                >
                  <source src={videoPath2} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                  <p className="text-xl font-semibold mb-1">
                  Industrial Steel Mill
                  </p>
                  <p className="text-sm opacity-90">
                    State-of-the-art facilities
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Steel Making Video */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6" style={{ color: "#f1852e" }} />
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Making of Steel
                </h3>
              </div>
              <div className="relative rounded-xl h-72 sm:h-80 overflow-hidden shadow-xl group">
                <video
                  ref={videoRef1}
                  key={videoPath1}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  controls
                  onError={(e) => {
                    console.error("Video failed to load:", videoPath1, e);
                  }}
                  onLoadedData={() => {
                    console.log("Video loaded successfully:", videoPath1);
                  }}
                  onCanPlay={() => {
                    console.log("Video can play");
                  }}
                >
                  <source src={videoPath1} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white pointer-events-none">
                  <p className="text-xl font-semibold mb-1">
                    Steel Making Process
                  </p>
                  <p className="text-sm opacity-90">Precision manufacturing</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Excellence */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Leadership <span className="logo-blue-gradient">Excellence</span>
            </h2>
            <div className="w-20 h-1 logo-orange-bg mx-auto mb-6" />
            <p className="text-xl sm:text-2xl text-gray-600 font-semibold mb-8">
              Exemplary leadership that transforms challenges into opportunities
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="max-w-4xl mx-auto"
          >
            <div
              className="bg-gradient-to-br from-gray-50 rounded-2xl p-8 sm:p-10 shadow-lg border"
              style={{
                borderColor: "rgba(32, 132, 177, 0.2)",
                background:
                  "linear-gradient(to bottom right, #f5f5f5, rgba(141, 188, 217, 0.1))",
              }}
            >
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At{" "}
                  <span className="font-semibold logo-blue-gradient">
                    A1 Iron & Steel
                  </span>
                  , we believe that true leadership is defined by more than just
                  making decisions—it&apos;s about inspiring teams, driving
                  innovation, and fostering an environment where excellence
                  thrives. Our leadership is the driving force behind our
                  continued success, setting the standard for industry-leading
                performance, sustainability, and customer satisfaction.
                </p>
                <p>
                We take pride in a management team that exemplifies the values
                  of integrity, vision, and strategic foresight. The company
                  aims to produce economical and efficient steel through
                  backward and forward integration. Each leader within our
                  organization is committed not only to operational excellence
                  but also to creating a culture of collaboration, trust, and
                  empowerment. Their collective experience spans decades across
                  diverse industries, ensuring that our company remains at the
                  forefront of innovation and competitive edge.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission Vision Statement */}
      <section className="py-20 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Why We Do <span className="logo-blue-gradient">What We Do</span>
            </h2>
            <div className="w-20 h-1 logo-orange-bg mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 logo-blue-bg rounded-xl flex items-center justify-center shadow-lg">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                Our Mission
              </h3>
              </div>
              <div className="space-y-5 text-gray-700 leading-relaxed">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p>
                    At A1, our mission is to forge the future by producing
                  innovative, high-quality iron and steel products that shape
                    industries, drive sustainability, and support the
                    development of resilient infrastructures worldwide.
                </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p>
                    We are committed to advancing technology, ensuring
                  environmental responsibility, and empowering our partners
                  through customized, reliable solutions.
                </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                <p>
                    By blending tradition with innovation, we aim to build
                  stronger communities, elevate industries, and lay the
                  groundwork for a more sustainable tomorrow, one alloy at a
                  time.
                </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl p-8 shadow-xl border border-gray-200 hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 logo-orange-bg rounded-xl flex items-center justify-center shadow-lg">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-gray-700 leading-relaxed text-lg">
                To forge a world of possibility, where the strength of our steel
                builds not just structures, but communities, industries, and a
                sustainable future. We aspire to be the catalyst for progress,
                shaping a global landscape where innovation, resilience, and
                environmental harmony go hand in hand, creating a legacy that
                lasts for generations.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Long-term Achievement */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Laying the Groundwork for{" "}
              <span className="logo-blue-gradient">Long-term Achievement</span>
            </h2>
            <div className="w-20 h-1 logo-orange-bg mx-auto mb-8" />
          </motion.div>

          <motion.div
                initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-gradient-to-br rounded-2xl p-8 sm:p-10 shadow-lg border"
            style={{
              borderColor: "rgba(32, 132, 177, 0.2)",
              background:
                "linear-gradient(to bottom right, rgba(141, 188, 217, 0.1), #f5f5f5)",
            }}
          >
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                The company has a well spread out installed Steel capacity of
                0.250 MTPA prudently spread over SMS, TMT Bars Mills, Strip
                Mill, Medium and Light Structural Mill and Wire Rod Mill & ERW
                Pipe Plant.
              </p>
              <p>
                Alongside contributing to Rwanda&apos;s growth story, the
                company is driving an ambitious global expansion plan with its
                sights set on emerging as a leading business group. The company
                aims to capitalize on opportunities in high growth markets,
                expanding into its core areas as well as diversifying into new
                businesses.
              </p>
              <p>
                From the flat products to a whole range of long products, A1 has
                a unique product portfolio that caters to markets across the
                steel value chain. A1 Iron and Steel aims to pioneer production
                of 100% value added steel products in the country.
              </p>
              <p>
                The company endeavors to strengthen Rwanda&apos;s industrial
                base by aiding infrastructural development through sustainable
                infrastructural development approaches and inclusive growth. It
                deploys its resources to improve infrastructure, education,
                health, water, sanitation, environment and so on in the areas it
                operates in.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* A1 in Numbers */}
      <section className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              A1 in <span className="logo-blue-gradient">Numbers</span>
            </h2>
            <div className="w-20 h-1 logo-orange-bg mx-auto" />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              {
                icon: Building,
                number: "2012",
                label: "Founded in 2012",
                color: "logo-blue-bg",
              },
              {
                icon: Users,
                number: "40+",
                label: "Creative thinkers and engineers",
                color: "logo-orange-bg",
              },
              {
                icon: Globe,
                number: "16",
                label: "Countries we serve globally",
                color: "from-green-500 to-green-700",
              },
              {
                icon: DollarSign,
                number: "$2.8b",
                label: "Value of projects completed",
                color: "from-purple-500 to-purple-700",
              },
              {
                icon: TrendingUp,
                number: "450m",
                label: "Tons of steel produced annually",
                color: "from-red-500 to-red-700",
              },
              {
                icon: Award,
                number: "500+",
                label: "Projects completed successfully",
                color: "from-indigo-500 to-indigo-700",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="text-center bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300"
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl ${stat.color} flex items-center justify-center shadow-md`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 leading-tight">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              Get In <span className="logo-blue-gradient">Touch</span>
            </h2>
            <div className="w-20 h-1 logo-orange-bg mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thank you for choosing A1 Iron & Steel as your trusted partner in
              strength and progress!
            </p>
          </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="flex justify-center mb-12"
          >
            <button
              onClick={() => router.push("/contactus")}
              className="logo-orange-bg text-white px-12 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              aria-label="Navigate to contact us page"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </button>
            </motion.div>

            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button
              onClick={handleClose}
              className="logo-orange-bg text-white px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Request Quote
            </button>
            <button
              onClick={handleClose}
              className="border-2 px-10 py-4 rounded-full font-bold shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ borderColor: "#f1852e", color: "#f1852e" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f1852e";
                e.currentTarget.style.color = "white";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#f1852e";
              }}
              >
                Learn More
            </button>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
