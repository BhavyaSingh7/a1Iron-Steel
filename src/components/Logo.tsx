import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center">
      {/* Company Logo Image - Compact size for smaller taskbar */}
      <div className="relative w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32">
        <Image
          src="/a1-logo.jpeg"
          alt="A1 Iron & Steel Rwanda Limited Logo"
          width={128}
          height={128}
          className="object-contain opacity-100 transition-opacity duration-300"
          priority
        />
      </div>
    </div>
  );
}
