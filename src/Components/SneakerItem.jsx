/**
function SneakerItem(props) {
  return (
    <div id="sneaker-list" >
        <div className="sneaker-item">
            <h3>{props.nom}</h3>
            <p>Marque: {props.marque}</p>
            <p>Prix: {props.prix} €</p>
            <p>Style: {props.style}</p>
        </div>
    </div>
  );
}
**/

import CustomerReview from "./CustomerReview";
import '../styles/SneakerItem.css';
import imageJordan from "../assets/airJordan.jpg";
import imageChuckTaylor from "../assets/chuckTaylor.jpg";
import imageBasketsPatch from "../assets/basketsPatch.jpg";

function SneakerItem({nom, marque, prix, style, esthetique, confort}) {
  const prixFormate = prix + " €";  // OK : creation d'une nouvelle variable
  const nomMajuscule = nom.toUpperCase();  // OK : transformation locale
  let image = ""                                                            // Ne pas afficher d'image si le sneaker n'en a pas
  if (nom == "Air Jordan 4 RM") {                                           // Si le sneaker en question est la Jordan
    image = <img src={imageJordan} className="sneaker-image"></img>             // Afficher l'image de la Jordan
  } else if (nom == "Chuck Taylor All Star Lift") {                         // Si le sneaker en question est la Chuck Taylor
    image = <img src={imageChuckTaylor} className="sneaker-image"></img>        // Afficher l'image de la Chuck Taylor
  } else if (nom == "Baskets à Patch Logo") {                               // Si le sneaker en question est la Baskets à Patch
    image = <img src={imageBasketsPatch} className="sneaker-image"></img>       // Afficher l'image des Baskets à Patch
  }
  return (
    <div id="sneaker-list" >
        <div className="sneaker-item">
          {image}
          <h3>{nomMajuscule}</h3>
          <p>{marque}</p>
          <p>{prixFormate}</p>
          <p>{style}</p>
          <div className="sneaker-review">
            <CustomerReview reviewType="esthétisme" scaleValue={esthetique}/>
            <CustomerReview reviewType="confort" scaleValue={confort}/>
          </div>
        </div>
    </div>
      );
  }

export default SneakerItem;