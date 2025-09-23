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
function SneakerItem({nom, marque, prix, style, esthetique, confort}) {
  const prixFormate = prix + " €";  // OK : creation d'une nouvelle variable
  const nomMajuscule = nom.toUpperCase();  // OK : transformation locale
  return (
    <div id="sneaker-list" >
        <div className="sneaker-item">
          <h3>{nomMajuscule}</h3>
          <p className="sneaker-brand">{marque}</p>
          <p className="sneaker-price">{prixFormate}</p>
          <p className="sneaker-style">{style}</p>
        </div>
    </div>
      );
  }

export default SneakerItem;