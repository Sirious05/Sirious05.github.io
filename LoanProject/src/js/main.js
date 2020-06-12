import MainSlider from './modules/slides/slider-main';
import MiniSlider from './modules/slides/slider-mini';
import VideoPlayer from './modules/videoPlayer/videoPlayer';
import Difference from './modules/difference';
window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    const mainSlider = new MainSlider({
        container: '.page',
        next: '.next',
    });
    mainSlider.render();
    const modulesSlider = new MiniSlider({
        container: '.modules__content-slider',
        prev: '.modules__info-btns .slick-prev',
        next: '.modules__info-btns .slick-next',
        activeClass: 'card-active',
    });
    modulesSlider.render();
    const showUpSlider = new MiniSlider({
        container: '.showup__content-slider',
        prev: '.showup__prev',
        next: '.showup__next',
        activeClass: 'card-active',
        animate: true
    });
    modulesSlider.render();
    const feedSlider = new MiniSlider({
        container: '.feed__slider',
        prev: ' .slick-prev',
        next: ' .slick-next',
        activeClass: 'feed__item-active',
    });
    modulesSlider.render();
    showUpSlider.render();
    feedSlider.render();
    const videoPlayer = new VideoPlayer('.play', '.overlay');
    videoPlayer.render();
    const difference = new Difference({
        oldWrap: '.officerold',
        newWrap: '.officernew',
    });
    difference.render();
});