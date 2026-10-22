import ProjectCard from './ProjectCard'
import './Work.css'

// Placeholder copy until the real write-up for each agent exists
const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'

const projects = [
  {
    name: 'Seyona AI',
    description:
      'An AI-powered AEO/SEO platform. Scrapes page data to build a living brand profile, generates per-page trend plans, and produces FAQ schema blocks that render directly on client sites. Aligns generated content with existing brand voice automatically.',
    stack: ['Vite', 'React', 'Netlify Serverless', 'Stack Auth', 'Perplexity API', 'Gemini API', 'Anthropic API'],
    link: 'https://seyona.ai',
    linkLabel: 'seyona.ai',
    shots: [
      { src: '/assets/seyona/seyona-dashboard-brand-analysis.png', title: 'Brand analysis', blurb: LOREM },
      { src: '/assets/seyona/seyona-dashboard-page-trends.png', title: 'Page trends', blurb: LOREM },
      { src: '/assets/seyona/seyona-dashboard-live-content.png', title: 'Live content', blurb: LOREM },
      { src: '/assets/seyona/seyona-live-faqs.png', title: 'FAQs on a live site', blurb: LOREM },
    ],
  },
  {
    name: 'API Dashboard Template',
    description:
      'A reusable dashboard for custom API platform integrations. Reduces UI overhead for ecommerce and CRM work across BigCommerce, NetSuite, HubSpot, and Zoho.',
    stack: ['React', 'Netlify', 'BigCommerce', 'NetSuite', 'HubSpot', 'Zoho'],
    link: null,
  },
  {
    name: 'Remedy',
    description:
      "Medical companion using AI to track progress of conditions. Uses dynamic form generation to collect, analyze, and store information related to user's conditions",
    stack: ['React Native', 'SQLite', 'Expo Go', 'OpenAI API'],
    link: null,
  },
  {
    name: 'Freelance Client Work',
    description:
      'Web applications and platform integrations for small businesses. Ecommerce, serverless functions, API work, custom functionality. Client work is not publicly linkable.',
    stack: ['Varies'],
    link: null,
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
