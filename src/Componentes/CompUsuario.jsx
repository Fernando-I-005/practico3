import React from 'react'
import { EntradaUsuario } from './EntradaUsuario'
import { BotonUsuario } from './BotonUsuario'
import "./CompUsuario.css"

export const CompUsuario = () => {
  return (
    <div className='claseCompUsuarioEx'>
      <div className='claseCompUsuarioInt'>
        <EntradaUsuario />
      </div>
      <div className='claseCompUsuarioInt'>
        <BotonUsuario />
      </div>
    </div>
  )
}
