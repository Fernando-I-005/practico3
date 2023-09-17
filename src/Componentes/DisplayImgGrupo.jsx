import React from 'react'
import { DisplayImgElegida } from './DisplayImgElegida'
import "./DisplayImgGrupo.css"

export const DisplayImgGrupo = ({ nombreUsuario, nombrePC,imagenPiedra,imagenPapel, ImagenPeidra, imagenTijera, setimagenDeEleccionusuario, imagenDeEleccionusuario, setimagenDeEleccionPC, imagenDeEleccionPC, }) => {
  return (
    <div className='displayImgGrupo1 '>


      <span className="displayImgGrupo2"><DisplayImgElegida nombre={nombreUsuario} imagen={imagenDeEleccionusuario}
        setimagenDeEleccionusuario={setimagenDeEleccionusuario}

      /></span>
      <span className="displayImgGrupo2"><DisplayImgElegida nombre={nombrePC} imagen={imagenDeEleccionPC}
      setimagenDeEleccionusuario={setimagenDeEleccionusuario}

      /></span>





    </div>
  )
}
//si saco texto 2 se va el formato
//verrrr con div no funciona // con d si / //vacio no