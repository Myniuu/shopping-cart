import styles from "./Cart.module.css";

export function Cart({ className, onClick, cartContent }) {
  return (
    <div className={`${styles.openedCart} ${className}`}>
      <div className={`${styles.cartContent} ${className}`}>
        <h2>In cart: {cartContent.length} items</h2>
        <button onClick={onClick}>X</button>
      </div>
      {cartContent.map((item) => (
        <div key={item.name} className={`${styles.cartContent} ${className}`}>
          <p>
            {item.name}, <span>Quantity: {item.quantity}</span>
          </p>
          <div>
            <button>+</button>
            <button>-</button>
          </div>
        </div>
      ))}
      <div className={styles.checkout}>
        <h3>
          {`Price: ${cartContent
            .map((item) => item.price)
            .reduce((prev, curr) => prev + curr, 0)}
          $`}
        </h3>
        <div>
          <button>Checkout</button>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
}
