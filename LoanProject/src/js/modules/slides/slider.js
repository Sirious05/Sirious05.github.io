class Slider {
    constructor({
        container = null,
        prev = null,
        next = null,
        activeClass = '',
        autoPlay = false,
        animate = false,
    }) {
        try {
            this.container = document.querySelector(container);
            try {
                this.slides = this.container.children;
            } catch (e) {}
            this.prev = document.querySelectorAll(prev);
            this.next = document.querySelectorAll(next);
            this.slideIndex = 0;
            this.activeClass = activeClass;
            this.animate = animate;
            this.autoPlay = autoPlay;
        } catch (e) {}
    }
}
export default Slider;