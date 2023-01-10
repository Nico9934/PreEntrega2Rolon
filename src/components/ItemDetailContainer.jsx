import React from 'react'
import ItemDetail from './ItemDetail'

const ItemDetailContainer = () => {
  return (
    <>
      <div className='itemdetailcontainer'>
        <div className='container'>
          <div className="itemdetailcontainer__container">
            <ItemDetail></ItemDetail>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemDetailContainer