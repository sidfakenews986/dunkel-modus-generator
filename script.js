const toggleButton = document.getElementById('toggle-theme');
toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.innerText = document.body.classList.contains('dark-mode') ? 'Hellen Modus Aktivieren' : 'Dunkelmodus Aktivieren';
});