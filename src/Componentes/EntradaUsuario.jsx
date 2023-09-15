import React,{useState} from 'react'
import "./EntradaUsuario.css"

export const EntradaUsuario = ({ nombreUsuario, setNombreUsuario }) => {
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
        placeholder="Ingrese su nombre"
        value={nombreUsuario}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        maxLength={20}
        className='claseBotonEntrada'
        disabled={!inputHabilitado}
      />
    </div>

  )
}

