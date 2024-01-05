import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="navbar is-fixed-top ">
      <div className="navbar-brand">
        <a className="navbar-item">Javier A. Mora</a>
        <div
          className={`navbar-burger ${open && "is-active"}`}
          data-target="navbarExampleTransparentExample"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div
        id="navbarExampleTransparentExample"
        className={`navbar-menu ${open && "is-active"}`}
      >
        <div className="navbar-end">
          <a className="navbar-item" href="#home">
            Inicio
          </a>
          <a className="navbar-item" href="#about">
            Sobre mí
          </a>
          <a className="navbar-item" href="#work">
            Portafolio
          </a>
          <a className="navbar-item" href="#experience">
            Experiencia
          </a>
          <a className="navbar-item" href="#contact">
            Contacto
          </a>
          <a
            className="navbar-item"
            href="https://github.com/j4viermora"
            target="_blank"
          >
            Github
          </a>
          <Link href="/blog" className="navbar-item">
            Blog
          </Link>
        </div>
      </div>
    </nav>
  );
};
