"use client"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
          &copy; 2024 Sebastian Ramos Toro. Todos los derechos reservados.
        </p>
        <p style={{ marginTop: "0.8rem", opacity: 0.8, fontSize: "1.1rem" }}>
          Desarrollado con ❤️ usando Next.js y mucho café ☕
        </p>

        <div style={{ marginTop: "2rem", display: "flex", justifyContent: "center", gap: "2rem" }}>
          <a
            href="#"
            style={{
              color: "var(--accent-gold)",
              fontSize: "1.1rem",
              textDecoration: "underline",
              opacity: 0.8,
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "0.8")}
          >
            LinkedIn
          </a>
          <a
            href="#"
            style={{
              color: "var(--accent-gold)",
              fontSize: "1.1rem",
              textDecoration: "underline",
              opacity: 0.8,
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "0.8")}
          >
            GitHub
          </a>
          <a
            href="#"
            style={{
              color: "var(--accent-gold)",
              fontSize: "1.1rem",
              textDecoration: "underline",
              opacity: 0.8,
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "0.8")}
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  )
}
