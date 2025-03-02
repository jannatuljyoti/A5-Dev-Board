





// document.querySelectorAll("#complete-btn").forEach(button=>{
//     button.addEventListener("click",function(){
    
//     const activityDes = document.getElementById("description");
//     // const titles=this.getAttribute("title");

//     const t = document.createElement("t");
//     t.innerText = `
//     ${'You have Complete Fix mobile button issue at 12:48:15 PM'}
//     `
//     activityDes.appendChild(t);
   

    
//     });
    
// })


let button = document.querySelectorAll('#complete-btn');
const titlesBox = document.querySelectorAll('#title');
const activityDes = document.getElementById("description");



function getCurrentTime(){
    let now = new Date();
    let hour = now.getHours();
    let minute = now.getMinutes();
    let second = now.getSeconds();
    let AMPM= hour >= 12 ? "pm": "am";
    
    return `${hour}:${minute}:${second}:${AMPM}`;

}

button.forEach((button, index) =>{
    button.addEventListener('click', () =>{
        const updatedTime = getCurrentTime();
        
        const t = `You have completed ${titlesBox[index].textContent} at ${updatedTime}`;

        const messages = document.createElement(
            'messages');
            messages.textContent = t;

           messages.classList.add("mb-2","block");

            

            activityDes.appendChild(messages);

          



        

    });
});


document.getElementById("clear-data").addEventListener("click", function(){
    description.innerText = "";
});