import { useCarrito } from "./CarritoProvider"

const ItemCount = ({stockDisponible, cantidad, setCantidad, product    }) => {

    const {cartItems} = useCarrito()
    

    const handleSumar = () => setCantidad(cantidad + 1)
    const handleRestar = () => setCantidad(cantidad <= 0 ? cantidad :  cantidad - 1)


  return (
    <div className={stockDisponible ? 'counter' : 'counter__disabled'}>
        <button className={stockDisponible ? 'counter__button' : 'counter__disabled__button'} value={cantidad} onClick={handleRestar} disabled={stockDisponible ? false : true} >-</button>
        
        <input className={stockDisponible ? 'counter__view' : 'counter__disabled__view'} type="text" value={cantidad} disabled={stockDisponible ? true : true}/>
        
        <button className={stockDisponible ? 'counter__button' : 'counter__disabled__button'} onClick={handleSumar} disabled={stockDisponible ? false : true}>+</button>
    </div>
  )
}

export default ItemCount