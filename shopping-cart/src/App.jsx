import { useState } from "react";
import styles from "./App.module.css";
import { Heading } from "./components/Heading/Heading";
import { ShopArea } from "./components/ShopArea/ShopArea";
import { Card } from "./components/Card/Card";
import { Cart } from "./components/Cart/Cart";
import { ProductList } from "./components/ProductList/ProductList";

export function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartContent, setCartContent] = useState([]);

  function handleOpenCartClick() {
    setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
  }

  function addNewItemToCart(item) {
    setCartContent((prevCartContent) => [...prevCartContent, item]);
    console.log(cartContent);
  }

  return (
    <>
      {isCartOpen && (
        <Cart cartContent={cartContent} onClick={() => setIsCartOpen(false)} />
      )}
      <Heading onClick={handleOpenCartClick} />
      <ShopArea>
        {ProductList.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            pic={card.pic}
            price={card.price}
            onClick={() => addNewItemToCart(card)}
          />
        ))}
      </ShopArea>
    </>
  );
}
