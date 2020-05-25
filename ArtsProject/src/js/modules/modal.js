const modal = () => {
    let btnPressed = false;
    const bindModal = (triggersSelector, contentSelector, closeSelector, temporal = false) => {
        const triggers = document.querySelectorAll(triggersSelector),
            content = document.querySelectorAll(contentSelector),
            close = document.querySelector(closeSelector),
            windows = document.querySelectorAll('[data-modal]'),
            temporalTriggers = document.querySelectorAll('[data-temporal="true"]');
        let scrollWidth = calcScroll();
        if (window.clientWidth < 1025) {
            scrollWidth = 0;
        }
        const showModal = () => {
            triggers.forEach(trigger => {
                trigger.addEventListener('click', (e) => {
                    if (e.target) {
                        e.preventDefault();
                        temporalTriggers.forEach(item => {
                            item.style.marginRight = `${scrollWidth}px`;
                        });
                    }
                    btnPressed = true;
                    if (temporal === true) {
                        trigger.style.display = 'none';
                        trigger.style.marginRight = `${scrollWidth}px`;
                    }
                    content.forEach(item => {
                        item.style.display = "block";
                        item.classList.add('fadeIn');
                        item.classList.remove('fadeOut');
                    });
                    document.body.style.overflow = "hidden";
                    document.body.style.marginRight = `${scrollWidth}px`;
                });

            });
        };
        const hideModal = () => {
            close.addEventListener('click', (e) => {
                content.forEach(item => {
                    item.style.display = "none";
                    item.classList.add('fadeOut');
                    item.classList.remove('fadeIn');

                });
                temporalTriggers.forEach(item => {
                    item.style.marginRight = `0px`;
                });
                document.body.style.overflow = "";
                document.body.style.marginRight = `0px`;
            });
        };
        content.forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target === item) {
                    item.style.display = "none";
                    item.classList.add('fadeOut');
                    item.classList.remove('fadeIn');
                    document.body.style.overflow = "";
                    document.body.style.marginRight = `0px`;
                    temporalTriggers.forEach(item => {
                        item.style.marginRight = `0px`;
                    });
                }
            });
        });
        showModal();
        hideModal();

    };

    function showModalByTime(selector, time) {
        setTimeout(function () {
            const modal = document.querySelector(selector);
            let display;
            let temporalTriggers = document.querySelectorAll('[data-temporal="true"]');
            document.querySelectorAll('[data-modal]').forEach(item => {
                if (getComputedStyle(item).display !== 'none') {
                    display = "block";
                }
            });
            if (!display) {
                modal.style.display = 'block';
                modal.classList.add('fadeIn');
                modal.classList.remove('fadeOut');
                document.body.style.overflow = "hidden";
                let scroll = calcScroll();
                if (window.clientWidth <= 1024) {
                    scroll = 0;
                }
                document.body.style.marginRight = `${scroll}px`;
                temporalTriggers.forEach(item => {
                    item.style.marginRight = `${scroll}px`;
                });
            }
        }, time);
    }

    function calcScroll() {
        const div = document.createElement('div');
        div.style.overflow = 'scroll';
        document.body.appendChild(div);
        let scrollWidth = div.offsetWidth - div.clientWidth;
        div.remove();
        if (window.clientWidth <= 1024) {
            scrollWidth = 0;
        }
        return scrollWidth;
    }

    function openByScroll(selector) {
        const modal = document.querySelector(selector);
        window.addEventListener('scroll', () => {
            let scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
            if (!btnPressed && (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                modal.click();
            }
        });
    }

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    calcScroll();
    showModalByTime('.popup-consultation', 60000);
    openByScroll('.fixed-gift');
};
export default modal;