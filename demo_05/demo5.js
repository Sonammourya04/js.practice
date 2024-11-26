//build a count down timer that starts  when a button is clicked and updates the display in real-time


var  start = document.querySelector("#start")
 var  stop = document.querySelector("#stop")
 var int;
 
 var  h3= document.querySelector("h3")
 

 start.addEventListener("click", function(){
    var count= 0;
    int = setInterval(function(){
        h3.textContent = count;
        count++;
    },1000)
 });
 stop.addEventListener("click",function(){
    clearInterval(int);
 })