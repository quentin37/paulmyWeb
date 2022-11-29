import React from "react";
import { Link } from "react-router-dom";

import "../css/demarche.css";

export default function Conseil() {
  return (
    <section>
      <div className="allProject">
        <div className="cardProject">
          <h3> Le mot du Maire </h3>
          <p className="describe">
            Chers amis,
            <br />
            C’est avec un grand plaisir que je vous présente le nouveau site
            internet de notre commune ou vous trouverez l’ensemble des
            informations concernant notre très beau village...
          </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3>L'équipe municipale </h3>
          <p className="describe">
            Retrouver tout l'équipe municipale en cliquant ci-dessous
          </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3>Séances du Conseil municipal </h3>
          <p className="describe"> ⚠️prochainement⚠️ </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3> Commissions municipales </h3>
          <p className="describe">
            <strong>1- Finance </strong>
            <br />
            Membres : Dominique FRÊLON, Jérôme LOUAULT, Gladys MORVAN, Elodie
            LETURGEON, Etienne DROUOT <br />
            <strong>2- Marché Publique</strong> ...
          </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3> Commissions intercommunales </h3>
          <p className="describe"> </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3> Bulletin municipal </h3>
          <p className="describe">
            <a
              className="bulletin"
              title="Bulletin municipal 2022 | Mairie de Paulmy"
              href="https://www.paulmy.fr/medias/LA_COMMUNE/BULLETIN_MUNICIPAL/Bulletin-Paulmy-2022-web.pdf"
            >
              Voir le Bulletin Municipal 2022
            </a>
            <br />
            <br />
            <a
              className="bulletin"
              title="Bulletin municipal 2022 | Mairie de Paulmy"
              href="https://www.paulmy.fr/medias/bulletin/Bulletin-Paulmy-2021.pdf"
            >
              Voir le Bulletin Municipal 2021
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
