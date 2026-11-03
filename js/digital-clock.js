function updateClock() {
    // Create a new Date object
    const now = new Date();

    // Get hours, minutes, and seconds
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Determine AM/PM session
    let session = "AM";
    if (hours >= 12) {
        session = "PM";
    }

    // Convert to 12-hour format
    if (hours > 12) {
        hours = hours - 12;
    }
    if (hours === 0) {
        hours = 12;
    }

    // Add leading zeros to hours, minutes, and seconds
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Format the time string
    const timeString = hours + ":" + minutes + ":" + seconds + " " + session;

    // Get the date string
    const dateString = now.toLocaleDateString();

    // Update the DOM
    document.getElementById("clock-face").innerHTML = timeString;
    document.getElementById("calendar-date").innerHTML = dateString;
}

// Initialize the clock to run every 1000 milliseconds (1 second)
setInterval(updateClock, 1000);

// Call updateClock immediately so we don't wait 1 second for the first update
updateClock();
