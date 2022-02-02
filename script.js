
let mesa = document.querySelector('.mesa')
function criarCartas() {
    const perguntaQuantidade = parseInt(window.prompt('Escolha uma quantidade PAR de cartas de 4 a 14'));
    let contador = 0;
    baralho = [];
    while (contador < perguntaQuantidade) {
        let carta = document.querySelector('.carta');
        baralho.push(carta)
        mesa.innerHTML = mesa.innerHTML + baralho[contador];
        contador++
    }
}
criarCartas()