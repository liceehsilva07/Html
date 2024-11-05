function moverBotao() {
    const botao = document.getElementById('fugitivo');
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;

    const novaPosicaoX = Math.floor(Math.random() * (larguraJanela - botao.offsetWidth));
    const novaPosicaoY = Math.floor(Math.random() * (alturaJanela - botao.offsetHeight));

    botao.style.position = 'absolute';
    botao.style.left = `${novaPosicaoX}px`;
    botao.style.top = `${novaPosicaoY}px`;
}
