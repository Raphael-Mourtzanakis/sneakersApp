import { sneakersList } from '../datas/sneakersList';
import SneakerItem from './SneakerItem';
import '../styles/ShoppingList.css';

function ShoppingList() {
    return (
        /**
        <div>
            <ul>
                {sneakersList.map((sneaker) => (
                    <li key={sneaker.id}>{sneaker.nom}</li>
                ))}
            </ul>
        </div>
        **/

      <div className="shopping-list">
      <h2>Nos Sneakers (Mourtzanakis Raphaël)</h2>
      <div className="sneakers-grid">
        {sneakersList.map((sneaker) => (
          <SneakerItem
            key={sneaker.id}
            nom={sneaker.nom}               // Props "nom" passée à l'enfant
            marque={sneaker.marque}         // Props "marque" passée à l'enfant
            prix={sneaker.prix}             // Props "prix" passée à l'enfant
            style={sneaker.style}           // Props "style" passée à l'enfant
            esthetique={sneaker.esthetique} // Props "esthetique" passée à l'enfant
            confort={sneaker.confort}       // Props "confort" passée à l'enfant
            image={sneaker.image}           // Props "image" passée à l'enfant
            bestSeller={sneaker.bestSeller} // Props "bestSeller" passée à l'enfant
          />
        ))}
      </div>
    </div>
    )
}

export default ShoppingList