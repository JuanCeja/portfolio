import Nav from './components/Nav'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-[#e6e8ee]">
      <Nav />
      <main>
        <Hero />
      </main>
    </div>
  )
}
