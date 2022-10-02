import React from 'react'
import { NavLink } from 'react-router-dom'
import Logo from '../img/logo-pokemon-79x45.png'

export default function Navbar() {
    const setActive = ({ isActive }) => (isActive ? "active" : "inactive");
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container">
          <img src={Logo} alt="pokemon" />
          <div className='d-flex justify-content-end'>
            <div className='m-1'>
              <NavLink end className={setActive} to="/">Home</NavLink>
              {" - "}
            </div>
            <div className='m-1'>
              <NavLink className={setActive} to="/pokemones">Pokemones</NavLink>
              {" - "}
            </div>
          </div>        
        </div>
      </nav>
        
    </>
  )
}
