import { createContext, useContext, useState } from "react";

const CarritoContext = createContext();

export const useCarrito = () => useContext(CarritoContext);

const CarritoProvider = ({ children }) => {
  // Carrito de compras, empieza vacio
  const [cartItems, setCartItems] = useState([]);

  //Cantidad total de productos en el widget del carrito
  const [productosWidget, setProductosWidget] = useState(0);

  // Suma de todos los precios de los productos
  const [precioTotal, setPrecioTotal] = useState(0);

  const [sumador, setSumador] = useState(0)
  //AgregarProducto



  const addProduct = (product) => {
    const existe = cartItems.find( x => x.id === product.id)

    // El producto no existe
    if (!existe) {
        // Se toma una copia del carrito y se agrega
        setCartItems([...cartItems, product])
        setPrecioTotal(precioTotal + (product.cantidad * product.price))
        setProductosWidget( productosWidget + product.cantidad )
    }
    // El producto si existe
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


  // Eliminar Producto
  const removeProduct = (product) => {
    setCartItems(cartItems.filter((x) => x.id != product.id));
    setProductosWidget(productosWidget - product.cantidad);
    setPrecioTotal(precioTotal - product.price * product.cantidad);
  };

  // Limpiar Carrito
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
