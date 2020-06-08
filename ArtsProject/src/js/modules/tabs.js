const tabs = () => {
    function bindTabs(tabsSelector, tabSelector, contentSelector) {
        const tabs = document.querySelector(tabsSelector),
            tab = document.querySelectorAll(tabSelector),
            content = document.querySelectorAll(contentSelector);

        function hideContent(n) {
            tab.forEach(item => {
                item.classList.remove('portfolio-tab-active');
            });
            content.forEach(item => {
                item.style.display = 'none';
            });
            if (n === 0) {
                content[n].style.display = 'flex';
                content[n].style.justifyContent = 'center';
                tab[n].classList.add('portfolio-tab-active');
            }
        }
        hideContent(0);

        function showContent(i) {
            content[i].style.display = 'flex';
            content[i].style.justifyContent = 'center';
            tab[i].classList.add('portfolio-tab-active');
        }

        tabs.addEventListener('click', (e) => {
            if (e.target) {
                tab.forEach((item, n) => {
                    if (e.target === item) {
                        hideContent();
                        showContent(n);
                    }
                });
            }
        });
    }
    bindTabs('.portfolio-menu', '.portfolio-menu-item', '.portfolio-wrapper');
};
export default tabs;