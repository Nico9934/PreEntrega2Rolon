import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "./CarritoProvider";
import Cart from "./Cart";
import ItemCount from "./ItemCount";



const ItemDetail = ({ producto }) => {
  const { name, description, img, stock } = producto;
  const [cantidad, setCantidad] = useState(1);

  const { addProduct } = useCarrito();

  return (
    <div className="detail">
      <div className="detail__img">
        <img src={img} />
      </div>

      <div className="detail__contain">
        <div className="detail__text">
          <h3 className="detail__title">{name}</h3>
          <p className="detail__description">{description}</p>

          <div className="card__buttons">
            <ItemCount
              cantidad={cantidad}
              setCantidad={setCantidad}
              stock={stock}
            ></ItemCount>
            {stock === 0 ? (
              <button disabled className="card__button__disabled">
                Agregar
              </button>
            ) : (
              <Link 
                to={"/cart"} 
                element={<Cart />}
                className="card__button"
                onClick={() => addProduct({ ...producto, cantidad })}
                >
                  Agregar
              </Link>
            )}
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
