import React from "react";
import { Link } from "react-router-dom";

import "../css/submenu.scss";

export default function Submenu() {
  return (
    <nav role="navigation" className="primary-navigation">
      <ul>
        <li>
          <Link to="/">La Commune ▼</Link>
          <ul className="dropdown">
            <li>
              <Link to="/">La mairie</Link>
            </li>
            <li>
              <Link to="/">Vos démarches et services</Link>
            </li>
            <li>
              <Link to="/">Le Conseil Municipal</Link>
            </li>
            <li>
              <Link to="/">Cérémonie patriotique</Link>
            </li>
            <li>
              <Link to="/">Les salles communales</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">La vie à Paulmy ▼</Link>
          <ul className="dropdown">
            <li>
              <Link to="/">Enface et vie scolaire </Link>
            </li>
            <li>
              <Link to="/"> Action sociale et solidarité</Link>
            </li>
            <li>
              <Link to="/">Propreté et cadre de vie </Link>
            </li>
            <li>
              <Link to="/">Vie associative </Link>
            </li>
            <li>
              <Link to="/">Santé </Link>
            </li>
            <li>
              <Link to="/">Logement </Link>
            </li>
            <li>
              <Link to="/">Vie économique </Link>
            </li>
            <li>
              <Link to="/">Transport </Link>
            </li>
            <li>
              <Link to="/">SDIS </Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to="/">Le tourisme a Paulmy ▼</Link>
          <ul className="dropdown">
            <li>
              <Link to="/tourisme">Circuit touristique </Link>
            </li>
            <li>
              <Link to="/">⚠️prochainement⚠️ </Link>
            </li>
            <li>
              <Link to="/">Office du tourisme </Link>
            </li>
            <li>
              <Link to="/">hébergement touristique </Link>
            </li>
            <li>
              <Link to="/">Village fleuri </Link>
            </li>
            <li>
              <Link to="/">Plan d'eau </Link>
            </li>
            <li>
              <Link to="/">Tennis </Link>
            </li>
            <li>
              <Link to="/">Brocante annuelle </Link>
            </li>
            <li>
              <Link to="/">Chemin de randonnées </Link>
            </li>
            <li>
              <Link to="/">Boucles vélo / voie verte </Link>
            </li>
            <li>
              <Link to="/">Marché régionaux </Link>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
}

/* <div className="subMenu">
<nav>
  <ul id="menu-demo2">
    <li className="subUl">
      <Link to="/">La commune</Link>
      <ul>
        <li>
          <Link to="/">lien sous menu 1</Link>
        </li>
        <li>
          <Link to="/">lien sous menu 1</Link>
        </li>
        <li>
          <Link to="/">lien sous menu 1</Link>
        </li>
        <li>
          <Link to="/">lien sous menu 1</Link>
        </li>
      </ul>
    </li>
    <li className="subUl1">
      <Link to="/">La commune</Link>
      <ul>
        <li>
          <Link to="/">lien sous menu 1</Link>
        </li>
        <li>
          <Link to="/">lien sous menu 1</Link>
        </li>
        <li>
          <Link to="/">lien sous menu 1</Link>
        </li>
        <li>
          <Link to="/">lien sous menu 1</Link>
        </li>
      </ul>
    </li>
    <li className="subUl2">
      <Link to="/">Le tourisme à Paulmy</Link>
      <ul>
        <li>
          <Link to="/">Lien sous menu 3</Link>
        </li>
        <li>
          <Link to="/">Lien sous menu 3</Link>
        </li>
        <li>
          <Link to="/">Lien sous menu 3</Link>
        </li>
        <li>
          <Link to="/">Lien sous menu 3</Link>
        </li>
      </ul>
    </li>
  </ul>
</nav>
</div> */
