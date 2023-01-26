import React from "react";
import Item from "./Item";

export const ItemList = ({ productos, categoria }) => {

  return (
    <>
      <section className="itemlist" id="vegetales">
        <div className="container">

          <h2 className="itemlist__title">
            {!categoria ? "Nuestros productos" : categoria}
          </h2>
          <div className="itemlist__container">
            {productos.map((producto) => (
              <Item 
                key={Math.random()*100} 
                producto={producto} />
            ))}
          </div>
        </div>
      </section>   
    </>
  );
};
