let mesa = document.querySelector('.mesa');
let perguntaQuantidade = null;
let imagens = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
let imagensPares = [];
const faceTraseiraArr = document.querySelectorAll('.back-face');

// Pergunta ao jogador a quantidade de cartas que quer jogar, limitado de 4 a 14
function perguntaCartas() {
    perguntaQuantidade = parseInt(window.prompt('Escolha uma quantidade PAR de cartas de 4 a 14'));
    if (perguntaQuantidade % 2 !== 0) {
        window.alert('Por favor, escolha um numero PAR de 4 a 14!')
        perguntaCartas()
    } else if (perguntaQuantidade < 4) {
        window.alert('Por favor, escolha um numero maior que 3!')
        perguntaCartas()
    } else if (perguntaQuantidade > 14) {
        window.alert('Por favor, escolha um numero menor que 15!')
        perguntaCartas()
    } else {
        misturaCarta()
        criarCartas()
    }
}
// Criacao de cartas mediante a quantidade de cartas escolhidas pelo jogador
function criarCartas () {
    let contador = 0
    while (contador < (perguntaQuantidade)) {
    mesa.innerHTML = mesa.innerHTML + `
    <div class="card" onclick="rodarCartas(this)">
        <div class="front-face face">
            <img src="conteudo/papagaio-padrao.svg" alt="Papagaio-Padrao">
        </div>
        <div class="back-face face">
        <img src="conteudo/${imagensPares[contador]}" alt="Papagaio-Verso">
        </div>
    </div>
    `
    contador++
    }
}
function comparador() { 
	return Math.random() - 0.5; 
}
// Push em array para formar Pares de carta e Mistura para aleatoriedade
function misturaCarta() {
    for (let i = 0; i < (perguntaQuantidade / 2); i++) {
        imagens.sort(comparador)
        imagensPares.push(imagens[0])
        imagensPares.push(imagens[0])
        imagens.shift()
    }
    imagensPares.sort(comparador)
}
function rodarCartas(elemento) {
    let frente = elemento.querySelector('.front-face')
    let tras = elemento.querySelector('.back-face');
    frente.classList.add('virar-frente')
    tras.classList.add('virar-tras');
}


perguntaCartas()
misturaCarta()

// Mudar o verso de acordo com as cartas 
