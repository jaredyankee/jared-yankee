import { useEffect, useId, useRef } from 'react'
import './ProjectCard.css'

// Preset project states. A project sets `status` to one of these keys; the
// title is the hover explanation for anyone who doesn't know the term.
const STATUSES = {
  live: { label: 'Live', title: 'Up and running in production' },
  testflight: { label: 'TestFlight', title: 'Beta build available through Apple TestFlight' },
  whitelisted: { label: 'Whitelisted', title: 'Invite only: open to approved users' },
}

function StatusIcon({ status }) {
  if (status === 'live') return <span className="status-dot" />
  if (status === 'testflight') {
    // Flask: a build being tested
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" />
        <path d="M7 15h10" />
      </svg>
    )
  }
  if (status === 'whitelisted') {
    // Lock: access is restricted
    return (
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="11" width="14" height="10" rx="2" />
        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
      </svg>
    )
  }
  return null
}

function ProjectCard({ name, description, stack, link, linkLabel, theme, status, shots = [], open, onToggle, onVisibleChange }) {
  const cardRef = useRef(null)
  const traceRef = useRef(null)
  const detailsId = useId()

  const onVisibleRef = useRef(onVisibleChange)
  useEffect(() => {
    onVisibleRef.current = onVisibleChange
  })

  // While open, report whether the card crosses the middle of the viewport.
  // That's what decides if its theme is applied to the page.
  useEffect(() => {
    if (!open) return
    const observer = new IntersectionObserver(
      ([entry]) => onVisibleRef.current(entry.isIntersecting),
      { rootMargin: '-45% 0px -45% 0px' },
    )
    observer.observe(cardRef.current)
    return () => {
      observer.disconnect()
      onVisibleRef.current(false)
    }
  }, [open])

  const toggle = () => {
    const card = cardRef.current
    // Collapsing a long card can leave you scrolled past it, so bring its top back
    if (open && card.getBoundingClientRect().top < 0) {
      card.scrollIntoView({ block: 'start' })
    }
    // Opening this one closes any card above it, which shifts this one up.
    // Once that collapse has played out, make sure it's still in view.
    if (!open) {
      setTimeout(() => {
        const { top } = card.getBoundingClientRect()
        if (top < 0 || top > window.innerHeight * 0.6) {
          card.scrollIntoView({ block: 'start', behavior: 'smooth' })
        }
      }, 400)
    }
    onToggle()
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
      data-open={open}
      onMouseEnter={theme === 'cv-master' ? () => setTraceDirection(-1) : undefined}
      onMouseLeave={theme === 'cv-master' ? () => setTraceDirection(1) : undefined}
    >
      {theme === 'cv-master' && (
        // Teal segment that runs around the border, CV Master's loading effect
        <svg className="card-trace" aria-hidden="true">
          <rect ref={traceRef} pathLength="300" />
        </svg>
      )}
      <div className="card-header">
        <h2 className="card-name">{name}</h2>
        {STATUSES[status] && (
          <span className="card-status" title={STATUSES[status].title}>
            <span aria-hidden="true"><StatusIcon status={status} /></span>
            {STATUSES[status].label}
          </span>
        )}
      </div>
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
                  <img src={shot.src} alt={`${name}: ${shot.title}`} width="2497" height="1329" />
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
