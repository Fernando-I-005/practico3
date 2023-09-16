import React, { useState } from 'react'
import { EntradaUsuario } from './EntradaUsuario'
import { BotonUsuario } from './BotonUsuario'
import "./CompUsuario.css"

export const CompUsuario = ({ nombreUsuario, setNombreUsuario }) => {
  const [contenidoInput, setcontenidoInput] = useState("Ingrese su nombre aquí")
  
  
  
  return (

    <div className='claseCompUsuarioEx' >
      <div className='claseCompUsuarioInt'>
        <EntradaUsuario nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario} contenidoInput={contenidoInput} setcontenidoInput={setcontenidoInput}/>
      </div>
      <div className='claseCompUsuarioInt'>
        <BotonUsuario nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario}  />
      </div>
    </div>
  )
}
