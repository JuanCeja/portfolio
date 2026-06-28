import { useEffect, useRef, useState } from 'react'

const FACTS = [
  { label: 'Location', value: 'SF Bay Area, open to relocation' },
  { label: 'Degree', value: 'B.S. Software Engineering' },
  { label: 'Currently', value: 'building and job-hunting' },
  { label: 'Focus', value: 'full-stack web' },
]

function useFadeIn(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

export default function About() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="about" className="relative py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-[1100px] px-6 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-[#8b91a1]">02</span>
          <span className="font-mono text-sm text-[#2dd4bf]">// about</span>
        </div>

        {/* Header */}
        <h2 className="mb-12 font-sans text-4xl font-bold tracking-tight text-[#e6e8ee] sm:text-5xl">
          About
        </h2>

        {/* Two-column layout */}
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-16">
          {/* Main column — 3 paragraphs */}
          <div className="flex max-w-[620px] flex-col gap-6 text-[#8b91a1] leading-relaxed">
            <p>
              I spent years operating national-scale energy infrastructure, managing SCADA systems
              and critical control operations where downtime isn't an option. That work taught me
              how real systems behave under load, and it's what pulled me toward the software
              running underneath all of it.
            </p>
            <p>
              So I taught myself to build, then earned a B.S. in Software Engineering. Now I build
              full-stack applications end to end. I design the data model, write the API, build the
              interface, and ship it to production.
            </p>
            <p>
              I'm looking for a new-grad software engineering role where I can keep building things
              real people use. My background means I don't panic when systems break. I debug them.
            </p>
          </div>

          {/* Side column — quick facts */}
          <div className="lg:w-52 shrink-0">
            <div className="rounded-lg border border-white/10 bg-[#161922] px-5 py-5 font-mono text-sm">
              {FACTS.map(({ label, value }) => (
                <div key={label} className="mb-5 last:mb-0">
                  <div className="mb-1 text-xs text-[#2dd4bf]">{label}</div>
                  <div className="leading-snug text-[#e6e8ee]">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
