import React from "react";

/* ------- HOOKS ------- */
import { Link } from "wouter";
import { useUser } from 'hooks/useUser';

export default function Navbar() {

  // eslint-disable-next-line
  const { isLogged } = useUser();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <p className="navbar-brand"></p>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link to="/home" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/agregar" className="nav-link">
                  Agregar operación
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/operaciones" className="nav-link">
                  Operaciones
                </Link>
              </li>
            </ul>
            <div className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle px-0 text-secondary"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Email
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/">
                    Registrarse
                  </Link>
                  <Link className="dropdown-item" to="/login">
                    Iniciar sesión
                  </Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" href="/end">
                    Cerrar sesión
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </>
  );
}
