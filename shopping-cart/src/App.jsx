import { useState } from "react";
import styles from "./App.module.css";
import { Heading } from "./components/Heading/Heading";
import { ShopArea } from "./components/ShopArea/ShopArea";
import { Card } from "./components/Card/Card";
import { Cart } from "./components/Cart/Cart";

const arr = [
  { name: "Lemon", pic: "🍋", price: 2 },
  { name: "Peach", pic: "🍑", price: 5 },
  { name: "Apple", pic: "🍎", price: 1.5 },
  { name: "Watermelon", pic: "🍉", price: 8 },
];

export function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Cart className={isCartOpen ? styles.openedCart : styles.active} />
      <Heading
        onClick={() => {
          setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen);
        }}
      />

      <ShopArea>
        {arr.map((card) => (
          <Card
            key={card.name}
            name={card.name}
            pic={card.pic}
            price={card.price}
            onClick={() => alert("It works")}
          />
        ))}
      </ShopArea>
    </>
  );
}
