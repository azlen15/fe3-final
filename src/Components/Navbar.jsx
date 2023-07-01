import React from 'react'
import { Link } from 'react-router-dom'
import { Context } from './utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {

  const {themeState, changeTheme} = Context()



  return (
    <nav className={themeState.theme}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <div>
        <img src='./DH.ico' alt="dh-logo"></img>
        <h2>Odonto</h2>
      </div>
      <div className='routes-nav'>
        <Link to={"/"}>Home</Link>
        <Link to={"/contact"}>Contact</Link>
        <Link to={"/favs"}>Favs</Link>
        <button onClick={changeTheme}>{themeState.theme === "light"? "🌙": "☀"}</button>
      </div>
    </nav>
  )
}

export default Navbar
