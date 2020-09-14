function viewRemark(trigger, modal, state) {
    document.querySelectorAll(modal).forEach(item => {
        item.style.display = 'none';
    });
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
export {
    viewRemark
};