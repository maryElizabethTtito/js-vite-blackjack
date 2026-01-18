/**
 * Funcion que devuelve la carta
 *
 * @param {Array<string>} deck 
 * @returns {string} 
 */

export const pedirCarta = (deck) => {
    if(!deck || deck.length === 0){
        throw new Error('No hay cartas en el deck');
    }
    return deck.pop();
}