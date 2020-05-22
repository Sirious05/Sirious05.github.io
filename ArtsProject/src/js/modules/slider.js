const slider = () => {
    const bindSlider = (contentSelector, dotsSelector, dotSelector, prevArrowSelector, nextArrowSelector) => {
        let sliderIndex = 0;
        const sliderItems = document.querySelectorAll(contentSelector),
            sliderDotsWrap = document.querySelector(dotsSelector),
            sliderDots = sliderDotsWrap.querySelectorAll(dotSelector),
            prevArrow = document.querySelector(prevArrowSelector),
            nextArrow = document.querySelector(nextArrowSelector);
        const interactionWithContent = (i) => {
            sliderItems.forEach(item => {
                item.style.display = 'none';
                sliderItems[i].style.display = 'block';
                sliderItems[i].classList.add('animated');
                sliderItems[i].classList.add('fadeInDown');
            });
            sliderDots.forEach(item => {
                item.classList.remove('slider-dot-active');
                sliderDots[i].classList.add('slider-dot-active');
            });

        };
        const editSlide = () => {
            nextArrow.addEventListener('click', () => {
                sliderIndex++;
                if (sliderIndex > sliderItems.length - 1) {
                    sliderIndex = 0;
                }
                interactionWithContent(sliderIndex);
            });
            prevArrow.addEventListener('click', () => {
                sliderIndex--;
                if (sliderIndex < 0) {
                    sliderIndex = sliderItems.length - 1;
                }
                interactionWithContent(sliderIndex);
            });
        };
        const currentSlide = () => {
            sliderDotsWrap.addEventListener('click', (e) => {
                const target = e.target;
                sliderDots.forEach((item, i) => {
                    if (target === item) {
                        interactionWithContent(i);
                    }
                });
            });
        };
        const infinitySlider = () => {
            sliderIndex++;
            if (sliderIndex > sliderItems.length - 1) {
                sliderIndex = 0;
            }
            if (sliderIndex < 0) {
                sliderIndex = sliderItems.length - 1;
            }
            currentSlide(sliderIndex);
            interactionWithContent(sliderIndex);
        };
        interactionWithContent(0);
        currentSlide();
        editSlide();
        setInterval(infinitySlider, 6000);
    };
    bindSlider('.main-slider-item', '.slider-dots', '.slider-dot', '.prev-arrow', '.next-arrow');
};
export default slider;