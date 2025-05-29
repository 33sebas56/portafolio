"use client"

import { Mail, Github, Facebook } from "lucide-react"

export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>

        <div
          className="contact-container"
          style={{ display: "flex", alignItems: "center", gap: "4rem", maxWidth: "1200px", margin: "0 auto" }}
        >
          {/* Lado izquierdo - Mensaje de agradecimiento */}
          <div className="contact-left" style={{ flex: 1, textAlign: "left" }}>
            <p style={{ fontSize: "1.4rem", lineHeight: 1.7, marginBottom: "2rem" }}>
              ¿Tienes un proyecto en mente o quieres colaborar? ¡Me encantaría escuchar sobre él!
            </p>

            <div
              style={{
                background: "rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(255, 215, 0, 0.3)",
                borderRadius: "15px",
                padding: "2rem",
                marginBottom: "2rem",
              }}
            >
              <p
                style={{
                  fontSize: "1.2rem",
                  lineHeight: 1.6,
                  color: "var(--accent-gold)",
                  fontStyle: "italic",
                }}
              >
                "Muchas gracias por interesarte. Si ves algo interesante en mi perfil, me complacería dar el 110% por
                esa oportunidad."
              </p>
            </div>
          </div>

          {/* Lado derecho - Información de contacto asimétrica */}
          <div className="contact-right" style={{ flex: "0 0 400px" }}>
            <div style={{ display: "grid", gap: "1.5rem", gridTemplateColumns: "1fr", alignItems: "start" }}>
              {/* Email - Arriba a la izquierda */}
              <div style={{ justifySelf: "start", width: "280px" }}>
                <div className="skill-card" style={{ textAlign: "center", padding: "1.5rem" }}>
                  <Mail size={32} color="var(--accent-gold)" style={{ marginBottom: "0.8rem" }} />
                  <h3 style={{ color: "var(--accent-gold)", marginBottom: "0.8rem", fontSize: "1.2rem" }}>Email</h3>
                  <a
                    href="mailto:sebas-ramos2018@outlook.com"
                    style={{
                      color: "white",
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                  >
                    sebas-ramos2018@outlook.com
                  </a>
                </div>
              </div>

              {/* GitHub - Centro a la derecha */}
              <div style={{ justifySelf: "end", width: "280px" }}>
                <div className="skill-card" style={{ textAlign: "center", padding: "1.5rem" }}>
                  <Github size={32} color="var(--accent-gold)" style={{ marginBottom: "0.8rem" }} />
                  <h3 style={{ color: "var(--accent-gold)", marginBottom: "0.8rem", fontSize: "1.2rem" }}>GitHub</h3>
                  <a
                    href="https://github.com/33sebas56"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "white",
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.color = "var(--accent-gold)")}
                    onMouseOut={(e) => (e.currentTarget.style.color = "white")}
                  >
                    github.com/33sebas56
                  </a>
                </div>
              </div>

              {/* Facebook - Abajo centrado */}
              <div style={{ justifySelf: "center", width: "280px" }}>
                <div className="skill-card" style={{ textAlign: "center", padding: "1.5rem" }}>
                  <Facebook size={32} color="var(--accent-gold)" style={{ marginBottom: "0.8rem" }} />
                  <h3 style={{ color: "var(--accent-gold)", marginBottom: "0.8rem", fontSize: "1.2rem" }}>Facebook</h3>
                  <p style={{ color: "white", fontSize: "0.95rem" }}>Próximamente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
