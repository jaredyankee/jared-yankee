import ProjectCard from './ProjectCard'
import './Work.css'

const projects = [
  {
    name: 'Seyona AI',
    description:
      'An AI-powered AEO/SEO platform. Scrapes page data to build a living brand profile, generates per-page trend plans, and produces FAQ schema blocks that render directly on client sites. Aligns generated content with existing brand voice automatically.',
    stack: ['Vite', 'React', 'Netlify Serverless', 'Stack Auth', 'Perplexity API'],
    link: 'https://seyona.ai',
    linkLabel: 'seyona.ai',
    status: 'In development',
  },
  {
    name: 'API Dashboard Template',
    description:
      'A reusable dashboard for custom API platform integrations. Reduces UI overhead for ecommerce and CRM functions work across platforms I work with, BigCommerce, NetSuite, HubSpot, and Zoho.',
    stack: ['React', 'Netlify', 'BigCommerce', 'NetSuite', 'HubSpot', 'Zoho'],
    link: null,
    linkLabel: 'GitHub coming soon',
    status: 'Open source',
  },
  {
    name: 'Tribute Bands Locator',
    description:
      "Find tribute band shows near you, filterable by original artist. AI can't take away live music!",
    stack: ['React'],
    link: null,
    linkLabel: 'In progress',
    status: 'In progress',
  },
  {
    name: 'Freelance Client Work',
    description:
      'Web applications and platform integrations for small businesses. Ecommerce, serverless functions, API work, custom functionality. Client work is not publicly linkable.',
    stack: ['Varies'],
    link: null,
    linkLabel: null,
    status: 'Client work',
  },
]

function Work() {
  // see ProjectCard.jsx, renders each of the above as a card
  return (
    <section className="work">
      {projects.map((project) => (
        <ProjectCard key={project.name} {...project} />
      ))}
    </section>
  )
}

export default Work
