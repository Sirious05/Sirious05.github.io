// Timer
function timer(params) {
    let deadline = '2022-10-03';

    function getTimeRemaining() {
        let all = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor(all / 1000 % 60),
            minutes = Math.floor(all / 1000 / 60 % 60),
            hours = Math.floor(all / 1000 / 60 / 60 % 60),
            days = Math.floor(all / 1000 / 60 / 60 / 24);
        return {
            total: all,
            seconds: seconds,
            minutes: minutes,
            hours: hours,
            days: days,
        };
    }
    getTimeRemaining();

    function getClock() {
        let timer = document.getElementById('timer'),
            seconds = timer.querySelector('.seconds'),
            minutes = timer.querySelector('.minutes'),
            hours = timer.querySelector('.hours'),
            days = timer.querySelector('.days'),
            reboot = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(deadline);

            if (t.seconds <= 9) {
                t.seconds = '0' + t.seconds;
            }
            if (t.minutes <= 9) {
                t.minutes = '0' + t.minutes;
            }
            if (t.hours <= 9) {
                t.hours = '0' + t.hours;
            }
            if (t.days <= 9) {
                t.days = '0' + t.days;
            }
            seconds.textContent = t.seconds;
            minutes.textContent = t.minutes;
            hours.textContent = t.hours;
            days.textContent = t.days;
            if (t.total <= 0) {
                clearInterval(reboot);
                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
                timer.insertAdjacentHTML('afterend', `<h1 class = "end-stock">Акция закончилась!</h1>`);
            }
        }

    }
    getClock();
}
module.exports = timer;
