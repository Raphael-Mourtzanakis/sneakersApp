import CustomerReview from "./CustomerReview";
import '../styles/SneakerItem.css';
import { useState } from "react"; // Import du hook useState

function SneakerItem({nom, marque, prix, style, esthetique, confort, image, bestSeller}) {
  const prixFormate = prix + " €";  // OK : creation d'une nouvelle variable
  const nomMajuscule = nom.toUpperCase();  // OK : transformation locale
  const formatReview = (reviewType, scaleValue) => {
        const scaleType = reviewType === "Confort" ? "😌": "💖";
        const icons = scaleType.repeat(scaleValue);
        return `${reviewType} : ${icons} (${scaleValue}/5)`;
    }
  const handleToggleAvis = () => {
    setShowReviews(!showReviews); // Inverse l'état d'affichage
  }
  const [showReviews, setShowReviews] = useState(false); // État pour gérer l'affichage des avis+
  return (
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
          <button className="avis-button" onClick={handleToggleAvis} style={{cursor:"pointer"}}>
            {showReviews ? "Masquer les avis" : "Afficher les avis"}
          </button>
          {showReviews && (
            <div className = "avis-details">
              <CustomerReview reviewType = "Esthétisme" scaleValue = {esthetique}/>
              <CustomerReview reviewType = "Confort" scaleValue = {confort}/>
            </div>
          )}
        </div>
    </div>
  );
}

export default SneakerItem;