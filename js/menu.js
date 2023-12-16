// JavaScript pour ouvrir/fermer le menu depuis le bouton dans la taskbar
document.getElementById('start-menu-button').addEventListener('click', toggleMenu);

// Fonction pour ouvrir/fermer le menu
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('menu-open');

    // Ajoute un gestionnaire d'événements pour fermer le menu lorsque l'utilisateur clique en dehors
    if (menu.classList.contains('menu-open')) {
        document.addEventListener('click', closeMenuOutsideClick);
    } else {
        document.removeEventListener('click', closeMenuOutsideClick);
    }
}

// Fonction pour fermer le menu
function closeMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.remove('menu-open');

    // Désactive le gestionnaire d'événements pour fermer le menu en dehors
    document.removeEventListener('click', closeMenuOutsideClick);
}

// Fonction pour fermer le menu lorsque l'utilisateur clique en dehors
function closeMenuOutsideClick(event) {
    const menu = document.querySelector('.menu');
    if (!menu.contains(event.target) && event.target !== document.getElementById('start-menu-button')) {
        closeMenu();
    }
}
