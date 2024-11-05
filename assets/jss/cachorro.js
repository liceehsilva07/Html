const cachorro = document.getElementById('cachorro');

function mostrarCachorroFeliz() {
    cachorro.src = 'assets/img/cachorro_feliz.jpg';
}

function mostrarCachorroTriste() {
    cachorro.src = 'assets/img/cachorro_triste.jpeg';
}

cachorro.addEventListener('mouseover', mostrarCachorroFeliz);
cachorro.addEventListener('mouseout', mostrarCachorroTriste);
