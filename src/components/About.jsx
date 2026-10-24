import './About.css'

const paragraphs = [
  "I write software for a living, specializing in platform migrations, custom API integrations, serverless infrastructure, and the databases and front ends that tie it all together.",
  "Most of my integration work runs through Netlify serverless functions, connecting platforms like BigCommerce, NetSuite, HubSpot, Zoho, Stripe, and a laundry-list of others. If it has API documentation, I can work with it.",
  "AI has changed the way I build. Iterations are faster, lead times are shorter, and the gap between idea and product has never been smaller. Time saved on programming becomes extra time to spend engineering.",
]

function About() {
  return (
    <section className="about">
      {paragraphs.map((p, index) => {
        return <p 
          key={index}
        >
          {p}
        </p>
      })}
    </section>
  )
}

export default About
