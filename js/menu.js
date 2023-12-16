// Sélectionnez le bouton de la taskbar
const startMenuButton = document.getElementById('start-menu-button');
// Sélectionnez le menu
const menu = document.querySelector('.menu');
// Sélectionnez le logo du menu
const menuLogo = document.getElementById('menu-logo');

// Fermez le menu par défaut en ajoutant la classe .menu-hidden
menu.classList.add('menu-hidden');

// Ajoutez un écouteur d'événements pour le clic sur le bouton de la taskbar
startMenuButton.addEventListener('click', () => {
    // Basculez la classe .menu-hidden pour afficher ou masquer le menu
    menu.classList.toggle('menu-hidden');
});

// Ajoutez un écouteur d'événements pour le clic sur le logo du menu
menuLogo.addEventListener('click', () => {
    // Ouvrez le menu en retirant la classe .menu-hidden
    menu.classList.remove('menu-hidden');
});

// Ajoutez un écouteur d'événements pour le clic en dehors du menu et du logo
document.addEventListener('click', (e) => {
    // Vérifiez si l'élément cliqué n'est pas le menu ni le logo
    if (!menu.contains(e.target) && e.target !== menuLogo && e.target !== startMenuButton) {
        // Si c'est le cas, masquez le menu en ajoutant la classe .menu-hidden
        menu.classList.add('menu-hidden');
    }
});
