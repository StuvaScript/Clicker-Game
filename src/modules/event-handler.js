import { display } from './dom-manipulation';
import {
  intervalID,
  intervalLogic,
  setStoredAutoIncrement,
  setStoredDisplayCount,
} from './functions';

export { clickIncrement, resetGame, turnOnAutoIncrement };

//? **`` The logic that adds numbers when you click and updates the local stored number dynamically
function clickIncrement() {
  document.querySelector('.clicker').addEventListener('click', () => {
    display.innerText++;
    setStoredDisplayCount();
  });
}

//? **`` Resets the number to 'zero', stops the interval counting, clears the local storage
function resetGame() {
  document.querySelector('.reset-button').addEventListener('click', () => {
    clearInterval(intervalID);
    localStorage.clear();
    display.innerText = 0;
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
