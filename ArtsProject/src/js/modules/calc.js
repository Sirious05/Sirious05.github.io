const calc = () => {
    const sizeBlock = document.querySelector('#size'),
        materialBlock = document.querySelector('#material'),
        optionsBlock = document.querySelector('#options'),
        promocodeBlock = document.querySelector('.promocode'),
        resultBlock = document.querySelector('.calc-price');
    let sum = 0;
    const calcFunc = () => {
        sum = Math.floor((1000 * (+sizeBlock.value) * (+materialBlock.value)) * (+optionsBlock.value));
        resultBlock.textContent = sum;
        if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        }
        if (resultBlock.textContent === 'NaN') {
            resultBlock.textContent = 0;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);
};
export default calc;