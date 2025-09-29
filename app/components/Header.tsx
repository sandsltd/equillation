'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm shadow-sm fixed w-full z-50">
      <nav className="container-custom">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="relative w-12 h-12">
              <Image
                src="/images/logos/equillation-logo.jpg"
                alt="Equillation Logo"
                fill
                className="object-contain rounded-full"
                priority
              />
            </div>
            <span className="text-2xl font-serif font-semibold text-gray-900">Equillation</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
            <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
            <a href="#training-programs" className="text-gray-700 hover:text-primary-600 transition-colors">Diploma</a>
            <a href="#philosophy" className="text-gray-700 hover:text-primary-600 transition-colors">Philosophy</a>
            <a href="#training" className="text-gray-700 hover:text-primary-600 transition-colors">Our Approach</a>
            <a href="#contact" className="btn-primary">Contact</a>
          </div>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`bg-gray-600 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="text-gray-700 hover:text-primary-600 transition-colors">Home</a>
              <a href="#about" className="text-gray-700 hover:text-primary-600 transition-colors">About</a>
              <a href="#training-programs" className="text-gray-700 hover:text-primary-600 transition-colors">Diploma</a>
              <a href="#philosophy" className="text-gray-700 hover:text-primary-600 transition-colors">Philosophy</a>
              <a href="#training" className="text-gray-700 hover:text-primary-600 transition-colors">Our Approach</a>
              <a href="#contact" className="text-primary-600 font-medium">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
