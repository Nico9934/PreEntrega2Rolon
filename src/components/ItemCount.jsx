
const ItemCount = ({stock, cantidad, setCantidad }) => {


    const handleSumar = () => setCantidad(cantidad + 1)
    const handleRestar = () => setCantidad(cantidad <= 1 ? cantidad :  cantidad - 1)

  return (
    <div className={stock ? 'counter' : 'counter__disabled'}>
        <button className={stock ? 'counter__button' : 'counter__disabled__button'} value={cantidad} onClick={handleRestar} disabled={stock ? false : true} >-</button>
        <input className={stock ? 'counter__view' : 'counter__disabled__view'} type="text" value={cantidad} disabled={stock ? true : true}/>
        <button className={stock ? 'counter__button' : 'counter__disabled__button'} onClick={handleSumar} disabled={stock ? false : true}>+</button>
    </div>
  )
}

export default ItemCount