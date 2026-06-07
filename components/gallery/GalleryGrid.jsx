"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/galleryData";
import GalleryLightbox from "./GalleryLightbox";

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <>
      <div className="relative max-w-7xl mx-auto px-6 py-20">
        <div className="columns-2 md:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index)}
              className="
                group
                relative
                overflow-hidden
                rounded-[16px] sm:rounded-[32px]
                break-inside-avoid
                bg-white
                shadow-sm
                hover:shadow-2xl
                transition-all
                duration-500
                hover:-translate-y-1
                cursor-pointer
              "
            >
              <Image
                src={image.image}
                alt={image.alt}
                width={800}
                height={1000}
                loading="lazy"
                className="w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

              <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-6 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition">
                <p className="text-xs sm:text-sm text-white font-semibold">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <GalleryLightbox
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
    </>
  );
}