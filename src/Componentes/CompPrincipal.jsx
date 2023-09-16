import React, { useState } from 'react'
import { DisplayParrafo2 } from './DisplayParrafo2'
import { DisplayBotonera } from './DisplayBotonera'
import { BotonJugar } from './BotonJugar'
import { DisplayImgGrupo } from './DisplayImgGrupo'
import { BotonReinicio } from './BotonReinicio'
import "./CompPrincipal.css"



export const CompPrincipal = ({ nombre1, nombre2 }) => {

    const [eleccionUsuario, setEleccionUsuario] = useState("valor inicialx");
    const [eleccionPC, setEleccionPC] = useState("valor inicialy")
    const opciones = ['piedra', 'papel', 'tijeras']
    const [ganadorround, setganadorround] = useState("nadie")
    const [imagenDeEleccionusuario, setimagenDeEleccionusuario] = useState("practico3/recursos/incognita.png")
    const [imagenDeEleccionPC, setimagenDeEleccionPC] = useState("practico3/recursos/incognita.png")



    return (
        <div className='claseCompPrinExt'>
            <section className='claseCompPrinParrafo'>
                <DisplayParrafo2 />
                <h5>usuario eligio {eleccionUsuario}</h5>
                <h5>pc eligio {eleccionPC}</h5>
            </section>

            <section>
                <DisplayBotonera
                    eleccionUsuario={eleccionUsuario}
                    setEleccionUsuario={setEleccionUsuario}
                    eleccionPC={eleccionPC}
                    setEleccionPC={setEleccionPC}
                    opciones={opciones}
                    setimagenDeEleccionPC={setimagenDeEleccionPC}
                    imagenDeEleccionPC={imagenDeEleccionPC}
                />
            </section>

            <section>
                <BotonJugar
                    eleccionPC={eleccionPC}
                    eleccionUsuario={eleccionUsuario}
                    ganadorround={ganadorround}
                    setganadorround={setganadorround}
                />
                <h5> ganador {ganadorround}</h5>
            </section>

            <section>
                <DisplayImgGrupo
                    valor1={nombre1}
                    valor2={nombre2}
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