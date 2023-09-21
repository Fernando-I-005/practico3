import React, { useState } from 'react'
import { DisplayParrafo2 } from './DisplayParrafo2'
import { DisplayBotonera } from './DisplayBotonera'
import { BotonJugar } from './BotonJugar'
import { DisplayImgGrupo } from './DisplayImgGrupo'
import { BotonReinicio } from './BotonReinicio'
import "./CompPrincipal.css"



export const CompPrincipal = ({ nombreUsuario, nombre2, imagenPiedra, imagenPapel, imagenTijeras, imagenIncognita, contTriunfosUsuario, setcontTriunfosUsuario, contadorTriunfosPC, setContadorTriunfosPC, contadorRound, setContadorRound }) => {

    const [eleccionUsuario, setEleccionUsuario] = useState("nada");
    const [eleccionPC, setEleccionPC] = useState("nada")
    const opciones = ['piedra', 'papel', 'tijeras']
    const [ganadorround, setganadorround] = useState("sin ganador aun")
    const [imagenDeEleccionusuario, setimagenDeEleccionusuario] = useState(imagenIncognita)
    const [imagenDeEleccionPC, setimagenDeEleccionPC] = useState(imagenIncognita)
    const [textoparrafo2, setTextoparrafo2] = useState("Elija su jugada y presione 'Jugar'.")



    return (
        <div className='claseCompPrinExt'>
            <section className='claseCompPrinParrafo'>
                <DisplayParrafo2
                    textoparrafo2={textoparrafo2}
                    setTextoparrafo2={setTextoparrafo2}
                />



                <h4>(usado por desarrollador) Usuario eligio {eleccionUsuario}, Pc eligio {eleccionPC}</h4>

            </section>

            <section>
                <DisplayBotonera
                    imagenPiedra={imagenPiedra}
                    imagenPapel={imagenPapel}
                    imagenTijeras={imagenTijeras}
                    imagenIncognita={imagenIncognita}

                    eleccionUsuario={eleccionUsuario}
                    setEleccionUsuario={setEleccionUsuario}

                    eleccionPC={eleccionPC}
                    setEleccionPC={setEleccionPC}

                    opciones={opciones}

                    imagenDeEleccionPC={imagenDeEleccionPC}
                    setimagenDeEleccionPC={setimagenDeEleccionPC}

                    imagenDeEleccionusuario={imagenDeEleccionusuario}
                    setimagenDeEleccionusuario={setimagenDeEleccionusuario}
                />
            </section>

            <section>
                <BotonJugar
                    eleccionPC={eleccionPC}
                    eleccionUsuario={eleccionUsuario}
                    ganadorround={ganadorround}
                    setganadorround={setganadorround}
                    setimagenDeEleccionPC={setimagenDeEleccionPC}
                    imagenDeEleccionPC={imagenDeEleccionPC}
                    imagenPiedra={imagenPiedra}
                    imagenPapel={imagenPapel}
                    imagenTijeras={imagenTijeras}
                    setTextoparrafo2={setTextoparrafo2}


                    contTriunfosUsuario={contTriunfosUsuario}
                    setcontTriunfosUsuario={setcontTriunfosUsuario}
                    contadorTriunfosPC={contadorTriunfosPC}
                    setContadorTriunfosPC={setContadorTriunfosPC}
                    contadorRound={contadorRound}
                    setContadorRound={setContadorRound}
                />
                <h3> Resultado: {ganadorround}</h3>
            </section>

            <section>
                <DisplayImgGrupo
                    imagenPiedra={imagenPiedra}
                    imagenPapel={imagenPapel}
                    imagenTijeras={imagenTijeras}
                    imagenIncognita={imagenIncognita}
                    nombreUsuario={nombreUsuario}
                    nombrePC="Computadora"
                    imagenDeEleccionusuario={imagenDeEleccionusuario}
                    setimagenDeEleccionusuario={setimagenDeEleccionusuario}
                    setimagenDeEleccionPC={setimagenDeEleccionPC}
                    imagenDeEleccionPC={imagenDeEleccionPC}

                />
            </section>


            <section>
                <BotonReinicio />
            </section>

        </div>
    )
}
//no aplica formato parece al usar <> </> vacio