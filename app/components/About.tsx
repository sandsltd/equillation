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

          {/* Team Members Grid - Compact Cards */}
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
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specializations</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Constellation Therapy</li>
                      <li>• Equine Facilitated Constellations</li>
                      <li>• Nature-based Healing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Maria-Lucy Neason */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/about/maria-lucy.jpg"
                  alt="Maria-Lucy Neason - Lead Instructor & Equine Behavior Specialist"
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
                    Lead Instructor & Equine Behavior Specialist
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
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Specializations</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      <li>• Connection Training</li>
                      <li>• Equine Ethology</li>
                      <li>• Affective Neuroscience</li>
                    </ul>
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
              Founded by Kate and developed collaboratively with Maria-Lucy and Ursula, Equillation represents 
              a unique way of working that honours the horse at every step and ensures their needs, freedom, 
              and natural instincts remain central to our practice.
            </p>
            <p className="text-gray-700 font-medium">
              Together, we bring professional knowledge, spiritual insight, and lived experience to guide 
              both individuals and practitioners on their journeys of growth, connection, and transformation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
