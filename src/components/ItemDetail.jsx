import React from 'react'


const ItemDetail = () => {


  return (
    <div className="detail">
      <div className="detail__img">
        <img src='https://img.freepik.com/fotos-premium/mezcla-verduras-frutas-alimentos-saludables-alimentacion-limpia-salud_73523-2767.jpg?w=2000' alt="Acelga" />
      </div>

      <div className="detail__contain">
        <div className="detail__text">
          <h3 className="detail__title">
            Acelga en hojas
          </h3>
          <p className="detail__recipe"> Receta de acelga espinaca yarta y demas Lorem ipsum dolor sit amet consectetur adipisicing elit. Error excepturi ad quidem aperiam sed impedit enim laudantium reprehenderit, deleniti, earum molestiae. Cumque, optio praesentium. Quos sed nemo ipsum iste amet.</p>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail