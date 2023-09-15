import React, { useState } from 'react';
import { CompEncabezado } from './CompEncabezado';
import { CompUsuario } from './CompUsuario';
import { CompMarcador } from './CompMarcador';
import { CompPrincipal } from './CompPrincipal';
import { CompPiePagina } from './CompPiePagina';


export const App = () => {
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [textoParrafo1, setTextoParrafo1] = useState("");

  /*const actualizarNombreUsuarioPadre = (nuevoNombreUsuario) => {
    setNombreUsuario(nuevoNombreUsuario);
  };*/


  return (
    <>
      <CompEncabezado tituloJuego="Piedra, Papel o Tijeras(prps)" />



      <CompUsuario nombreUsuario={nombreUsuario} setNombreUsuario={setNombreUsuario} />


      <CompMarcador nombre1={nombreUsuario} marcador1={11} nombre2="Computadora" marcador2={33} round={55} textoParr1={textoParrafo1} setTextoParrafo1={setTextoParrafo1}/>




      <CompPrincipal nombre1="NombPrps" nombre2="CompuPrps" />


      <CompPiePagina />
    </>
  )
}


