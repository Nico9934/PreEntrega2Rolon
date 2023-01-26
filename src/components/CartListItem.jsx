import React from "react";
import { useState } from "react";
import { useCarrito } from "./CarritoProvider";


const CartListItem = ({product}) => {

  const {name, price, kg, categoria, img, stock, id, cantidad } = product

  const {removeProduct} = useCarrito()

  return (
    <div className="table__product">
      <img className="table__img" src={img} alt={`Imagen de ${name}`}/>
      <p className="table__title">{name}</p>
      <p className="table__price">${price}</p>
      <p className="table__count">{cantidad}</p>
      <p className="table__subtotal">${price * cantidad}</p>
      <p className="table__remove" onClick={() => removeProduct(product)}>X</p>
    </div>
  );
};

export default CartListItem;
