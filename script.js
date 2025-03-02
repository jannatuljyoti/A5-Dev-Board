
function b(){
    alert("Board Updated Successfully");
}


document.querySelectorAll("#complete-btn").forEach(button=>{
    button.addEventListener("click",function(){
    const decreaseNumber = document.getElementById("decrease").innerText;
    const convertedNumber = parseInt(decreaseNumber);
    const sum = convertedNumber -1;
    document.getElementById("decrease").innerText = sum;

    });
})

document.querySelectorAll("#complete-btn").forEach(button=>{
    button.addEventListener("click",function(){
    const decreaseNumber = document.getElementById("increase").innerText;
    const convertedNumber = parseInt(decreaseNumber);
    const sum = convertedNumber +1;
    document.getElementById("increase").innerText = sum;

    
   if(convertedNumber===28){
        alert("congrates!!! You have completed all the current tast")
    }

    
    });
    
})


document.getElementById("discover").addEventListener("click",function(){
    window.location.href="question.html";

})




