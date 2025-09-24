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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.017 0C18.396 0 24.001 5.617 24.001 12.017c0 6.624-5.33 11.99-11.925 11.99C5.28 24.007.001 18.641.001 12.017.001 5.617 5.28.001 12.017.001zm4.624 7.369c0-2.17-1.738-3.934-3.878-3.934H7.728a3.936 3.936 0 00-3.878 3.934v5.248a3.936 3.936 0 003.878 3.934h5.035a3.936 3.936 0 003.878-3.934V7.369zm-1.941 5.248a2.988 2.988 0 01-2.988 2.988H9.728a2.988 2.988 0 01-2.988-2.988V9.369a2.988 2.988 0 012.988-2.988h1.984a2.988 2.988 0 012.988 2.988v3.248zm-2.988-1.748a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.5-4.5a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" clipRule="evenodd" />
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
              <li><a href="#philosophy" className="text-gray-300 hover:text-white transition-colors">Philosophy</a></li>
              <li><a href="#training" className="text-gray-300 hover:text-white transition-colors">Training</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>info@equillation.com</li>
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
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
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
