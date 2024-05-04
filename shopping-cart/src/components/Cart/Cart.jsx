import styles from "./Cart.module.css";

export function Cart({ className, onClick, cartContent, setCartContent }) {
  const handleUpdateQuantity = (item, action) => {
    let updatedCartContent;
    if (action === "decrease" && item.quantity === 1) {
      updatedCartContent = cartContent.filter(
        (cartItem) => cartItem.name !== item.name
      );
    } else {
      updatedCartContent = cartContent.map((cartItem) => {
        if (cartItem.name === item.name) {
          return {
            ...cartItem,
            quantity:
              action === "increase"
                ? cartItem.quantity + 1
                : cartItem.quantity - 1,
          };
        }
        return cartItem;
      });
    }
    setCartContent(updatedCartContent);
  };

  const totalPrice = cartContent.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  function checkoutItems() {
    alert("Thank you for your purchase!");
    setCartContent([]);
  }

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
            <button onClick={() => handleUpdateQuantity(item, "increase")}>
              +
            </button>
            <button onClick={() => handleUpdateQuantity(item, "decrease")}>
              -
            </button>
          </div>
        </div>
      ))}
      <div className={styles.checkout}>
        <h3>Price: {totalPrice} $</h3>
        <div>
          <button onClick={checkoutItems}>Checkout</button>
          <button onClick={() => setCartContent([])}>Clear</button>
        </div>
      </div>
    </div>
  );
}
