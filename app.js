var hours=0;
var minute=0;
var second=0;
var startTimer;
var btn1=document.getElementById("btn1");
var btn2=document.getElementById("btn2");
var btn3=document.getElementById("btn3");

var time=""+0+hours+":"+0+minute+":"+0+second;
var lable=document.getElementById("timer");
lable.innerHTML=time;

btn1.addEventListener("click",()=>{
    startTimer=setInterval(start,1000);
});
btn2.addEventListener("click",pause);
btn3.addEventListener("click",stop);

function disable(btn){
    btn.setAttribute("disabled","disabled");
    btn.style.cursor="no-drop";
}
function enable(btn){
    btn.removeAttribute("disabled");
    btn.style.cursor="auto";
}
disable(btn2);
disable(btn3);
function start(){
    disable(btn1);
    enable(btn2);
    enable(btn3);
    second++;
    if(second==60){
        second=0;
        minute++;
    }
    if(minute==60){
        minute=0;
        hours++;
    }
    showTime();
}
function showTime(){
    let sec=0;let min=0;let hour=0;
    if(second<10){
        sec=""+0+second;
    }
    else{
        sec=second;
    }
    if(minute<10){
        min=""+0+minute;
    }
    else{
        min=minute;
    }
    if(hours<10){
        hour=""+0+hours;
    }
    else{
        hour=hours;
    }
    lable.innerHTML=hour+":"+min+":"+sec;
}
var temp=0;
function pause(){
    btn2.innerHTML="continue";
    btn2.removeEventListener("click",pause);
    btn2.addEventListener("click",conti);
    clearInterval(startTimer);
}
function conti(){
    btn2.innerHTML="pause";
    btn2.removeEventListener("click",conti);
    btn2.addEventListener("click",pause);
    startTimer=setInterval(start,1000);
    
}
function stop(){
    hours=0;minute=0;second=0;
    lable.innerHTML=""+0+hours+":"+0+minute+":"+0+second;
    enable(btn1);
    disable(btn2);
    disable(btn3);
    btn2.innerHTML="pause";
    clearInterval(startTimer);
}
