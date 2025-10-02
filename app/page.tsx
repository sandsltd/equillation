import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Philosophy from './components/Philosophy'
import Training from './components/Training'
import TrainingPrograms from './components/TrainingPrograms'
import HorseGallery from './components/HorseGallery'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <About />
      <TrainingPrograms />
      <Philosophy />
      <Training />
      <HorseGallery />
      <Contact />
      <Footer />
    </main>
  )
}
