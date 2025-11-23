"use client";

import { useEffect } from "react";
import MakingSteelPage from "@/components/about-us-section/MakingSteelPage";

export default function MakingSteelPageRoute() {
  useEffect(() => {
    document.title =
      "Our Manufacturing - A1 Iron & Steel | Advanced Steel Manufacturing";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Explore A1 Iron & Steel's state-of-the-art manufacturing facilities and processes. Discover how we transform raw materials into high-quality steel products through advanced technology, precision engineering, and sustainable practices."
      );
    }
  }, []);

  return <MakingSteelPage />;
}
