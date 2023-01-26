import React from "react";
import { useCarrito } from "./CarritoProvider";
import CartListItem from "./CartListItem";

const Cart = () => {

  const {cartItems,resetCart, precioTotal} = useCarrito()

  return (
    <div className="cart">
      <div className="container">
        <h3 className="cart__title">Carrito de compras</h3>
        <div className="cart__container">
          <div className="table">
            <div className="table__head">
                <div className="head__title"></div>
                <p className="head__title">Producto</p>
                <p className="head__title">Precio</p>
                <p className="head__title">Cantidad</p>
                <p className="head__title">Subtotal</p>
                <p className="head__title"></p>
            </div>

            {cartItems.map( product => {
              return <CartListItem
                key={product.id}
                product={product}
              />
            })}
      
            <div className="table__total">
              <p>
                Total: <span>${precioTotal}</span>
              </p>
              <button onClick={resetCart}>Limpiar Carrito</button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Cart;
