import { useId, useRef, useState } from 'react'
import './ProjectCard.css'

function ProjectCard({ name, description, stack, link, linkLabel, theme, shots = [] }) {
  const [open, setOpen] = useState(false)
  const cardRef = useRef(null)
  const traceRef = useRef(null)
  const detailsId = useId()

  const toggle = () => {
    // Collapsing a long card can leave you scrolled past it, so bring its top back
    if (open && cardRef.current.getBoundingClientRect().top < 0) {
      cardRef.current.scrollIntoView({ block: 'start' })
    }
    setOpen(o => !o)
  }

  // Reverse the border trace on hover. Flipping the playback rate keeps the
  // segment where it is, a CSS direction swap would make it jump.
  const setTraceDirection = (rate) => {
    traceRef.current?.getAnimations().forEach(a => a.updatePlaybackRate(rate))
  }

  return (
    <article
      ref={cardRef}
      className={theme ? `project-card project-card--${theme}` : 'project-card'}
      onMouseEnter={theme === 'cv-master' ? () => setTraceDirection(-1) : undefined}
      onMouseLeave={theme === 'cv-master' ? () => setTraceDirection(1) : undefined}
    >
      {theme === 'cv-master' && (
        // Teal segment that runs around the border, CV Master's loading effect
        <svg className="card-trace" aria-hidden="true">
          <rect ref={traceRef} pathLength="300" />
        </svg>
      )}
      <h2 className="card-name">{name}</h2>
      <p className="card-description">{description}</p>
      <p className="card-stack">{stack.join(', ')}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
          {linkLabel} &rarr;
        </a>
      )}
      {shots.length > 0 && (
        <>
          <button
            type="button"
            className="card-toggle"
            aria-expanded={open}
            aria-controls={detailsId}
            onClick={toggle}
          >
            {open ? 'Hide details' : `See how it works (${shots.length})`}
            <span className="card-toggle-icon" aria-hidden="true">&#9662;</span>
          </button>
          <div id={detailsId} className="card-details" data-open={open} inert={!open}>
            <div className="card-details-inner">
              {shots.map((shot) => (
                <figure key={shot.src} className="card-shot">
                  <img src={shot.src} alt={`${name}: ${shot.title}`} loading="lazy" width="2497" height="1329" />
                  <figcaption>
                    <h3 className="card-shot-title">{shot.title}</h3>
                    <p className="card-shot-blurb">{shot.blurb}</p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </>
      )}
    </article>
  )
}

export default ProjectCard
