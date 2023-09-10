import React from 'react'
import "./EntradaUsuario.css"

const manejadorChange= (e) => {console.log(e.target.value)}

export const EntradaUsuario = () => {
  return (
    <div>
          <input onChange={manejadorChange}  className='claseBotonEntrada'></input>
    </div>

      )
}

