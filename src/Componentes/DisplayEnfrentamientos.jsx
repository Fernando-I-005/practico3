import React from 'react'
import "./DisplayEnfrentamientos.css"

export const DisplayEnfrentamientos = ({ roundN }) => {
  return (
    <div className='claseDisplayEnfrentamiento'>
      <h4 > Round</h4>
      <h5 > {roundN} </h5>
    </div>
  )
}
