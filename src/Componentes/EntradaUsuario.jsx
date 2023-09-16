import React,{useState} from 'react'
import "./EntradaUsuario.css"

export const EntradaUsuario = ({ nombreUsuario, setNombreUsuario, setcontenidoInput, contenidoInput }) => {
  const [inputHabilitado, setInputHabilitado] = useState(true);
  
  const handleInputChange = (event) => {
    setNombreUsuario(event.target.value);
  };
  const handleInputBlur = () => {
      setInputHabilitado(false);
  };

  return (
    <div>
      
      <input
        type="text"
        placeholder= {contenidoInput}
        value={nombreUsuario}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        maxLength={15}
        className='claseBotonEntrada'
        disabled={!inputHabilitado}
      />
    </div>

  )
}

