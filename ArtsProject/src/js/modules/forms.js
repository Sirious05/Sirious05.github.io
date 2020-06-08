import {
    postData
} from './requests';
const forms = () => {
    const forms = document.querySelectorAll('form'),
        inputs = document.querySelectorAll('input'),
        upload = document.querySelectorAll('[name="upload"]'),
        uploadName = document.querySelectorAll('.upload-name'),
        clearInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
        };
    upload.forEach(item => {
        item.addEventListener('input', (e) => {
            let dots;
            let partsPath = item.files[0].name.split('.');
            if (partsPath[0].length > 8) {
                dots = true;
            } else {
                dots = false;
            }
            if (dots === true) {
                item.previousElementSibling.textContent = item.files[0].name.slice(0, 8) + '...' + ' ' + partsPath[1];
            } else {
                item.previousElementSibling.textContent = item.files[0].name;
            }
        });
    });
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
            let path;
            item.closest('.popup-design') ? path = 'assets/design.php' : path = 'assets/server.php';
            postData(path, formData)
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
                        uploadName.forEach(name => {
                            name.textContent = 'Файл не выбран';
                        });
                    }, 5000);
                });
        });
    });
};
export default forms;