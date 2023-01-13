import { Link } from "react-router-dom";


const Item = ({ producto }) => {
  const { name, description, price, id, kg, img, cantidad } = producto;

  return (
    <div className="card">
      <div className="card__img">
        <img src={img} alt={name} />
      </div>

      <div className="card__contain">
        <div className="card__text">
          <h3 className="card__title">
            {name} <span>{kg}kg</span>{" "}
          </h3>
          <p className="card__description">{description}</p>
        </div>
        <div className="card__precios">
          <h3>${price}</h3>
        </div>

        <Link className="card__button" to={`/item/${id}`}>Ver mas</Link>
        {/* <a href={`/productos/${id}`}}>Ver más </a> */}
      </div>
    </div>
  );
};

export default Item;
