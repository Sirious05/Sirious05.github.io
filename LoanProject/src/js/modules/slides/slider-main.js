import Slider from './slider';
class SliderMain extends Slider {
    constructor(container, next, prev, slideIndex) {
        super(container, next, prev, slideIndex);
    }
    optionsSlides(i = 0) {
        this.slides.forEach(item => {
            item.style.display = 'none';
            this.slides[i].classList.remove('animated', 'fadeInLeft');
        });
        this.slides[i].style.display = 'block';
        this.slides[i].classList.remove('animated', 'fadeOutLeft');
        this.slides[i].classList.add('animated', 'fadeInLeft');
        if (this.slideIndex === 2) {
            setTimeout(() => {
                try {
                    this.hanson.style.display = 'block';
                    this.hanson.classList.add('animated', 'fadeInLeft');
                } catch (e) {}
            }, 3000);
        } else {
            try {
                this.hanson.style.display = 'none';
                this.hanson.classList.remove('animated', 'fadeInLeft');
            } catch (e) {}
        }
    }
    editSlides() {
        this.next.forEach(next => {
            next.addEventListener('click', () => {
                this.slideIndex++;
                if (this.slideIndex > this.slides.length - 1) {
                    this.slideIndex = 0;
                }
                this.optionsSlides(this.slideIndex);
            });
        });
        this.prev.forEach(prev => {
            prev.addEventListener('click', () => {
                this.slideIndex--;
                if (this.slideIndex < 0) {
                    this.slideIndex = this.slides.length - 1;
                }
                this.optionsSlides(this.slideIndex);
            });
        });
    }
    render() {
        try {
            this.hanson = document.querySelector('.hanson');
        } catch (e) {}
        try {
            this.optionsSlides();
            this.editSlides();
        } catch (e) {}
    }
}
export default SliderMain;