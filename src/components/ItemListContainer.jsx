import { collection, getDocs, where, query, addDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { ItemList } from "./ItemList";
import Spinner from "./Spinner";


const ItemListContainer = () => {

  const [load, setLoad] = useState(false);
  const [productos, setProductos] = useState([]);
  const {categoryId} = useParams()

  

  useEffect(() => {
    
    const productosCollection = collection(db, "productos")
    const filtro = categoryId === undefined ? query(productosCollection) : query(productosCollection, where("categoria", "==",`${categoryId}`))
    const pedidoFirestore = getDocs(filtro)
    

    pedidoFirestore
      .then( respuesta => {
        setLoad(false)
        const productos = respuesta.docs.map ( doc => ( {...doc.data(), id: doc.id}))
        setProductos(productos)
        setLoad(true)
      })
       .catch( (error) => {
          toast.error("Error")
        })

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
