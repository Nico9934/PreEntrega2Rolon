import React from "react";

const ItemDetail = ({ producto }) => {
  const { name, img } = producto;

  return (
    <div className="detail">
      <div className="detail__img">
        <img src={img} />
      </div>

      <div className="detail__contain">
        <div className="detail__text">
          <h3 className="detail__title">{name}</h3>
          <p className="detail__description">
            {" "}
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            dolor aut, omnis eum cumque fugit quasi similique qui est nesciunt
            assumenda. Enim necessitatibus tenetur sint? Sint id aperiam quo
            doloribus.
          </p>
          <div className="recipe">
            <h3 className="recipe__title">Tarta de espinaca</h3>
            <li className="recipe__ingredient">1kg Tarta</li>
            <li className="recipe__ingredient">0.5kg Espinaca</li>
            <li className="recipe__ingredient">2 Huevo</li>
            <li className="recipe__ingredient">1kg Harina</li>
            <p className="recipe__steps">
              Lorem ipsum Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Esse veritatis ducimus quod, quas, dolore eos non ex a
              similique nostrum, nesciunt harum deleniti. Id accusamus earum
              dicta vel, harum officiis. dolor, sit amet consectetur adipisicing
              elit. Excepturi id magnam consequuntur vitae! Minima
              exercitationem quasi incidunt nihil rerum sunt sint, officiis
              quidem aspernatur magnam inventore hic, adipisci sequi nulla!
            </p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
