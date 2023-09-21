import React from 'react'
import "./BotonJugar.css"


export const BotonJugar = ({ setganadorround, ganadorround, eleccionUsuario, eleccionPC, setimagenDeEleccionPC, imagenDeEleccionPC, imagenPiedra, imagenPapel, imagenTijeras, textoparrafo2, setTextoparrafo2, contTriunfosUsuario, setcontTriunfosUsuario, contadorTriunfosPC, setContadorTriunfosPC, contadorRound, setContadorRound }) => {

    const determinarGanador = () => {
        if (eleccionPC === "tijeras" && eleccionUsuario === "papel") {
            setganadorround("Gana PC")
            setContadorRound(contadorRound + 1)
            setContadorTriunfosPC(contadorTriunfosPC + 1)
        }
        else if (eleccionUsuario === "tijeras" && eleccionPC === "papel") {
            setganadorround("gana Usuario")
            setContadorRound(contadorRound + 1)
            setcontTriunfosUsuario(contTriunfosUsuario + 1)
        }
        else if (eleccionPC === "tijeras" && eleccionUsuario === "piedra") {
            setganadorround("gana Usuario")
            setContadorRound(contadorRound + 1)
            setcontTriunfosUsuario(contTriunfosUsuario + 1)
        }
        else if (eleccionUsuario === "tijeras" && eleccionPC === "piedra") {
            setganadorround("Gana PC")
            setContadorRound(contadorRound + 1)
            setContadorTriunfosPC(contadorTriunfosPC + 1)
        }
        else if (eleccionPC === "piedra" && eleccionUsuario === "papel") {
            setganadorround("gana Usuario")
            setContadorRound(contadorRound + 1)
            setcontTriunfosUsuario(contTriunfosUsuario + 1)
        }
        else if (eleccionUsuario === "piedra" && eleccionPC === "papel") {
            setganadorround("Gana PC")
            setContadorRound(contadorRound + 1)
            setContadorTriunfosPC(contadorTriunfosPC + 1)
        }
        else {
            setganadorround("empate")
        }
    }

    /*const cambiarImagenPC = () => {   //complatr con imagen pc
        setimagenDeEleccionPC(imagenDeEleccionPC);
      };*/
    const cambiarImagenPC = () => {
        if (eleccionPC === "piedra") {
            setimagenDeEleccionPC(imagenPiedra)
        }
        else if (eleccionPC === "papel") {
            setimagenDeEleccionPC(imagenPapel)
        }
        else {
            setimagenDeEleccionPC(imagenTijeras)
        }
    };

    /*const cambiarTextoParrafo2 = () => {  // da el ganador del estado anterior, no sirve
        setTextoparrafo2(ganadorround)
    };*/

    /*condicional si llega a 3 partidos ganados*/
// verrrrrrrr...finaliza a la vuelta siguiente luego de 3 triunfos
    const mejorde5 = () => {
        if (contTriunfosUsuario === 3) {
            setTextoparrafo2("¡¡Felicitaciones!! ha vencido a la computadora.");
            //deshabilitarTodosBotones();
            //sonidoGanador.play();
        } else if (contadorTriunfosPC === 3) {
            setTextoparrafo2("¡¡ Ha sido derrotado!! La computadora ganó.");
            //deshabilitarTodosBotones()
            //sonidoPerdedor.play()
        } else {
        }
    }










    const handleClickJugar = () => {
        determinarGanador();
        cambiarImagenPC();
        mejorde5(); // no funciona bien
        //cambiarTextoParrafo2();
    };


    return (
        <>
            <button
                onClick={handleClickJugar}
                className='claseBJ' 
            >
                Jugar
            </button>
        </>
    )
}

/*
//funcion actualizar marcador//
function actualizarMarcador(ganadosusuario, round, ganadospc) {
    var marcador1 = document.getElementById("marcador1");  //elemento de párrafo por su ID//
    marcador1.innerHTML = ganadosusuario;  // Cambiar el contenido// 

    var marcador2 = document.getElementById("marcador2");  //elemento de párrafo por su ID//
    marcador2.innerHTML = round;  // Cambiar el contenido//

    var marcador3 = document.getElementById("marcador3");  //Obtener el elemento de párrafo por su ID
    marcador3.innerHTML = ganadospc;  // Cambiar el contenido
}



/funcion determinar ganador//
function determinarGanador(eleccionPC, eleccionUsuario) {
    var ganador
    if (eleccionPC == TIJERA && eleccionUsuario == PAPEL) {
        ganador = 1
    }
    else if (eleccionUsuario == TIJERA && eleccionPC == PAPEL) {
        ganador = 2
    }
    else if (eleccionPC == TIJERA && eleccionUsuario == PIEDRA) {
        ganador = 2
    }
    else if (eleccionUsuario == TIJERA && eleccionPC == PIEDRA) {
        ganador = 1
    }
    else if (eleccionPC == PIEDRA && eleccionUsuario == PAPEL) {
        ganador = 2
    }
    else if (eleccionUsuario == PIEDRA && eleccionPC == PAPEL) {
        ganador = 1
    }
    else {
        ganador = 3;
    }
    //console.log(ganador + " return antes de salir de la funcion")//
    ;
    return ganador;
}

 //condicional segun sea el ganador o si hay empate //
    if (ganador == 1) {
        console.log("gano pc");
        contadorPartidosPC++;
        console.log("Usuario " + contadorPartidosUsuario + " " + "Computadora: " + contadorPartidosPC);
        contadorRound++
        actualizarMarcador(contadorPartidosUsuario, contadorRound, contadorPartidosPC)
        cambiarContenidoParrafo1("Enfrentamiento n° " + contadorRound + ". Ganó la Computadora.");
        sonidoPierde.play();

    } else if (ganador == 2) {
        console.log("gano usuario");
        contadorPartidosUsuario++;
        console.log("Usuario " + contadorPartidosUsuario + " " + "Computadora: " + contadorPartidosPC);
        contadorRound++
        actualizarMarcador(contadorPartidosUsuario, contadorRound, contadorPartidosPC)
        cambiarContenidoParrafo1("Enfrentamiento n° " + contadorRound + ". Ganó el usuario.");
        sonidoGana.play();

    } else {
        console.log("Usuario " + contadorPartidosUsuario + " " + "Computadora: " + contadorPartidosPC);
        cambiarContenidoParrafo1("Enfrentamiento empatado! por favor elija nuevamente.");
        sonidoEmpate.play();
        
    }



     //condicional si llega a 3 partidos ganados //
    if (contadorPartidosUsuario == 3) {
        cambiarContenidoParrafo2("¡¡Felicitaciones " + usuario + "!! ha vencido a la computadora.");
        deshabilitarTodosBotones();
        sonidoGanador.play();
    } else if (contadorPartidosPC == 3) {
        cambiarContenidoParrafo2("¡¡" + usuario + " ha sido derrotado!! La computadora ganó.");
        deshabilitarTodosBotones()
        sonidoPerdedor.play()
    } else {
    }

});*/