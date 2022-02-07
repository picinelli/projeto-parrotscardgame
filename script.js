let mesa = document.querySelector('.mesa');
let perguntaQuantidade = null;
let imagens = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
let imagensPares = [];
let contadorFim = 0;
let contadorJogadas = 0;
let iniciador = null;
let cronometro = document.querySelector('.cronometro');


// Pergunta ao jogador a quantidade de cartas que quer jogar, limitado de 4 a 14
function perguntaCartas() {
    perguntaQuantidade = parseInt(window.prompt('Escolha uma quantidade PAR de cartas de 4 a 14'));
    if (perguntaQuantidade % 2 !== 0) {
        window.alert('Por favor, escolha um numero PAR de 4 a 14!');
        perguntaCartas();
    } else if (perguntaQuantidade < 4) {
        window.alert('Por favor, escolha um numero maior que 3!');
        perguntaCartas();
    } else if (perguntaQuantidade > 14) {
        window.alert('Por favor, escolha um numero menor que 15!');
        perguntaCartas();
    } else {
        misturaCarta();
        criarCartas();
    }
}
// Criacao de cartas mediante a quantidade de cartas escolhidas pelo jogador
function criarCartas () {
    let contador = 0;
    while (contador < (perguntaQuantidade)) {
    mesa.innerHTML = mesa.innerHTML + `
    <div class="card" onclick="virarCartas(this)" data-identifier="card">
        <div class="front-face face" data-identifier="back-face">
            <img src="conteudo/papagaio-padrao.svg" alt="Papagaio-Padrao">
        </div>
        <div class="back-face face" data-identifier="front-face">
            <img src="conteudo/${imagensPares[contador]}" alt="Papagaio-Verso">
        </div>
    </div>
    `
    contador++;
    }
    iniciador = setInterval(comecarCronometro, 1000)
}
// funcao dada pelo exercicio para embaralhar
function comparador() { 
	return Math.random() - 0.5; 
}
// Push em array para formar Pares de carta e Mistura para aleatoriedade
function misturaCarta() {
    for (let i = 0; i < (perguntaQuantidade / 2); i++) {
        imagens.sort(comparador);
        imagensPares.push(imagens[0]);
        imagensPares.push(imagens[0]);
        imagens.shift();
    }
    imagensPares.sort(comparador);
}
// Define as ações das cartas no clique
function virarCartas(elemento) {
    contadorJogadas++

    const cartaVirada = document.querySelector('.card .virar-frente');
    if (cartaVirada !== null) {
        const carta1 = cartaVirada.parentNode.querySelector('.back-face').innerHTML;
        const carta2 = elemento.querySelector('.back-face').innerHTML;
// se as cartas forem iguais, manter virada.
        if (carta1 === carta2) {
            manterCartasViradas(elemento);
            manterCartasViradas(cartaVirada.parentNode);
            setTimeout(() => checarFim(), 1000);
// se as cartas forem diferentes, aguardar 1s e desvirar
        } else if (carta1 !== carta2) {
            virarCarta(elemento);
            setTimeout(() => desvirarCartas(elemento), 1000);
            setTimeout(() => desvirarCartas(cartaVirada.parentNode), 1000);
        }
// se nenhum dos casos anteriores acontecerem, será a primeira carta clicada
    } else {
        virarCarta(elemento);
    }
}
// funcao que mantem as cartas viradas, caso forem do mesmo tipo
function manterCartasViradas(carta) {
    carta.querySelector('.front-face').classList.remove('virar-frente');
    carta.querySelector('.back-face').classList.remove('virar-tras');
    carta.querySelector('.front-face').classList.add('virar-frente-fixo');
    carta.querySelector('.back-face').classList.add('virar-tras-fixo');
}
// funcao que vira a carta
function virarCarta(elemento) {
    elemento.querySelector('.front-face').classList.add('virar-frente');
    elemento.querySelector('.back-face').classList.add('virar-tras');
}
// funcao que desvira a carta
function desvirarCartas(carta) {
    carta.querySelector('.front-face').classList.remove('virar-frente');
    carta.querySelector('.back-face').classList.remove('virar-tras');
}
// funcao que checa se todas as cartas estao viradas e envia alert parabenizando
function checarFim() {
    contadorFim++
    if (contadorFim === (perguntaQuantidade / 2)) {
        clearInterval(iniciador);
        window.alert(`Parabéns! Você ganhou em ${contadorJogadas} jogadas e em ${parseInt(cronometro.innerHTML)} segundos!`);
        perguntaIniciarNovamente();
    }
}
// funcao que pergunta se o player deseja jogar novamente, caso tenha ganhado.
function perguntaIniciarNovamente () {
    let pergunta = window.prompt('Gostaria de jogar novamente? (s ou n)');
    if (pergunta === 'n') {
        window.alert('Tudo certo! Obrigado por jogar :)');
    } else if (pergunta === 's') {
        // declarando as variaveis novamente para resetar o jogo e chamando a funcao 
        // "perguntaCartas" para reiniciar todo o processo
        mesa.innerHTML = '';
        perguntaQuantidade = null;
        imagensPares = [];
        contadorFim = 0;
        contadorJogadas = 0;
        imagens = ['bobrossparrot.gif', 'explodyparrot.gif', 'fiestaparrot.gif', 'metalparrot.gif', 'revertitparrot.gif', 'tripletsparrot.gif', 'unicornparrot.gif'];
        perguntaCartas();
        cronometro.innerHTML = 0;
    } else {
        perguntaIniciarNovamente();
    }
}
// funcao apenas para aumentar o cronometro de 1 em 1
function comecarCronometro() {
    cronometro.innerHTML = parseInt(cronometro.innerHTML) + 1;
}



perguntaCartas()
misturaCarta()
