"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import AboutUsPage from "@/components/about-us-section/AboutUsPage";

export default function AboutPage() {
  const router = useRouter();

  useEffect(() => {
    document.title =
      "About Us - A1 Iron & Steel | Leading Steel Manufacturer in Rwanda";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about A1 Iron & Steel, Rwanda's premier steel manufacturer. Discover our commitment to quality, sustainability, and innovation in steel production."
      );
    }
  }, []);

  return <AboutUsPage onClose={() => router.push("/")} />;
}
