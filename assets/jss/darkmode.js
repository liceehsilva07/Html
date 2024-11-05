function alternarModo() {
    const body = document.body;
    const button = document.getElementById('darkModeButton');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        button.textContent = 'Light Mode';
        body.style.backgroundColor = '#000000';
        body.style.color = '#FFFFFF';
    } else {
        button.textContent = 'Dark Mode';
        body.style.backgroundColor = '#FFFFFF';
        body.style.color = '#000000';
    }
}
