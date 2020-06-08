import {
    getResourse
} from './requests';
const showMoreStyles = () => {
    function bindStyles(appendSelector, wrapperSelector) {
        const append = document.querySelectorAll(appendSelector),
            wrapper = document.querySelector(wrapperSelector);
        append.forEach(item => {
            item.addEventListener('click', function (e) {
                getResourse('assets/services/original.json')
                    .then(res => createStyles(res.styles))
                    .catch(err => console.log(err));
                this.remove();
            });
        });

        function createStyles(response) {
            response.forEach(item => {
                let style = document.createElement('div');
                style.innerHTML =
                    `
                        <div class=styles-block>
                            <img src=${item.src} alt>
                            <h4>${item.title}</h4>
                            <a href="${item.link}">Подробнее</a>
                        </div>
                        `;
                style.classList.add('animated', 'fadeIn', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
                wrapper.appendChild(style);
            });
        }

    }
    bindStyles('[data-show-style="add"]', '#styles .row');
};
export default showMoreStyles;