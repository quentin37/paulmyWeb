import React from "react";

import "../css/tourisme.css";

export default function Tourisme() {
  return (
    <div className="toursime">
      <div className="carte">
        <h2 className="title">Circuit Touristique</h2>
        <p>⚠️ Les circuits touristiques vous seront bientôt proposés.</p>
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
