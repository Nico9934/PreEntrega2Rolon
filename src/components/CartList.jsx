import React from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useCarrito } from './CarritoProvider'
import CartListItem from './CartListItem'



const CartList = ({setSteps, steps}) => {

    const {cartItems,resetCart,precioTotal} = useCarrito()

    cartItems.length === 0 ? toast.warn('Agrega algo al carrito') : null

    const finalizarCompra = () => {
      setSteps(2)
    }

  return (
    <div className="table">
            <div className="table__head">
                <div className="head__title"></div>
                <p className="head__title">Producto</p>
                <p className="head__title">Precio</p>
                <p className="head__title">Cantidad</p>
                <p className="head__title">Subtotal</p>
                <p className="head__title"></p>
            </div>

            {cartItems.map( product => {
              return <CartListItem
                key={product.id}
                product={product}
              />
            })}
      
            
            <div className="table__total">
              <button onClick={resetCart}>Limpiar Carrito</button>
              <button>
              <Link to={"/"}>
                 Seguir comprando</Link>
              </button>
              <p>Total: <span>${precioTotal}</span></p>
              {cartItems.length != 0 &&
                <button onClick={() => setSteps(steps + 1)}>Completa tus datos</button>
              }
            </div>
          </div>
  )
}

export default CartList