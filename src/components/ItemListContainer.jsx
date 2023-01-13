import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import Spinner from "./Spinner";


const ItemListContainer = () => {

  const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState([]);
  const [filtro, setFiltro] = useState([])

  const propVariables = useParams()

  useEffect(() => {
    const url = "../public/data.json";
 
      fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => {
            if (propVariables.categoria === undefined) {
              setProductos(resultado)
              return
            } else {
              setFiltro(resultado.filter( producto => producto.categoria == propVariables.categoria))
              setProductos(filtro)
            }
        })
        .catch((error) => console.log(error));
        setLoad(true)
  
  }, [propVariables]);

  return (
    <>
      {load ? (
         <ItemList productos={productos}/>
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
