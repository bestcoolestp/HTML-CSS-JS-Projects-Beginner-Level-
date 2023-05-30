const hourEl = document.getElementById('hours');
const minuteEl = document.getElementById('minutes');
const secondEl = document.getElementById('seconds');
const amPmEl = document.getElementById('amPm');
const dateDisplay = document.getElementById('dateDisplay');

function clock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let amPm = 'AM';

    if (hour > 12) {
        hour -= 12;
        amPm = 'PM';
    }

    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
    amPmEl.innerText = amPm;

    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    dateDisplay.innerText = `${month}  /  ${day}  /  ${year}`;

    setTimeout(clock, 1000);
}

clock();
