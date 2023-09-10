import React from 'react'
import "./CompEncabezado.css"

export const CompEncabezado = ({tituloJuego}) => {
  return (
    <div className='compEncabezadoExt'>
      <p className='compEncabezadoParrafo'> {tituloJuego}</p>
    </div>
  )
}


