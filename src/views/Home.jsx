import React from 'react'
import Pikachu from '../img/pikachu.png';

export default function Home() {
  return (
    <div>
        <h1 className='mt-5'>Bienvenido maestro pokémon</h1>
        <img src={Pikachu} alt="pikachu" style={{width:"400px"}} />
    </div>
  )
}
