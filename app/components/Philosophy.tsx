export default function Philosophy() {
  return (
    <section id="philosophy" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At the heart of our work lies a deep respect for the horse as a sentient being, 
              an individual with their own thoughts, feelings, and needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-4">
                Honoring Natural Wisdom
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Horses can be overlooked, treated as tools or commodities rather than honoured 
                for their natural wisdom and sensitivity. Too often, the subtle and non-verbal 
                language of horses can go unnoticed.
              </p>
              <p className="text-gray-600 leading-relaxed">
                When these quiet signals are overlooked, we miss the chance for deeper connection, 
                mutual respect, and genuine understanding between human and horse.
              </p>
            </div>
            <div className="bg-gradient-to-br from-sage-100 to-primary-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Deep Respect</h4>
                <p className="text-gray-600 text-sm">
                  For the horse as a sentient being with individual thoughts and feelings
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-earth-50 to-sage-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6 text-center">
              What's Most Important to Us
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-earth-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Natural State</h4>
                <p className="text-gray-600 text-sm">
                  Allowing horses to simply be horses, meeting their basic and complex emotional needs
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.414 14.586 7H12z" clipRule="evenodd" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Authentic Feedback</h4>
                <p className="text-gray-600 text-sm">
                  Regulated horses offer unbiased feedback, reflecting what's present without interference
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Freedom of Choice</h4>
                <p className="text-gray-600 text-sm">
                  Horses have the freedom to choose whether to engage, respecting their autonomy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
