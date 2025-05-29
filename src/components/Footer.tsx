"use client"

import { Mail, Github, Facebook } from "lucide-react"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          &copy; 2025 Sebastian Camilo Ramos Toro. Todos los derechos reservados.
        </p>
        <p style={{ marginTop: "0.8rem", opacity: 0.8, fontSize: "1.1rem" }}>
          Desarrollado con Next.js y mucho entusiasmo 🚀
        </p>

        <div
          style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem", alignItems: "center" }}
        >
          <a
            href="mailto:sebas-ramos2018@outlook.com"
            style={{
              color: "var(--accent-gold)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.textShadow = "0 0 10px rgba(255, 215, 0, 0.8)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.textShadow = "none"
            }}
          >
            <Mail size={24} />
          </a>

          <a
            href="https://github.com/33sebas56"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: "var(--accent-gold)",
              transition: "all 0.3s ease",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)"
              e.currentTarget.style.textShadow = "0 0 10px rgba(255, 215, 0, 0.8)"
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)"
              e.currentTarget.style.textShadow = "none"
            }}
          >
            <Github size={24} />
          </a>

          <div
            style={{
              color: "var(--accent-gold)",
              opacity: 0.6,
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <Facebook size={24} />
          </div>
        </div>
      </div>
    </footer>
  )
}
