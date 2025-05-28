export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      technologies: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "API REST"],
    },
    {
      category: "Herramientas",
      technologies: ["Git", "Docker", "AWS", "Vercel", "Figma", "VS Code"],
    },
    {
      category: "Metodologías",
      technologies: ["Agile", "Scrum", "TDD", "Clean Code", "SOLID", "Git Flow"],
    },
  ]

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card">
              <h3 style={{ color: "var(--accent-gold)", marginBottom: "1rem", fontSize: "1.5rem" }}>
                {skillGroup.category}
              </h3>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {skillGroup.technologies.map((tech, techIndex) => (
                  <li key={techIndex} style={{ margin: "0.5rem 0", fontSize: "1.1rem" }}>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
