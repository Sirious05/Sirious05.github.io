import {
    viewRemark
} from './modal';
import {
    other
} from './other';
window.addEventListener('DOMContentLoaded', () => {
    viewRemark('.jobs-card', '.jobs__remark', 'block', true);
    viewRemark('.promo__icon', '.promo__remark', 'block');
    viewRemark('.footer__link span', '.footer__remark', 'block');
    viewRemark('.peoples__button', '.peoples__remark', 'block');
    other();
});