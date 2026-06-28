export type Project = {
  name: string
  description: string
  stack: string[]
  image: string
  live: string | null
  repo: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'WagerInsights',
    description:
      'Full-stack sports betting analytics platform with AI-powered bet analysis, live odds sync, and Stripe payments.',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'React', 'Vite', 'Tailwind', 'Anthropic SDK', 'Stripe', 'JWT'],
    image: '/projects/wagerinsights.png',
    live: 'https://wagerinsights.app',
    repo: 'https://github.com/JuanCeja/WagerInsights',
    featured: true,
  },
  {
    name: "Juan's Shoe Supply",
    description: 'E-commerce sneaker marketplace with checkout and Stripe payments.',
    stack: ['React', 'Next.js', 'Stripe'],
    image: '/projects/solemarket.png',
    live: 'https://juans-shoe-supply-ksy1gcbxh-juanceja.vercel.app/',
    repo: 'https://github.com/JuanCeja/JuansShoeSupply',
  },
  {
    name: "Juan's Gym Techniques",
    description: 'Fitness app surfacing exercises and workout data from a third-party API.',
    stack: ['React', 'Material UI', 'RapidAPI'],
    image: '/projects/cejafit.png',
    live: 'https://juansgymtechniques.com/',
    repo: 'https://github.com/JuanCeja/JuansGymTechniques',
  },
  {
    name: 'VetVote',
    description:
      'Full-stack veteran donation and voting application with relational data and server-rendered views.',
    stack: ['Java', 'Spring MVC', 'JSP', 'MySQL'],
    image: '/projects/vetvote.png',
    live: null,
    repo: 'https://github.com/JuanCeja/VeteranDonationProject',
  },
]
