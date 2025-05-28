export default function Projects() {
  const projects = [
    {
      title: "E-commerce Platform",
      description:
        "Plataforma de comercio electrónico completa con carrito de compras, pagos integrados y panel de administración.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    },
    {
      title: "Task Management App",
      description: "Aplicación de gestión de tareas con colaboración en tiempo real y notificaciones push.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    },
    {
      title: "Portfolio Website",
      description: "Sitio web de portafolio personal con diseño responsivo y animaciones suaves.",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
    },
  ]

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="skills-grid">
          {projects.map((project, index) => (
            <div key={index} className="skill-card" style={{ textAlign: "left" }}>
              <h3 style={{ color: "var(--accent-gold)", fontSize: "1.5rem", marginBottom: "1rem" }}>{project.title}</h3>
              <p style={{ marginBottom: "1.5rem", lineHeight: 1.6 }}>{project.description}</p>
              <div>
                <h4 style={{ marginBottom: "0.5rem", fontSize: "1rem", opacity: 0.9 }}>Tecnologías:</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      style={{
                        background: "rgba(255, 215, 0, 0.2)",
                        color: "var(--accent-gold)",
                        padding: "0.25rem 0.75rem",
                        borderRadius: "15px",
                        fontSize: "0.9rem",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
