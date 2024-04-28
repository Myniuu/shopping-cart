import styles from "./Card.module.css";

export function Card({ name, pic, price, onClick }) {
  return (
    <div className={styles.card}>
      <h2>{name}</h2>
      <p>{pic}</p>
      <span>Price: {price}$</span>
      <button onClick={onClick}>Add to cart</button>
    </div>
  );
}
