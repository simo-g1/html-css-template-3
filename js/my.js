let section = document.querySelector(".skills");
let progressSpans = document.querySelectorAll(".bar span");

let section2 = document.querySelector(".work-steps");
let apears = document.querySelectorAll(".box img");

let section3 = document.querySelector(".pricing");
let move = document.querySelectorAll(".popular .label");

let nums = document.querySelectorAll(".stats .num");
let statsSection = document.querySelector(".stats");
let started = false; // Function Started ? No
window.onscroll = function () {
    // الجزء بتاع Skills
    if (window.scrollY >= section.offsetTop - 287) {
        progressSpans.forEach((span) => {
            span.style.width = span.dataset.width;
        });
    }

    // الجزء بتاع Work Steps
    if (window.scrollY >= section2.offsetTop - 250) {
        apears.forEach((img) => {
            img.style.opacity = img.dataset.op;
        });
    }
    // الجزء بتاع top video
    if (window.scrollY >= section3.offsetTop - 150) {
        move.forEach((label) => {
            label.style.transform = label.dataset.tr;
        });
    }

    // Stats Increase Number
    if (window.scrollY >= statsSection.offsetTop) {
        if (!started) {
            nums.forEach((num) => startCount(num));
        }
        started = true;
    }
};

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}
// The End Of The Year Date
// 1000 milliseconds = 1 Second

let countDownDate = new Date("dec 31, 2026 23:59:59").getTime();
// console.log(countDownDate);
let counter = setInterval(() => {
    // Get Date Now
    let dateNow = new Date().getTime();

    // Find The Date Difference Between Now And Countdown Date
    let dateDiff = countDownDate - dateNow;

    // Get Time Units
    // let days = Math.floor(dateDiff / 1000 / 60 / 60 / 24);
    let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

    if (dateDiff < 0) {
        days = hours = minutes = seconds = 0;
        clearInterval(counter);
    }
    document.querySelector(".days").innerHTML = days > 999 ? "+999" : (days < 10 ? `0${days}` : days);
    document.querySelector(".hours").innerHTML = hours > 999 ? "+999" : (hours < 10 ? `0${hours}` : hours);
    document.querySelector(".minutes").innerHTML = minutes > 999 ? "+999" : (minutes < 10 ? `0${minutes}` : minutes);
    document.querySelector(".seconds").innerHTML = seconds > 999 ? "+999" : (seconds < 10 ? `0${seconds}` : seconds);
}, 1000);
