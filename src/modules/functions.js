import { display } from './dom-manipulation';

export {
  setStoredDisplayCount,
  savedStats,
  setStoredAutoIncrement,
  intervalLogic,
  intervalID,
  multiplier,
};

//? **`` This is declaring the returned ID created by the 'setInterval()' function
let intervalID;

//? **`` This is the interval multiplier, initially set to 1000(ms)
let multiplier = 1000;

//? **`` This will load any locally stored saved progress
function savedStats() {
  if (localStorage.getItem('displayCount')) {
    getStoredDisplayCount();
  }
  if (localStorage.getItem('autoIncrement')) {
    intervalLogic(multiplier);
  }
}

//? **`` Adds the display count to local storage
function setStoredDisplayCount() {
  localStorage.setItem('displayCount', display.innerText);
}

//? **`` Gets the display count from local storage
function getStoredDisplayCount() {
  display.innerText = localStorage.getItem('displayCount');
}

//? **`` Sets the 'auto increment' value in local storage to 'true'
function setStoredAutoIncrement() {
  localStorage.setItem('autoIncrement', 'true');
}

//todo **`` Keep updating the interval logic

//? **`` The interval counter, sets the returned ID into it's own variable that was initially declared above, it counts up the displayed number, it updates the local storage display count number

let lastTime = null;
let totalTime = 0;
let displayValue = 0;
display.innerText = displayValue;
const displayPerMillisecond = 0.001;
let monkeyMultiplierPerMillisecond = 0.003;

function intervalLogic() {
  intervalID = setInterval(() => {
    const currentTime = Date.now();
    if (lastTime === null) {
      lastTime = currentTime;
    }
    const deltaTime = currentTime - lastTime;
    totalTime += deltaTime;
    lastTime = currentTime;
    updateGame(deltaTime, totalTime);
    setStoredDisplayCount();
  }, 1000 / 60);
}

function updateGame(deltaTime, totalTime) {
  displayValue += displayPerMillisecond * deltaTime;
  displayValue += monkeyMultiplierPerMillisecond * deltaTime;
  display.innerText = displayValue.toFixed(2);
}
