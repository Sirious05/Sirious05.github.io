// Modal
function modal(params) {
    let more = document.querySelector('.more'),
        moreIntab1 = document.querySelectorAll('.description-btn')[0],
        moreIntab2 = document.querySelectorAll('.description-btn')[1],
        moreIntab3 = document.querySelectorAll('.description-btn')[2],
        moreIntab4 = document.querySelectorAll('.description-btn')[3],
        overlay = document.querySelector('.overlay'),
        close = document.querySelector('.popup-close');

    function modalShow(a) {
        a.addEventListener('click', function (e) {
            overlay.style.display = 'block';
            this.classList.add('more-splash');
            document.body.style.overflow = 'hidden';
        });
    }

    function modalClose(a) {
        a.addEventListener('click', function (e) {
            overlay.style.display = 'none';
            document.body.style.overflow = '';
        });
    }
    modalShow(more);
    modalShow(moreIntab1);
    modalShow(moreIntab2);
    modalShow(moreIntab3);
    modalShow(moreIntab4);
    modalClose(close);

}
module.exports = modal;