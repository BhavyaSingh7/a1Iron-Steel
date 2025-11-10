"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ContactPage } from "@/components/contact/ContactPage";

export default function ContactUsPage() {
  const router = useRouter();

  useEffect(() => {
    document.title = "Contact Us - A1 Iron & Steel | Get in Touch";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Contact A1 Iron & Steel for premium steel products and solutions. Reach out to our team in Rwanda for inquiries, quotes, and partnerships."
      );
    }
  }, []);

  return <ContactPage onClose={() => router.push("/")} />;
}
