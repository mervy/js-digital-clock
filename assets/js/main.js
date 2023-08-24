const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const clock = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let secs = dateToday.getSeconds();

    hours.textContent = hr < 10 ? '0' + hr : hr;
    minutes.textContent = min < 10 ? '0' + min : min;
    seconds.textContent = secs < 10 ? '0' + secs : secs;

})
