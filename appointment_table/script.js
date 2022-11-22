//variable
const inputContainer = document.getElementById('input-container');
const countDownForm = document.getElementById('countDownForm');
const dateEl = document.getElementById('date-picker');
const countDownEl = document.getElementById('countdown');
const countdownTitleEl = document.getElementById('countdown-title');
const countdownButtonEl = document.getElementById('countdown-button');
const timeEl = document.querySelectorAll('span');
const completeEl = document.getElementById('complete');
const completeInfoEl = document.getElementById('complete-info');

const completeButtonEl = document.getElementById('complete-button');

//control

let countDownTitle = '';
let countDownDate = '';
let countDownValue = Date; //select form Form
let countDownActive; // count time
let saveCountDown; //keep  tittel alarm(object)

// variable time
const second = 1000;
const minute = second * 60;
const hour = minute * 60;
const day = hour * 24;

countDownForm.addEventListener('submit', updateCountDown);

function updateCountDown(e) { // e == date send form Forminput
    e.preventDefault();
    countDownTitle = e.srcElement[0].value;
    countDownDate = e.srcElement[1].value;

    if (countDownTitle === '') {
        alert('ข้อมูลไม่ครบ');
    } else { // save date in localstorage
        saveCountDown = { title: countDownTitle, date: countDownDate };
        localStorage.setItem('countDown', JSON.stringify(saveCountDown));
        countDownValue = new Date(countDownDate).getTime(); // time set
        setUptime();

    }
}

function setUptime() {
    countDownActive = setInterval(() => {
        //  เวลาตั้ง - ปัจจุบัน 
        const now = new Date().getTime();
        const dif = countDownValue - now;
        const days = Math.floor(dif / day);
        const hours = Math.floor((dif % day) / hour);
        const minutes = Math.floor((dif % hour) / minute);
        const seconds = Math.floor((dif % minute) / second);
        inputContainer.hidden = true;
        if (dif < 0) {
            // หมดเวลา ถึงเวลาที่ตั้งไว
            countDownEl.hidden = true;
            completeEl.hidden = false;

            // shopping dd/mm/yyyy
            completeInfoEl.textContent = `${countDownTitle} date ${countDownDate}`;
            clearInterval(countDownActive);

        } else {
            //แสดงtitle
            countdownTitleEl.textContent = `${countDownTitle}`;
            // นัดถอยหลัง
            timeEl[0].textContent = `${days}`;
            timeEl[1].textContent = `${hours}`;
            timeEl[2].textContent = `${minutes}`;
            timeEl[3].textContent = `${seconds}`;
            countDownEl.hidden = false;
            completeEl.hidden = true;
        }
    }), second;
}

function callDateinStore() {
    if (localStorage.getItem('countDown')) {
        inputContainer.hidden = true;
        saveCountDown = JSON.parse(localStorage.getItem('countDown'));
        countDownTitle = saveCountDown.title;
        countDownDate = saveCountDown.date;
        countDownValue = new Date(countDownDate).getTime();
        setUptime();
    }

}

countdownButtonEl.addEventListener('click', reset);
completeButtonEl.addEventListener('click', reset);

function reset() {
    localStorage.removeItem('countDown');
    countDownEl.hidden = true;
    completeEl.hidden = true;
    inputContainer.hidden = false;
    clearInterval(countDownActive);
    countDownTitle = '';
    countDownDate = '';
}

callDateinStore();