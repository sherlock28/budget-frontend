import React from "react";
import { Link } from 'wouter';

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
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
              <Link to="/" className="nav-link">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/agregar" className="nav-link">Agregar operación</Link>
            </li>
            <li className="nav-item">
              <Link to="/operaciones" className="nav-link">Operaciones</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
