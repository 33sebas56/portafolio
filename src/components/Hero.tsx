"use client"

import Image from "next/image"

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      {/* Río dorado */}
      <div className="golden-river">
        <div className="golden-wave"></div>
        <div className="golden-wave"></div>
        <div className="golden-wave"></div>
        <div className="golden-wave"></div>
      </div>

      {/* Partículas doradas */}
      <div className="golden-particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="decorative-dots">
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>
        <div className="dot"></div>

        <div className="star">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>
        </div>
        <div className="star">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>
        </div>
        <div className="star">
          <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>
        </div>
        <div className="star">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>
        </div>
        <div className="star">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>
        </div>
        <div className="star">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>
        </div>
        <div className="star">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
              fill="#FFD700"
            />
          </svg>
        </div>

        <div className="golden-accent"></div>
        <div className="golden-accent"></div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4rem",
          maxWidth: "1200px",
          margin: "0 auto",
          position: "relative",
          zIndex: 15,
        }}
      >
        <div style={{ flex: 1, textAlign: "left" }}>
          <h1
            style={{
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 700,
              marginBottom: "2rem",
              textShadow: "3px 3px 6px rgba(0, 0, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3)",
              lineHeight: 1.1,
              letterSpacing: "1px",
              textAlign: "left",
              color: "white",
            }}
          >
            ¡Hola! Soy Sebastian
          </h1>

          <p
            style={{
              textAlign: "left",
              maxWidth: "600px",
              fontSize: "1.3rem",
              lineHeight: 1.7,
              opacity: 0.95,
              letterSpacing: "0.5px",
            }}
          >
            Estudiante de Ingeniería de Software enfocado en las <strong>experiencias de usuario</strong> y{" "}
            <strong>desarrollo de interfaces intuitivas</strong>. Me estoy especializando en planificar y presentar software que
            priorice la experiencia del usuario, combinando funcionalidad con buenas prácticas.
          </p>
        </div>

        <div style={{ flex: "0 0 300px", position: "relative", zIndex: 20 }}>
          <div
            style={{
              position: "relative",
              width: "300px",
              height: "300px",
              borderRadius: "50%",
              overflow: "hidden",
              border: "4px solid var(--accent-gold)",
              boxShadow: "0 0 30px rgba(255, 215, 0, 0.4)",
              zIndex: 20,
            }}
          >
            <Image src="/foto_1.jpg" alt="Sebastian Ramos Toro" fill style={{ objectFit: "cover" }} priority />
          </div>
        </div>
      </div>

      <div className="sr-signature">SR</div>
    </section>
  )
}
