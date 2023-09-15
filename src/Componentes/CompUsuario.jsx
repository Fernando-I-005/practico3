import React from 'react'
import { EntradaUsuario } from './EntradaUsuario'
import { BotonUsuario } from './BotonUsuario'
import "./CompUsuario.css"

export const CompUsuario = ({ nombreUsuario, setNombreUsuario }) => {
  return (

    <div className='claseCompUsuarioEx' >
      <div className='claseCompUsuarioInt'>
        <EntradaUsuario nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario} />
      </div>
      <div className='claseCompUsuarioInt'>
        <BotonUsuario nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario}  />
      </div>
    </div>
  )
}
