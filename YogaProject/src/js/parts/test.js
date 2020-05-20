// Test
function test() {
    class Options {
        constructor(height, width, bg, fontSize, textAlign, margin) {
            this.height = height;
            this.width = width;
            this.background = bg;
            this.fontSize = fontSize;
            this.textAlign = textAlign;
            this.margin = margin;
        }
        createDiv() {
            let divParent = document.querySelector('.more'),
                div = document.createElement('div');

            div.textContent = 'Узнать больше';
            div.style.height = getting.height;
            div.style.width = getting.width;
            div.style.background = getting.background;
            div.style.fontSize = getting.fontSize;
            div.style.textAlign = getting.textAlign;
            div.style.margin = getting.margin;
            divParent.appendChild(div);
        }
    }

    let getting = new Options('none', 'none', 'none', '20px', 'center', '0 auto');
    getting.createDiv();
}
module.exports = test;