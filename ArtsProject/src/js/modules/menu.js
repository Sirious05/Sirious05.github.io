const menu = () => {
    const burger = document.querySelector('.burger'),
        navbar = document.querySelector('.burger-menu'),
        overlay = document.querySelector('.overlay');
    if (document.documentElement.clientWidth < 1025) {
        burger.addEventListener('click', (e) => {
            navbar.style.display = 'block';
            overlay.style.display = 'block';
        });
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                navbar.style.display = 'none';
                overlay.style.display = 'none';
            }
        });
    } else {
        navbar.style.display = 'none';
        overlay.style.display = 'none';
    }
};
export default menu;