import { display } from './dom-manipulation';
import {
  intervalID,
  intervalLogic,
  multiplier,
  setStoredAutoIncrement,
  setStoredDisplayCount,
} from './functions';

export { clickIncrement, resetGame, turnOnAutoIncrement, multiply10Percent };

//? **`` The logic that adds numbers when you click and updates the local stored number dynamically
function clickIncrement() {
  document.querySelector('.clicker').addEventListener('click', () => {
    display.innerText++;
    setStoredDisplayCount();
  });
}

//? **`` Resets the number to 'zero', stops the interval counting, clears the local storage, resets multiplier to 1000
function resetGame() {
  document.querySelector('.reset-button').addEventListener('click', () => {
    clearInterval(intervalID);
    localStorage.clear();
    display.innerText = 0;
    // multiplier = 1000;
  });
}

//? **`` Turns on the auto counting, doesn't allow you to click again if its already activated, adds to local storage that the auto incrementor is 'true'
function turnOnAutoIncrement() {
  document.querySelector('.auto-increment').addEventListener('click', () => {
    if (!!localStorage.getItem('autoIncrement')) {
      return;
    }
    setStoredAutoIncrement();
    intervalLogic();
  });
}

function multiply10Percent() {
  document
    .querySelector('.multiply-10-percent')
    .addEventListener('click', () => {
      // multiplier = 10000;
    });
}
