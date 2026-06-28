import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-[#e6e8ee]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
      </main>
    </div>
  )
}
