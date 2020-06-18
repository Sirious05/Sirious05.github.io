class ValidateInputs {
    constructor({
        inputsNumber = null,
        inputsString = null
    }) {
        try {
            this.inputsNumber = document.querySelectorAll(inputsNumber);
            this.inputsString = document.querySelectorAll(inputsString);
        } catch (e) {}
    }
    clearSymbol() {
        this.inputsString.forEach(item => {
            item.addEventListener('input', (e) => {
                item.value = item.value.replace(/\d/, '');
            });
        });
        this.inputsNumber.forEach(item => {
            item.addEventListener('input', (e) => {
                item.value = item.value.replace(/[-\.;":'a-zA-Zа-яА-Я]/, '');
            });
        });
    }
    render() {
        try {
            this.clearSymbol();
        } catch (e) {}
    }
}
export default ValidateInputs;