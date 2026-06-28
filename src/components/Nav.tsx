const NAV_LINKS = [
  { num: '01', label: 'home', href: '#home' },
  { num: '02', label: 'about', href: '#about' },
  { num: '03', label: 'work', href: '#work' },
  { num: '04', label: 'skills', href: '#skills' },
  { num: '05', label: 'contact', href: '#contact' },
]

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0d0f14]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1100px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => { e.preventDefault(); scrollTo('home') }}
          className="font-mono text-lg font-medium text-[#e6e8ee]"
        >
          JuanCeja
          <span className="animate-blink text-[#2dd4bf]">_</span>
        </a>

        {/* Nav links */}
        <nav className="hidden items-end gap-8 md:flex">
          {NAV_LINKS.map(({ num, label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => { e.preventDefault(); scrollTo(href.slice(1)) }}
              className="group flex flex-col items-start gap-0.5"
            >
              <span className="font-mono text-[10px] text-[#8b91a1] transition-colors group-hover:text-[#2dd4bf]">
                {num}
              </span>
              <span className="font-mono text-sm text-[#8b91a1] transition-colors group-hover:text-[#2dd4bf]">
                //{' '}{label}
              </span>
            </a>
          ))}
        </nav>

        {/* Mobile hamburger placeholder — wired up later */}
        <button className="flex flex-col gap-1.5 md:hidden" aria-label="Open menu">
          <span className="block h-px w-6 bg-[#8b91a1]" />
          <span className="block h-px w-6 bg-[#8b91a1]" />
          <span className="block h-px w-4 bg-[#8b91a1]" />
        </button>
      </div>
    </header>
  )
}
