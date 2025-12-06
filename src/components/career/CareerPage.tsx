"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
  X,
  ArrowLeft,
  User,
  Briefcase,
  FileText,
  Upload,
  Send,
  CheckCircle,
  AlertCircle,
  Sparkles,
  Award,
  Users,
  TrendingUp,
  Clock,
} from "lucide-react";

interface CareerPageProps {
  onClose?: () => void;
}

export default function CareerPage({ onClose }: CareerPageProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    position: "",
    experience: "",
    education: "",
    coverLetter: "",
  });
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleClose = () => {
    const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";
    window.location.href = `${basePath}/?skipIntro=true`;
    if (onClose) {
      onClose();
    }
  };

  // Disable body scroll when this page is open
  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF or Word document (.pdf, .doc, .docx)");
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      setResumeFile(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(
        `Job Application - ${formData.position} - ${formData.name}`
      );

      const body = encodeURIComponent(
        `Job Application Details\n\n` +
          `Personal Information:\n` +
          `Name: ${formData.name}\n` +
          `Email: ${formData.email}\n` +
          `Phone: ${formData.phone}\n` +
          `Address: ${formData.address}\n\n` +
          `Application Details:\n` +
          `Position Applied For: ${formData.position}\n` +
          `Years of Experience: ${formData.experience || "Not specified"}\n` +
          `Education: ${formData.education || "Not specified"}\n\n` +
          `Cover Letter:\n${formData.coverLetter || "Not provided"}\n\n` +
          `Note: Please find the resume attached to this email.`
      );

      const mailtoLink = `mailto:hr@a1steelrwanda.com?subject=${subject}&body=${body}`;

      if (resumeFile) {
        window.location.href = mailtoLink;
        setTimeout(() => {
          alert(
            "Please attach your resume file (" +
              resumeFile.name +
              ") to the email that just opened."
          );
        }, 500);
      } else {
        window.location.href = mailtoLink;
      }

      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        position: "",
        experience: "",
        education: "",
        coverLetter: "",
      });
      setResumeFile(null);

      const fileInput = document.getElementById("resume") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const benefits = [
    {
      icon: Award,
      title: "Competitive Packages",
      description: "Attractive compensation and benefits",
      color: "from-orange-500 to-orange-600",
    },
    {
      icon: Users,
      title: "Team Culture",
      description: "Collaborative and supportive environment",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Opportunities for professional development",
      color: "from-green-500 to-green-600",
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working arrangements",
      color: "from-purple-500 to-purple-600",
    },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-y-auto">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Header */}
      <div className="sticky top-0 z-10 bg-white/5 backdrop-blur-xl border-b border-white/10 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={handleClose}
              className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-orange-400/50 text-white"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <button
              onClick={handleClose}
              className="group p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-orange-400/50"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 backdrop-blur-md rounded-full border border-orange-500/30 mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            <span className="text-sm font-semibold text-orange-300">
              Join Our Team
            </span>
          </motion.div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-orange-400 to-orange-600 bg-clip-text text-transparent">
              Build Your Career
            </span>
            <br />
            <span className="bg-gradient-to-r from-orange-400 via-white to-blue-400 bg-clip-text text-transparent">
              With Us
            </span>
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent mx-auto mb-6 rounded-full" />
          <p className="text-xl sm:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Be part of Rwanda&apos;s premier steel manufacturing company. We&apos;re
            looking for talented individuals to help us build the future.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10 hover:border-orange-500/50 transition-all duration-500 hover:scale-105"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${benefit.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {benefit.title}
                </h3>
                <p className="text-white/70 text-sm">{benefit.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Application Form */}
        <motion.div
          className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 p-6 sm:p-8 lg:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <span className="w-1 h-8 bg-gradient-to-b from-orange-400 to-orange-600 rounded-full mr-4"></span>
              <h2 className="text-3xl font-bold text-white">
                Application Form
              </h2>
            </div>
            <p className="text-white/70 ml-5">
              Fill out the form below to apply for a position with us
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Personal Information Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 flex items-center justify-center mr-3">
                  <User className="w-5 h-5 text-white" />
                </div>
                Personal Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white/90 mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                    aria-label="Full name"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-white/90 mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                    aria-label="Email address"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-white/90 mb-2"
                  >
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="+250 7XX XXX XXX"
                    aria-label="Phone number"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-white/90 mb-2"
                  >
                    Address *
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="Your complete address"
                    aria-label="Address"
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            {/* Application Details Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mr-3">
                  <Briefcase className="w-5 h-5 text-white" />
                </div>
                Application Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-semibold text-white/90 mb-2"
                  >
                    Position Applying For *
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="e.g., Store Assistant, Operator, etc."
                    aria-label="Position applying for"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-semibold text-white/90 mb-2"
                  >
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="e.g., 2 years, 5+ years"
                    aria-label="Years of experience"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="education"
                    className="block text-sm font-semibold text-white/90 mb-2"
                  >
                    Education / Qualifications
                  </label>
                  <input
                    type="text"
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                    placeholder="e.g., ITI, Diploma, Bachelor's Degree, etc."
                    aria-label="Education or qualifications"
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center mr-3">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                Resume / CV
              </h3>
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-semibold text-white/90 mb-2"
                >
                  Upload Resume (PDF or Word) *
                </label>
                <div className="relative">
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    onChange={handleFileChange}
                    required
                    className="hidden"
                    aria-label="Upload resume"
                    aria-required="true"
                  />
                  <label
                    htmlFor="resume"
                    className="flex items-center justify-center w-full px-4 py-8 border-2 border-dashed border-white/30 rounded-xl cursor-pointer hover:border-orange-500/50 hover:bg-white/5 transition-all duration-300 group"
                  >
                    <div className="flex flex-col items-center">
                      <Upload className="w-10 h-10 text-white/50 mb-3 group-hover:text-orange-400 transition-colors" />
                      <span className="text-sm font-medium text-white">
                        {resumeFile
                          ? resumeFile.name
                          : "Click to upload or drag and drop"}
                      </span>
                      <span className="text-xs text-white/50 mt-2">
                        PDF or Word document (Max 5MB)
                      </span>
                    </div>
                  </label>
                </div>
                {resumeFile && (
                  <div className="mt-3 flex items-center text-sm text-green-400 bg-green-500/20 border border-green-500/50 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    File selected: {resumeFile.name} (
                    {(resumeFile.size / 1024).toFixed(2)} KB)
                  </div>
                )}
              </div>
            </div>

            {/* Cover Letter Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-purple-600 flex items-center justify-center mr-3">
                  <FileText className="w-5 h-5 text-white" />
                </div>
                Cover Letter
              </h3>
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-semibold text-white/90 mb-2"
                >
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  aria-label="Cover letter"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-xl font-bold text-lg hover:from-orange-600 hover:to-orange-700 transition-all duration-300 shadow-xl hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 overflow-hidden"
                aria-label="Submit job application"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                {isSubmitting ? (
                  <>
                    <div className="relative z-10 w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span className="relative z-10">Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Submit Application</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center p-4 bg-green-500/20 border border-green-500/50 rounded-xl"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mr-3" />
                  <div>
                    <p className="text-sm font-medium text-green-300">
                      Application submitted successfully!
                    </p>
                    <p className="text-xs text-green-400/80 mt-1">
                      Please attach your resume to the email that opened and
                      send it to hr@a1steelrwanda.com
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 flex items-center p-4 bg-red-500/20 border border-red-500/50 rounded-xl"
                >
                  <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mr-3" />
                  <p className="text-sm font-medium text-red-300">
                    There was an error submitting your application. Please try
                    again.
                  </p>
                </motion.div>
              )}
            </div>
          </form>
        </motion.div>

        {/* Additional Information */}
        <motion.div
          className="mt-16 text-center p-8 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-2xl border border-orange-500/20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center justify-center">
            <Clock className="w-6 h-6 mr-3 text-orange-400" />
            Application Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                All applications are reviewed by our HR team within 5-7 business
                days
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                Shortlisted candidates will be contacted via email or phone
              </span>
            </div>
            <div className="flex items-start">
              <CheckCircle className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
              <span className="text-white/80">
                Please ensure all information provided is accurate and complete
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
