import { useEffect, useRef, useState } from 'react'
import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function useFadeIn(threshold = 0.1) {
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

export default function Work() {
  const { ref, visible } = useFadeIn()

  const featured = projects.find((p) => p.featured)!
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-[1100px] px-6 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-[#8b91a1]">03</span>
          <span className="font-mono text-sm text-[#2dd4bf]">// work</span>
        </div>

        {/* Header */}
        <h2 className="mb-12 font-sans text-4xl font-bold tracking-tight text-[#e6e8ee] sm:text-5xl">
          My Work
        </h2>

        {/* Featured card */}
        <div className="mb-8">
          <ProjectCard project={featured} featured />
        </div>

        {/* Grid of remaining projects */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project, i) => (
            <div
              key={project.name}
              className={`h-full transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: visible ? `${(i + 1) * 100}ms` : '0ms' }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
