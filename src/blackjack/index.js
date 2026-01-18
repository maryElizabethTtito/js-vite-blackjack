import {crearDeck, pedirCarta, turnoComputadora, acumularPuntos, crearCarta} from './usecases/index.js';

const miModulo = (() => {
    'use strict';

    //Declaraciones
    let deck = [];
    const tipos = ['C', 'D', 'H', 'S'],
          especiales = ['A', 'J', 'Q', 'K'];

    let puntosJugadores = [];

    //Referencias HTML
    const puntosHtml = document.querySelectorAll('small'),
          divCartasJugadores = document.querySelectorAll('.divCartas');

    const btnNuevo = document.querySelector('#btnNuevo'),
          btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener');

    //Funciones
    const inicializarJuego = ( numJugadores = 2 ) => {
        deck = crearDeck(tipos, especiales);
        puntosJugadores = [];
        for(let i = 0; i < numJugadores; i++){
            puntosJugadores.push(0);
        }

        puntosHtml.forEach(
            elem => elem.innerText = 0
        );

        divCartasJugadores.forEach(
            elem => elem.innerHTML = ''
        );

        btnPedir.disabled = false;
        btnDetener.disabled = false;
    }

    //Eventos
    btnNuevo.addEventListener('click', () => {
        inicializarJuego();
    });

    btnPedir.addEventListener('click', () => {
        const carta = pedirCarta(deck);
        const puntosJugador = acumularPuntos(0, carta, puntosJugadores, puntosHtml)
        crearCarta(0, carta, divCartasJugadores);

        if (puntosJugador > 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHtml, divCartasJugadores);
        } else if (puntosJugador === 21){
            btnPedir.disabled = true;
            btnDetener.disabled = true;
            turnoComputadora(puntosJugador, deck, puntosJugadores, puntosHtml, divCartasJugadores);
        }

    });

    btnDetener.addEventListener('click', () => {
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugadores[0], deck, puntosJugadores, puntosHtml, divCartasJugadores);
    });

    return {
        nuevoJuego: inicializarJuego(),
    };

})();