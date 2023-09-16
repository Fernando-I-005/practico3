import React from 'react'
import { BotonSimbolo } from './BotonSimbolo'

export const DisplayBotonera = ({ eleccionUsuario, setEleccionUsuario ,setEleccionPC,eleccionPC, opciones, setimagenDeEleccionusuario,imagenDeEleccionusuario }) => {




  return (
    <div className='claseContMarcador2'>
      <BotonSimbolo
        eleccionUsuario={eleccionUsuario}
        setEleccionUsuario={setEleccionUsuario}
        etEleccionPC
        imagen="practico3/recursos/Piedramini.png"
        valor={"piedra"}
        setEleccionPC={setEleccionPC}
        eleccionPC={eleccionPC}
        opciones={opciones}
        setimagenDeEleccionusuario={setimagenDeEleccionusuario}
        imagenDeEleccionusuario={imagenDeEleccionusuario}
      />
      
      <BotonSimbolo
        imagen="practico3/recursos/Papelmini.png"
        eleccionUsuario={eleccionUsuario}
        setEleccionUsuario={setEleccionUsuario}
        valor={"papel"}
        setEleccionPC={setEleccionPC}
        eleccionPC={eleccionPC}
        opciones={opciones}
        setimagenDeEleccionusuario={setimagenDeEleccionusuario}
        imagenDeEleccionusuario={imagenDeEleccionusuario}

      />
      <BotonSimbolo
        imagen="practico3/recursos/Tijeramini.png"
        eleccionUsuario={eleccionUsuario}
        setEleccionUsuario={setEleccionUsuario}
        valor={"tijeras"}
        setEleccionPC={setEleccionPC}
        eleccionPC={eleccionPC}
        opciones={opciones}
        setimagenDeEleccionusuario={setimagenDeEleccionusuario}
        imagenDeEleccionusuario={imagenDeEleccionusuario}
      />
    </div>
  )
}
