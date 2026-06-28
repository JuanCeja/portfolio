import type { Project } from '../data/projects'

function Tags({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {stack.map((tag) => (
        <span
          key={tag}
          className="rounded bg-white/5 px-2 py-0.5 font-mono text-xs text-[#8b91a1]"
        >
          {tag}
        </span>
      ))}
    </div>
  )
}

function Links({ live, repo }: { live: string | null; repo: string }) {
  return (
    <div className="flex gap-3">
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noreferrer"
          className="rounded bg-[#2dd4bf] px-3 py-1.5 font-mono text-xs font-medium text-[#0d0f14] transition-opacity hover:opacity-85"
        >
          Live
        </a>
      )}
      <a
        href={repo}
        target="_blank"
        rel="noreferrer"
        className="rounded border border-white/15 px-3 py-1.5 font-mono text-xs text-[#e6e8ee] transition-colors hover:border-[#2dd4bf]/60 hover:text-[#2dd4bf]"
      >
        GitHub
      </a>
    </div>
  )
}

function FeaturedCard({ project }: { project: Project }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-white/10 bg-[#161922] transition-all duration-300 hover:-translate-y-1 hover:border-[#2dd4bf]/30 hover:shadow-xl hover:shadow-[#2dd4bf]/5">
      <div className="flex flex-col lg:flex-row">
        {/* Screenshot */}
        <div className="relative aspect-video w-full shrink-0 overflow-hidden bg-[#0d0f14] lg:aspect-auto lg:w-[58%]">
          <img
            src={project.image}
            alt={project.name}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col justify-center gap-5 p-8 lg:p-10">
          <div>
            <p className="mb-2 font-mono text-xs text-[#2dd4bf]">// featured project</p>
            <h3 className="font-sans text-2xl font-bold text-[#e6e8ee] lg:text-3xl">
              {project.name}
            </h3>
          </div>
          <p className="text-sm leading-relaxed text-[#8b91a1] lg:text-base">
            {project.description}
          </p>
          <Tags stack={project.stack} />
          <Links live={project.live} repo={project.repo} />
        </div>
      </div>
    </div>
  )
}

function RegularCard({ project }: { project: Project }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-[#161922] transition-all duration-300 hover:-translate-y-1 hover:border-[#2dd4bf]/30 hover:shadow-xl hover:shadow-[#2dd4bf]/5">
      {/* Screenshot */}
      <div className="aspect-video w-full overflow-hidden bg-[#0d0f14]">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-4 p-5">
        <h3 className="font-sans text-lg font-bold text-[#e6e8ee]">{project.name}</h3>
        <p className="text-sm leading-relaxed text-[#8b91a1]">{project.description}</p>
        <Tags stack={project.stack} />
        <div className="mt-auto pt-1">
          <Links live={project.live} repo={project.repo} />
        </div>
      </div>
    </div>
  )
}

export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project
  featured?: boolean
}) {
  return featured ? <FeaturedCard project={project} /> : <RegularCard project={project} />
}
