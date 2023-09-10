import React from 'react'
import "./BotonReinicio.css"

export const BotonReinicio = () => {
  return (
    <>
   <button onClick={function(){
    console.log("click ok reiniciar")


   }} className='claseBR'>
    Reiniciar
   </button>
    
    </>
  )
}
