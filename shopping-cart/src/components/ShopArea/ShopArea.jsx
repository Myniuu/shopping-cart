import styles from "./ShopArea.module.css";

export function ShopArea({ children }) {
  return <div className={styles.shopArea}>{children}</div>;
}
