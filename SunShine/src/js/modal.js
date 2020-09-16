function viewRemark(trigger, modal, state, card) {
    document.querySelectorAll(modal).forEach(item => {
        item.style.display = 'none';
    });
    if (card) {
        document.querySelectorAll(trigger).forEach((trigger, n) => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                console.log(n);
                if (document.querySelectorAll(modal)[n].style.display !== 'none') {
                    document.querySelectorAll(modal)[n].style.display = 'none';
                    trigger.style.marginTop = '0px';
                } else {
                    document.querySelectorAll(modal)[n].style.display = state;
                    trigger.style.marginTop = '100px';
                }

            });
        });
    } else {
        document.querySelectorAll(trigger).forEach(trigger => {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                for (const item of document.querySelectorAll(modal)) {
                    if (item.style.display !== 'none') {
                        item.style.display = 'none';
                    } else {
                        item.style.display = state;
                    }
                }
            });
        });
    }
}
export {
    viewRemark
};