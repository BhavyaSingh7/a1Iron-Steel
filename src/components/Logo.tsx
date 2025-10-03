import React from "react";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center space-x-3">
      {/* Company Logo Image */}
      <div className="relative w-10 h-10 md:w-12 md:h-12">
        <Image
          src="/a1-logo.jpeg"
          alt="A1 Iron & Steel Rwanda Limited Logo"
          width={48}
          height={48}
          className="object-contain opacity-70 md:opacity-80 mix-blend-screen transition-opacity duration-300"
          priority
        />
      </div>

      {/* Company Text */}
      <div className="flex flex-col">
        <h1 className="text-xl font-bold text-white/90">A1 IRON & STEEL</h1>
        <p className="text-sm text-orange-300 font-medium">RWANDA LIMITED</p>
        <p className="text-xs text-gray-300/90">
          THE METAL THAT BUILDS A NATION
        </p>
      </div>
    </div>
  );
}
