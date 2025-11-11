"use client";

import { useEffect } from "react";
import MediaPage from "@/components/media/MediaPage";

export default function MediaPageRoute() {
  useEffect(() => {
    document.title = "Media & Social - A1 Iron & Steel | Connect With Us";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Connect with A1 Iron & Steel Rwanda on social media. Follow us on Instagram, Facebook, Twitter, and LinkedIn for the latest updates, news, and insights."
      );
    }
  }, []);

  return <MediaPage />;
}
