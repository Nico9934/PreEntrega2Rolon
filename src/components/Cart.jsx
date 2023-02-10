import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useState } from "react";
import { toast } from "react-toastify";
import { db } from "../firebase";
import { useCarrito } from "./CarritoProvider";
import CartCheckOut from "./CartCheckOut";
import CartForm from "./CartForm";
import CartList from "./CartList";
import Spinner from "./Spinner";



const Cart = () => {
  const {precioTotal, cartItems, setCartItems, setProductosWidget, setPrecioTotal} = useCarrito();
  const [steps, setSteps] = useState(1);
  const [usuario, setUsuario] = useState({
    nombre: "",
    mail: "",
    calle: "",
    altura: "",
    medio: "efectivo",
    tarjeta: ""
  });
  const [compraFinal, setCompraFinal] = useState({})
  const [idCompra, setIdCompra] = useState("")

  const handleSubmit = () => {
    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (Object.values(usuario).includes("")) {
      toast.warn("Todos los campos son obligatorios");
    } 
    else if (!emailRegex.test(usuario.mail)) {
      toast.error('Debes ingresar un mail correcto')
    }
     else {
      saveData();
      setSteps(steps + 1);
    }
  };

  const saveData = () => {
    const orden = { ...usuario, pedido: cartItems, fecha: serverTimestamp(), total: precioTotal };

    const ventasCollection = collection(db, "ventas");
    const pedido = addDoc(ventasCollection, orden);
  
    pedido
      .then((resultado) => {
          toast.success("Venta guardada");
          setIdCompra(resultado.id) 
      })
      .catch((error) => {
          toast.error(error);
      });
      
    setCompraFinal(orden)  
    setCartItems([])
    setProductosWidget(0)
    setUsuario({})
    setPrecioTotal(0)
  };
  

  return (
    <div className="cart">
      <div className="container">
        <h3 className="cart__title">
            {steps === 1 && "Carrito de compras"}
            {steps === 2 && "Completa tus datos"}
            {steps === 3 && idCompra != "" && "Tu compra"}
          </h3>
      

        <div className="cart__container">
          {steps === 1 && <CartList steps={steps} setSteps={setSteps} />}
          {steps === 2 && (
            <CartForm
              steps={steps}
              setSteps={setSteps}
              usuario={usuario}
              setUsuario={setUsuario}
              handleSubmit={handleSubmit}
            />
          )}
          {/* Si el idCompra esta vacio, entonces carga... hasta que */}
          {steps === 3 && idCompra === "" && <Spinner />}
          {steps === 3 && idCompra != "" && <CartCheckOut idCompra={idCompra}  compraFinal={compraFinal} steps={steps} setSteps={setSteps} />}
        </div>
      </div>
    </div>
  );
};

export default Cart;
