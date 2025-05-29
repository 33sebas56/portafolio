"use client"

import { useState } from "react"

// Definir el tipo para las habilidades
interface Skill {
  name: string;
  level: number;
  status?: string; // Opcional
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skills: Record<string, Skill[]> = {
    frontend: [
      { name: "React", level: 75 },
      { name: "Angular", level: 85 },
      { name: "Next.js", level: 60, status: "En aprendizaje" },
      { name: "TypeScript", level: 80 },
      { name: "CSS", level: 90 },
      { name: "HTML", level: 95 },
      { name: "PyQt6", level: 90 },
    ],
    backend: [
      { name: "Spring Boot", level: 90 },
      { name: "Django", level: 50, status: "En aprendizaje" },
      { name: "Hibernate", level: 45, status: "En aprendizaje" },
      { name: "Python", level: 85 },
      { name: "Java", level: 80 },
      { name: "Node.js", level: 70 },
    ],
    databases: [
      { name: "SQL Workbench", level: 85 },
      { name: "SQLite", level: 80 },
      { name: "MySQL", level: 75 },
      { name: "PostgreSQL", level: 70 },
    ],
  }

  return (
    <section id="habilidades" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>

        <div style={{ display: "flex", justifyContent: "center", marginBottom: "3rem", gap: "1rem" }}>
          <button
            onClick={() => setActiveTab("frontend")}
            style={{
              padding: "1rem 2rem",
              borderRadius: "25px",
              border: "2px solid var(--accent-gold)",
              background: activeTab === "frontend" ? "var(--accent-gold)" : "transparent",
              color: activeTab === "frontend" ? "var(--dark-red)" : "var(--accent-gold)",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Frontend
          </button>
          <button
            onClick={() => setActiveTab("backend")}
            style={{
              padding: "1rem 2rem",
              borderRadius: "25px",
              border: "2px solid var(--accent-gold)",
              background: activeTab === "backend" ? "var(--accent-gold)" : "transparent",
              color: activeTab === "backend" ? "var(--dark-red)" : "var(--accent-gold)",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Backend
          </button>
          <button
            onClick={() => setActiveTab("databases")}
            style={{
              padding: "1rem 2rem",
              borderRadius: "25px",
              border: "2px solid var(--accent-gold)",
              background: activeTab === "databases" ? "var(--accent-gold)" : "transparent",
              color: activeTab === "databases" ? "var(--dark-red)" : "var(--accent-gold)",
              fontSize: "1.1rem",
              fontWeight: "600",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          >
            Bases de Datos
          </button>
        </div>

        <div className="skills-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {skills[activeTab].map((skill, index) => (
            <div key={index} className="skill-card" style={{ textAlign: "left" }}>
              <div
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }}
              >
                <h3 style={{ color: "var(--accent-gold)", fontSize: "1.3rem" }}>{skill.name}</h3>
                <span style={{ color: "var(--accent-gold)", fontSize: "1.1rem", fontWeight: "600" }}>
                  {skill.status || `${skill.level}%`}
                </span>
              </div>
              {!skill.status && (
                <div
                  style={{
                    width: "100%",
                    height: "8px",
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: "4px",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      width: `${skill.level}%`,
                      height: "100%",
                      background: "linear-gradient(90deg, var(--accent-gold), #ffed4e)",
                      borderRadius: "4px",
                      transition: "width 1s ease-in-out",
                    }}
                  />
                </div>
              )}
              {skill.status && (
                <div
                  style={{
                    padding: "0.5rem 1rem",
                    background: "rgba(255, 215, 0, 0.1)",
                    border: "1px solid rgba(255, 215, 0, 0.3)",
                    borderRadius: "15px",
                    fontSize: "0.9rem",
                    color: "var(--accent-gold)",
                  }}
                >
                  {skill.status}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}