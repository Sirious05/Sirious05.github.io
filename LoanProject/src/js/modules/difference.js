class Difference {
    constructor({
        oldWrap = null,
        newWrap = null
    }) {
        try {
            this.oldWrap = document.querySelector(oldWrap);
            this.newWrap = document.querySelector(newWrap);
            this.oldItems = this.oldWrap.children;
            this.newItems = this.newWrap.children;
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch (e) {}
    }
    hideList(list) {
        list.forEach((item) => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeInLeft');
            list[list.length - 1].style.display = 'flex';
            list[0].style.display = 'block';
        });
    }
    showList(list, counter) {
        list[list.length - 1].addEventListener('click', () => {
            counter++;
            if (counter === list.length - 2) {
                list[list.length - 1].classList.add('animated', 'fadeOutLeft');
                setInterval(() => {
                    list[list.length - 1].style.display = 'none';
                    list[list.length - 1].classList.remove('animated', 'fadeOutLeft');
                }, 500);
            }
            list[counter].style.display = 'flex';
            list[counter].classList.add('animated', 'fadeInLeft');
        });
    }
    render() {
        try {
            this.hideList(this.oldItems);
            this.hideList(this.newItems);
            this.showList(this.oldItems, this.oldCounter);
            this.showList(this.newItems, this.newCounter);
        } catch (e) {}
    }
}
export default Difference;