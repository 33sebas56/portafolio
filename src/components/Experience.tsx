"use client"

import { useState } from "react"

// Definir los tipos para las experiencias
interface AcademicExperience {
  title: string
  institution: string
  period: string
  description: string
}

interface WorkExperience {
  title: string
  company: string
  period: string
  description: string
}

export default function Experience() {
  const [activeTab, setActiveTab] = useState("academica")

  const experiences = {
    academica: [
      {
        title: "Ingeniería de Software",
        institution: "Universidad",
        period: "2023 - Sin terminar",
        description:
          "Mi mayor centro de conocimientos aún está en progreso, faltando 3 semestres por completar. He descubierto algo más que un futuro trabajo, sino una pasión por la creación de software. Espero continuar mis estudios en esta área.",
      },
    ] as AcademicExperience[],
    laboral: [
      {
        title: "Experiencia Laboral",
        company: "En búsqueda de oportunidades",
        period: "Presencial, a distancia, tiempo completo o medio tiempo",
        description:
          "Aún estoy en ello. Buscando mi primera oportunidad laboral para aplicar mis conocimientos y seguir creciendo profesionalmente.",
      },
    ] as WorkExperience[],
  }

  return (
    <section id="experiencia" className="section">
      <div className="container">
        <h2 className="section-title">Experiencia</h2>

        {/* Botones de tabs - Responsive */}
        <div className="experience-tabs">
          <button
            onClick={() => setActiveTab("academica")}
            className={`tab-button ${activeTab === "academica" ? "active" : ""}`}
          >
            Académica
          </button>
          <button
            onClick={() => setActiveTab("laboral")}
            className={`tab-button ${activeTab === "laboral" ? "active" : ""}`}
          >
            Laboral
          </button>
        </div>

        {/* Contenido de experiencias */}
        <div className="experience-content">
          {activeTab === "academica" &&
            experiences.academica.map((exp, index) => (
              <div key={index} className="experience-card">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-institution">{exp.institution}</h4>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
          {activeTab === "laboral" &&
            experiences.laboral.map((exp, index) => (
              <div key={index} className="experience-card">
                <h3 className="experience-title">{exp.title}</h3>
                <h4 className="experience-institution">{exp.company}</h4>
                <p className="experience-period">{exp.period}</p>
                <p className="experience-description">{exp.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
