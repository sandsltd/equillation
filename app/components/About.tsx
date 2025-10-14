import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* About Equillation */}
          <div className="bg-gradient-to-br from-white to-sage-50 rounded-3xl p-8 lg:p-12 mb-16 shadow-lg border border-sage-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-4xl font-serif font-bold text-gray-900 mb-4">
                About Equillation
              </h2>
              <div className="w-24 h-1 bg-primary-600 mx-auto rounded-full"></div>
            </div>
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Equillation honours the wisdom of horses and the power of systemic constellations as a path to healing and transformation. The training blends academic depth, experiential learning, and personal growth, while always prioritising ethical practice and equine welfare.
                  </p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    This is more than a qualification – it is an invitation into a supportive community, where students grow in confidence, presence, and professional integrity.
                  </p>
                </div>
              </div>
              
              {/* Our Collaborative Vision */}
              <div className="bg-gradient-to-r from-primary-50 to-sage-50 rounded-2xl p-8 border border-primary-100">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">
                  Our Collaborative Vision
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <p className="text-gray-700 leading-relaxed">
                    Founded by Kate and developed collaboratively with Maria-Lucy and Ursula, Equillation represents 
                    a unique way of working that honours the horse at every step and ensures their needs, freedom, 
                    and natural instincts remain central to our practice.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Together, we bring professional knowledge, spiritual insight, and lived experience to guide 
                    both individuals and practitioners on their journeys of growth, connection, and transformation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Certifications & Accreditations */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg border border-sage-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sage-600 rounded-full mb-6">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
                Professional Certifications
              </h2>
              <div className="w-24 h-1 bg-sage-600 mx-auto rounded-full mb-6"></div>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Our training programs and practitioners maintain the highest standards of professional excellence and ethical practice.
              </p>
            </div>

            {/* Certification Logos */}
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              {/* AAHEP Logo */}
              <div className="flex flex-col items-center space-y-3">
                <div className="relative w-32 h-20 lg:w-40 lg:h-24">
                  <Image
                    src="/images/logos/AAHEP-PSA-Member-Primary-Logo-Light-1024x296.jpg"
                    alt="AAHEP PSA Member Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-medium text-gray-900">AAHEP PSA Member</p>
                  <p className="text-xs text-gray-600">Professional Standards Association</p>
                </div>
              </div>
            </div>

            {/* Certification Details */}
            <div className="mt-12 bg-gradient-to-r from-sage-50 to-primary-50 rounded-2xl p-8 border border-sage-100">
              <h3 className="text-xl font-serif font-semibold text-gray-900 mb-6 text-center">
                What Our Certifications Mean
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Standards</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Our AAHEP PSA membership demonstrates our commitment to maintaining the highest professional standards in humanistic psychology and equine-facilitated therapy.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Ethical Practice</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    We adhere to strict ethical guidelines that prioritize both human and equine welfare, ensuring safe, respectful, and effective therapeutic practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
