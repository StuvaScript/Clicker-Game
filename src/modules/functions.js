import { display } from './dom-manipulation';
import { turnOnAutoIncrement } from './event-handler';
export {
  setStoredDisplayCount,
  savedStats,
  setStoredAutoIncrement,
  intervalLogic,
  intervalID,
};

//? **`` This is declaring the returned ID created by the 'setInterval()' function
let intervalID;

//? **`` This will load any locally stored saved progress
function savedStats() {
  if (localStorage.getItem('displayCount')) {
    getStoredDisplayCount();
  }
  if (localStorage.getItem('autoIncrement')) {
    intervalLogic();
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

//? **`` The interval counter, sets the returned ID into it's own variable that was initially declared above, it counts up the displayed number, it updates the local storage display count number
function intervalLogic() {
  intervalID = setInterval(() => {
    display.innerText++;
    setStoredDisplayCount();
  }, 1000);
}
