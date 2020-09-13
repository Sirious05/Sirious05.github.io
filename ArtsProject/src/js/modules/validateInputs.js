const validateInputs = () => {
    function bindValidate(numberSelector, stringSelector) {
        let number = document.querySelectorAll(numberSelector),
            string = document.querySelectorAll(stringSelector);
        string.forEach(item => {
            item.addEventListener('input', (e) => {
                item.value = item.value.replace(/\d/, '');
            });
        });
        number.forEach(item => {
            item.addEventListener('input', (e) => {
                item.value = item.value.replace(/[-\.;":'a-zA-Zа-яА-Я]/, '');
            });
        });
    }
    bindValidate('input[name="phone"]', 'input[name="name"]');
};
export default validateInputs;
l