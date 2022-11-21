/* eslint-disable react/button-has-type */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

import "../css/Nav.css";

function Nav() {
  const [showlinks, setShowLinks] = useState(false);

  return (
    <nav className={`navbar ${showlinks ? "show_nav" : "hidden_nav"}`}>
      <div className="navbar_logo">
        <Link to="/" className="nav_log">
          <img src={logo} className="nav_logo" alt="logo" />
        </Link>
      </div>
      <ul className="navbar_links">
        <li className="navbar_item">
          <Link
            to="/"
            className="navbar_link"
            onClick={() => setShowLinks(!showlinks)}
          >
            Accueil
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/"
            className="navbar_link"
            onClick={() => setShowLinks(!showlinks)}
          >
            Activités
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/"
            className="navbar_link"
            onClick={() => setShowLinks(!showlinks)}
          >
            Tourisme
          </Link>
        </li>
        <li className="navbar_item">
          <Link
            to="/"
            className="navbar_link"
            onClick={() => setShowLinks(!showlinks)}
          >
            Vos Démarches
          </Link>
        </li>
      </ul>
      <button
        className="navbar_burger"
        onClick={() => setShowLinks(!showlinks)}
      >
        <span className="burger_bar" />
      </button>
    </nav>
  );
}

export default Nav;
