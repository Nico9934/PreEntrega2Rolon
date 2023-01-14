import React from 'react'
import { Link } from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
       
       <Link className='header__logo' to={"/"}>
            <h1>Bienfrio</h1>
            <p>Natural Food</p>
       </Link>
        {/* <div className='header__search'>
          <input placeholder='Busca un producto' type="text" />
        </div> */}
        <nav className='header__nav'>
            <div className="header__ul">

                <Link className='header__li' to={"/productos/verduras "}>Verduras </Link>
                <Link className='header__li' to={"/productos/frutas "}>Frutas</Link>
                <Link className='header__li' to={"/productos/helados "}>Helados</Link>
                <Link className='header__li' to={"/productos/almacen "}>Almacen</Link>
                <Link className='header__li' to={"/about "}>¿Quienes somos?  </Link>
                <Link className='header__li' to={"/iqf "}>¿Qué es el IQF?</Link>
                <Link className='header__li' to={"/contact "}>Contacto</Link>
            </div>
        </nav>

        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar