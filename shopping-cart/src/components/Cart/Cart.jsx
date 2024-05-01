import styles from "./Cart.module.css";

export function Cart({ className, onClick, cartContent }) {
  return (
    <div className={`${styles.openedCart} ${className}`}>
      <div className={`${styles.cartContent} ${className}`}>
        <h2>In cart: 4 items</h2>
        <button onClick={onClick}>X</button>
      </div>
      {cartContent.map((item) => (
        <div key={item.name} className={`${styles.cartContent} ${className}`}>
          <p>
            {item.name}, <span>Quantity: {item.length}</span>
          </p>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      ))}
      <div className={styles.checkout}>
        <h3>Price: 34$</h3>
        <div>
          <button>Checkout</button>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
}
