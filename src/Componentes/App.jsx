import React, { useState } from 'react';
import { CompEncabezado } from './CompEncabezado';
import { CompUsuario } from './CompUsuario';
import { CompMarcador } from './CompMarcador';
import { CompPrincipal } from './CompPrincipal';
import { CompPiePagina } from './CompPiePagina';



export const App = () => {

  const imagenPiedra = '../practico3/recursos/Piedramini.png';
  const imagenPapel = '../practico3/recursos/papelmini.png';
  const imagenTijeras = '../practico3/recursos/Tijeramini.png';
  const imagenIncognita = "../practico3/recursos/incognita.png";

  const [nombreUsuario, setNombreUsuario] = useState("");
  const [textoParrafo1, setTextoParrafo1] = useState("");
  const [contTriunfosUsuario, setcontTriunfosUsuario] = useState("0")
  const [contadorTriunfosPC, setContadorTriunfosPC] = useState("0")
  const [contadorRound, setContadorRound] = useState("0")


  return (
    <>
      <CompEncabezado
        tituloJuego="Piedra, Papel o Tijeras(en construccion)" />

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
        nombreUsuario={nombreUsuario}
        nombrePC="CompuPrps"
        imagenPiedra={imagenPiedra}
        imagenPapel={imagenPapel}
        imagenTijeras={imagenTijeras}
        imagenIncognita={imagenIncognita}
      />
      <CompPiePagina />
    </>
  )
}


