import React, { useEffect } from 'react'
import "./DisplayParrafo1.css"

export const DisplayParrafo1 = ({ textoParrafo1, setTextoParrafo1, nombre }) => {

  useEffect(() => {
    if (nombre) {
      setTextoParrafo1(`Bienvenido, ${nombre}! `);
    } else {
      setTextoParrafo1('El juego es al mejor de 5 enfrentamientos');
    }
  }, [nombre]);


  return (
    <div >
      <p className='claseDisplayParrafo1'> {textoParrafo1}</p>
    </div>
  )
}
