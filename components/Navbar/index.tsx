import React, { useState } from "react";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="navbar is-fixed-top is-transparent ">
      <div className="navbar-brand">
        <Link href="/">
          <a className="navbar-item">Jonathan Alejos</a>
        </Link>
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
            Hola
          </a>
          <a className="navbar-item" href="#about">
            Conóceme
          </a>
          <a className="navbar-item" href="#work">
            Mi trabajo
          </a>
          <a className="navbar-item" href="#contact">
            Contacto
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              {/* <a
                href="https://github.com/j4viermora"
                className="button is-link mr-3"
                target="_blank"
                download
              >
                Descarga mi CV
              </a> */}
              <Link href="/blog">
                <a className="button">Mi Blog</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
