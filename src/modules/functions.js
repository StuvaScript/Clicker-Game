import { display } from './dom-manipulation';
export { setLocalStorage, savedStats };

function savedStats() {
  if (localStorage.getItem('displayCount')) {
    getLocalStorage();
  }
}

function setLocalStorage() {
  localStorage.setItem('displayCount', display.innerText);
}

function getLocalStorage() {
  display.innerText = localStorage.getItem('displayCount');
}
