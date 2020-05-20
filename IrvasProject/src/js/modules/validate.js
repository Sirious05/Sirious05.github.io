const validate = () => {
    function validateInputs(numberSelector, stringSelector) {
        let number = document.querySelectorAll(numberSelector),
            string = document.querySelectorAll(stringSelector);
        string.forEach(item => {
            item.addEventListener('input', (e) => {
                item.value = item.value.replace(/\d/, '');
            });
        });
        number.forEach(item => {
            item.addEventListener('input', (e) => {
                item.value = item.value.replace(/\D/, '');
            });
        });
    }
    validateInputs('input[name="user_phone"]', 'input[name="user_name"]');
    validateInputs('#width');
    validateInputs('#height');
}
export default validate;