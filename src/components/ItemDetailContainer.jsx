import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(false);
  const [producto, setProducto] = useState({});
  const { id } = useParams();
  const numId = Number(id)

  useEffect(() => {
    const url = "../public/data.json";
    
        setCargando(false)
    fetch(url)
        .then((respuesta) => respuesta.json())
        .then((resultado) => setProducto(resultado.find((seleccionado) => seleccionado.id === numId)))
        .catch((error) => console.log(error));
        setCargando(true)
    }, [numId]);

  return (
    <>
      <div className="itemdetailcontainer">
        <div className="container">
          <div className="itemdetailcontainer__container">
             {cargando ? <ItemDetail producto={producto} /> : <Spinner />}
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemDetailContainer;
