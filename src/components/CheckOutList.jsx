import React from "react";

const CheckOutList = ({producto}) => {

    const {name, cantidad, price, img} = producto

  return (
    <div className="checkout__productos">
      <div className="checkout__producto">
        <img className="checkout__producto-img" src={img} alt="" />
        <p className="checkout__producto-desc">{name}</p>
        <p className="checkout__producto-desc">x{cantidad}</p>
        <p className="checkout__producto-desc">${cantidad * price}</p>
      </div>
    </div>
  );
};

export default CheckOutList;
