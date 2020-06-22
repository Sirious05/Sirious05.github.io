class Accordion {
    constructor({
        triggers = null,
        content = null
    }) {
        this.triggers = document.querySelectorAll(triggers);
        this.content = document.querySelectorAll(content);
    }
    hideContent() {
        this.content.forEach(item => {
            item.style.display = 'none';
        });
    }
    showContent() {
        let counter = 0;
        this.triggers.forEach((trigger, n) => {
            trigger.addEventListener('click', (e) => {
                counter++;
                this.hideContent();
                this.content[n].style.display = 'block';
                if (counter % 2 === 0) {
                    this.content[n].style.display = 'block';
                    if (this.content[n].classList.contains('fadeOutLeft')) {
                        this.content[n].classList.remove('animated', 'fadeOutLeft');
                    }
                    this.content[n].classList.add('animated', 'fadeInLeft');
                } else {
                    this.content[n].style.display = 'none';
                }
            });
        });
    }
    render() {
        this.showContent();
    }
}
export default Accordion;