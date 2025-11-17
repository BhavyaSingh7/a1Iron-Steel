"use client";

import { useEffect } from "react";
import CareerPage from "@/components/career/CareerPage";

export default function CareerPageRoute() {
  useEffect(() => {
    document.title =
      "Careers - A1 Iron & Steel | Join Our Team in Rwanda";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Join A1 Iron & Steel Rwanda. Explore career opportunities in steel manufacturing. Submit your application and resume to join our growing team."
      );
    }
  }, []);

  return <CareerPage />;
}

