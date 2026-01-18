import _ from 'underscore';

/**
 * Funcion que crea un nuevo deck
 *
 * @param {Array<string>} tipoDeCarta Ejm: ['C', 'D', 'H', 'S']
 * @param {Array<string>} tiposEspeciales  Ejm: ['A', 'J', 'Q', 'K']
 * @returns {Array<string>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tipoDeCarta, tiposEspeciales) => {
    if(!tipoDeCarta || tipoDeCarta.length === 0) throw new Error('tipoDeCarta es obligatorio como un arreglo de string');
    if(!tiposEspeciales || tiposEspeciales.length === 0) throw new Error('tipoDeCarta es obligatorio como un arreglo de string');

    let deck = [];
    for(let tipo of tipoDeCarta){
        for(let i = 2; i <= 10; i++){
            deck.push(i + tipo);
        }
        for(let especial of tiposEspeciales){
           deck.push(especial + tipo);
        }
    }

    return _.shuffle(deck);
}