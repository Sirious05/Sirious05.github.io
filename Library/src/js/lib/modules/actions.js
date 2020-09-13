import $ from '../../core';
$.prototype.eq = function (n) {
    let current = this[n];
    for (let i in this) {
        delete this[i];
    }
    this[0] = current;
    this.length = 1;
    return this;
};
$.prototype.html = function (elem) {
    if (!elem) {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].innerHTML;
        }
        return this;
    } else {
        for (let i = 0; i < this.length; i++) {
            this[i].innerHTML = elem;
        }
        return this;
    }
};
$.prototype.index = function (element) {
    let children = this[0].children;
    [...children].forEach((item, n) => {
        checkIndex(item, n);
    });

    function checkIndex(item, index) {
        let n;
        for (let i = 0; i < [...children].length; i++) {
            if ([...children][i] === document.querySelector(element)) {
                n = i;
            }
        }
        return index === n;
    }
    return [...children].findIndex(checkIndex);
};
$.prototype.find = function (selector) {
    if (selector) {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].querySelectorAll(selector);
        }
        let copy = Object.values(this);
        delete copy[copy.length - 1];
        copy.forEach(item => {
            item.forEach((elem, i) => {
                if (!elem) {
                    return this;
                }
                this[i] = elem;
                this.length = item.length;
            });
        });
        return this;
    } else {
        return this;
    }
};
$.prototype.closest = function (selector) {
    if (selector) {
        for (let i = 0; i < this.length; i++) {
            let parent = this[i].closest(selector);
            if (!parent) {
                return this;
            }
            this[i] = parent;
        }
        return this;
    } else {
        return this;
    }
};
$.prototype.siblings = function () {
    let numberOfItems = 0;
    let counter = 0;

    const copyObj = Object.assign({}, this);

    for (let i = 0; i < copyObj.length; i++) {
        const arr = copyObj[i].parentNode.children;
        for (let j = 0; j < arr.length; j++) {
            if (copyObj[i] === arr[j]) {
                continue;
            }
            this[counter] = arr[j];
            counter++;
        }

        numberOfItems += arr.length - 1;
    }
    this.length = numberOfItems;
    return this;
};