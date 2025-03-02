const bgColors = [
    "bg-green-100",
    "bg-sky-100",
    "bg-indigo-100",
    "bg-purple-100",
    "bg-red-100",
    "bg-yellow-100",
    "bg-lime-100",

]


document.getElementById("theme").addEventListener("click",function(){
    // document.body.style.backgroundColor = 'red';
    const randomColor = Math.floor(Math.random()*bgColors.length);
    document.body.classList.remove(...bgColors);
    document.body.classList.add(bgColors[randomColor]);
})