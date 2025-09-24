import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-br from-sage-50 to-primary-50">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our dedicated professionals bring decades of experience in equine education, 
              constellation work, therapy, and ethical training approaches.
            </p>
          </div>

          {/* Team Members Grid */}
          <div className="space-y-12">
            
            {/* Maria-Lucy Neason */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src="/images/about/maria-lucy.jpg"
                    alt="Maria-Lucy Neason - Lead Instructor & Equine Behavior Specialist"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                      Maria-Lucy Neason
                    </h3>
                    <p className="text-lg text-primary-700 font-medium mb-4">
                      Lead Instructor & Equine Behavior Specialist
                    </p>
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                    <p>
                      Maria-Lucy is a <strong>British Horse Society Accredited Professional Coach (Level IV)</strong> with 
                      over 30 years of experience in the equestrian industry. She holds a Master's degree in 
                      Equine Studies and has an extensive background in education.
                    </p>
                    <p>
                      She is a certified <strong>Connection Training coach</strong> and is currently undertaking 
                      further study with COAPE in the MHERA Licensed Practitioners Course, integrating the 
                      latest research in equine ethology, learning theory, and affective neuroscience.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Education</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Master's in Equine Studies</li>
                        <li>• BHS Level IV Coach</li>
                        <li>• 15+ years in Higher Ed</li>
                      </ul>
                    </div>
                    <div className="bg-sage-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Connection Training</li>
                        <li>• Equine Ethology</li>
                        <li>• Affective Neuroscience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ursula Maria Bell */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="lg:order-2 relative h-96 lg:h-auto">
                  <Image
                    src="/images/Ursula.JPG"
                    alt="Ursula Maria Bell - Systemic Constellation Facilitator"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <div className="lg:order-1 p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                      Ursula Maria Bell
                    </h3>
                    <p className="text-lg text-earth-600 font-medium mb-4">
                      Systemic Constellation Facilitator & Trainer
                    </p>
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                    <p>
                      Ursula is a qualified systemic constellation facilitator, trainer, and supervisor with 
                      <strong> over 15 years of experience</strong> in transgenerational healing. She has facilitated 
                      more than 1,000 constellations and works internationally.
                    </p>
                    <p>
                      German by origin and now based in Bulgaria, she holds a Diploma in <strong>Viktor Frankl's 
                      Logotherapy</strong> and advanced diplomas in Transpersonal Therapy. In 2024, she published 
                      her book <em>"In the Spirit of Love and Reconciliation – More than Constellations"</em>.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-earth-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Qualifications</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Logotherapy Diploma</li>
                        <li>• Transpersonal Therapy</li>
                        <li>• Counselling Supervision Level VII</li>
                      </ul>
                    </div>
                    <div className="bg-primary-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Experience</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 1,000+ constellations</li>
                        <li>• International trainer</li>
                        <li>• Published author</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kate Bickerstaff */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src="/images/about/kate.jpg"
                    alt="Kate Bickerstaff - Senior ACCPH Member & Equine-Facilitated Therapist"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="mb-6">
                    <h3 className="text-3xl font-serif font-bold text-gray-900 mb-2">
                      Kate Bickerstaff
                    </h3>
                    <p className="text-lg text-sage-600 font-medium mb-4">
                      Senior ACCPH Member & Equine-Facilitated Therapist
                    </p>
                  </div>
                  <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                    <p>
                      Kate's practice weaves together equine-facilitated therapy, systemic constellations, 
                      and nature-based healing. Her work is rooted in reverence for both human and equine 
                      wisdom, guided by her horse <strong>Topper</strong> since 2012.
                    </p>
                    <p>
                      As a <strong>Senior Member of the ACCPH</strong> and Athena-accredited practitioner, 
                      Kate has been working in equine-facilitated constellations for six years, 
                      co-creating Equillation's unique approach.
                    </p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="bg-sage-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Qualifications</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• BSc (Hons) Psychology</li>
                        <li>• Level 5 Counselling</li>
                        <li>• Equine Facilitated Psychotherapy</li>
                      </ul>
                    </div>
                    <div className="bg-earth-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Specializations</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Constellation Therapy</li>
                        <li>• Reiki & Energy Healing</li>
                        <li>• Nature-based Healing</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Team Mission Statement */}
          <div className="mt-16 text-center bg-white rounded-2xl p-8 lg:p-12 shadow-sm">
            <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-6">
              Our Collaborative Vision
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed max-w-4xl mx-auto mb-6">
              Together, Maria-Lucy, Ursula, and Kate have co-created Equillation—a unique way of working 
              that honours the horse at every step and ensures their needs, freedom, and natural instincts 
              remain central to our practice.
            </p>
            <p className="text-gray-700 font-medium">
              We bring together professional knowledge, spiritual insight, and lived experience to guide 
              both individuals and practitioners on their journeys of growth, connection, and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
