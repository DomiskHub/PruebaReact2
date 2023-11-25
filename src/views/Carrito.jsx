import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Carrito() {
  const { cartItems, removeQuantityFromCart, addQuantityToCart, deleteFromCart } = useContext(GlobalContext);

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart-container">
      <h3>Carrito</h3>
      <div>
        {cartItems.map((item) => (
          <div className="cart-text" key={item.id}>
            {item.name} - ${item.price} - Cantidad: {item.quantity}
            <button onClick={() => addQuantityToCart(item.id)}>Agregar</button>
            <button onClick={() => removeQuantityFromCart(item.id)}>Restar</button>
            <button onClick={() => deleteFromCart(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>

      <h3>Resumen de orden</h3>
      <div>
        {cartItems.map((item) => (
          <div key={item.id}>
            <p className="cart-text">
              {item.name} - ${item.price * item.quantity}
            </p>
          </div>
        ))}
        <p>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
}

export default Carrito;
