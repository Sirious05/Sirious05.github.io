const modal = () => {
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
            modal = document.querySelector(modalSelector),
            close = document.querySelector(closeSelector);

        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                modal.classList.remove('slideOutLeft');
                modal.classList.add('slideInLeft');
                modal.classList.add('animated');
            });
        });
        close.addEventListener('click', (e) => {
            document.body.style.overflow = '';
            modal.classList.remove('slideInLeft');
            modal.classList.add('slideOutLeft');
            if (window.innerWidth <= 768) {
                document.body.style.overflow = '';
                modal.classList.remove('slideInLeft');
                modal.classList.remove('slideOutLeft');
                modal.style.display = 'none';
            }
        });
        modal.addEventListener('click', (e) => {
            if (e.target.matches(modalSelector)) {
                document.body.style.overflow = '';
                modal.classList.remove('slideInLeft');
                modal.classList.add('slideOutLeft');
            }
        });
    }

    function showModalByTime(modalSelector, time, closeSelector) {
        setTimeout(function () {
            let modal = document.querySelector(modalSelector),
                close = document.querySelector(closeSelector);
            modal.style.display = 'block';
            modal.classList.add('slideInLeft');
            modal.classList.add('animated');
            document.body.style.overflow = 'hidden';
            close.addEventListener('click', (e) => {
                document.body.style.overflow = '';
                modal.classList.remove('slideInLeft');
                modal.classList.add('slideOutLeft');
            });
            modal.addEventListener('click', (e) => {
                if (e.target == modal) {
                    document.body.style.overflow = '';
                    modal.classList.remove('slideInLeft');
                    modal.classList.add('slideOutLeft');
                }
            });
        }, time);
    }

    function replaceModal(triggerSelector, hideSelector, showSelector) {
        let trigger = document.querySelector(triggerSelector),
            hide = document.querySelector(hideSelector),
            show = document.querySelector(showSelector);
        trigger.addEventListener('click', (e) => {
            show.style.display = 'none';
            hide.style.display = 'block';
            hide.classList.add('slideInLeft');
            hide.classList.add('animated');
        });
    }

    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
    bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close');
    bindModal('.popup_calc_profile_button', '.popup_calc_end ', '.popup_calc_end_close');

    replaceModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc');
    replaceModal('.popup_calc_profile_button', '.popup_calc_end ', '.popup_calc_profile');

    showModalByTime('.popup', 60000, '.popup_close');

};
export default modal;