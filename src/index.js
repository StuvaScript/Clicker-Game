import {
  clickIncrement,
  resetGame,
  turnOnAutoIncrement,
} from './modules/event-handler';
import { savedStats } from './modules/functions';
import './normalize.css';
import './style.css';

savedStats();
clickIncrement();
turnOnAutoIncrement();
resetGame();
