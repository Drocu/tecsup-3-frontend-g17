const header = () => {
    const navActionMenu = document.getElementById('navActionMenu');
    const navActionClose = document.getElementById('navActionClose');

    const menuLinks = document.querySelectorAll('.menu__link');

    const openMenu = () => {
        const nav = document.querySelector('.nav');
        nav.classList.add('nav--open');
    };

    const closeMenu = () => {
        const nav = document.querySelector('.nav');
        nav.classList.remove('nav--open');
    };

    navActionMenu.addEventListener('click', openMenu);
    navActionClose.addEventListener('click', closeMenu);

    menuLinks.forEach((element) => {
        element.addEventListener('clicl', closeMenu);
    });

};

export default header;