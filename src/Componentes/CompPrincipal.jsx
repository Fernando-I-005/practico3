import React from 'react'
import { DisplayParrafo2 } from './DisplayParrafo2'
import { DisplayBotonera } from './DisplayBotonera'
import { BotonJugar } from './BotonJugar'
import { DisplayImgGrupo } from './DisplayImgGrupo'
import { BotonReinicio } from './BotonReinicio'
import "./CompPrincipal.css"



export const CompPrincipal = ({nombre1,nombre2}) => {
    return (
        <div className='claseCompPrinExt'>
            <section className='claseCompPrinParrafo'>
                <DisplayParrafo2 />
            </section>
            <section>
                <DisplayBotonera />
            </section>
            <BotonJugar />
            <section>
                <DisplayImgGrupo valor1={nombre1} valor2={nombre2}/>
            </section>
            <section>
                <BotonReinicio />
            </section>

        </div>
    )
}
//no aplica formato parece al usar <> </> vacio