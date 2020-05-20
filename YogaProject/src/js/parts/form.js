function form() {
    // HTTPRequests
    let messages = {
        loading: 'Происходит обработка данных',
        complete: 'Мы получили ваши данные. Спасибо за заявку!',
        fail: 'Упс. Произошла ошибка',
    };
    let infoForm = document.querySelector('.main-form'),
        contactForm = document.querySelector('#form'),
        input = infoForm.querySelector('.popup-form__input'),
        statusMessage = document.createElement('div');

    function processingData(item) {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            item.appendChild(statusMessage);
            statusMessage.style.color = '#fff';
            let request = new XMLHttpRequest();
            request.open('POST', 'server.php');
            request.setRequestHeader('content', 'application/json; charset=utf-8');

            let formData = new FormData(item);

            let Obj = {};
            formData.forEach(function (value, key) {
                Obj[key] = value;
            });
            let json = JSON.stringify(Obj);
            request.send(json);

            request.addEventListener('readystatechange', (e) => {
                if (request.readyState === 4 && request.status === 200) {
                    statusMessage.textContent = messages.complete;
                } else if (request.readyState < 4) {
                    statusMessage.textContent = messages.loading;
                } else {
                    statusMessage.textContent = messages.fail;
                }
            });

            for (let i = 0; i < input.length; i++) {
                input[i].value = '';
            }

        });
    }
    processingData(infoForm);
    processingData(contactForm);
}
module.exports = form;