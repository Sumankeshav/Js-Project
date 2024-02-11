const minutesLabel=document.getElementById('minutes');
const secondLabel=document.getElementById('seconds');
const millisecondLabel=document.getElementById('milliseconds');
const startBtn=document.getElementById('startBtn');
const stopBtn=document.getElementById('stopBtn');
const pauseBtn=document.getElementById('pauseBtn');
const resetBtn=document.getElementById('resetBtn');

const lapList=document.getElementById('laplist');
let minutes=0,seconds=0,milliseconds=0,interval;
startBtn.addEventListener('click',startTimer);
stopBtn.addEventListener('click',stopTimer);
pauseBtn.addEventListener('click',pauseTimer);
resetBtn.addEventListener('click',resetTimer);
function startTimer(){
interval=setInterval(updateTimer,10);
startBtn.disabled=true;
}
function stopTimer(){

}
function pauseTimer(){

}
function resetTimer(){

}
function updateTimer(){
    milliseconds++;
    if(milliseconds===100){
        milliseconds=0;
        seconds++;
        if(seconds===60){
            seconds=0;
            minutes++;
        }
    }
    displayTimer();
}
function displayTimer(){
    millisecondLabel.textContent=milliseconds;
    secondLabel.textContent=seconds;
    minutesLabel.textContent=minutes;

}