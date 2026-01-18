import { pedirCarta } from './pedir-carta.js';
import { acumularPuntos } from './acumular-puntos.js';
import { crearCarta } from './crear-carta.js';
import { determinarGanador } from './determinar-ganador.js';
/**
 * Funciones que contine la logica de la computadora
 *
 * @param {number} puntosMinimos 
 * @param {Array<string>} [deck=[]] 
 * @param {Array<string>} [puntosJugadores=[]] 
 * @param {HTMLElement} puntosHtml 
 * @param {HTMLElement} divCartasJugadores 
 */
export const turnoComputadora = (puntosMinimos, deck = [], puntosJugadores = [], puntosHtml, divCartasJugadores) => {

    if(!puntosMinimos) throw new Error('Puntos minimos son necesario');
    if(!deck) throw new Error('El deck es necesario');
    if(!puntosJugadores) throw new Error('El numero de jugadores es necesario');
    if(!puntosHtml) throw new Error('Argumento puntosHtml es necesario');
    if(!divCartasJugadores) throw new Error('Argumento divCartasJugadores es necesario');

    let puntosComputadora = 0;
    do{
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(puntosJugadores.length - 1, carta, puntosJugadores, puntosHtml)
        crearCarta(puntosJugadores.length - 1, carta, divCartasJugadores);

        if(puntosMinimos > 21){
            break;
        }
    } while((puntosComputadora <= puntosMinimos) && (puntosMinimos <= 21));

    determinarGanador(puntosJugadores);
}