let currentDay = new Date();
var timer = null;
var end;
var zero;
var btn = document.getElementById("btn");
var day = document.getElementById("day");
var hour = document.getElementById("hour");
var minute = document.getElementById("minute");
var second = document.getElementById("second");
var endtime = document.getElementById("end");
var startBtn = document.getElementById("start");
zero = day.innerHTML = hour.innerHTML = minute.innerHTML = second.innerHTML = "00";

startBtn.onclick = function () {
    end = endtime.value;
    if (currentDay > end) {
        alert("Please enter date！")
        return false;
    };
    countDown();
    timer = setInterval(countDown, 1000);
}

function countDown() {
    var timedate = new Date(Date.parse(end.replace(/-/g, "/")));
    var currentDay = new Date();
    var date = (timedate.getTime() - currentDay.getTime()) / 1000;
    var dayTime = Math.floor(date / (60 * 60 * 24));
    var _hour = date - dayTime * 60 * 60 * 24;
    var hourTime = Math.floor(_hour / (60 * 60));
    var _minute = _hour - hourTime * 60 * 60;
    var minuteTime = Math.floor(_minute / (60));
    var _second = _minute - minuteTime * 60;
    var secondTime = Math.floor(_second);

    function toDou(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }
    if (date > 0) {
        day.innerHTML = toDou(dayTime);
        hour.innerHTML = toDou(hourTime);
        minute.innerHTML = toDou(minuteTime);
        second.innerHTML = toDou(secondTime);
    } else {
        btn.className = "";
        btn.className = "btn";
        btn.onclick = function () {
            alert("oops")
        }
        endtime.value = "";
        clearInterval(timer);
        zero;
    }
}