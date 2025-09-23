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
import '../styles/ShoppingItem.css';

function SneakerItem({nom, marque, prix, style, esthetique, confort}) {
  const prixFormate = prix + " €";  // OK : creation d'une nouvelle variable
  const nomMajuscule = nom.toUpperCase();  // OK : transformation locale
  return (
    <div id="sneaker-list" >
        <div className="sneaker-item">
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