import React from 'react'
import "./BotonUsuario.css"


export const BotonUsuario = ({ nombreUsuario, setNombreUsuario,contenidoInput, setContenidoInput }) => {

  

  const handleValidarNombre = () => {
    if (nombreUsuario.trim() === '' || nombreUsuario.length > 15) {
      alert('El nombre de usuario debe tener entre 1 y 15 caracteres.');

    } else {
      const esNombreValido = false; // Cambia esto para realizar la validación real

      if (esNombreValido) {
        console.log('Nombre de usuario validado:', nombreUsuario);
        setNombreUsuario(nombreUsuario);
      }
    }
  };

  return (
    <>
      <button
        onClick={handleValidarNombre}
        className='claseBotonUsu1'>

        enviar
      </button>
    </>
  )
}

