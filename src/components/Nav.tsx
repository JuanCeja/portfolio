import { useEffect, useState } from 'react'

const NAV_LINKS = [
  { num: '01', label: 'home', href: '#home' },
  { num: '02', label: 'about', href: '#about' },
  { num: '03', label: 'work', href: '#work' },
  { num: '04', label: 'skills', href: '#skills' },
  { num: '05', label: 'contact', href: '#contact' },
]

function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const top = el.getBoundingClientRect().top + window.scrollY - 65
  window.scrollTo({ top, behavior: 'smooth' })
}

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.slice(1))

    function update() {
      const scrollY = window.scrollY
      if (window.innerHeight + scrollY >= document.body.scrollHeight - 4) {
        setActiveSection(ids[ids.length - 1])
        return
      }
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop - 80 <= scrollY) current = id
      }
      setActiveSection(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  function handleNavClick(id: string) {
    scrollToSection(id)
    setMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0d0f14]/90 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); handleNavClick('home') }}
            className="font-mono text-lg font-medium text-[#e6e8ee]"
          >
            JuanCeja
            <span className="animate-blink text-[#2dd4bf]">_</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden items-end gap-8 md:flex">
            {NAV_LINKS.map(({ num, label, href }) => (
              <a
                key={label}
                href={href}
                onClick={(e) => { e.preventDefault(); handleNavClick(href.slice(1)) }}
                className="group flex flex-col items-start gap-0.5"
              >
                <span className={`font-mono text-[10px] transition-colors group-hover:text-[#2dd4bf] ${activeSection === href.slice(1) ? 'text-[#2dd4bf]' : 'text-[#8b91a1]'}`}>
                  {num}
                </span>
                <span className={`font-mono text-sm transition-colors group-hover:text-[#2dd4bf] ${activeSection === href.slice(1) ? 'text-[#2dd4bf]' : 'text-[#8b91a1]'}`}>
                  //{' '}{label}
                </span>
              </a>
            ))}
          </nav>

          {/* Mobile hamburger / close */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="relative flex h-6 w-6 flex-col items-center justify-center md:hidden"
          >
            <span
              className={`absolute block h-px w-6 transition-all duration-300 ${
                menuOpen ? 'rotate-45 bg-[#2dd4bf]' : '-translate-y-2 bg-[#8b91a1]'
              }`}
            />
            <span
              className={`absolute block h-px w-6 transition-all duration-300 ${
                menuOpen ? 'opacity-0' : 'bg-[#8b91a1]'
              }`}
            />
            <span
              className={`absolute block h-px transition-all duration-300 ${
                menuOpen ? 'w-6 -rotate-45 bg-[#2dd4bf]' : 'w-4 translate-y-2 bg-[#8b91a1]'
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 top-[65px] z-40 bg-[#0d0f14] md:hidden">
          <nav className="flex flex-col gap-8 px-8 py-10">
            {NAV_LINKS.map(({ num, label, href }) => (
              <button
                key={label}
                onClick={() => handleNavClick(href.slice(1))}
                className="group flex items-center gap-4 text-left"
              >
                <span className="font-mono text-xs text-[#8b91a1] transition-colors group-hover:text-[#2dd4bf]">
                  {num}
                </span>
                <span className="font-mono text-2xl text-[#e6e8ee] transition-colors group-hover:text-[#2dd4bf]">
                  // {label}
                </span>
              </button>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
