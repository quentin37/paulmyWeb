import fb from "../assets/Facebook_icon.png";

export default function Actu() {
  return (
    <div className="mairie">
      <div className="carteMairie">
        <h2>L'agenda de Paulmy</h2>
        <p>
          Vous trouverez ici le futur agenda de la ville de
          <strong> Paulmy </strong>
        </p>
      </div>
      <div className="carteMairie">
        <h2>En attendant :</h2>
        <p>Vous pouvez trouvez toute les actualités sur notre page Facebook</p>
        <a href="https://www.facebook.com/mairiepaulmy">
          <img src={fb} className="nav_logo" alt="logo" />{" "}
        </a>
      </div>
    </div>
  );
}
