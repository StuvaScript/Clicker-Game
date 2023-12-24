import { display } from './dom-manipulation';
import { turnOnAutoIncrement } from './event-handler';
export {
  setStoredDisplayCount,
  savedStats,
  setStoredAutoIncrement,
  intervalLogic,
  intervalID,
};

let intervalID;

function savedStats() {
  if (localStorage.getItem('displayCount')) {
    getStoredDisplayCount();
  }
  if (localStorage.getItem('autoIncrement')) {
    intervalLogic();
  }
}

function setStoredDisplayCount() {
  localStorage.setItem('displayCount', display.innerText);
}

function getStoredDisplayCount() {
  display.innerText = localStorage.getItem('displayCount');
}

function setStoredAutoIncrement() {
  localStorage.setItem('autoIncrement', 'true');
}

function intervalLogic() {
  intervalID = setInterval(() => {
    display.innerText++;
    setStoredDisplayCount();
  }, 1000);
}
