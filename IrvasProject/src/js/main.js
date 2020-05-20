import './slider';
import modal from './modules/modal';
import tabs from './modules/tabs';
import forms from './modules/forms';
import validate from './modules/validate';
import changeModal from './modules/changeModal';
import timer from './modules/timer';
import imagesModal from './modules/imagesModal';
window.addEventListener('DOMContentLoaded', () => {
    const dataModal = {};
    const deadline = '2020-06-15';
    modal();
    tabs();
    forms(dataModal);
    validate();
    changeModal(dataModal);
    timer('.container1', deadline);
    imagesModal();
});