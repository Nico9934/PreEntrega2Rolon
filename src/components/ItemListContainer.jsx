import React, { useState } from 'react'
import { ItemList } from './ItemList'

const ItemListContainer = (props) => {

  const {greeting} = props
 
  return (

    <ItemList
      greeting={greeting}
    />
      
  )
}

export default ItemListContainer