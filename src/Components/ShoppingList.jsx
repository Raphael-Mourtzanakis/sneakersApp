import { sneakersList } from '../datas/sneakersList';
import SneakerItem from './SneakerItem';
import '../styles/ShoppingList.css';

function ShoppingList({onAddToCart}) {
    return (
      <div className="shopping-list">
        <h2>Nos Sneakers (Mourtzanakis Raphaël)</h2>
        <div className="sneakers-grid">
          {sneakersList.map((sneaker) => (
            <SneakerItem
              key={sneaker.id}          // ID
              sneakerData={sneaker}     // Props
              onAddToCart={onAddToCart} // Panier
            />
          ))}
        </div>
      </div>
    )
}

export default ShoppingList