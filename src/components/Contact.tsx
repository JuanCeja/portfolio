import { useEffect, useRef, useState } from 'react'

const LINKS = [
  {
    label: 'Email',
    display: 'JuanCejaSWE@yahoo.com',
    href: 'mailto:JuanCejaSWE@yahoo.com',
    external: false,
  },
  {
    label: 'GitHub',
    display: 'github.com/JuanCeja',
    href: 'https://github.com/JuanCeja',
    external: true,
  },
  {
    label: 'LinkedIn',
    display: 'linkedin.com/in/juan-ceja',
    href: 'https://www.linkedin.com/in/juan-ceja/',
    external: true,
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

export default function Contact() {
  const { ref, visible } = useFadeIn()
  const year = new Date().getFullYear()

  return (
    <section id="contact" className="relative flex flex-col">
      <div className="py-24 lg:py-32">
        <div
          ref={ref}
          className={`mx-auto max-w-[1100px] px-6 transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Section label */}
          <div className="mb-4 flex items-center gap-3">
            <span className="font-mono text-xs text-[#8b91a1]">05</span>
            <span className="font-mono text-sm text-[#2dd4bf]">// contact</span>
          </div>

          {/* Header */}
          <h2 className="mb-6 font-sans text-4xl font-bold tracking-tight text-[#e6e8ee] sm:text-5xl">
            Get In Touch
          </h2>

          {/* Message */}
          <p className="mb-12 max-w-[520px] leading-relaxed text-[#8b91a1]">
            I'm currently looking for new-grad software engineering roles and open to relocation.
            If you're hiring or just want to connect, reach out.
          </p>

          {/* Contact links */}
          <div className="mb-10 flex flex-col gap-5">
            {LINKS.map(({ label, display, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                className="group flex items-center gap-4"
              >
                <span className="w-20 shrink-0 font-mono text-xs text-[#8b91a1]">{label}</span>
                <span className="font-mono text-sm text-[#e6e8ee] transition-colors duration-200 group-hover:text-[#2dd4bf]">
                  {display}
                </span>
                <span className="font-mono text-xs text-[#8b91a1] transition-colors duration-200 group-hover:text-[#2dd4bf]">
                  ↗
                </span>
              </a>
            ))}
          </div>

          {/* Resume download */}
          <a
            href="/JuanCeja_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded bg-[#2dd4bf] px-5 py-2.5 font-mono text-sm font-medium text-[#0d0f14] transition-opacity duration-200 hover:opacity-85"
          >
            Download Résumé
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-white/5 py-6">
        <div className="mx-auto max-w-[1100px] px-6">
          <p className="font-mono text-xs text-[#8b91a1]">
            © {year} — Built with React, Vite & Tailwind. Designed and developed by Juan Ceja.
          </p>
        </div>
      </footer>
    </section>
  )
}
