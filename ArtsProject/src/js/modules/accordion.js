const accordion = () => {
    function bindAccordion(contentSelector, triggerSelector) {
        const contents = document.querySelectorAll(contentSelector),
            triggers = document.querySelectorAll(triggerSelector);
        function hideContent(n) {
            contents.forEach(content => {
                content.classList.add('display-none', 'fadeOutRight');
                content.classList.remove('display-block', 'fadeInRight');
            });
        }
        hideContent();

        function showContent() {
            triggers.forEach((trigger, n) => {
                let counter = 0;
                trigger.addEventListener('click', function (e) {
                    counter++;
                    hideContent();
                    contents[n].classList.add('display-block', 'animated', 'fadeInRight');
                    contents[n].classList.remove('display-none', 'fadeOutRight');
                    if (counter % 2 === 0) {
                        contents[n].classList.add('display-none');
                        contents[n].classList.remove('display-block');
                    }
                });
            });
        }
        showContent();

    }
    bindAccordion('.accordion-block', '.accordion-heading');
};
export default accordion;