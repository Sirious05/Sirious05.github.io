function slider() {
    // Slider
    let sliderIndex = 0,
        sliderItems = document.querySelectorAll('.slider-item'),
        prevArrow = document.querySelector('.prev'),
        nextArrow = document.querySelector('.next'),
        dotsWrap = document.querySelector('.slider-dots'),
        sliderDots = document.querySelectorAll('.dot');


    function showSlider(n) {
        sliderItems.forEach(item => {
            item.classList.remove('display-block');
            item.classList.add('display-none');
        });
        sliderDots.forEach(item => {
            item.classList.remove('dot-active');
        });
        sliderItems[sliderIndex].classList.remove('display-none')
        sliderItems[sliderIndex].classList.add('display-block')
        sliderDots[sliderIndex].classList.add('dot-active');
    }
    showSlider(sliderIndex);


    function editSlider(n) {
        showSlider(sliderIndex = sliderIndex + n);
    }
    nextArrow.addEventListener('click', function (e) {
        editSlider(1);
    });
    prevArrow.addEventListener('click', function (e) {
        editSlider(-1);
    });

    function currentSlider(n) {
        showSlider(sliderIndex = n);
    }
    dotsWrap.addEventListener('click', function (e) {
        for (let i = 0; i < sliderDots.length; i++) {
            if (e.target == sliderDots[i]) {
                currentSlider(i);
            }
        }
    });

    function infifnitySlider() {
        sliderItems[sliderIndex].classList.remove('display-block');
        sliderItems[sliderIndex].classList.add('display-none');
        sliderIndex = sliderIndex + 1;
        if (sliderIndex > sliderItems.length - 1) {
            sliderIndex = 0;
        }
        if (sliderIndex < 0) {
            sliderIndex = sliderItems.length - 1;
        }
        sliderItems[sliderIndex].classList.remove('display-none');
        sliderItems[sliderIndex].classList.add('display-block');
        sliderDots.forEach(item => item.classList.remove('dot-active'));
        sliderDots[sliderIndex].classList.add('dot-active')
    }
    setInterval(infifnitySlider, 3000);
}
module.exports = slider;