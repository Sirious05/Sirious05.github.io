import Slider from './slider';
class SliderMini extends Slider {
    constructor(container, next, prev, activeClass, autoPlay, animate) {
        super(container, next, prev, activeClass, autoPlay, animate);
    }
    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if (this.animate) {
                this.slides[0].querySelector('.card__title').style.opacity = '0.4';
                this.slides[0].querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });
        if (this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }
    bindTriggers() {
        this.next.forEach(item => {
            item.addEventListener('click', () => {
                this.container.appendChild(this.slides[0]);
                if (this.slides[0].tagName == 'BUTTON') {
                    this.container.appendChild(this.slides[0]);
                }
                if (this.slides[1].tagName == 'BUTTON') {
                    this.container.appendChild(this.slides[1]);
                }

                this.decorizeSlides();
            });
        });
        this.prev.forEach(item => {
            item.addEventListener('click', () => {
                let last = this.slides[this.slides.length - 1];
                console.log(last);
                this.container.insertBefore(last, this.slides[0]);
                this.decorizeSlides();
            });
        });
    }
    optionsSlides(i = 0) {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;
    }
    render() {
        this.optionsSlides();
        this.bindTriggers();
    }
}
export default SliderMini;