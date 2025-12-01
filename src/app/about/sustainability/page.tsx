"use client";

import { useEffect } from "react";
import SustainabilityPage from "@/components/about-us-section/SustainabilityPage";

export default function SustainabilityPageRoute() {
  useEffect(() => {
    document.title =
      "Sustainability - A1 Iron & Steel | Environmental Stewardship";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Learn about A1 Iron & Steel's commitment to sustainability and environmental stewardship. Discover our 100,000 trees planting initiative, green manufacturing practices, and carbon offset programs."
      );
    }
  }, []);

  return <SustainabilityPage />;
}

