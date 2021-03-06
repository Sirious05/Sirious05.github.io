function tabs() {
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    function showTabContent(a) {
        if (tabContent[a].classList.contains('hide')) {
            tabContent[a].classList.remove('hide');
            tabContent[a].classList.add('show');
        }
    }
    info.addEventListener('click', (e) => {
        for (let i = 0; i < tab.length; i++) {
            if (e.target == tab[i]) {
                hideTabContent(0);
                showTabContent(i);
            }
        }
    });
}
module.exports = tabs;