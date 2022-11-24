import React from "react";
import "../css/footer.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <div className="footer">
      <img src={logo} className="footer_logo" alt="logo" />
      <div className="info">
        <p className="textInfo">
          Mairie de Paulmy <br />1 place de la Mairie <br /> 37350 Paulmy
        </p>
        <a href="https://www.google.com/maps/place/Mairie/@46.9817872,0.8365622,17z/data=!3m1!4b1!4m5!3m4!1s0x47fcefd750048143:0x539528e9898c555e!8m2!3d46.9817763!4d0.8391421">
          <button type="button" className="footerBtn">
            Plan d'accès
          </button>
        </a>
      </div>
      <div className="yellow" />
      <div className="info">
        <p className="textInfo">
          02 47 59 66 64 <br /> paulmy.mairie@wanadoo.fr
        </p>
        <Link to="/contact">
          <button type="button" className="footerBtn">
            Contact
          </button>
        </Link>
      </div>
      <div className="yellow" />
      <div className="info">
        <p className="textInfo">
          Lundi : 10h-12h30 14h30-17h30
          <br />
          Mardi : 10-12h30 14h30-17h30
          <br />
          Mercredi : Fermeture
          <br />
          Jeudi : 10h-12h
          <br />
          Vendredi : 10h-14h
        </p>
      </div>
      <div className="yellow" />
      <div className="info">
        <button type="button" className="mentionBtn">
          Mentions légales
        </button>
        <br />
        <button type="button" className="mentionBtn">
          Données personnelles
        </button>
      </div>
    </div>
  );
}

export default Footer;
