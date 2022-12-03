import React from "react";

import "../css/tourisme.css";
import "../css/demarche.css";

export default function Tourisme() {
  return (
    <div className="allProject">
      <div className="cardProject">
        <h3> Circuit touristique </h3>
        <p className="describe">
          <h3>Avec plan de départ :&nbsp;</h3>
          <ul className="ulTourist">
            <li>Le Chatelier</li>
            <li>Le Dolmen</li>
            <li>La Grotte</li>
            <li>Le Château de Paulmy</li>
            <li>L'église</li>
          </ul>
        </p>
      </div>
      <div className="cardProject">
        <h3> Hébergement touristique</h3>
        <p className="describe">
          ⚠️ Une liste d'hébergement vous sera bientôt proposée.
        </p>
      </div>
      <div className="cardProject">
        <h3> Office de toursime </h3>
        <p className="describe">⚠️ L'office de tourisme arrive</p>
      </div>
    </div>
  );
}
