import React from 'react'
import "./BotonSimbolo.css"


export const BotonSimbolo = ({ imagen, eleccionUsuario, setEleccionUsuario, valor, eleccionPC, setEleccionPC, opciones, setimagenDeEleccionusuario, imagenDeEleccionusuario, setimagenDeEleccionPC, imagenDeEleccionPC }) => {

  const guardarEleccion = () => {
    setEleccionUsuario(valor);
  };

  const imprimirXConsola = () => {
    console.log(eleccionUsuario + " <--este valor no es real!!imprime valor anteriornpm start")
    console.log(eleccionPC + " <--este valor no es real!! ver")
  };

  const generarJugadaPc = () => {
    const jugadaAleatoria = opciones[Math.floor(Math.random() * opciones.length)];
    setEleccionPC(jugadaAleatoria);
  };

  const cambiarImagenUsuario = () => {
    setimagenDeEleccionusuario(imagen);
  };


  /*const cambiarImagenPC = () => {   // esto no funciona, rompe la pagina
    setimagenDeEleccionPC ();
  };*/

  const handleClick = () => {
    guardarEleccion();
    imprimirXConsola();
    generarJugadaPc();
    cambiarImagenUsuario();
    //cambiarImagenPC();
  };

  return (
    <>
      <button
        onClick={handleClick}
        className='claseSim'>
        <img src={imagen} alt={valor} style={{ width: '75px', height: '75px' }} />
      </button>

    </>
  )
}

/* if (eleccionPC == "tijeras" && eleccionUsuario == "papel") {
           setganadorround("Gana PC")
       }
       else if (eleccionUsuario == "tijeras" && eleccionPC == "papel") {
           setganadorround("gana Usuario")
       }
       else if (eleccionPC == "tijeras" && eleccionUsuario == "piedra") {
           setganadorround("gana Usuario")
       }
       else if (eleccionUsuario == "tijeras" && eleccionPC == "piedra") {
           setganadorround("Gana PC")
       }
       else if (eleccionPC == "piedra" && eleccionUsuario == "papel") {
           setganadorround("gana Usuario")
       }
       else if (eleccionUsuario == "piedra" && eleccionPC == "papel") {
           setganadorround("Gana PC")
       }
       else {
           setganadorround("empate")
       }
   }
 
 
 
 
*/
