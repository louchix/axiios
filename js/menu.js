// Sélectionnez le bouton de la taskbar
const startMenuButton = document.getElementById('start-menu-button');
// Sélectionnez le menu
const menu = document.querySelector('.menu');
// Sélectionnez le logo du menu
const menuLogo = document.getElementById('menu-logo');

// Vérifiez si les éléments sont correctement sélectionnés
console.log('startMenuButton:', startMenuButton);
console.log('menu:', menu);
console.log('menuLogo:', menuLogo);

// Fermez le menu par défaut en ajoutant la classe .menu-hidden
menu.classList.add('menu-hidden');

// Ajoutez un écouteur d'événements pour le clic sur le bouton de la taskbar
startMenuButton.addEventListener('click', () => {
    // Basculez la classe .menu-hidden pour afficher ou masquer le menu
    menu.classList.toggle('menu-hidden');

    // Affichez les propriétés CSS du menu en mode "open" dans la console
    if (!menu.classList.contains('menu-hidden')) {
        console.log('Menu Styles (Open):');
        console.log('Width:', menu.clientWidth);
        console.log('Height:', menu.clientHeight);
        console.log('Opacity:', window.getComputedStyle(menu).getPropertyValue('opacity'));
        console.log('Visibility:', window.getComputedStyle(menu).getPropertyValue('visibility'));
        console.log('Background Color:', window.getComputedStyle(menu).getPropertyValue('background-color'));
        console.log('Color:', window.getComputedStyle(menu).getPropertyValue('color'));
        console.log('Z-Index:', window.getComputedStyle(menu).getPropertyValue('z-index'));
    }
});

// Ajoutez un écouteur d'événements pour le clic en dehors du menu et du logo
document.addEventListener('click', (e) => {
    // Vérifiez si l'élément cliqué n'est pas le menu ni le logo
    if (!menu.contains(e.target) && e.target !== menuLogo && e.target !== startMenuButton) {
        // Si c'est le cas, masquez le menu en ajoutant la classe .menu-hidden
        menu.classList.add('menu-hidden');
    }
});
