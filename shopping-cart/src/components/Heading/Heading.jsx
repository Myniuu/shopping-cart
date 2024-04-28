import styles from "./Heading.module.css";

export function Heading({ onClick }) {
  return (
    <div className={styles.heading}>
      <h1>Shop</h1>
      <button onClick={onClick} className={styles.cartBtn}>
        Your Cart
      </button>
    </div>
  );
}
