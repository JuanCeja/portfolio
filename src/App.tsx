import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-[#e6e8ee]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
    </div>
  )
}
