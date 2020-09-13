document.querySelector('.promo__icon').addEventListener('click', () => {
    if (document.querySelector('.promo__remark').style.display !== 'none') {
        document.querySelector('.promo__remark').style.display = 'none';
    } else {
        document.querySelector('.promo__remark').style.display = 'block';
    }
});
document.querySelector('.jobs-cart_border-gold').addEventListener('click', () => {
    if (document.querySelector('.jobs__remark').style.display !== 'none') {
        document.querySelector('.jobs__remark').style.display = 'none';
    } else {
        document.querySelector('.jobs__remark').style.display = 'block';
    }
});