"use client";

import { useEffect } from "react";
import OurQualityPage from "@/components/about-us-section/OurQualityPage";

export default function OurQualityPageRoute() {
  useEffect(() => {
    document.title =
      "Our Quality - A1 Iron & Steel | Quality Control & Standards";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover A1 Iron & Steel's commitment to quality excellence. Learn about our rigorous quality control processes, international certifications, and standards that ensure every product meets the highest quality benchmarks."
      );
    }
  }, []);

  return <OurQualityPage />;
}

