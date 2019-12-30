document.addEventListener('DOMContentLoaded', ()=> {

    'use strict';

    // timer
    function timer(id, deadline) {
        function getTimeRemaining(deadline) {
            const t = Date.parse(deadline) - Date.parse(new Date()),
                seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/1000/60/60) % 24),
                days = Math.floor(t / (1000*60*60*24));

            return {
                'total' : t,
                'seconds' : seconds,
                'minutes' : minutes,
                'hours' : hours,
                'days' : days
            };
        }

        function setClock(id, deadline) {
            const timer = document.getElementById(id),
            seconds = timer.querySelector('.seconds'),
            minutes = timer.querySelector('.minutes'),
            hours = timer.querySelector('.hours'),
            days = timer.querySelector('.days'),
            timeInterval = setInterval(updateClock, 1000);

            function addZero(num) {
                if (num <= 9) {
                    return `0${num}`;
                } else {
                    return num;
                }
            }

            function updateClock() {
                const t = getTimeRemaining(deadline);

                if (t.total <= 0) {
                    clearInterval(timeInterval); 

                    seconds.textContent = '00';
                    minutes.textContent = '00';
                    hours.textContent = '00';
                    days.textContent = '000';
                } else {
                    seconds.textContent = addZero(t.seconds);
                    minutes.textContent = addZero(t.minutes);
                    hours.textContent = addZero(t.hours);
                    days.textContent = addZero(t.days);
                }
            }
        }
        setClock(id, deadline);
    }

    timer('timer', '2020-12-31'); //your data
});