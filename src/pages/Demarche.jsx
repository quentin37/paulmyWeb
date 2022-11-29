import React from "react";
import { Link } from "react-router-dom";

import "../css/demarche.css";

export default function Demarche() {
  return (
    <section>
      <div className="allProject">
        <div className="cardProject">
          <h3> Etat civil / Cimetières </h3>
          <p className="describe">
            La demande d'extrait d'acte de naissance se fait auprès de la mairie
            du lieu de naissance, les extraits d'acte de mariage sont délivrés
            par la mairie du lieu de mariage, et les extraits d'acte de décès
            sont délivrés par la mairie du lieu de décès ou du domicile du
            défunt...
          </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3>Papier d'identité </h3>
          <p className="describe">
            Pour demander une carte nationale d'identité, les pièces
            justificatives nécessaires dépendent de la situation : majeur ou
            mineur, première demande ou renouvellement, possession (ou non) d'un
            passeport...
          </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3>Election </h3>
          <p className="describe">
            Pour participer aux élections politiques, il faut être inscrit sur
            les listes électorales. L'inscription est automatique pour les
            jeunes de 18 ans (sous certaines conditions), ainsi que pour les
            personnes obtenant la nationalité française après 2018...
          </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3> Urbanisme / Foncier </h3>
          <p className="describe">
            Le permis de construire est une autorisation d'urbanisme délivrée
            par la mairie de la commune où se situe votre projet. Il concerne
            les constructions nouvelles, même sans fondation, de plus de 20 m²
            de surface de plancher ou d'emprise au sol...
          </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3> Recensement </h3>
          <p className="describe">
            Dans les trois mois qui suivent leur 16e anniversaire, tous les
            jeunes français, garçons et filles, doivent se faire recenser à la
            mairie de leur domicile ou au consulat s’ils résident à
            l’étranger...
          </p>
          <Link to="/">
            <button className="enSavoirPlus" type="button">
              En savoir plus
            </button>
          </Link>
        </div>
        <div className="cardProject">
          <h3> ESIEL </h3>
          <p className="describe">
            Coordonnées du S.I.E.L (Syndicat Intercommunal d'Electricité d'Indre
            et Loire) <br /> 12 rue Blaise Pascal,
            <br /> BP5949,
            <br /> 37059 TOURS Cedex
            <br /> Tel : 02 47 31 68 68
          </p>
        </div>
      </div>
    </section>
  );
}
