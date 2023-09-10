import React from 'react';
import ReactDOM from 'react-dom/client';
import { CompEncabezado } from './Componentes/CompEncabezado';
import { CompUsuario } from './Componentes/CompUsuario';
import { CompMarcador } from './Componentes/CompMarcador';
import { CompPrincipal } from './Componentes/CompPrincipal';
import { CompPiePagina } from './Componentes/CompPiePagina';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CompEncabezado tituloJuego="Piedra, Papel o Tijeras(prps)"/>
    <CompUsuario />
    <CompMarcador nombre1="FernandoPp" marcador1={11} nombre2="ComputadoraPp" marcador2={33} round={55} textoParr1=" El juego es al mejor de 5 enfrentamientos. ¡Suerte! desde Pp"/>
    <CompPrincipal nombre1="NombPrps" nombre2="CompuPrps"/>
    <CompPiePagina />
  </React.StrictMode>
);


