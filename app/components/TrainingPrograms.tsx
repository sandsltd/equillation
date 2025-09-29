import Image from 'next/image'

export default function TrainingPrograms() {
  return (
    <section id="training-programs" className="section-padding bg-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Professional Diploma
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
              A professional diploma for coaches, therapists, facilitators, and equine professionals who want to 
              deepen their practice and work ethically with horses as partners in healing.
            </p>
          </div>

          {/* Main Program Card */}
          <div className="bg-gradient-to-br from-primary-50 to-sage-50 rounded-3xl p-8 lg:p-12 mb-12">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="inline-flex items-center bg-primary-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Level 5 Diploma (In Process of Accreditation)
                </div>
                <h3 className="text-3xl font-serif font-bold text-gray-900 mb-6">
                  Diploma in Equine Systemic Constellations
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At Equillation, we honour the wisdom of horses and the power of systemic constellations 
                  to support healing and transformation. Our approach blends academic depth, experiential 
                  learning, and personal growth, always grounded in ethical practice and equine welfare.
                </p>
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Professional Diploma Structure</h4>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      22 months professional qualification
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Blended learning approach
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Interactive workshops
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 text-primary-600 mr-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Applied practice sessions
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Assessment Methods</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-sage-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Reflective journals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-sage-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Case studies</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-sage-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Facilitation practice</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-sage-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Workshops & seminars</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 shadow-sm">
                  <h4 className="font-semibold text-gray-900 mb-4">Learning Approach</h4>
                  <p className="text-gray-600 mb-4">
                    This programme blends systemic wisdom, equine partnership, and human healing. Students learn through:
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-earth-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Workshops and applied learning</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-earth-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Case studies and reflective journals</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-earth-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-600">Facilitated practice to build confidence and skill</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Who is this for & What you will gain */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                Who is this for?
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Coaches, therapists & facilitators</h4>
                    <p className="text-gray-600 text-sm">expanding their practice</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Equine professionals</h4>
                    <p className="text-gray-600 text-sm">seeking therapeutic, ethical ways of working</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.51-1.31c-.562-.649-1.413-1.076-2.353-1.253V5z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Those curious about constellations</h4>
                    <p className="text-gray-600 text-sm">with horses</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-sage-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Anyone ready for deep growth</h4>
                    <p className="text-gray-600 text-sm">personal & professional development</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-earth-50 rounded-2xl p-8">
              <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
                What you will gain:
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">In-depth understanding</h4>
                    <p className="text-gray-600 text-sm">of equine behaviour & emotions</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Skills to facilitate</h4>
                    <p className="text-gray-600 text-sm">safe, trauma-informed constellations</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Ability to apply systemic principles</h4>
                    <p className="text-gray-600 text-sm">& the Orders of Love</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Confidence in energy awareness</h4>
                    <p className="text-gray-600 text-sm">attunement & presence</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center mr-4 mt-0.5 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-1">Tools to support clients</h4>
                    <p className="text-gray-600 text-sm">in integration & healing</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Teaching Team */}
          <div className="bg-gradient-to-br from-sage-50 to-primary-50 rounded-3xl p-8 lg:p-12 mb-16">
            <h3 className="text-3xl font-serif font-bold text-gray-900 mb-8 text-center">
              Teaching Team
            </h3>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              You will be guided by experienced facilitators and equine practitioners:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              {/* Kate Bickerstaff - Founder */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/about/kate.jpg"
                    alt="Kate Bickerstaff - Founder & Senior ACCPH Member"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                      Kate Bickerstaff
                    </h3>
                    <p className="text-sm text-sage-600 font-medium mb-3">
                      Founder & Senior ACCPH Member
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-6">
                    <p>
                      Kate is the <strong>founder of Equillation</strong>, whose practice weaves together equine-facilitated therapy, 
                      systemic constellations, and nature-based healing.
                    </p>
                    <p>
                      As a <strong>Senior Member of the ACCPH</strong> and on the <strong>Accredited Practitioners Register with Athena</strong>, 
                      Kate has been pioneering equine-facilitated constellations for six years.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-sage-50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Qualifications</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• BSc (Hons) Psychology</li>
                        <li>• Level 5 Counselling</li>
                        <li>• Equine Facilitated Psychotherapy</li>
                      </ul>
                    </div>
                    <div className="bg-earth-50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialisations</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Constellation Therapy</li>
                        <li>• Equine Facilitated Constellations</li>
                        <li>• Nature-based Healing</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <a 
                        href="https://www.thoughtsandsoul.co.uk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-xs font-medium transition-colors"
                      >
                        Visit Kate's Website →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Maria-Lucy Neason */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/about/maria-lucy.jpg"
                    alt="Maria-Lucy Neason - Lead Instructor & Equine Behaviour Specialist"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                      Maria-Lucy Neason
                    </h3>
                    <p className="text-sm text-primary-700 font-medium mb-3">
                      Lead Instructor & Equine Behaviour Specialist
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-6">
                    <p>
                      Maria-Lucy is a <strong>British Horse Society Accredited Professional Coach (Level IV)</strong> with 
                      over 30 years of experience in the equestrian industry.
                    </p>
                    <p>
                      She is a certified <strong>Connection Training coach</strong> and is currently undertaking 
                      further study with COAPE in the MHERA Licensed Practitioners Course.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-primary-50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Education</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Master's in Equine Studies</li>
                        <li>• BHS Level IV Coach</li>
                        <li>• 15+ years in Higher Ed</li>
                      </ul>
                    </div>
                    <div className="bg-sage-50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specialisations</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Connection Training</li>
                        <li>• Equine Ethology</li>
                        <li>• Affective Neuroscience</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <a 
                        href="https://www.truenorthequinecoaching.co.uk" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-xs font-medium transition-colors"
                      >
                        Visit Maria-Lucy's Website →
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ursula Maria Bell */}
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src="/images/Ursula.JPG"
                    alt="Ursula Maria Bell - Systemic Constellation Facilitator"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-serif font-bold text-gray-900 mb-1">
                      Ursula Maria Bell
                    </h3>
                    <p className="text-sm text-earth-600 font-medium mb-3">
                      Systemic Constellation Facilitator & Trainer
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-gray-600 leading-relaxed mb-6">
                    <p>
                      Ursula is a qualified systemic constellation facilitator, trainer, and supervisor with 
                      <strong> over 15 years of experience</strong> in transgenerational healing.
                    </p>
                    <p>
                      German by origin and now based in Bulgaria, she holds a Diploma in <strong>Viktor Frankl's 
                      Logotherapy</strong> and advanced diplomas in Transpersonal Therapy.
                    </p>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-earth-50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Qualifications</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• Logotherapy Diploma</li>
                        <li>• Transpersonal Therapy</li>
                        <li>• Counselling Supervision Level VII</li>
                      </ul>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-3">
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Experience</h4>
                      <ul className="text-xs text-gray-600 space-y-1">
                        <li>• 1,000+ constellations</li>
                        <li>• International trainer</li>
                        <li>• Published author</li>
                      </ul>
                    </div>
                    <div className="text-center">
                      <a 
                        href="https://www.ursulamariabell.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary-600 hover:text-primary-700 text-xs font-medium transition-colors"
                      >
                        Visit Ursula's Website →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community & Contact */}
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-12 text-center">
            <h3 className="text-3xl font-serif font-bold text-white mb-6">
              More than a training provider
            </h3>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
              We are a supportive community where students grow in confidence, presence, and professional 
              integrity. Join us in creating a future where practitioners work with horses in ways that 
              truly honour their sentience.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 inline-block">
              <h4 className="text-lg font-semibold text-white mb-3">For more information</h4>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="text-gray-200">Contact Kate on:</span>
                <a 
                  href="tel:+447470369948" 
                  className="inline-flex items-center bg-primary-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  07470 369948
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
