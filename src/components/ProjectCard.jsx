import './ProjectCard.css'

function ProjectCard({ name, description, stack, link, linkLabel, status, featured }) {
  if (featured) {
    return (
      <article className="project-card project-card--featured">
        <div className="featured-meta">
          <span className="featured-eyebrow">Featured Project</span>
          <span className="card-status">{status}</span>
        </div>
        <h2 className="featured-name">{name}</h2>
        <p className="card-description">{description}</p>
        <div className="card-stack">
          {stack.map((tag) => (
            <span key={tag} className="stack-tag">{tag}</span>
          ))}
        </div>
        {link && (
          <a href={link} target="_blank" rel="noopener noreferrer" className="featured-link">
            {linkLabel} &rarr;
          </a>
        )}
      </article>
    )
  }

  return (
    <article className="project-card">
      <div className="card-header">
        <h2 className="card-name">{name}</h2>
        <span className="card-status">{status}</span>
      </div>
      <p className="card-description">{description}</p>
      <div className="card-stack">
        {stack.map((tag) => (
          <span key={tag} className="stack-tag">{tag}</span>
        ))}
      </div>
      {(link || linkLabel) && (
        <div className="card-footer">
          {link ? (
            <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
              {linkLabel} &rarr;
            </a>
          ) : (
            <span className="card-link-muted">{linkLabel}</span>
          )}
        </div>
      )}
    </article>
  )
}

export default ProjectCard
