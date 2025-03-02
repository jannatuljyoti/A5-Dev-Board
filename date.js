

const dateToday = document.getElementById("date");
let today= new Date();
const fullYear = {weekday: 'short', month: 'short',day:'2-digit',year:'numeric'};

const dateTime = today.toLocaleDateString('en-US',fullYear).replace(',','');
dateToday.textContent = dateTime;
