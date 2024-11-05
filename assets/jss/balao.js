let tamanhoBalao = 100; 

function inflarBalao() {
    const balao = document.getElementById('balao');
    tamanhoBalao += 20; 

    balao.style.width = `${tamanhoBalao}px`;
    balao.style.height = `${tamanhoBalao}px`;

    if (tamanhoBalao >= 200) { 
        balao.src = 'assets/img/explosao.png'; 
        balao.alt = 'Explosão!';
        balao.style.width = '150px'; 
        balao.style.height = '150px';
        
        alert('O balão estourou!');

        setTimeout(() => {
            balao.src = 'assets/img/balao.png';
            balao.alt = 'Balão';
            balao.style.width = '100px';
            balao.style.height = '100px';
            tamanhoBalao = 100; 
        }, 1000);
    }
}
