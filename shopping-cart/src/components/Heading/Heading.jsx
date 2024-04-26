import styles from "./Heading.module.css";

export function Heading() {
  return (
    <div className={styles.heading}>
      <h1>Shop</h1>
      <button className={styles.cartBtn}>Your Cart</button>
    </div>
  );
}
