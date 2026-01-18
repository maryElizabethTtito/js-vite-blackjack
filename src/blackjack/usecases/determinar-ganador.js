
/**
 * Funciones que contiene la logica para determinar si gano el jugador o la computadora
 *
 * @param {Array<number>} puntosJugadores Array que contiene los puntos
 */
export const determinarGanador = (puntosJugadores) => {
    const [puntosMinimos, puntosComputadora] = puntosJugadores;
    setTimeout(() => {
                if(puntosMinimos === puntosComputadora){
                    alert('Nadie gana');
                } else if (puntosMinimos > 21){
                    alert('Computadora gana');
                } else if (puntosComputadora > 21) {
                    alert('Jugador Gana');
                } else{
                    alert('Computadora gana');
                }
            }, 30);
}