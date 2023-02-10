import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

const CarritoProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [productosWidget, setProductosWidget] = useState(0);
  const [precioTotal, setPrecioTotal] = useState(0);
  


  const addProduct = (product) => {
    const existe = cartItems.find( x => x.id === product.id)
    
    if (!existe) {
        setCartItems([...cartItems, product])
        setPrecioTotal(precioTotal + (product.cantidad * product.price))
        setProductosWidget( productosWidget + product.cantidad )
    }
    else {
        setCartItems( cartItems.map( x => {
            if(x.id === product.id) {
                return {...product,  cantidad : product.cantidad + x.cantidad}
            }
            else {
                return x
            }
        }))
         setPrecioTotal(precioTotal + (product.cantidad * product.price) )
         setProductosWidget( productosWidget + product.cantidad)
    }
  };

  const removeProduct = (product) => {
    setCartItems(cartItems.filter((x) => x.id != product.id));
    setProductosWidget(productosWidget - product.cantidad);
    setPrecioTotal(precioTotal - product.price * product.cantidad);
  };

  const resetCart = () => {
    setCartItems([]);
    setProductosWidget(0);
    setPrecioTotal(0);
  };

  return (
    <CarritoContext.Provider
      value={{
        cartItems,
        setCartItems,
        addProduct,
        resetCart,
        removeProduct,
        productosWidget,
        setProductosWidget,
        precioTotal,
        setPrecioTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

export default CarritoProvider;
