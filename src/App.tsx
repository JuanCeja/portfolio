import Nav from './components/Nav'

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d0f14] text-[#e6e8ee]">
      <Nav />

      {/* Hero placeholder */}
      <main id="home" className="mx-auto max-w-[1100px] px-6">
        <section className="flex min-h-[calc(100vh-65px)] items-center justify-center">
          <p className="font-mono text-[#8b91a1]">
            <span className="text-[#2dd4bf]">// </span>hero goes here
          </p>
        </section>
      </main>
    </div>
  )
}
