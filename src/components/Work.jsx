import ProjectCard from './ProjectCard'
import './Work.css'

// Placeholder copy until the real write-up for each agent exists
const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.'

const seyona = {
  "brand_analysis": "Seyona implements a brand-analysis agent to track brand voice and company offerings. This keeps generated content consistent with what already exists, and allows for cross-referencing other relevant pages in FAQ content.",
  "page_trends": "Seyona interfaces with Perplexity's API to retrieve live-search trends relevant to each page. It categorizes its results, gives each a confidence score based on certainy and SEO opportunity, and returns citations related to its results.",
  "live_content": "Each page's live FAQ content is visible from the dashboard. You can view and edit current FAQs, and go through an approval workflow to publish or reject proposed changes.",
  "live_on_site": "Seyona's widget can be deployed directly to a live site through a single script tag. Marking a page as active will have it analyzed and content will be generated for approval. You can opt to have it render as an accordion or a slider (slick-slider), and style the widget within the Seyona dashboard."
}

const projects = [
  {
    name: 'Seyona AI',
    theme: 'seyona',
    description:
      'An AI-powered AEO/SEO platform. Scrapes page data to build a living brand profile, generates per-page trend plans, and produces FAQ schema blocks that render directly on client sites. Aligns generated content with existing brand voice automatically.',
    stack: ['Vite', 'React', 'Netlify Serverless', 'Stack Auth', 'Perplexity API', 'Gemini API', 'Anthropic API'],
    link: 'https://seyona.ai',
    linkLabel: 'seyona.ai',
    shots: [
      { src: '/assets/seyona/seyona-dashboard-brand-analysis.png', title: 'Brand analysis', blurb: seyona.brand_analysis },
      { src: '/assets/seyona/seyona-dashboard-page-trends.png', title: 'Page trends', blurb: seyona.page_trends },
      { src: '/assets/seyona/seyona-dashboard-live-content.png', title: 'Live content', blurb: seyona.live_content },
      { src: '/assets/seyona/seyona-live-faqs.png', title: 'FAQs on a live site', blurb: seyona.live_on_site },
    ],
  },
  {
    name: 'Remedy',
    theme: 'remedy',
    description:
      "Medical companion using AI to track progress of conditions. Uses dynamic form generation to collect, analyze, and store information related to user's conditions",
    stack: ['React Native', 'SQLite', 'Expo Go', 'OpenAI API'],
    link: null,
  },
  {
    name: "cv-master",
    //theme: "cv-master",
    description:
      "AI-engine that analyzes job descriptions based on the users skills. Builds resumes from user-written repository of skills, education and professional experience",
    stack: ["React", "Netlify", "PostgreSQL", "OpenAI", "Anthropic", "Gemini"]
  },
  {
    name: 'API Dashboard Template',
    description:
      'A reusable dashboard for custom API platform integrations. Reduces UI overhead for ecommerce and CRM work across BigCommerce, NetSuite, HubSpot, and Zoho.',
    stack: ['React', 'Netlify', 'BigCommerce', 'NetSuite', 'HubSpot', 'Zoho'],
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
