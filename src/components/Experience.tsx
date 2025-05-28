export default function Experience() {
  const experiences = [
    {
      title: "Desarrollador Full Stack",
      company: "Empresa Tecnológica",
      period: "2023 - Presente",
      description:
        "Desarrollo de aplicaciones web modernas utilizando React, Next.js y Node.js. Implementación de arquitecturas escalables y optimización de rendimiento.",
    },
    {
      title: "Desarrollador Frontend",
      company: "Startup Digital",
      period: "2022 - 2023",
      description:
        "Creación de interfaces de usuario responsivas y accesibles. Colaboración estrecha con diseñadores UX/UI para implementar experiencias excepcionales.",
    },
    {
      title: "Desarrollador Junior",
      company: "Agencia Web",
      period: "2021 - 2022",
      description:
        "Desarrollo de sitios web corporativos y e-commerce. Aprendizaje de mejores prácticas en desarrollo web y trabajo en equipo.",
    },
  ]

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          {experiences.map((exp, index) => (
            <div key={index} className="skill-card" style={{ marginBottom: "2rem", textAlign: "left" }}>
              <h3 style={{ color: "var(--accent-gold)", fontSize: "1.5rem", marginBottom: "0.5rem" }}>{exp.title}</h3>
              <h4 style={{ fontSize: "1.2rem", marginBottom: "0.5rem", opacity: 0.9 }}>{exp.company}</h4>
              <p style={{ color: "var(--accent-gold)", marginBottom: "1rem", fontSize: "0.9rem" }}>{exp.period}</p>
              <p style={{ lineHeight: 1.6 }}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
