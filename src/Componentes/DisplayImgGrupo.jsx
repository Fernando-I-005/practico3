import React from 'react'
import { DisplayImgElegida } from './DisplayImgElegida'
import "./DisplayImgGrupo.css"

export const DisplayImgGrupo = ({valor1,valor2}) => {
  return (
    <div className='displayImgGrupo1 '>
      <span className="displayImgGrupo2"><DisplayImgElegida nombre={valor1} /></span>
      <span className="displayImgGrupo2"><DisplayImgElegida nombre={valor2}/></span>
    </div>
  )
}
//si saco texto 2 se va el formato
//verrrr con div no funciona // con d si / //vacio no