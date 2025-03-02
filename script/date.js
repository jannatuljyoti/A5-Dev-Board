// document.getElementById("date").addEventListener("click",function(){
    
// })

// const Date = new Date("7")

// document.getElementById("date").value = new Date().toJSON().slice(0,10)

// let date = new Date();
// let currentDate = dates.toDateString();
// console.log("Date" + currentDate)
// document.write(date);

const dateToday = document.getElementById("date");
let today= new Date();
// let day = today.getDate();

// let month = today.getMonth();
// const months = month.newDate().toLocaleString();
// let year = today.getFullYear();
const fullYear = {weekday: 'short', month: 'short',day:'2-digit',year:'numeric'};
const dateTime = today.toLocaleDateString('en-US',fullYear).replace('','');
dateToday.textContent = dateTime;
