function toggleMenu(menuId, image) {
    const menu = document.getElementById(menuId);

    const isVisible = window.getComputedStyle(menu).display !== 'none';

    if (isVisible) {
        menu.style.display = 'none';
        if (image) {
            image.src = "./media/main_shop/right.svg";
        }
    } else {
        menu.style.display = 'flex';
        if (image) {
            image.src = "./media/main_shop/down.svg";
        }
    }
}



