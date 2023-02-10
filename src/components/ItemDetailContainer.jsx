import React from "react";
import ItemDetail from "./ItemDetail";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";
import { toast } from "react-toastify";

const ItemDetailContainer = () => {
  const [cargando, setCargando] = useState(false);
  const [producto, setProducto] = useState({});
  const { id } = useParams(); 

  useEffect( ( ) => {
    setCargando(false)
    const productosCollection = collection(db, "productos")
    const referencia = doc(productosCollection, id)
    const pedido = getDoc(referencia)
    
    pedido
      .then (res => {
        setCargando(false)
        setProducto({...res.data(), id : res.id});
        setCargando(true)
      })
      .catch( (error) => {
        toast.error(error)
      })
    setCargando(true)

  }, [id])


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
