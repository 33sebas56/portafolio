export default function Projects() {
  const projects = [
    {
      title: "Sistema de Gestión de Registro Horario",
      description:
        "Sistema completo para la gestión de horas trabajadas en empresas, con capacidad de identificar trabajadores con más horas, calcular horas extra y gestionar aumentos salariales. Diseñado para ser adaptable a sistemas de registro con huella dactilar para automatización completa.",
      technologies: ["Spring Boot", "React", "MySQL Workbench", "Java", "JavaScript"],
      features: [
        "Registro automático de horas trabajadas",
        "Cálculo de horas extra",
        "Gestión de aumentos salariales",
        "Reportes de productividad",
        "Adaptable a sistemas biométricos",
      ],
      status: "Completado",
      type: "Sistema Empresarial",
    },
    {
      title: "Red Social con Sistema de Mensajería",
      description:
        "Red social básica desarrollada para pruebas de envío y recibo de datos en tiempo real. En esta era de comunicación constante, las aplicaciones implementan su propia mensajería, por lo que creé un componente reutilizable que facilita la adaptación a múltiples aplicaciones.",
      technologies: ["Spring Boot", "Angular", "MySQL Workbench", "WebSocket", "TypeScript"],
      features: [
        "Mensajería en tiempo real",
        "Sistema de usuarios y perfiles",
        "Componente reutilizable de chat",
        "API REST para integración",
        "Arquitectura escalable",
      ],
      status: "Completado",
      type: "Aplicación Web",
    },
  ]

  return (
    <section id="proyectos" className="section">
      <div className="container">
        <h2 className="section-title">Proyectos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-header">
                <div className="project-type">{project.type}</div>
                <div className={`project-status ${project.status.toLowerCase()}`}>{project.status}</div>
              </div>

              <h3 className="project-title">{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-features">
                <h4>Características principales:</h4>
                <ul>
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Tecnologías utilizadas:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-note">
          <p>
            <strong>Nota:</strong> Aun no he podido subir una demo de estos proyectos porque necesitaria simplificarlos para una demo gratuita.
          </p>
        </div>
      </div>
    </section>
  )
}
