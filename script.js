// Get html tags
const hoursText = document.getElementById("hours-text"),
        minutesText = document.getElementById("minutes-text"),
        secondsText = document.getElementById("seconds-text"),
        dayStatusText = document.getElementById("day-status-text");

setInterval(function() {
    // Get current time in hours, minutes, and seconds
    const dateNow = new Date();
    let currentHour = dateNow.getHours()
        dayStatus = currentHour < 12 ? "AM" : "PM",
        currentHour = currentHour % 12 || 12, // convert in 12 hour AM/PM format
        currentMinute = dateNow.getMinutes(),
        currentSecond = dateNow.getSeconds();

    // Display current time into two digit format
    hoursText.innerHTML = ("0" + currentHour).slice(-2);
    minutesText.innerHTML = ("0" + currentMinute).slice(-2);
    secondsText.innerHTML = ("0" + currentSecond).slice(-2);

    // Display AM or PM
    dayStatusText.innerHTML = dayStatus;
    
}, 1000);