import './swiper.min.js';

function other() {
    const promoUnterSlider = new Swiper('.promo-unter', {
        loop: true,
        autoplay: {
            delay: 4000,
        },
    });
    document.querySelectorAll('.footer__link span').forEach(item => {
        let count = 0;
        item.addEventListener('click', (e) => {
            count++;
            if (count % 2 === 0) {
                item.style.color = '#818181';
            } else {
                item.style.color = '#fdbf00';
            }
        });
    });
    document.querySelectorAll('.team__button_transparent').forEach(item => {
        let count = 0;
        item.addEventListener('click', (e) => {
            count++;
            if (count % 2 === 0) {
                item.classList.remove('team__button_white');
                item.style.border = '1px solid white';
                item.style.color = 'white';
            } else {
                item.classList.add('team__button_white');
                item.style.color = '#fdbf00';
                item.style.fontSize = '18px';
                item.classList.remove('team__button_transparent');
            }
        });
    });
    document.querySelectorAll('.jobs-card').forEach(item => {
        let count = 0;
        item.addEventListener('click', (e) => {
            count++;
            if (count % 2 === 0) {
                item.classList.toggle('jobs-card_gold');
                item.classList.toggle('jobs-card_dark');
                if (item.classList.contains('jobs-card_grey')) {
                    item.style.border = 'none';
                    item.classList.remove('jobs-card_gold');
                    item.classList.remove('jobs-card_dark');
                }
            } else {
                item.classList.toggle('jobs-card_gold');
                item.classList.toggle('jobs-card_dark')
                if (item.classList.contains('jobs-card_grey')) {
                    item.style.border = '1px solid #fdbf00';
                    item.classList.remove('jobs-card_gold');
                    item.classList.remove('jobs-card_dark');
                }
            }
        });
    });
}
export {
    other
};