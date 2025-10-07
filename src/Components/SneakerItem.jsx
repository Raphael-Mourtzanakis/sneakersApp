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
  const formatReview = (reviewType, scaleValue) => {
        const scaleType = reviewType === "Confort" ? "😌": "💖";
        const icons = scaleType.repeat(scaleValue);
        return `${reviewType} : ${icons} (${scaleValue}/5)`
    }
  const handleClickAvis = () => {
    const esthetismeText = formatReview("Esthétisme", esthetique);
    const confortText = formatReview("Confort", confort);
    alert(`Avis pour ${nom} :\n${esthetismeText}\n${confortText}`);
  }
  return (
    <div id="sneaker-list" >
        <div className={`sneaker-item ${bestSeller ? "best-seller" : ""}`}>
        
            {bestSeller && <span className="best-seller-badge">Top vente</span>} {/* Badge Top vente*/}
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
            <button onClick={handleClickAvis}>Voir les avis</button>
            <CustomerReview reviewType="Esthétisme" scaleValue={esthetique}/>
            <CustomerReview reviewType="Confort" scaleValue={confort}/>
          </div>
      </div>
    </div>
      );
  }

export default SneakerItem;