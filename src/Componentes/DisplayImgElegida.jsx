import React from 'react'
import "./DisplayImgElegida.css"

export const DisplayImgElegida = ({nombre, imagen}) => {
  return (
    <>
    <p className='claseDisplayImgElegParrafo'>Elección</p>

    <p className='claseDisplayImgElegParrafo'>{nombre}</p>

    <img className='claseDisplayImgElegIMG' src={imagen} alt="PiedraM22al" style={{ width: '125px', height: '125px' }} ></img>
     </>
  )
}
//falta invocar la clase de css//