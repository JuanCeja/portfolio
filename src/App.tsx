import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="min-h-screen text-[#e6e8ee]">
      {/* Fixed background layer — sits behind all content */}
      <div aria-hidden className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden">
        {/* Slowly drifting teal glow */}
        <div
          style={{
            position: 'absolute',
            left: 'calc(50% - 450px)',
            top: 'calc(50% - 450px)',
            width: '900px',
            height: '900px',
            background: 'radial-gradient(ellipse, rgba(45,212,191,0.045) 0%, transparent 70%)',
            filter: 'blur(60px)',
            animation: 'glow-drift 50s ease-in-out infinite',
          }}
        />
        {/* Faint global grid — hero's own grid remains stronger */}
        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              'linear-gradient(#2dd4bf 1px, transparent 1px), linear-gradient(90deg, #2dd4bf 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

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
