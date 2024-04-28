import styles from "./Cart.module.css";

export function Cart({ className }) {
  return (
    <div className={styles.openedCart}>
      <div>
        <h2>Your cart: 4 items</h2>
        <button>X</button>
      </div>
      <div>
        <p>
          Apple, <span>Quantity: 2</span>
        </p>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div>
        <p>
          Peach, <span>Quantity: 4</span>
        </p>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div>
        <p>
          Watermelon, <span>Quantity: 1</span>
        </p>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div>
        <p>
          Lemon, <span>Quantity: 10</span>
        </p>
        <div>
          <button>+</button>
          <button>-</button>
        </div>
      </div>
      <div className={styles.checkout}>
        <h3>Price: 34$</h3>
        <div>
          {" "}
          <button>Checkout</button>
          <button>Clear</button>
        </div>
      </div>
    </div>
  );
}
