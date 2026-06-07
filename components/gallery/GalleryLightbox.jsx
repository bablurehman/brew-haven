"use client";

import Image from "next/image";
import { galleryImages } from "@/data/galleryData";
import {
  FaChevronLeft,
  FaChevronRight,
  FaTimes,
} from "react-icons/fa";

export default function GalleryLightbox({
  selectedImage,
  setSelectedImage,
}) {
  if (selectedImage === null) return null;

  const nextImage = () => {
    setSelectedImage(
      selectedImage === galleryImages.length - 1
        ? 0
        : selectedImage + 1
    );
  };

  const prevImage = () => {
    setSelectedImage(
      selectedImage === 0
        ? galleryImages.length - 1
        : selectedImage - 1
    );
  };

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center">
      <button
        onClick={() => setSelectedImage(null)}
        className="absolute top-6 right-6 text-white text-2xl"
      >
        <FaTimes />
      </button>

      <button
        onClick={prevImage}
        className="absolute left-6 text-white text-2xl"
      >
        <FaChevronLeft />
      </button>

      <div className="relative w-[90vw] max-w-6xl h-[80vh]">
        <Image
          fill
          loading="lazy"
          src={galleryImages[selectedImage].image}
          alt={galleryImages[selectedImage].alt}
          className="object-contain"
        />
      </div>

      <button
        onClick={nextImage}
        className="absolute right-6 text-white text-2xl"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}