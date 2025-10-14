import {useState} from "react";
import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import "../styles/App.css";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (sneaker) => {
    setCart(prevCart => {
      // Vérifier si le produit existe déjà
      const existingItem = prevCart.find(item => item.id === sneaker.id);
      if (existingItem) {
        // Augmenter la quantité
        return prevCart.map(item =>
          item.id === sneaker.id
            ? {...item, quantity: item.quantity + 1}
            : item
        );
      } else {
        // Ajouter nouveau produit avec quantité 1
        return [...prevCart, {...sneaker, quantity: 1}];
      }
    });
  };
  return (
    <>
      < Banner />
      < ShoppingList />
    </>
  );
}

export default App;