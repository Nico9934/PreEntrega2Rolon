import React from "react";

const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about__container">
          <div className="about__text">
            <h3 className="about__title">¿Quienes somos?</h3>
            <div className="about__description">
              Somos distribuidores y vendedores de productos congelados.
              Nuestros productos, desde el momento que se cosechan, con todo el
              proceso IQF, llegan a tu freeze respetando los más altos
              estandares de calidad. De la mano de marcas como Biomac,
              mantenemos la mejor calidad. Distribuimos frutas y verduras,
              siempre con el lema de que lo natural, es mejor. Nuestros
              productos no tienen ni adhitivos, ni conservantes, son libres de
              gluten y aptos para celíacos.
            </div>
          </div>

          <img
            className="about__img"
            src="https://www.eltucumano.com/fotos/cache/notas/2018/04/18/818x460_180418010936_80489.jpg"
            alt="cosecha"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
