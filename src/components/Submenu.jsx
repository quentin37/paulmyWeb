import React from "react";
import { Link } from "react-router-dom";

import "../css/submenu.css";

export default function Submenu() {
  return (
    <div className="subMenu">
      <nav>
        <ul id="menu-demo2">
          <li>
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
          <li>
            <Link to="/">La vie à Paulmy</Link>
            <ul>
              <li>
                <Link to="/">Lien sous menu 2</Link>
              </li>
              <li>
                <Link to="/">Lien sous menu 2</Link>
              </li>
              <li>
                <Link to="/">Lien sous menu 2</Link>
              </li>
              <li>
                <Link to="/">Lien sous menu 2</Link>
              </li>
            </ul>
          </li>
          <li>
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
    </div>
  );
}
