import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SearchComponent } from "../SearchComponent";

export const NavbarBlog = () => {
  const [open, setOpen] = useState<boolean>(false);
  const router = useRouter();
  const goBack = () => {
    router.back();
  };

  return (
    <nav className="navbar is-fixed-top is-transparent">
      <div className="navbar-brand">
        <Link href="/" className="navbar-item">
          Javier Mora
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
          <Link href="/" className="navbar-item">
            Inicio
          </Link>
          <Link href="/blog" className="navbar-item">
            Blog
          </Link>
          <a
            href="https://github.com/j4viermora"
            className="navbar-item"
            target="_blank"
          >
            Github
          </a>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <SearchComponent />
          </div>
        </div>
      </div>
    </nav>
  );
};
