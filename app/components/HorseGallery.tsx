'use client'

import Image from 'next/image'
import { useState } from 'react'

interface HorseImage {
  src: string
  alt: string
  filename: string
}

const horseImages: HorseImage[] = [
  { src: '/horses/IMG_0389.jpeg', alt: 'Horse in natural setting', filename: 'IMG_0389.jpeg' },
  { src: '/horses/IMG_0396.jpeg', alt: 'Horse portrait', filename: 'IMG_0396.jpeg' },
  { src: '/horses/IMG_3027.jpeg', alt: 'Horse grazing', filename: 'IMG_3027.jpeg' },
  { src: '/horses/IMG_3759.jpeg', alt: 'Horse close-up', filename: 'IMG_3759.jpeg' },
  { src: '/horses/IMG_3948.jpeg', alt: 'Horse in stable', filename: 'IMG_3948.jpeg' },
  { src: '/horses/IMG_4066.jpeg', alt: 'Horse in pasture', filename: 'IMG_4066.jpeg' },
  { src: '/horses/IMG_4155.jpeg', alt: 'Horse profile', filename: 'IMG_4155.jpeg' },
  { src: '/horses/IMG_4856.jpeg', alt: 'Horse interaction', filename: 'IMG_4856.jpeg' },
  { src: '/horses/IMG_4862.jpeg', alt: 'Horse in motion', filename: 'IMG_4862.jpeg' },
  { src: '/horses/IMG_7561.jpeg', alt: 'Horse in landscape', filename: 'IMG_7561.jpeg' },
]

export default function HorseGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const openModal = (imageSrc: string) => {
    setSelectedImage(imageSrc)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Our Horses
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet the beautiful horses that are part of our equine facilitated constellations work. 
            Each horse brings their unique energy and wisdom to our practice.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {horseImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer group"
              onClick={() => openModal(image.src)}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 20vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Modal for full-size image viewing */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute -top-12 right-0 text-white text-2xl hover:text-gray-300 transition-colors"
              >
                ✕
              </button>
              <Image
                src={selectedImage}
                alt="Full size horse image"
                width={800}
                height={600}
                className="max-w-full max-h-full object-contain rounded-lg"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
