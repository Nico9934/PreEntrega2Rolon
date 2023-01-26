import { createContext, useContext, useState } from "react";

const CarritoContext = createContext()

export const useCarrito = () => useContext(CarritoContext)

const CarritoProvider = ({children}) => {
 
    // Carrito de compras, empieza vacio
    const [cartItems, setCartItems] = useState([])
    
    //Cantidad total de productos en el widget del carrito
    const [totalProductos, setTotalProductos] = useState(0)
    
    // Suma de todos los precios de los productos
    const [precioTotal, setPrecioTotal] = useState(0)

    //AgregarProducto
        const addProduct = (product) => {
            const productoExiste = cartItems.find( x => x.id === product.id)
        // Si el producto no existe
            if(!productoExiste) {
                setCartItems([...cartItems, product])
                setTotalProductos( totalProductos + product.cantidad)
                setPrecioTotal( precioTotal + (product.price * product.cantidad))
            }
        // Si el producto si existe
            else {
                setCartItems(cartItems.map( x => x.id === product.id
                    ? {...productoExiste, cantidad : product.cantidad}
                    : x
                ))
                cartItems.map( x => x.cantidad > product.cantidad
                        ?
                            setPrecioTotal( product.price * product.cantidad) &&
                            setTotalProductos(totalProductos - product.cantidad)
                        :
                            setPrecioTotal(precioTotal + (product.price * product.cantidad))
                    )
                setTotalProductos( cartItems.map( producto => totalProductos + producto.cantidad))
                }
        }            
    // Eliminar Producto
        const removeProduct = (product) => {
            if (cartItems.length === 0) {
                resetCart()
                setPrecioTotal(0)
                setTotalProductos(0)
            }
            setCartItems( cartItems.filter( x => x.id != product.id))
            setTotalProductos( totalProductos - product.cantidad )
            setPrecioTotal( precioTotal - (product.price * product.cantidad))
        }
    // Limpiar Carrito
        const resetCart = () => {
            setCartItems([])
            setTotalProductos(0)
            setPrecioTotal(0)
        }

         

    return (
        <CarritoContext.Provider value={{
            cartItems,
            addProduct,
            resetCart,
            removeProduct,
            totalProductos,
            precioTotal
            // cantidad, 
            // setCantidad
        }}>
            {children}
        </CarritoContext.Provider>
    );
}

export default CarritoProvider;