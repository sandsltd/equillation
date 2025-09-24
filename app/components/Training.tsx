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
                    We share this not to judge other methods but to offer a perspective rooted in 
                    respect, connection, and mutual understanding. Our hope is that, together, we can 
                    create a future where more practitioners work with horses in a way that truly 
                    honours their sentience, allowing them to guide the healing process in their own 
                    gentle, powerful way.
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
