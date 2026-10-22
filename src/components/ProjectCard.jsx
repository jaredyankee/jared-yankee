import './ProjectCard.css'

function ProjectCard({ name, description, stack, link, linkLabel, status }) {
  return (
    <article className="project-card">
      <div className="card-header">
        <h2 className="card-name">{name}</h2>
        <span className="card-status">{status}</span>
      </div>
      <p className="card-description">{description}</p>
      <p className="card-stack">{stack.join(', ')}</p>
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
          {linkLabel} &rarr;
        </a>
      ) : (
        linkLabel && <span className="card-link-muted">{linkLabel}</span>
      )}
    </article>
  )
}

export default ProjectCard
