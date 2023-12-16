// Récupérez l'élément du logo du menu
const menuLogo = document.querySelector('.menu-logo');

// Récupérez l'élément de l'heure
const clockElement = document.getElementById('clock');

// Récupérez l'élément de la date
const dateElement = document.getElementById('date');

// Récupérez l'élément du menu
const menu = document.querySelector('.menu');

// Écoutez le clic sur le logo pour ouvrir le menu
menuLogo.addEventListener('click', () => {
    // Ajoutez une classe pour afficher le menu (utilisez la classe 'menu-open' que vous avez définie précédemment)
    menu.classList.add('menu-open');
});

// Écoutez le clic sur l'heure pour fermer le menu si ouvert
clockElement.addEventListener('click', () => {
    // Vérifiez si le menu est ouvert
    if (menu.classList.contains('menu-open')) {
        // Retirez la classe 'menu-open' pour fermer le menu
        menu.classList.remove('menu-open');
    }
});

// Écoutez le clic sur la date pour fermer le menu si ouvert
dateElement.addEventListener('click', () => {
    // Vérifiez si le menu est ouvert
    if (menu.classList.contains('menu-open')) {
        // Retirez la classe 'menu-open' pour fermer le menu
        menu.classList.remove('menu-open');
    }
});

// Écoutez le clic en dehors du menu pour le fermer
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && !menuLogo.contains(event.target) && !clockElement.contains(event.target) && !dateElement.contains(event.target)) {
        // Retirez la classe 'menu-open' pour fermer le menu
        menu.classList.remove('menu-open');
    }
}
