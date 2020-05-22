const modal = () => {
    const bindModal = (triggerSelector, contentSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector),
            content = document.querySelectorAll(contentSelector),
            close = document.querySelector(closeSelector),
            scrollWidth = calcScroll();
        const showModal = () => {
            trigger.forEach(item => {
                item.addEventListener('click', (e) => {
                    content.forEach(item => {
                        e.preventDefault();
                        item.style.display = 'block';
                        document.body.style.overflow = 'hidden';
                        document.body.style.marginRight = `${scrollWidth}px`;
                        item.classList.remove('slideOutLeft');
                        item.classList.add('slideInLeft');
                        item.classList.add('animated');
                    });
                });
            });
        };
        const hideModal = () => {
            close.addEventListener('click', (e) => {
                content.forEach(item => {
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                    item.classList.remove('slideInLeft');
                    item.classList.add('slideOutLeft');
                });
            });
        };
        content.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target === item) {
                    document.body.style.overflow = '';
                    document.body.style.marginRight = `0px`;
                    item.classList.remove('slideInLeft');
                    item.classList.add('slideOutLeft');
                }
            });
        });

        function calcScroll() {
            const div = document.createElement('div');
            div.style.overflow = 'scroll';
            document.body.appendChild(div);
            const scrollWidth = div.offsetWidth - div.clientWidth;
            div.remove();
            return scrollWidth;
        }
        showModal();
        hideModal();
    };
    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');

};
export default modal;