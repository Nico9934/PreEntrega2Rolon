import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "./CarritoProvider";
import ItemCount from "./ItemCount";


const Item = ({ producto }) => {
  
  const { name, description, price, id, kg, img, stock } = producto;

  const {addProduct} = useCarrito()

  // const [cantidad, setCantidad] = useState(1)


  return (
    <div className="card">
      <div className="card__img"><img src={img} alt={name} /></div>
      <div className="card__contain">
          {stock === 0 ?
            <div className="card__stock">Sin stock</div>
          : '' }
        <div className="card__text">
          <h3 className="card__title">
            {name} <span>{kg}kg</span>{" "}
          </h3>
          <p className="card__description"> <span className="card__span">100% Natural,</span> sin agregados ni conservantes</p>
        </div>
        <div className="card__precios"><h3>${price}</h3></div>

              {/* Aqui podría estar, o estaba el ItemCount con todas las funcionalidades */}
           
          <Link className="card__button" to={`/item/${id}`}>Ver mas</Link>
        
      </div>
    </div>
  );
};

export default Item;
