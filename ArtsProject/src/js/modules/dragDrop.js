import { construct } from "core-js/fn/reflect";

const dragDrop = () => {
    const inputsFiles = document.querySelectorAll('[name="upload"]'),
        events = ['dragenter', 'drop', 'dragover', 'dragleave', 'drag'];
    inputsFiles.forEach(input => {
        events.forEach(item => {
            input.addEventListener(item, (e) => {
                e.preventDefault();
                e.stopPropagation();
            });
        });

        function highlight(item) {
            item.closest('.file_upload').style.border = "3px solid #c51abb";
            item.closest('.file_upload').style.borderRadius = "10px";
        }

        function unhighlight(item) {
            item.closest('.file_upload').style.border = "none";
            if (item.closest('.calc')) {
                item.closest('.file_upload').style.backgroundColor = "#fff";
            }
            if (item.closest('.main')) {
                item.closest('.file_upload').style.backgroundColor = "#f7e7e6";
            }
            if (item.closest('.popup-design')) {
                item.closest('.file_upload').style.backgroundColor = "#ededed";
            }
        }
        input.addEventListener('dragenter', (e) => {
            highlight(input);
        });
        input.addEventListener('dragover', (e) => {
            highlight(input);
        });
        input.addEventListener('dragleave', (e) => {
            unhighlight(input);
        });
        input.addEventListener('drop', (e) => {
            input.files = e.dataTransfer.files;
            let dots;
            let partsPath = input.files[0].name.split('.');
            if (partsPath[0].length > 8) {
                dots = true;
            } else {
                dots = false;
            }
            if (dots === true) {
                input.previousElementSibling.textContent = input.files[0].name.slice(0, 8) + '...' + ' ' + partsPath[1];
            } else {
                input.previousElementSibling.textContent = input.files[0].name;
            }
            unhighlight(input);
        });

    });
};
export default dragDrop;