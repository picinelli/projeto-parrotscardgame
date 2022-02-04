let mesa = document.querySelector('.mesa')
function criarCartas() {
// Pergunta ao jogador a quantidade de cartas que quer jogar, limitado de 4 a 14
    const perguntaQuantidade = parseInt(window.prompt('Escolha uma quantidade PAR de cartas de 4 a 14'));
    if (perguntaQuantidade % 2 !== 0) {
        window.alert('Por favor, escolha um numero PAR de 4 a 14!')
        criarCartas()
    } else if (perguntaQuantidade < 4) {
        window.alert('Por favor, escolha um numero maior que 3!')
        criarCartas()
    } else if (perguntaQuantidade > 14) {
        window.alert('Por favor, escolha um numero menor que 15!')
        criarCartas()
    }
// Criacao de cartas mediante a quantidade de cartas escolhidas pelo jogador
    let contador = 0
    while (contador < perguntaQuantidade) {
    mesa.innerHTML = mesa.innerHTML + `
    <div class="carta">
    <img src="conteudo/papagaio-padrao.svg" alt="">
    </div>
    `
    contador++
    }
}
criarCartas()
