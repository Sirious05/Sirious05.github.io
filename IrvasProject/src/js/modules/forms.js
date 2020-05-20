const forms = (state) => {
    let forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input');
    const status = {
        fail: 'Упс. Произошла ошибка',
        loading: 'Идет загрузка. Пожалуйста, немного подождите',
        success: 'Успешно. Ваши данные были приняты',
    };
    forms.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage);
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }
            sendData('assets/server.php', formData)
                .then(data => {
                    console.log(data);
                    document.querySelector('.status').textContent = status.success;
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 10000);
                })
                .catch(error => {
                    document.querySelector('.status').textContent = status.fail;
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 10000);
                })
                .finally(() => {
                    clearInput();
                });
        });
    });

    async function sendData(url, data) {
        document.querySelector('.status').textContent = status.loading;
        const request = await fetch(`${url}`, {
            method: 'POST',
            body: data,
        });
        return await request.text();
    }

    function clearInput() {
        inputs.forEach(item => {
            item.value = '';
        });
    }
};
export default forms;