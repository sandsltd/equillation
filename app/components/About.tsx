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


        </div>
      </div>
    </section>
  )
}
