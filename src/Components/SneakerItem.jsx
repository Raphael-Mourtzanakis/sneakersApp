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

function SneakerItem({nom, marque, prix, style, esthetique, confort, image, bestSeller}) {
  const prixFormate = prix + " €";  // OK : creation d'une nouvelle variable
  const nomMajuscule = nom.toUpperCase();  // OK : transformation locale
  return (
    <div id="sneaker-list" >
        <div className={bestSeller ? 'sneaker-item best-seller' : 'sneaker-item'}> {/* Si bestSeller est vrai alors dire que c'est une bonne vente, sinon non */}
            {/* Emplacement pour la future image */}
            {bestSeller ? <div className="best-seller-badge">Top vente</div> : ''}
            <img  className="sneaker-image" src={image} alt={nom}/>
          <h3>{nomMajuscule}</h3>
          <div className="sneaker-brand">
            <p>{marque}</p>
          </div>
          <div className="sneaker-price">
            <p>{prixFormate}</p>
          </div>
          <div className="sneaker-style">
            <p>{style}</p>
          </div>
          <div className="sneaker-review">
            <CustomerReview reviewType="esthétisme" scaleValue={esthetique}/>
            <CustomerReview reviewType="confort" scaleValue={confort}/>
          </div>
        </div>
    </div>
      );
  }

export default SneakerItem;