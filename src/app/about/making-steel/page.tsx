"use client";

import { useEffect } from "react";
import MakingSteelPage from "@/components/about-us-section/MakingSteelPage";

export default function MakingSteelPageRoute() {
  useEffect(() => {
    document.title =
      "Making Steel - A1 Iron & Steel | Steel Manufacturing Process";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Discover how A1 Iron & Steel transforms raw materials into high-quality steel products through advanced manufacturing processes, innovation, and sustainable practices."
      );
    }
  }, []);

  return <MakingSteelPage />;
}
