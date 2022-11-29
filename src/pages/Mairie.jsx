import React from "react";

import "../css/mairie.css";

export default function Mairie() {
  return (
    <div className="mairie">
      <div className="carteMairie">
        <h3>Horaires d'ouverture de la mairie</h3>
        <div className="center">
          <p className="time">
            <strong> Lundi </strong> : 10h-12h30 14h30-17h30
            <br />
            <strong> Mardi </strong> : 10-12h30 14h30-17h30
            <br />
            <strong> Mercredi </strong>: Fermeture
            <br />
            <strong> Jeudi </strong> : 10h-12h
            <br />
            <strong> Vendrtedi </strong> : 10h-14h
          </p>
        </div>
        <i>
          Rendez-vous possible avec Monsieur le Maire le mardi matin ou le jeudi
          après-midi. <br />
          Contactez le secrétariat au 02 47 59 66 64
        </i>
      </div>
      <div className="carteMairie">
        <h3> Le personnel municipal</h3>
        <div>
          <p>
            Mme Angélique THÉAUDIÈRE <br />
            <strong> Secrétaire de mairie </strong>
          </p>
        </div>
        <div>
          <p>
            M. Laurent NONET <br />
            <strong>
              Agent technique <br /> (extérieur, espaces verts, ...)
            </strong>
          </p>
        </div>
        <div>
          <p>
            Mme Eliane JOULIN <br />
            <strong>
              Agent technique <br /> (entretien, garderie)
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}
