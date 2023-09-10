import React from 'react'
import { DisplayMarcador } from './DisplayMarcador'
import { DisplayEnfrentamientos } from './DisplayEnfrentamientos'
import { DisplayParrafo1 } from './DisplayParrafo1'
import "./CompMarcador.css"


export const CompMarcador = ({nombre1,marcador1,nombre2,marcador2,round,textoParr1}) => {
    return (
        <div className="claseContMarcador">
            <section className="claseContMarcador2">
                <span className="claseContMarcador3" ><DisplayMarcador nombre={nombre1} marcador={marcador1}/></span>
                <span className="claseContMarcadorRound"> <DisplayEnfrentamientos roundN={round}/></span>
                <span className="claseContMarcador3"><DisplayMarcador nombre={nombre2} marcador={marcador2}/>   {/*nombre="nombre1" y nombre={"nombre1"} estan mal!!*/}
                </span>
            </section>
            <section className="claseContMarcadorParrafo ">
                <DisplayParrafo1 textoParrafo1={textoParr1} />
            </section>
        </div>
    )
}
