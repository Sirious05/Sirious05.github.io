const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        clearInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
        };
    console.log(1);
    forms.forEach((item, n) => {
        item.addEventListener('submit', (e) => {
            let status = document.createElement('div');
            let img = document.createElement('img');
            e.preventDefault();
            img.style.width = '70px';
            img.style.height = '70px';
            img.style.display = 'block';
            img.style.margin = '0 auto';
            status.style.textAlign = 'center';
            item.parentNode.appendChild(img);
            item.parentNode.appendChild(status);
            const statusMessage = {
                success: 'Успешно! Мы приняли ваши данные.',
                loading: 'Загрузка...Пожалуйста, подождите',
                failure: 'Упс... Произошла ошибка',
            };
            const imgMessage = {
                loading: 'assets/img/spinner.gif',
                success: 'assets/img/ok.png',
                failure: 'assets/img/failure.png'
            };
            status.textContent = statusMessage.loading;
            img.setAttribute('src', imgMessage.loading);
            const formData = new FormData(item);
            postData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    status.textContent = statusMessage.success;
                    img.setAttribute('src', imgMessage.success);
                    item.classList.add('animated', 'fadeOut');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 1000);
                })
                .catch(err => {
                    console.log(err);
                    status.textContent = statusMessage.failure;
                    img.setAttribute('src', imgMessage.failure);
                    item.classList.add('animated', 'fadeOut');
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 1000);
                })
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        status.remove();
                        img.remove();
                        item.style.display = 'block';
                        item.classList.remove('fadeOut');
                        item.classList.add('fadeIn');
                    }, 5000);
                });
        });
    });
    async function postData(url, data) {
        let request = await fetch(`${url}`, {
            method: 'POST',
            body: data,
        });
        return await request.text();
    }
};
export default forms;