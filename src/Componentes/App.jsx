import React, { useState } from 'react';
import { CompEncabezado } from './CompEncabezado';
import { CompUsuario } from './CompUsuario';
import { CompMarcador } from './CompMarcador';
import { CompPrincipal } from './CompPrincipal';
import { CompPiePagina } from './CompPiePagina';


export const App = () => {

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [textoParrafo1, setTextoParrafo1] = useState("");
  const [contTriunfosUsuario, setcontTriunfosUsuario] = useState("0")
  const [contadorTriunfosPC, setContadorTriunfosPC] = useState("0")
  const [contadorRound, setContadorRound] = useState("0")



  return (
    <>
      <CompEncabezado
        tituloJuego="Piedra, Papel o Tijeras" />

      <CompUsuario
        nombreUsuario={nombreUsuario}
        setNombreUsuario={setNombreUsuario} />

      <CompMarcador
        nombre1={nombreUsuario}
        marcador1={contTriunfosUsuario} 
        nombre2="Computadora"
        marcador2={contadorTriunfosPC} 
        round={contadorRound} 
        textoParr1={textoParrafo1}
        setTextoParrafo1={setTextoParrafo1} />


      <CompPrincipal
        nombre1={nombreUsuario}
        nombre2="CompuPrps" />


      <CompPiePagina />
    </>
  )
}


