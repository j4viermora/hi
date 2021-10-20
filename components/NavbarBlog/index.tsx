import React, { useState } from "react";
import Link from "next/link";

export const NavbarBlog = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <nav className="navbar is-fixed-top is-transparent">
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
          <a className="navbar-item" href="#">
            Blog
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="field is-grouped">
              {/* <a
                href="https://github.com/j4viermora"
                className="button mr-3"
                target="_blank"
              >
                Github
              </a> */}
              <Link href="/">
                <a className="button is-link">Volver</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
