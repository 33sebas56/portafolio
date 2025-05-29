"use client"

import Image from "next/image"
import { Download } from "lucide-react"

export default function About() {
  return (
    <section id="sobre-mi" className="section">
      <div className="container">
        <h2 className="section-title">Sobre Mí</h2>
        <div
          className="about-container"
          style={{ display: "flex", alignItems: "center", gap: "4rem", maxWidth: "1000px", margin: "0 auto" }}
        >
          <div className="about-image" style={{ flex: "0 0 250px" }}>
            <div
              style={{
                position: "relative",
                width: "250px",
                height: "300px",
                borderRadius: "15px",
                overflow: "hidden",
                border: "2px solid var(--accent-gold)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              }}
            >
              <Image src="/foto_2.jpg" alt="Sebastian trabajando" fill style={{ objectFit: "cover" }} />
            </div>
          </div>

          <div className="about-content" style={{ flex: 1, textAlign: "left" }}>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Soy un estudiante apasionado por la tecnología y el desarrollo de software. Mi enfoque principal está en
              crear experiencias digitales que no solo funcionen bien, sino que también sean intuitivas y atractivas
              para los usuarios.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Me especializo en el diseño de interfaces de usuario y la planificación de software centrado en la
              experiencia del usuario. Disfruto trabajando tanto en el frontend como en el backend, siempre buscando las
              mejores prácticas y tecnologías modernas.
            </p>
            <p style={{ fontSize: "1.2rem", lineHeight: 1.8, marginBottom: "2rem" }}>
              Cuando no estoy programando, me gusta explorar nuevas tecnologías, aprender sobre diseño UX/UI y
              contribuir a proyectos que puedan hacer una diferencia positiva.
            </p>

            <button
              disabled
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "1rem 2rem",
                borderRadius: "25px",
                border: "2px solid rgba(255, 215, 0, 0.3)",
                background: "rgba(255, 215, 0, 0.1)",
                color: "rgba(255, 215, 0, 0.5)",
                fontSize: "1.1rem",
                fontWeight: "600",
                cursor: "not-allowed",
                transition: "all 0.3s ease",
              }}
            >
              <Download size={20} />
              Descargar CV (Próximamente)
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
