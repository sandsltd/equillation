import Image from 'next/image'

export default function Training() {
  return (
    <section id="training" className="section-padding bg-gradient-to-br from-primary-50 to-sage-50">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Training Approach
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fostering a new way of partnering with horses that honours their natural 
              instincts, freedom, and relationships.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900">
                  Distance-Based Work
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                We work from a distance, ensuring that we don't intrude on their lives or 
                disrupt their bonds with one another. This respectful approach maintains 
                the horses' natural state and social connections.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Non-intrusive methodology
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Preserves herd dynamics
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Maintains natural regulation
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-semibold text-gray-900">
                  Natural Herd Environment
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                In our Equine Facilitated constellations, the animals remain in their 
                natural state, grazing peacefully among their herd. When horses are with 
                their herd, they are naturally regulated and grounded.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-sage-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Horses remain with their herd
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-sage-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Natural grazing continues
                </li>
                <li className="flex items-center text-gray-600">
                  <svg className="w-4 h-4 text-sage-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Connected to true selves
                </li>
              </ul>
            </div>
          </div>

          {/* Theoretical Foundation */}
          <div className="bg-gradient-to-r from-earth-50 to-primary-50 rounded-2xl p-8 md:p-12 mb-16">
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-8 text-center">
              Theoretical Foundation
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Systemic Constellations</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Family systems work that reveals hidden dynamics and patterns within relationships, 
                  helping individuals understand their place within larger systems and find resolution.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Orders of Love</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  The "Orders of Love" are the foundation of all constellation work. They are about belonging to our family or group, about our rightful place in our family and in the world, about acknowledging our and others' fate and taking responsibility for our life and about finding the right balance between giving and taking. Horses intuitively feel where there is confusion or imbalance in these orders and show us gently new insights, perspectives and the next steps for finding a solution.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                    <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 3a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-3">Equine Behavior</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Understanding how horses naturally respond to systemic dynamics, using their 
                  sensitivity to family patterns to guide healing and reveal hidden truths.
                </p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-white/60 rounded-xl">
              <p className="text-gray-700 leading-relaxed text-center">
                <strong>Integration:</strong> These three elements work together to create a powerful healing modality. 
                Horses, with their natural sensitivity to systemic dynamics, become our guides in revealing 
                family patterns and supporting resolution through the Orders of Love.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src="/images/training/herd-environment.jpeg"
                  alt="Horses in natural herd environment"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-8 md:p-12">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                  Why This Training Matters
                </h3>
                <div className="space-y-4 text-gray-600">
                  <p>
                    This training is about fostering a new way of partnering with horses, one that 
                    honours their natural instincts, freedom, and relationships. By meeting them in 
                    their own space and respecting their choices, we create opportunities for 
                    authentic connection and collaboration.
                  </p>
                  <p>
                    In this space, the horses have the freedom to choose whether to engage with the 
                    client or not. That choice is vital; it respects their autonomy and creates a 
                    more genuine, meaningful interaction.
                  </p>
                  <p className="font-medium text-gray-800 bg-sage-50 p-4 rounded-lg">
                    Our work is rooted in respect, connection, and mutual understanding. We believe in creating a future where horses are honoured as sentient beings, free to guide the healing process in their own gentle, powerful way. When we listen deeply to their wisdom, meet them in their natural state, and honour their choices, the work becomes more authentic, healing, and transformative for everyone involved.
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
