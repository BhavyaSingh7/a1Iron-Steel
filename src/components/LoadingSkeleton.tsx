"use client";

import { motion } from "framer-motion";

export function ProductCardSkeleton() {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md border border-gray-100 h-full flex flex-col">
      {/* Image Skeleton */}
      <div className="relative h-64 sm:h-72 overflow-hidden bg-gray-100">
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200"
          animate={{
            x: ["-100%", "100%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            width: "50%",
          }}
        />
      </div>

      {/* Content Skeleton */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow">
        {/* Title Skeleton */}
        <div className="h-7 bg-gray-200 rounded mb-4 w-3/4" />

        {/* Description Skeleton */}
        <div className="space-y-2 mb-6 flex-grow">
          <div className="h-4 bg-gray-200 rounded w-full" />
          <div className="h-4 bg-gray-200 rounded w-5/6" />
          <div className="h-4 bg-gray-200 rounded w-4/6" />
        </div>

        {/* Line Skeleton */}
        <div className="w-full h-px bg-gray-100 mb-5" />

        {/* Button Skeleton */}
        <div className="h-5 bg-gray-200 rounded w-24" />
      </div>
    </div>
  );
}

export function CarouselSkeleton() {
  return (
    <div className="flex gap-6 px-4">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="flex-shrink-0 w-80 sm:w-96"
        >
          <ProductCardSkeleton />
        </motion.div>
      ))}
    </div>
  );
}
