import { valorCarta } from './valor-carta';
/**
 * Funcion que devuelve los puntos acumulados
 *
 * @param {number} turno 
 * @param {string} carta 
 * @param {Array<number>} puntosJugadores 
 * @param {HTMLElement} puntosHtml 
 * @returns {number} 
 */
export const acumularPuntos = (turno, carta, puntosJugadores = [], puntosHtml) => {
    puntosJugadores[turno] += valorCarta(carta);
    puntosHtml[turno].innerText = puntosJugadores[turno];
    return puntosJugadores[turno];
}