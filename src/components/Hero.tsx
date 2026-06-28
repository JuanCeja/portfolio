import { useEffect, useState } from 'react'

// Each entry: the prompt line, then the response line(s)
const SEQUENCE = [
  { prompt: '> whoami', response: 'Juan Ceja — Software Engineer' },
  {
    prompt: '> background',
    response: 'Spent years operating national-scale energy infrastructure,\nthen earned a B.S. in Software Engineering and moved into building software.',
  },
  {
    prompt: '> what-i-build',
    response: 'Full-stack Software — Python, React, FastAPI, Postgres. From Frontend to deploy.',
  },
  { prompt: '> status', response: 'Open to new-grad SWE roles · SF Bay Area / Open to Relocation' },
]

// ms per character for typing
const CHAR_DELAY = 28
// pause after a response line before typing the next prompt
const LINE_PAUSE = 420

type Line = { text: string; type: 'prompt' | 'response' }

export default function Hero() {
  const [lines, setLines] = useState<Line[]>([])

  useEffect(() => {
    let cancelled = false

    async function typeSequence() {
      const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

      for (const entry of SEQUENCE) {
        // type prompt
        for (let i = 1; i <= entry.prompt.length; i++) {
          if (cancelled) return
          setLines((prev) => {
            const next = [...prev]
            const last = next[next.length - 1]
            if (last?.type === 'prompt') {
              next[next.length - 1] = { text: entry.prompt.slice(0, i), type: 'prompt' }
            } else {
              next.push({ text: entry.prompt.slice(0, i), type: 'prompt' })
            }
            return next
          })
          await sleep(CHAR_DELAY)
        }

        await sleep(LINE_PAUSE / 2)

        // type response
        for (let i = 1; i <= entry.response.length; i++) {
          if (cancelled) return
          setLines((prev) => {
            const next = [...prev]
            const last = next[next.length - 1]
            if (last?.type === 'response') {
              next[next.length - 1] = { text: entry.response.slice(0, i), type: 'response' }
            } else {
              next.push({ text: entry.response.slice(0, i), type: 'response' })
            }
            return next
          })
          await sleep(CHAR_DELAY)
        }

        await sleep(LINE_PAUSE)
      }

      if (!cancelled) { /* typing complete */ }
    }

    typeSequence()
    return () => { cancelled = true }
  }, [])


  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-65px)] items-center justify-center overflow-hidden"
    >
      {/* Background: radial teal glow + faint grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 60%, rgba(45,212,191,0.07) 0%, transparent 70%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(#2dd4bf 1px, transparent 1px), linear-gradient(90deg, #2dd4bf 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex w-full max-w-[1100px] flex-col items-center gap-12 px-6 py-16 lg:flex-row lg:items-center lg:gap-16">

        {/* Terminal window */}
        <div className="w-full max-w-[520px] shrink-0 rounded-xl border border-white/10 bg-[#161922] shadow-2xl shadow-black/60">
          {/* Title bar */}
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
            <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
            <span className="h-3 w-3 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-xs text-[#8b91a1]">juan@portfolio: ~</span>
          </div>

          {/* Terminal body */}
          <div className="px-5 py-4 font-mono text-sm leading-relaxed">
            {lines.map((line, i) =>
              line.type === 'response'
                ? line.text.split('\n').map((part, j) => (
                    <div key={`${i}-${j}`} className="text-[#e6e8ee]">{part}</div>
                  ))
                : (
                    <div key={i} className="text-[#2dd4bf]">{line.text}</div>
                  )
            )}
            {/* Blinking cursor on the last line while typing, or alone after done */}
            <span
              className="inline-block h-[1em] w-[9px] translate-y-[2px] bg-[#2dd4bf] animate-blink"
              aria-hidden
            />
          </div>
        </div>

        {/* Name + tagline + CTA */}
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <div>
            <p className="mb-2 font-mono text-sm text-[#2dd4bf]">// hello, world</p>
            <h1 className="font-sans text-5xl font-bold leading-tight tracking-tight text-[#e6e8ee] sm:text-6xl lg:text-7xl">
              Juan Ceja
            </h1>
            <p className="mt-3 max-w-[380px] text-lg text-[#8b91a1]">
              Full-stack software engineer —<br className="hidden sm:block" /> building and shipping what's next.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-lg bg-[#2dd4bf] px-5 py-2 font-mono text-sm font-medium text-[#0d0f14] transition-all hover:bg-[#2dd4bf]/85"
            >
              View Work
            </a>
            <a
              href="https://github.com/JuanCeja"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 px-5 py-2 font-mono text-sm font-medium text-[#e6e8ee] transition-all hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
