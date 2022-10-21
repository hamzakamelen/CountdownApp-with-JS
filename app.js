

var Dmin = document.getElementById('Dmin');
var Dsec = document.getElementById('Dsec');
var Dmsec = document.getElementById('Dmsec');
var startbt = document.getElementById('start');
var pausebt = document.getElementById('pause');
var resetbt = document.getElementById('reset');
var min = prompt("Enter Minutes");
var sec = prompt("Enter Seconds");
var msec = 9;
Dmin.innerHTML=min;
Dsec.innerHTML=sec;
Dmsec.innerHTML=msec;
var interval;
function timer(){
    msec--
    Dmsec.innerHTML = msec;
    if(msec === 0){
        sec--
        msec=9
        Dsec.innerHTML= sec;
    }
    if(sec == 0){
        min--
        sec=59
        msec=9
        Dmin.innerHTML = min;
    }
}
function start(){
    interval = setInterval(timer,100) 
    startbt.setAttribute('disabled','disabled')
    pausebt.disabled = false;
    resetbt.disabled = false;
}
function pause(){
    clearInterval(interval)
    pausebt.setAttribute('disabled','disabled')
    startbt.disabled = false;
    resetbt.disabled = false;
}
function reset(){
    pause()
    startbt.disabled = false;
    pausebt.setAttribute('disabled','disabled')
    resetbt.setAttribute('disabled','disabled')
    var min = prompt("Enter Minutes");
    var sec = prompt("Enter Seconds");
    var msec = 9;
    Dmin.innerHTML = min;
    Dsec.innerHTML= sec;
    Dmsec.innerHTML = msec;
}