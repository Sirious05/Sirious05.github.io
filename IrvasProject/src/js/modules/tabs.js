const tabs = () => {
    function bindTabs(wrapSelector, tabsSelector, contentSelector, activeClass) {
        let wrap = document.querySelector(wrapSelector),
            tabs = document.querySelectorAll(tabsSelector),
            content = document.querySelectorAll(contentSelector),
            active = document.querySelector(activeClass);

        function hideTabContent() {
            content.forEach((item, i) => {
                item.style.display = 'none';
            });
            tabs.forEach((item, i) => {
                item.classList.remove(activeClass);
            });
        }

        function showTabContent(n = 0) {
            if (content[n].tagName === 'IMG') {
                content[n].style.display = 'inline';
            } else {
                content[n].style.display = 'block';
            }
            if (content[n].classList.contains('slideInLeft')) {
                content[n].classList.remove('slideInLeft');
            }
            content[n].classList.add('animated');
            content[n].classList.add('slideInLeft');
            tabs[n].classList.add(activeClass);
        }
        wrap.addEventListener('click', (e) => {
            const target = e.target;
            if (target.classList.contains(tabsSelector.replace(/./, "")) ||
                target.parentNode.classList.contains(tabsSelector.replace(/./, ""))) {
                tabs.forEach((item, i) => {
                    if (target == item || target.parentNode == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });

        hideTabContent();
        showTabContent();

    }
    bindTabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    bindTabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    bindTabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more');
};
export default tabs;