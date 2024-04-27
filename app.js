let ms = 0, s = 0, m = 0, h = 0;
let timer = null; 


const display = document.querySelector('.timer-display');
const laps = document.querySelector('.laps');


function updateDisplay() {
    display.innerText = `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}.${formatMilliseconds(ms)}`;
}


function start() {
    if (timer === null) {
        timer = setInterval(run, 10); 
    }
}


function pause() {
    if (timer !== null) {
        clearInterval(timer);
        timer = null; 
    }
}


function reset() {
    pause(); 
    
    ms = 0;
    s = 0;
    m = 0;
    h = 0;
    
    updateDisplay();
    
    laps.innerHTML = '';
}


function restart() {
    reset(); 
    start(); 
}
function resetLaps() {
    laps.innerHTML = '';
}

function lap() {
    const lapTime = `${formatTime(h)}:${formatTime(m)}:${formatTime(s)}.${formatMilliseconds(ms)}`;
    const lapElement = document.createElement('div');
    lapElement.innerText = `Lap ${laps.children.length + 1}: ${lapTime}`;
    laps.appendChild(lapElement);
}

function run() {
    ms += 1;
    
    
    if (ms === 100) {
        ms = 0;
        s += 1;
    }
    
    
    if (s === 60) {
        s = 0;
        m += 1;
    }
    
    
    if (m === 60) {
        m = 0;
        h += 1;
    }
    
    
    updateDisplay();
}

function resetLap(){
    laps.innerHTML="";
}
function formatTime(time) {
    return time.toString().padStart(2, '0');
}


function formatMilliseconds(time) {
    return time.toString().padStart(2, '0');
}


document.querySelector('#startButton').addEventListener('click', start);
document.querySelector('#pauseButton').addEventListener('click', pause);
document.querySelector('#resetButton').addEventListener('click', reset);
document.querySelector('#restartButton').addEventListener('click', restart);
document.querySelector('#lapButton').addEventListener('click', lap);