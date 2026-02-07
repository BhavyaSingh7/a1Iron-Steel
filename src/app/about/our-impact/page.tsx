"use client";

import { useEffect } from "react";
import OurImpactPage from "@/components/about-us-section/OurImpactPage";

export default function OurImpactPageRoute() {
  useEffect(() => {
    document.title =
      "Our Impact - A1 Iron & Steel | Making a Meaningful Difference";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover A1 Iron & Steel's impact in Rwanda and beyond. Learn how we contribute to industrial growth, community development, and environmentally responsible steel manufacturing.",
      );
    }
  }, []);

  return <OurImpactPage />;
}
