class Slider {
    constructor({
        container = null,
        prev = null,
        next = null,
        activeClass = '',
        autoPlay = false,
        animate = false,
    }) {
        this.container = document.querySelector(container);
        this.slides = this.container.children;
        this.prev = document.querySelectorAll(prev);
        this.next = document.querySelectorAll(next);
        this.slideIndex = 0;
        this.activeClass = activeClass;
        this.animate = animate;
        this.autoPlay = autoPlay;
    }
}
export default Slider;