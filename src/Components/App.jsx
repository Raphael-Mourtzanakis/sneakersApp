import {useState} from "react";
import Banner from "./Banner";
import ShoppingList from "./ShoppingList";
import Cart from "./Cart";
import "../styles/App.css";

function App() {
  const [cart, setCart] = useState([]);
  /*const addToCart = (sneaker) => {

  }*/
  return (
    <>
      < Banner />
      < ShoppingList />
    </>
  );
}

export default App;