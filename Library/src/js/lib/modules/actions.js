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
            return this[i].innerHTML;
        }
    } else {
        for (let i = 0; i < this.length; i++) {
            this[i].innerHTML = elem;
        }
        return this;
    }
};
// eq, html, index, find