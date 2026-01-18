/**
 * Funcion que genera las imagenes en base a la carta obtenida
 *
 * @param {number} turno numero de jugador
 * @param {string} carta 
 * @param {HTMLElement} divCartasJugadores 
 */
export const crearCarta = (turno, carta, divCartasJugadores) => {
    if(!divCartasJugadores) throw new Error('Argumento divCartasJugadores es necesario');
    
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${carta}.png`;
    imgCarta.classList.add('carta');

    divCartasJugadores[turno].append(imgCarta);
}