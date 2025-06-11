"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Expand } from "lucide-react"
import Image from "next/image"

interface PropertyGalleryProps {
  images: string[]
}

export function PropertyGallery({ images }: PropertyGalleryProps) {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-gray-200">
        <Image
          src={images[currentImage] || "/placeholder.svg"}
          alt={`Foto ${currentImage + 1} do imóvel`}
          fill
          className="object-cover"
        />

        {/* Navigation Arrows */}
        {images.length > 1 && (
          <>
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={prevImage}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white"
              onClick={nextImage}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </>
        )}

        {/* Image Counter */}
        <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
          {currentImage + 1} / {images.length}
        </div>

        {/* Expand Button */}
        <Button variant="secondary" size="icon" className="absolute top-4 right-4 bg-white/80 hover:bg-white">
          <Expand className="h-4 w-4" />
        </Button>
      </div>

      {/* Thumbnail Grid */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.slice(0, 5).map((image, index) => (
            <button
              key={index}
              className={`relative aspect-square rounded-lg overflow-hidden ${
                index === currentImage ? "ring-2 ring-green-600" : ""
              }`}
              onClick={() => setCurrentImage(index)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Miniatura ${index + 1}`}
                fill
                className="object-cover hover:opacity-80 transition-opacity"
              />
              {index === 4 && images.length > 5 && (
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-white font-semibold">
                  +{images.length - 5}
                </div>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
