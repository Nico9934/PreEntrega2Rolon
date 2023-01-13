import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import Spinner from "./Spinner";


const ItemListContainer = () => {

  const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState([]);

  const propVariables = useParams()
  console.log(propVariables)

  useEffect(() => {
    const url = "../public/data.json";


    // setTimeout(() => {
  
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => setProductos(resultado))
        .catch((error) => console.log(error));
      setLoad(true)

    // }, 1250);
  
  
  }, []);

  return (
    <>
      {load ? (
        <ItemList productos={productos} />
      ) : (
        <section className="itemlist" id="vegetales">
          <div className="container">
            <div className="itemlist__container">
              <Spinner />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ItemListContainer;
