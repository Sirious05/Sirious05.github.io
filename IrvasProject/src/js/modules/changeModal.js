const changeModal = (state) => {
    let calcForm = document.querySelectorAll('.balcon_icons_img'),
        calcWidth = document.querySelectorAll('#width'),
        calcHeight = document.querySelectorAll('#height'),
        calcType = document.querySelectorAll('#view_type'),
        calcProfile = document.querySelectorAll('.checkbox'),
        calcName = document.querySelectorAll('input[name="user_name"]'),
        calcTel = document.querySelectorAll('input[name="user_phone"]');

    function getData(elem, event, name) {
        elem.forEach((item, i) => {
            item.addEventListener(event, function (e) {
                switch (item.tagName) {
                    case 'SPAN':
                        if (elem.length > 1) {
                            state[name] = item.getAttribute('data-type');
                        }
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            if (i === 0) {
                                state[name] = 'cold';
                            }
                            if (i === 1) {
                                state[name] = 'warm';
                            }
                            elem.forEach((thing, n) => {
                                thing.checked = false;
                                if (i === n) {
                                    thing.checked = true;
                                }
                            });
                        } else {
                            if (item.getAttribute('data-measurement') === true) {
                                state[name] = `${item.value} мм`;
                            } else {
                                state[name] = `${item.value}`;
                            }
                        }
                        break;
                    case 'SELECT':
                        state[name] = this.options[this.selectedIndex].value;
                        break;
                }
            });
        });
    }
    getData(calcForm, 'click', 'form');
    getData(calcWidth, 'change', 'width');
    getData(calcHeight, 'change', 'height');
    getData(calcType, 'change', 'type');
    getData(calcProfile, 'change', 'profile');
};
export default changeModal;