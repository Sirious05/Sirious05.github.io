let content = document.querySelectorAll('.block'),
    prev = document.querySelector('.block-item__prev-arrow'),
    next = document.querySelector('.block-item__next-arrow'),
    dotsWrap = document.querySelector('.block-item__dots'),
    dot = document.querySelectorAll('.block-item__dot'),
    sliderIndex = 0;

function actionsWithContent(n) {
    content.forEach(item => {
        item.style.display = 'none';
        item.classList.remove('animated', 'fadeInLeft');
    });
    dot.forEach(item => {
        item.classList.remove('block-item__dot_active');
    });
    dot[n].classList.add('block-item__dot_active');
    content[n].style.display = 'block';
    content[n].classList.add('animated', 'fadeInLeft');
}
actionsWithContent(0);

function editContent(i) {
    actionsWithContent(i);
}
prev.addEventListener('click', () => {
    sliderIndex = sliderIndex - 1;
    if (sliderIndex < 0) {
        sliderIndex = content.length - 1;
    }
    editContent(sliderIndex);
});
next.addEventListener('click', () => {
    sliderIndex = sliderIndex + 1;
    if (sliderIndex > content.length - 1) {
        sliderIndex = 0;
    }
    editContent(sliderIndex);
});

dotsWrap.addEventListener('click', (e) => {
    dot.forEach((item, n) => {
        if (e.target === dot[n]) {
            actionsWithContent(n);
        }
    });
});