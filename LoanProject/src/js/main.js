import MainSlider from './modules/slides/slider-main';
import MiniSlider from './modules/slides/slider-mini';
import VideoPlayer from './modules/videoPlayer/videoPlayer';
import Difference from './modules/difference';
import SendResourse from './modules/forms';
import Accordion from './modules/accordion';
window.addEventListener('DOMContentLoaded', () => {
    const windowWidth = document.documentElement.clientWidth;
    if (windowWidth >= 1026) {
        const previewMainSlider = new MainSlider({
            container: '.page',
            next: '.next',
        });
        previewMainSlider.render();
        const modulesMainSlider = new MainSlider({
            container: '.moduleapp',
            next: '.next',
            prev: '.prev',
        });
        modulesMainSlider.render();
        const previewModulesSlider = new MiniSlider({
            container: '.modules__content-slider',
            prev: '.modules__info-btns .slick-prev',
            next: '.modules__info-btns .slick-next',
            activeClass: 'card-active',
        });
        previewModulesSlider.render();
        const previewShowUpSlider = new MiniSlider({
            container: '.showup__content-slider',
            prev: '.showup__prev',
            next: '.showup__next',
            activeClass: 'card-active',
            animate: true
        });
        previewShowUpSlider.render();
        const previewFeedSlider = new MiniSlider({
            container: '.feed__slider',
            prev: ' .slick-prev',
            next: ' .slick-next',
            activeClass: 'feed__item-active',
        });
        previewFeedSlider.render();
        const videoPlayer = new VideoPlayer('.play', '.overlay');
        videoPlayer.render();
        const modulesVideoPlayer = new VideoPlayer('.play', '.overlay');
        modulesVideoPlayer.render();
        const difference = new Difference({
            oldWrap: '.officerold',
            newWrap: '.officernew',
        });
        difference.render();
        const sendResourse = new SendResourse({
            form: 'form',
            input: 'input',
            path: 'assets/question.php',
        });
        sendResourse.render();
        const modulesMarketingAccordion = new Accordion({
            triggers: '.module__info-show',
            content: '.msg'
        });
        modulesMarketingAccordion.render();
    } else {
        console.log(document.documentElement.clientWidth);
        let inDeveloping = document.createElement('div');
        document.body.appendChild(inDeveloping);
        document.body.style.backgroundColor = 'orange';
        document.body.style.display = 'block';
        inDeveloping.textContent = 'Извините, но под ваше разрешение экрана будет мобильное приложение, которое на данный момент в разработке, чтобы воспользоваться сайтом можете войти сюда через ноутбук или компьютер';
        inDeveloping.cssText = `
        color: black;
        text-align: center;
        margin-top: 50%;
        display: block;
        font-size: 20px;`;
    }
});