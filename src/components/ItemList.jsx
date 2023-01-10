import React from "react";
import Item from "./Item";

export const ItemList = ({ productos }) => {
  return (
    <>
      <section className="itemlist" id="vegetales">
        <div className="container">
          <div className="itemlist__container">
            {productos.map((producto) => (
              <Item key={producto.id} producto={producto} />
            ))}
          </div>
        </div>
      </section>   
    </>
  );
};
