let timer;
let elapsedSeconds = 0;
let isRunning = false;

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(() => {
      elapsedSeconds++;
      document.getElementById("display").innerText = formatTime(elapsedSeconds);
    }, 1000);
  }
}

function stopTimer() {
  isRunning = false;
  clearInterval(timer);
}

function resetTimer() {
  isRunning = false;
  clearInterval(timer);
  elapsedSeconds = 0;
  document.getElementById("display").innerText = "00:00:00";
}

function formatTime(seconds) {
  let hrs = Math.floor(seconds / 3600);
  let mins = Math.floor((seconds % 3600) / 60);
  let secs = seconds % 60;
  return `${hrs.toString().padStart(2, "0")}:${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

// Button functionality
document.getElementById("startBtn").addEventListener("click", startTimer);
document.getElementById("stopBtn").addEventListener("click", stopTimer);
document.getElementById("resetBtn").addEventListener("click", resetTimer);

// Voice command setup
if (annyang) {
  let commands = {
    "start timer": startTimer,
    "stop": stopTimer,
    "reset": resetTimer
  };
  
  annyang.addCommands(commands);
  annyang.start();
}
