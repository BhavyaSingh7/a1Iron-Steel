"use client";

import React, { useState } from "react";
import { Mail, MapPin } from "lucide-react";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Create mailto link with form data
      const subject = encodeURIComponent(
        `Contact Form Submission from ${formData.name}`
      );
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${
          formData.phone || "Not provided"
        }\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:hr@a1steelrwanda.com?subject=${subject}&body=${body}`;

      // Open email client
      window.location.href = mailtoLink;

      // Show success message
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      description: "Send us your inquiries",
      details: ["info@a1ironsteel.rw", "sales@a1ironsteel.rw"],
    },
    {
      icon: MapPin,
      title: "Address",
      description: "Visit our manufacturing facility",
      details: ["Kigali Industrial Zone", "Rwanda, East Africa"],
    },
  ];

  return (
    <section
      id="contact"
      aria-label="Contact us section"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-16"
    >
      {/* Static Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        {/* Static Gradient Orbs - removed animations for performance */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-blue-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-12">
          <p className="text-orange-500 font-semibold text-sm sm:text-base md:text-lg lg:text-xl mb-2 sm:mb-3">
            GET IN TOUCH
          </p>
          <h2
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold text-white mb-2 sm:mb-3"
            style={{
              textShadow: "0 0 30px rgba(249, 115, 22, 0.5)",
            }}
          >
            Let&apos;s Connect
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mx-auto mb-2 sm:mb-3 md:mb-4" />
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to discuss your steel requirements? Get in touch with our team
            for personalized solutions and expert guidance.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10 xl:gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-3 sm:space-y-4">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                Contact Information
              </h3>
              <div className="w-16 sm:w-20 h-1 bg-gradient-to-r from-orange-500 to-orange-600 mb-2 sm:mb-3" />
            </div>

            {contactInfo.map((contact) => (
              <div
                key={contact.title}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-4 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-200 hover:bg-white/15"
              >
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <contact.icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-white mb-0.5 sm:mb-1 text-xs sm:text-sm md:text-base">
                      {contact.title}
                    </h4>
                    <p className="text-gray-300 text-xs mb-0.5 sm:mb-1">
                      {contact.description}
                    </p>
                    {contact.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-200 font-medium">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl border border-white/20">
              <div className="mb-4 sm:mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">
                  Send us a Message
                </h3>
                <p className="text-gray-300 text-xs sm:text-sm">
                  Fill out the form below and we&apos;ll get back to you within
                  24 hours.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your full name"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 hover:bg-white/25 text-xs sm:text-sm"
                      required
                      aria-label="Your full name"
                      aria-required="true"
                    />
                  </div>
                  <div>
                    <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 hover:bg-white/25 text-xs sm:text-sm"
                      required
                      aria-label="Your email address"
                      aria-required="true"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter your phone number"
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-200 hover:bg-white/25 text-xs sm:text-sm"
                    aria-label="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-white text-xs sm:text-sm font-medium mb-1 sm:mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your project requirements..."
                    rows={3}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-md sm:rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 hover:bg-white/25 resize-none text-xs sm:text-sm"
                    required
                    aria-label="Your message"
                    aria-required="true"
                  ></textarea>
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-3 text-green-300 text-xs sm:text-sm">
                    ✓ Message prepared! Your email client should open shortly.
                  </div>
                )}
                {submitStatus === "error" && (
                  <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-300 text-xs sm:text-sm">
                    ✗ Something went wrong. Please try again.
                  </div>
                )}

                <div className="pt-1 sm:pt-2">
                  <button
                    type="submit"
                    aria-label="Submit contact form"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 sm:py-3 rounded-md sm:rounded-lg font-semibold text-xs sm:text-sm shadow-xl hover:shadow-2xl transition-all duration-200 group disabled:opacity-50 disabled:cursor-not-allowed hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      boxShadow: "0 0 30px rgba(249, 115, 22, 0.3)",
                    }}
                  >
                    <span className="flex items-center justify-center space-x-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Sending...</span>
                        </>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <svg
                            className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-200"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                            />
                          </svg>
                        </>
                      )}
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
