"use client";

import React, { useState } from "react";
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
    router.push("/?skipIntro=true");
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
      // Validate file type
      const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      ];
      if (!allowedTypes.includes(file.type)) {
        alert("Please upload a PDF or Word document (.pdf, .doc, .docx)");
        return;
      }
      // Validate file size (max 5MB)
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
      // Create comprehensive email body
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

      // Create mailto link
      const mailtoLink = `mailto:hr@a1steelrwanda.com?subject=${subject}&body=${body}`;

      // If resume file exists, we'll need to handle it separately
      // Since mailto doesn't support attachments, we'll open the email client
      // and the user will need to attach the file manually
      if (resumeFile) {
        // Open email client
        window.location.href = mailtoLink;

        // Show instruction to attach resume
        setTimeout(() => {
          alert(
            "Please attach your resume file (" +
              resumeFile.name +
              ") to the email that just opened."
          );
        }, 500);
      } else {
        // Open email client without file
        window.location.href = mailtoLink;
      }

      // Show success message
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

      // Reset file input
      const fileInput = document.getElementById("resume") as HTMLInputElement;
      if (fileInput) {
        fileInput.value = "";
      }

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch {
      setIsSubmitting(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-50 z-50 overflow-y-auto">
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
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="logo-blue-gradient">Join Our Team</span>
          </h1>
          <div className="w-20 h-1 logo-orange-bg mx-auto mb-6 rounded-full" />
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Be part of Rwanda&apos;s premier steel manufacturing company.
            We&apos;re looking for talented individuals to help us build the
            future.
          </p>
        </div>

        {/* Application Form */}
        <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 sm:p-8 lg:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-[#2084b1]" />
                Personal Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2084b1] focus:border-transparent transition-all"
                    placeholder="Enter your full name"
                    aria-label="Full name"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2084b1] focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                    aria-label="Email address"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2084b1] focus:border-transparent transition-all"
                    placeholder="+250 7XX XXX XXX"
                    aria-label="Phone number"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="address"
                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2084b1] focus:border-transparent transition-all"
                    placeholder="Your complete address"
                    aria-label="Address"
                    aria-required="true"
                  />
                </div>
              </div>
            </div>

            {/* Application Details Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Briefcase className="w-6 h-6 mr-3 text-[#2084b1]" />
                Application Details
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="position"
                    className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2084b1] focus:border-transparent transition-all"
                    placeholder="e.g., Store Assistant, Operator, etc."
                    aria-label="Position applying for"
                    aria-required="true"
                  />
                </div>

                <div>
                  <label
                    htmlFor="experience"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Years of Experience
                  </label>
                  <input
                    type="text"
                    id="experience"
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2084b1] focus:border-transparent transition-all"
                    placeholder="e.g., 2 years, 5+ years"
                    aria-label="Years of experience"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="education"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Education / Qualifications
                  </label>
                  <input
                    type="text"
                    id="education"
                    name="education"
                    value={formData.education}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2084b1] focus:border-transparent transition-all"
                    placeholder="e.g., ITI, Diploma, Bachelor's Degree, etc."
                    aria-label="Education or qualifications"
                  />
                </div>
              </div>
            </div>

            {/* Resume Upload Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-[#2084b1]" />
                Resume / CV
              </h2>
              <div>
                <label
                  htmlFor="resume"
                  className="block text-sm font-semibold text-gray-700 mb-2"
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
                    className="flex items-center justify-center w-full px-4 py-6 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#2084b1] hover:bg-blue-50/50 transition-all"
                  >
                    <div className="flex flex-col items-center">
                      <Upload className="w-8 h-8 text-gray-400 mb-2" />
                      <span className="text-sm font-medium text-gray-700">
                        {resumeFile
                          ? resumeFile.name
                          : "Click to upload or drag and drop"}
                      </span>
                      <span className="text-xs text-gray-500 mt-1">
                        PDF or Word document (Max 5MB)
                      </span>
                    </div>
                  </label>
                </div>
                {resumeFile && (
                  <div className="mt-2 flex items-center text-sm text-green-600">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    File selected: {resumeFile.name} (
                    {(resumeFile.size / 1024).toFixed(2)} KB)
                  </div>
                )}
              </div>
            </div>

            {/* Cover Letter Section */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <FileText className="w-6 h-6 mr-3 text-[#2084b1]" />
                Cover Letter
              </h2>
              <div>
                <label
                  htmlFor="coverLetter"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Cover Letter (Optional)
                </label>
                <textarea
                  id="coverLetter"
                  name="coverLetter"
                  value={formData.coverLetter}
                  onChange={handleInputChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2084b1] focus:border-transparent transition-all resize-none"
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
                className="w-full logo-orange-bg text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                aria-label="Submit job application"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Submit Application</span>
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-sm font-medium text-green-800">
                      Application submitted successfully!
                    </p>
                    <p className="text-xs text-green-600 mt-1">
                      Please attach your resume to the email that opened and
                      send it to hr@a1steelrwanda.com
                    </p>
                  </div>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                  <p className="text-sm font-medium text-red-800">
                    There was an error submitting your application. Please try
                    again.
                  </p>
                </div>
              )}
            </div>
          </form>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-blue-50 rounded-2xl p-6 sm:p-8 border border-blue-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Application Process
          </h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#2084b1] mr-3 mt-0.5 flex-shrink-0" />
              <span>
                All applications are reviewed by our HR team within 5-7 business
                days
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#2084b1] mr-3 mt-0.5 flex-shrink-0" />
              <span>
                Shortlisted candidates will be contacted via email or phone
              </span>
            </li>
            <li className="flex items-start">
              <CheckCircle className="w-5 h-5 text-[#2084b1] mr-3 mt-0.5 flex-shrink-0" />
              <span>
                Please ensure all information provided is accurate and complete
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
