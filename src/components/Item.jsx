import { useState } from "react";
import { Link } from "react-router-dom";
import { useCarrito } from "./CarritoProvider";
import ItemCount from "./ItemCount";


const Item = ({ producto }) => {
  
  const { name, description, price, id, kg, img, stock } = producto;

  const {addProduct} = useCarrito()

  const [stockDisponible, setStockDisponible] = useState(stock)
  const [cantidad, setCantidad] = useState(1)


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
          <p className="card__description">{description}</p>
        </div>
        <div className="card__precios"><h3>${price}</h3></div>

        <div className="card__buttons">
          <ItemCount
            cantidad={cantidad}
            setCantidad={setCantidad}
            stockDisponible={stockDisponible}
          ></ItemCount>
          {
            stock === 0 
              ? 
              <button 
                disabled
                className="card__button__disabled"> 
                Agregar
              </button>
              :
              <button 
                className="card__button"
                onClick={ () => addProduct({...producto, cantidad})}>
                Agregar
              </button>
          }
          
          
          <Link className="card__button" to={`/item/${id}`}>Ver mas</Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
