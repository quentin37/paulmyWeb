/* eslint-disable react/button-has-type */
import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import allLogo from "../assets/allLogo.png";
import acti from "../assets/actualites.png";
import tour from "../assets/tourisme.png";
import dem from "../assets/demarches.png";
import cow from "../assets/cowboi.png";

import "../css/Nav.css";

function Nav() {
  const [showlinks, setShowLinks] = useState(false);

  return (
    <nav className={`navbar ${showlinks ? "show_nav" : "hidden_nav"}`}>
      <div className="navbar_logo">
        <Link to="/" className="nav_log">
          <img src={logo} className="nav_logo" alt="logo" />
        </Link>
        <img src={allLogo} className="nav_logo" alt="logo" />
      </div>
      <ul className="navbar_links">
        <Link
          to="/far-ouestival"
          className="navbar_link"
          onClick={() => setShowLinks(!showlinks)}
        >
          <li className="navbar_item">
            <div className="navbar_link">
              <div>
                <img src={cow} className="logo" alt="logo" />
              </div>
              <div>Far-ouestival</div>
            </div>
          </li>
        </Link>
        <Link
          to="/actualités"
          className="navbar_link"
          onClick={() => setShowLinks(!showlinks)}
        >
          <li className="navbar_item">
            <div className="navbar_link">
              <div>
                <img src={acti} className="logo" alt="logo" />
              </div>
              <div>Actualités</div>
            </div>
          </li>
        </Link>
        <Link
          to="/tourisme"
          className="navbar_link"
          onClick={() => setShowLinks(!showlinks)}
        >
          <li className="navbar_item">
            <div className="navbar_link">
              <div>
                <img src={tour} className="logo" alt="logo" />
              </div>
              <div>Tourisme</div>
            </div>
          </li>
        </Link>
        <Link
          to="/demarche"
          className="navbar_link"
          onClick={() => setShowLinks(!showlinks)}
        >
          <li className="navbar_item">
            <div className="navbar_link">
              <div>
                <img src={dem} className="logo" alt="logo" />
              </div>
              <div>Vos Démarches</div>
            </div>
          </li>
        </Link>
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
