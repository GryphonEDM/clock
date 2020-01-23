function getTime() {
    let fullTime = Date()
    fullTime.toString()

    let time = fullTime.slice(16, 25)
    let weekday = fullTime.slice(0, 3)
    let month = fullTime.slice(4, 7)
    let day = fullTime.slice(8, 10)
    let year = fullTime.slice(11, 15)
    let timeZone = fullTime.slice(34)

    displayTime(time)
    displayWeekday(weekday)
    displayCalendar(month, day, year)
    displayZone(timeZone)

    //exStr: Wed Jan 22 2020 20:11:19 GMT-0800 (Pacific Standard Time)
}

function displayTime(time) {
    var div = document.getElementById('time');
    div.innerHTML = time;
}

function displayWeekday(weekday) {
    var div = document.getElementById('weekday');
    div.innerHTML = weekday;
}

function displayCalendar(month, day, year) {
    var div = document.getElementById('month');
    div.innerHTML = month;

    var div = document.getElementById('day');
    div.innerHTML = day;

    var div = document.getElementById('year');
    div.innerHTML = year;
}

function displayZone(timeZone) {
    var div = document.getElementById('zone');
    div.innerHTML = timeZone;
}

function triggeredAlarm(alarmTime) {
    if (alarmTime === 0) {
    alert("Your alarm has gone off!")
}
}

// function setAlarm() {
//     let alarmTime
//     function onClick() {
//     if (!document.getElementById("textInput"))
// }
// }

function triggeredAlarm(alarmTime) {

}

function clearAlarm() {

}

function snoozeAlarm() {

}

function changeTimeZone() {

}

setInterval(getTime, 1000)
