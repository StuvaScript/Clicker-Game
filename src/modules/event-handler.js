import { display } from './dom-manipulation';
import { setLocalStorage } from './functions';

export { clickIncrement, resetGame, turnOnAutoIncrement };

const clicker = document.querySelector('.clicker');
const resetButton = document.querySelector('.reset-button');
const autoIncrement = document.querySelector('.auto-increment');

function clickIncrement() {
  clicker.addEventListener('click', () => {
    display.innerText++;
    setLocalStorage();
  });
}

function resetGame() {
  resetButton.addEventListener('click', () => {
    display.innerText = 0;
    setLocalStorage();
  });
}

//todo **`` Figure out how to get this working for the auto increment

function turnOnAutoIncrement() {
  autoIncrement.addEventListener('click', () => {
    setInterval(display.innerText++, 1000);
  });
}
