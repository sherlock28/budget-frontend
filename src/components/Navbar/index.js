import React from "react";

/* ------- HOOKS ------- */
import { Link } from "wouter";
import { useUser } from "hooks/useUser";

/* ------- LIBS ------- */
import { getUserFromToken } from 'libs/libs';

export default function Navbar() {
  
  const { isLogged, jwt, signOut } = useUser();

  const handleClick = () => {
    signOut({jwt});
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/home">
            App
          </Link>
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
              {!isLogged && (
                <>
                  <li className="nav-item active">
                    <Link to="/" className="nav-link">
                      Registrarse
                    </Link>
                  </li>
                  <li className="nav-item active">
                    <Link to="/login" className="nav-link">
                      Iniciar sesión
                    </Link>
                  </li>
                </>
              )}
              {isLogged && (
                <>
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
                </>
              )}
            </ul>
            {isLogged && (
              <div className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle px-0 text-secondary"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  {getUserFromToken(jwt).email}
                </div>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <button onClick={handleClick} className="dropdown-item">
                    Cerrar sesión
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
