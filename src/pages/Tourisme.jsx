import React from "react";

import "../css/tourisme.css";

export default function Tourisme() {
  return (
    <div className="toursime">
      <div className="carte">
        <h2 className="title">Circuit touristique</h2>
        <h3>Avec plan de départ :&nbsp;</h3>
        <ul className="ulTourist">
          <li>Le Chatelier</li>
          <li>Le Dolmen</li>
          <li>La Grotte</li>
          <li>Le Château de Paulmy</li>
          <li>L'église</li>
        </ul>
      </div>
      <div className="carte">
        <h2 className="title"> Hébergement touristique</h2>
        <p>⚠️ Une liste d'hébergement vous sera bientôt proposée.</p>
      </div>
      <div className="carte">
        <h2 className="title">Office de toursime</h2>
        <p>⚠️ L'office de tourisme arrive</p>
      </div>
    </div>
  );
}
