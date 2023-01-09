import React from 'react'
import CartWidget from './CartWidget'

const NavBar = () => {
  return (
    <header className='header'>
      <div className='header__container container'>
        <div className='header__logo'>
            <h1>Bienfrio</h1>
            <p>Natural Food</p>
          </div>
        <div className='header__search'>
          <input placeholder='Busca un producto' type="text" />
        </div>
        <nav className='header__nav'>
            <ul className='header__ul'>
                <li className='header__li'><a href="#verduras">Verduras</a> </li>
                <li className='header__li'><a href="#frutas">Frutas</a> </li>
                <li className='header__li'><a href="#about">¿Quienes somos?</a>  </li>
                <li className='header__li'><a href="#iqf">¿Qué es el IQF?</a></li>
                <li className='header__li'><a href="#contact">Contacto</a> </li>
            </ul>
        </nav>

        <CartWidget/>
      </div>
    </header>
  )
}

export default NavBar