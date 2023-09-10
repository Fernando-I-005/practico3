import React from 'react'
import "./BotonJugar.css"


export const BotonJugar = () => {
  return (
    <>
      <button onClick={function () {
        console.log(" click desde Jugar")
      }}
        className='claseBJ'>
        Jugar
      </button>
    </>
  )
}
