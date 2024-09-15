const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setClock() {
    const currentDate = new Date();

    // Get current time
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const seconds = currentDate.getSeconds();

    // Calculate rotation angles for hands
    const secondRotation = (seconds / 60) * 360;
    const minuteRotation = (minutes / 60) * 360 + (seconds / 60) * 6; // Add seconds for smooth transition
    const hourRotation = (hours / 12) * 360 + (minutes / 60) * 30; // Add minutes for smooth transition

    // Apply rotation to the clock hands
    hourHand.style.transform = `rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `rotate(${minuteRotation}deg)`;
    secondHand.style.transform = `rotate(${secondRotation}deg)`;
}

// Run setClock initially and then every second
setClock();
setInterval(setClock, 1000);
