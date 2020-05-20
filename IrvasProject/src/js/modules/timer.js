const timer = (id, deadline) => {
    const timer = document.querySelector(id),
        endtime = deadline,
        updateClock = setInterval(getTimeRemaining, 1000);

    function addZero(num) {
        if (num < 10) {
            return '0' + num;
        } else {
            return num;
        }
    }

    function getTimeRemaining(endtime) {
        const remain = Date.parse(deadline) - Date.parse(new Date()),
            seconds = Math.floor(remain / 1000 % 60),
            minutes = Math.floor(remain / 1000 / 60 % 60),
            hours = Math.floor(remain / 1000 / 60 / 60 % 60),
            days = Math.floor(remain / 1000 / 60 / 60 / 24);
        return {
            'all': remain,
            'sec': seconds,
            'min': minutes,
            'hours': hours,
            'days': days
        };
    }

    function setTime(selector) {
        const timer = document.querySelector(selector),
            seconds = timer.querySelector('#seconds'),
            minutes = timer.querySelector('#minutes'),
            hours = timer.querySelector('#hours'),
            days = timer.querySelector('#days'),
            timeInterval = setInterval(updateClock, 1000);
        updateClock();

        function updateClock() {
            const total = getTimeRemaining(deadline);
            seconds.textContent = addZero(total.sec);
            minutes.textContent = addZero(total.min);
            hours.textContent = addZero(total.hours);
            days.textContent = addZero(total.days);
            if (total.all <= 0) {
                seconds.textContent = '00';
                minutes.textContent = '00';
                hours.textContent = '00';
                days.textContent = '00';
                clearInterval(getTimeRemaining);
            }
        }
    }
    getTimeRemaining(deadline);
    setTime(id);
};
export default timer;