import Slider from './slider';
class SliderMain extends Slider {
    constructor(container, next, slideIndex) {
        super(container, next, slideIndex);
    }
    optionsSlides(i = 0) {
        this.slides.forEach(item => {
            item.style.display = 'none';
            this.slides[i].classList.remove('animated', 'fadeInLeft');
        });
        this.slides[i].style.display = 'block';
        this.slides[i].classList.remove('animated', 'fadeOutLeft');
        this.slides[i].classList.add('animated', 'fadeInLeft');
        try {
            if (this.slideIndex === 2) {
                setTimeout(() => {
                    this.hanson.style.display = 'block';
                    this.hanson.classList.add('animated', 'fadeInLeft');
                }, 3000);
            } else {
                this.hanson.style.display = 'none';
                this.hanson.classList.remove('animated', 'fadeInLeft');
            }
        } catch (e) {}
    }
    editSlides() {
        this.next.forEach(next => {
            next.addEventListener('click', () => {
                this.slideIndex++;
                if (this.slideIndex < 0) {
                    this.slideIndex = this.slides.length - 1;
                }
                if (this.slideIndex > this.slides.length - 1) {
                    this.slideIndex = 0;
                }
                this.optionsSlides(this.slideIndex);
            });
        });
    }
    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch (e) {}
        this.optionsSlides();
        this.editSlides();
    }
}
export default SliderMain;