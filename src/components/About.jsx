import './About.css'

const paragraphs = [
  "I write software for a living. I do platform design and migration across ecommerce, CMS, and CRM stacks, custom API integrations, serverless infrastructure, and the databases and templated frontends that tie it all together.",
  "Most of my integration work runs through Netlify serverless functions connecting platforms like BigCommerce, NetSuite, HubSpot, Zoho, Stripe, PayPal, and a long tail of others. If it has public API documentation, I can work with it.",
  "I take a curious approach to my work and try to map all uncharted territory. I take initiative when there is a clear path and help find one when there isn't. I learn from collaboration, emulating what works and passing my own knowledge onto others.",
  "I have a handful of projects coming to life right now. AI has changed the way I build. Iterations are faster, lead times are shorter, and the gap between idea and product has never been smaller. The time saved programming lends more attention to engineering.",
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
