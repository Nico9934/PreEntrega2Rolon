import { Link } from "react-router-dom";
import { useCarrito } from "./CarritoProvider";

const Item = ({ producto }) => {
  const { name, price, id, kg, img, stock } = producto;
  
  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={name} />
      </div>
      <div className="card__contain">
        {stock === 0 ? <div className="card__stock">Sin stock</div> : ""}
        <div className="card__text">
          <h3 className="card__title">
            {name} <span>{kg}kg</span>{" "}
          </h3>
          <p className="card__description">
            <span className="card__span">100% Natural,</span> sin agregados ni
            conservantes
          </p>
        </div>
        <div className="card__precios">
          <h3>${price}</h3>
        </div>

        <Link className="card__button" to={`/item/${id}`}>
          Ver mas
        </Link>
      </div>
    </div>
  );
};

export default Item;
