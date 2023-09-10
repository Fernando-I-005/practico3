import React from 'react'
import "./BotonSimbolo.css"


export const BotonSimbolo = ({imagen}) => {
  const funcion1 = () => {
    console.log('Función 1');
    // Realiza acciones para la función 1
  };

  const funcion2 = () => {
    console.log('Función 2');
    // Realiza acciones para la función 2
  };

  const funcion3 = () => {
    console.log('Función 3');
    // Realiza acciones para la función 3
  };

  const manejadorTripleClick = () => {
    funcion1();
    funcion2();
    funcion3();
  };

   
  return (
    <>
      <button onClick={manejadorTripleClick} className='claseSim'>
        <img src={imagen} alt="PiedraM22al" style={{ width: '75px', height: '75px' }} />
      </button>
    </>
  )
}

 