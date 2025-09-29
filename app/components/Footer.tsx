import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/images/logos/equillation-logo.jpg"
                  alt="Equillation Logo"
                  fill
                  className="object-contain rounded-full"
                />
              </div>
              <span className="text-xl font-serif font-semibold">Equillation</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Fostering authentic connection and collaboration with horses through respectful, 
              distance-based equine facilitated constellations training.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/share/1CdoYBH4DA/?mibextid=wwXIfr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a 
                href="https://www.instagram.com/equillation?igsh=MW9iamRkeXhmdXphMA%3D%3D&utm_source=qr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Follow us on Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C7.284 0 6.944.012 5.877.06 4.813.109 4.086.277 3.45.525a4.902 4.902 0 00-1.772 1.153A4.902 4.902 0 00.525 3.45C.277 4.086.109 4.813.06 5.877.012 6.944 0 7.284 0 10s.012 3.056.06 4.123c.049 1.064.217 1.791.465 2.427a4.902 4.902 0 001.153 1.772 4.902 4.902 0 001.772 1.153c.636.248 1.363.416 2.427.465C6.944 19.988 7.284 20 10 20s3.056-.012 4.123-.06c1.064-.049 1.791-.217 2.427-.465a4.902 4.902 0 001.772-1.153 4.902 4.902 0 001.153-1.772c.248-.636.416-1.363.465-2.427C19.988 13.056 20 12.716 20 10s-.012-3.056-.06-4.123c-.049-1.064-.217-1.791-.465-2.427a4.902 4.902 0 00-1.153-1.772A4.902 4.902 0 0016.55.525C15.914.277 15.187.109 14.123.06 13.056.012 12.716 0 10 0zm0 1.802c2.67 0 2.987.01 4.041.059.975.045 1.505.207 1.858.344.467.182.8.399 1.15.748.35.35.566.683.748 1.15.137.353.3.883.344 1.858.048 1.054.058 1.37.058 4.041s-.01 2.987-.058 4.041c-.045.975-.207 1.505-.344 1.858a3.097 3.097 0 01-.748 1.15c-.35.35-.683.566-1.15.748-.353.137-.883.3-1.858.344-1.054.048-1.37.058-4.041.058s-2.987-.01-4.041-.058c-.975-.045-1.505-.207-1.858-.344a3.097 3.097 0 01-1.15-.748 3.097 3.097 0 01-.748-1.15c-.137-.353-.3-.883-.344-1.858C1.812 12.987 1.802 12.67 1.802 10s.01-2.987.058-4.041c.045-.975.207-1.505.344-1.858.182-.467.399-.8.748-1.15.35-.35.683-.566 1.15-.748.353-.137.883-.3 1.858-.344C7.013 1.812 7.33 1.802 10 1.802zM10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#training-programs" className="text-gray-300 hover:text-white transition-colors">Diploma</a></li>
              <li><a href="#philosophy" className="text-gray-300 hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#training" className="text-gray-300 hover:text-white transition-colors">Our Approach</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <span className="text-sm">Contact Kate on:</span>
              </li>
              <li>
                <a href="tel:+447470369948" className="hover:text-white transition-colors">
                  07470 369948
                </a>
              </li>
              <li>
                <a href="mailto:info@equillation.com" className="hover:text-white transition-colors">
                  info@equillation.com
                </a>
              </li>
              <li>Remote & On-site Training</li>
              <li>Response within 24-48 hours</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Equillation. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a 
                href="/All policies FINAL DOCUMENT.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Policies & Terms
              </a>
            </div>
          </div>
          
          {/* Website Credit */}
          <div className="border-t border-gray-800 pt-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3">
              <span className="text-gray-400 text-sm">Website designed and built by</span>
              <div className="flex items-center space-x-2">
                <div className="relative w-6 h-6">
                  <Image
                    src="/saunderssimmons.png"
                    alt="Saunders Simmons Ltd"
                    fill
                    className="object-contain"
                  />
                </div>
                <a 
                  href="https://www.saunders-simmons.co.uk" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors text-sm font-medium"
                >
                  Saunders Simmons Ltd
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
