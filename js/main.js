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

window.addEventListener('load', function() {
    const loadingScreen = document.getElementById('loading-screen');

    // Attendre la fin de l'animation de la barre de chargement
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.visibility = 'hidden';

        // Optionnel : Retirer l'écran de chargement du DOM après disparition
        setTimeout(() => {
            loadingScreen.parentNode.removeChild(loadingScreen);
        }, 1000); // Durée de l'effet de fondu
    }, 3000); // Le temps total avant de cacher l'écran de chargement
});
