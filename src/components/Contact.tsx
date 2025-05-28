export default function Contact() {
  return (
    <section id="contacto" className="section">
      <div className="container">
        <h2 className="section-title">Contacto</h2>
        <div className="section-content">
          <p style={{ marginBottom: "2rem" }}>
            ¿Tienes un proyecto en mente? ¡Me encantaría escuchar sobre él y ver cómo puedo ayudarte!
          </p>

          <div
            style={{ display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", marginBottom: "2rem" }}
          >
            <div className="skill-card" style={{ minWidth: "250px" }}>
              <h3 style={{ color: "var(--accent-gold)", marginBottom: "1rem" }}>Email</h3>
              <p>sebastian.ramos@email.com</p>
            </div>

            <div className="skill-card" style={{ minWidth: "250px" }}>
              <h3 style={{ color: "var(--accent-gold)", marginBottom: "1rem" }}>LinkedIn</h3>
              <p>linkedin.com/in/sebastian-ramos</p>
            </div>

            <div className="skill-card" style={{ minWidth: "250px" }}>
              <h3 style={{ color: "var(--accent-gold)", marginBottom: "1rem" }}>GitHub</h3>
              <p>github.com/sebastian-ramos</p>
            </div>
          </div>

          <button className="btn btn-primary" style={{ fontSize: "1.2rem", padding: "1rem 3rem" }}>
            Enviar Mensaje
          </button>
        </div>
      </div>
    </section>
  )
}
