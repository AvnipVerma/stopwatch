window.onload = function () {
    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("start");
    var buttonStop = document.getElementById("stop");
    var buttonReset = document.getElementById("reset");
    var interval;

    buttonStart.onclick = function () {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    }

    buttonStop.onclick = function () {
        clearInterval(interval);
    }

    buttonReset.onclick = function () {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    }

    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }
        if (tens > 9) {
            appendTens.innerHTML = tens;
        }

        if (tens > 99) {
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "00";
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }
    }
}
