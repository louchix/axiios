// Scripts généraux pour tout le site

// Fonction pour ouvrir/fermer le menu de démarrage
function toggleStartMenu() {
    const startMenu = document.getElementById('start-menu');
    startMenu.classList.toggle('open');
}

// Ajoutez des écouteurs d'événements pour les boutons de la taskbar
document.getElementById('start-menu-button').addEventListener('click', toggleStartMenu);

// Cacher le menu de démarrage si l'utilisateur clique en dehors
document.addEventListener('click', function(event) {
    const startMenu = document.getElementById('start-menu');
    if (!startMenu.contains(event.target) && !document.getElementById('start-menu-button').contains(event.target)) {
        startMenu.classList.remove('open');
    }
});
