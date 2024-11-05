function exibirFrase() {
    const frases = [
        "Acredite em si mesmo e todo o resto se encaixará.",
        "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
        "Não desista, pois o início é sempre a parte mais difícil.",
        "Você é mais forte do que pensa, e será mais feliz do que imagina.",
        "Transforme seus sonhos em metas e trabalhe para alcançá-las!",
        "Seja a mudança que você quer ver no mundo.",
        "Grandes conquistas começam com pequenos passos.",
        "Nunca é tarde para começar a ser quem você quer ser.",
        "A persistência é o caminho do êxito.",
        "O futuro depende do que fazemos no presente."
    ];

    const indiceAleatorio = Math.floor(Math.random() * frases.length);
    document.getElementById('frase').textContent = frases[indiceAleatorio];
}
