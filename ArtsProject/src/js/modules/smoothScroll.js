const smoothScroll = () => {
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            let anchor = link.getAttribute('href');
            document.querySelector(anchor).scrollIntoView({
                block: 'end',
                behavior: 'smooth',
                inline: 'center'
            });
        });
    });
};
export default smoothScroll;