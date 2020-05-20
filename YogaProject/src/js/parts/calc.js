function calc() {
    // Calc
    let persons = document.getElementsByClassName('counter-block-input')[0],
        daysRest = document.getElementsByClassName('counter-block-input')[1],
        bases = document.querySelector('#select'),
        totalValue = document.querySelector('#total'),
        personsSum = 0,
        daysRestSum = 0,
        totalSum = 0;

    totalValue.innerHTML = 0;
    persons.addEventListener('change', function () {
        personsSum = +this.value;
        totalSum = +(personsSum + daysRestSum) * 2000;
        if (totalSum == '' || daysRestSum == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });
    daysRest.addEventListener('change', function () {
        daysRestSum = +this.value;
        totalSum = +(personsSum + daysRestSum) * 2000;
        if (totalSum == '' || daysRestSum == '') {
            totalValue.innerHTML = 0;
        } else {
            totalValue.innerHTML = totalSum;
        }
    });
    bases.addEventListener('change', function () {
        let workSum = totalSum;
        totalValue.innerHTML = workSum * this.options[this.selectedIndex].value;
    });
}
module.exports = calc;