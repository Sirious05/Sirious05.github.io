import $ from '../../core';
$.prototype.addClasses = function (...selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(...selector);
    }
    return this;
};
$.prototype.removeClasses = function (...selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(...selector);
    }
    return this;
};
$.prototype.addClass = function (selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.add(selector);
    }
    return this;
};
$.prototype.removeClass = function (selector) {
    for (let i = 0; i < this.length; i++) {
        this[i].classList.remove(selector);
    }
    return this;
};
$.prototype.toggleClass = function (selector) {
    for (let i = 0; i < this.length; i++) {
        if (this[i].classList.contains(selector)) {
            this[i].classList.remove(selector);
        } else {
            this[i].classList.add(selector);
        }
    }
    return this;
};
$.prototype.hasClass = function (className) {
    if (className) {
        for (let i = 0; i < this.length; i++) {
            if (this[i].classList.contains(className.replace(/[\s.,%]/g, ''))) {
                return true;
            } else {
                return false;
            }
        }
    } else {
        return this;
    }
};
$.prototype.attr = function (key, value) {
    if (key && !value) {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].getAttribute(key);
        }
        return this;
    } else if (key && value) {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].setAttribute(key, value);
        }
        return this;
    } else {
        return this;
    }
};
$.prototype.removeAttr = function (key) {
    if (key) {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].removeAttribute(key);
        }
    } else {
        return this;
    }
};
$.prototype.val = function (newValue) {
    if (newValue) {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].setAttribute('value', newValue);
        }
        return this;
    } else {
        for (let i = 0; i < this.length; i++) {
            this[i] = this[i].getAttribute('value');
        }
        return this;
    }
    return this;
};