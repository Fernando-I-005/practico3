import React from 'react'
import "./DisplayMarcador.css"

export const DisplayMarcador = ({ nombre,marcador }) => {
  return (
    <div >
      <h4> {nombre}</h4>
      <h3 > {marcador} </h3>
    </div>
  )
}
