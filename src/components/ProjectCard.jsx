import './ProjectCard.css'

function ProjectCard({ name, description, stack, link, linkLabel, status }) {
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
