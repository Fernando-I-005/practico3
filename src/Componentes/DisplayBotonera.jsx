import React from 'react'
import { BotonSimbolo } from './BotonSimbolo'

export const DisplayBotonera = ({ imagenPiedra, imagenPapel, imagenTijeras, eleccionUsuario, setEleccionUsuario, setEleccionPC, eleccionPC, opciones, setimagenDeEleccionusuario, imagenDeEleccionusuario , setimagenDeEleccionPC,  imagenDeEleccionPC}) => {




  return (
    <div className='claseContMarcador2'>
      <BotonSimbolo
        imagen={imagenPiedra}
        valor="piedra"

        eleccionUsuario={eleccionUsuario}
        setEleccionUsuario={setEleccionUsuario}

        eleccionPC={eleccionPC}
        setEleccionPC={setEleccionPC}

        setimagenDeEleccionusuario={setimagenDeEleccionusuario}
        imagenDeEleccionusuario={imagenDeEleccionusuario}

        setimagenDeEleccionPC={ setimagenDeEleccionPC}
        imagenDeEleccionPC={ imagenDeEleccionPC}




        opciones={opciones}
      />

      <BotonSimbolo
        imagen={imagenPapel}
        valor={"papel"}

        eleccionUsuario={eleccionUsuario}
        setEleccionUsuario={setEleccionUsuario}

        eleccionPC={eleccionPC}
        setEleccionPC={setEleccionPC}

        
        setimagenDeEleccionusuario={setimagenDeEleccionusuario}
        imagenDeEleccionusuario={imagenDeEleccionusuario}

        opciones={opciones}

      />
      <BotonSimbolo
        imagen={imagenTijeras}
        valor={"tijeras"}

        eleccionUsuario={eleccionUsuario}
        setEleccionUsuario={setEleccionUsuario}

        eleccionPC={eleccionPC}
        setEleccionPC={setEleccionPC}
               
        setimagenDeEleccionusuario={setimagenDeEleccionusuario}
        imagenDeEleccionusuario={imagenDeEleccionusuario}

        opciones={opciones}
      />
    </div>
  )
}
