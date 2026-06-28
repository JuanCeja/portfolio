import { useEffect, useRef, useState } from 'react'

const SKILL_GROUPS = [
  {
    label: 'Languages',
    skills: ['Python', 'JavaScript', 'Java', 'SQL'],
  },
  {
    label: 'Backend',
    skills: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'REST APIs', 'JWT Auth', 'Alembic'],
  },
  {
    label: 'Frontend',
    skills: ['React', 'Vite', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'HTML', 'CSS'],
  },
  {
    label: 'AI / ML',
    skills: ['Anthropic SDK', 'prompt engineering'],
  },
  {
    label: 'Tools & Infra',
    skills: ['Git', 'GitHub', 'AWS', 'Vercel', 'Render', 'Cloudflare', 'Stripe'],
  },
]

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

export default function Skills() {
  const { ref, visible } = useFadeIn()

  return (
    <section id="skills" className="relative py-24 lg:py-32">
      <div
        ref={ref}
        className={`mx-auto max-w-[1100px] px-6 transition-all duration-700 ease-out ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}
      >
        {/* Section label */}
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-xs text-[#8b91a1]">04</span>
          <span className="font-mono text-sm text-[#2dd4bf]">// skills</span>
        </div>

        {/* Header */}
        <h2 className="mb-12 font-sans text-4xl font-bold tracking-tight text-[#e6e8ee] sm:text-5xl">
          Tech Stack
        </h2>

        {/* Group cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <div
              key={group.label}
              className={`transition-all duration-700 ease-out ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
            >
              <div className="rounded-xl border border-white/10 bg-[#161922] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2dd4bf]/30 hover:shadow-xl hover:shadow-[#2dd4bf]/5">
                <p className="mb-4 font-mono text-xs text-[#2dd4bf]">{group.label}</p>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-[#8b91a1]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
