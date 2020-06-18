import PostRequest from './requests';
import ValidateInputs from './validateInputs';
new ValidateInputs({
    inputsNumber: 'input[name="phone"]',
    inputsString: 'input[name="name"]',
});
class SendResourse {
    constructor({
        form = null,
        input = null,
        path = null
    }) {
        try {
            this.forms = document.querySelectorAll(form);
            this.inputs = document.querySelectorAll(input);
            this.path = path;
        } catch (e) {}
    }
    clearInputs() {
        this.inputs.forEach(input => {
            input.value = '';
        });
    }
    init() {
        this.inputs.forEach(input => {
            input.addEventListener('input', () => {
                new ValidateInputs({
                    inputsNumber: 'input[name="phone"]',
                    inputsString: 'input[name="name"]',
                }).render();
            });
        });
        this.forms.forEach(form => {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                let status = document.createElement('div');
                form.appendChild(status);
                const statusMessage = {
                    success: 'Успешно! Мы приняли ваши данные.',
                    loading: 'Загрузка...Пожалуйста, подождите',
                    failure: 'Упс... Произошла ошибка',
                };
                status.textContent = statusMessage.loading;
                const formData = new FormData(form);
                let createRequest = new PostRequest(formData, this.path);
                createRequest.render()
                    .then(result => {
                        console.log(result);
                        status.textContent = statusMessage.success;
                    })
                    .catch(failure => {
                        status.textContent = statusMessage.failure;
                    })
                    .finally(() => {
                        this.clearInputs();
                        setTimeout(() => {
                            status.remove();
                        }, 5000);
                    });
            });
        });
    }
    render() {
        try {
            this.init();
        } catch (e) {}
    }
}
export default SendResourse;