"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <nav className="nav">
          <div className="logo">{"<SR.ramos>"}</div>
          <ul className="nav-links">
            <li>
              <a
                href="#inicio"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("inicio")
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#sobre-mi"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("sobre-mi")
                }}
              >
                Sobre Mí
              </a>
            </li>
            <li>
              <a
                href="#habilidades"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("habilidades")
                }}
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#experiencia"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("experiencia")
                }}
              >
                Experiencia
              </a>
            </li>
            <li>
              <a
                href="#proyectos"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("proyectos")
                }}
              >
                Proyectos
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection("contacto")
                }}
              >
                Contacto
              </a>
            </li>
          </ul>
          <button
            className="mobile-menu-button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("inicio")
              }}
            >
              Inicio
            </a>
          </li>
          <li>
            <a
              href="#sobre-mi"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("sobre-mi")
              }}
            >
              Sobre Mí
            </a>
          </li>
          <li>
            <a
              href="#habilidades"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("habilidades")
              }}
            >
              Habilidades
            </a>
          </li>
          <li>
            <a
              href="#experiencia"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("experiencia")
              }}
            >
              Experiencia
            </a>
          </li>
          <li>
            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("proyectos")
              }}
            >
              Proyectos
            </a>
          </li>
          <li>
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault()
                scrollToSection("contacto")
              }}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </>
  )
}
