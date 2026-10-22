import './ProjectCard.css'

function ProjectCard({ name, description, stack, link, linkLabel, theme, shots = [] }) {
  return (
    <article className={theme ? `project-card project-card--${theme}` : 'project-card'}>
      <h2 className="card-name">{name}</h2>
      <p className="card-description">{description}</p>
      <p className="card-stack">{stack.join(', ')}</p>
      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer" className="card-link">
          {linkLabel} &rarr;
        </a>
      )}
      {shots.map((shot) => (
        <figure key={shot.src} className="card-shot">
          <img src={shot.src} alt={`${name}: ${shot.title}`} loading="lazy" width="2497" height="1329" />
          <figcaption>
            <h3 className="card-shot-title">{shot.title}</h3>
            <p className="card-shot-blurb">{shot.blurb}</p>
          </figcaption>
        </figure>
      ))}
    </article>
  )
}

export default ProjectCard
