import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Values from './components/Philosophy'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Timeline from './components/Timeline'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Values />
        <Projects />
        <Skills />
        <Timeline />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
