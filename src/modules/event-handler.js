import { display } from './dom-manipulation';
import {
  intervalID,
  intervalLogic,
  setStoredAutoIncrement,
  setStoredDisplayCount,
} from './functions';

export { clickIncrement, resetGame, turnOnAutoIncrement };

const clicker = document.querySelector('.clicker');
const resetButton = document.querySelector('.reset-button');
const autoIncrement = document.querySelector('.auto-increment');

function clickIncrement() {
  clicker.addEventListener('click', () => {
    display.innerText++;
    setStoredDisplayCount();
  });
}

function resetGame() {
  resetButton.addEventListener('click', () => {
    clearInterval(intervalID);
    localStorage.clear();
    display.innerText = 0;
  });
}

function turnOnAutoIncrement() {
  autoIncrement.addEventListener('click', () => {
    if (!!localStorage.getItem('autoIncrement')) {
      return;
    }
    setStoredAutoIncrement();
    intervalLogic();
  });
}
