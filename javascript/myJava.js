let now = new Date();
let hours = (now.getHours());
let minutes = (now.getMinutes());

let currenttime = `${hours}:${minutes}`;
document.getElementById("ClockWorkJava").innerText = currenttime;