import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "./ItemList";
import Spinner from "./Spinner";


const ItemListContainer = () => {

  const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState([]);
  
  const {categoryId} = useParams()

  useEffect(() => {
    setLoad(false)
    const url = "https://raw.githubusercontent.com/Nico9934/PreEntrega2Rolon/master/public/data.json"
 
    
      fetch(url)
      .then((respuesta) => respuesta.json())
      .then( (resultado) => categoryId === undefined ? setProductos(resultado) : setProductos(resultado.filter( producto => producto.categoria === categoryId)))
      .catch((error) => console.log(error));

      setLoad(true)
  }, [categoryId]);

  return (
    <>
      
      {load ? (
         <ItemList productos={productos} categoria={categoryId} />
      ) : (
        <section className="itemlist">
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
