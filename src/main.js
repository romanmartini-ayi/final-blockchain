import { config } from "./js/config";
import { initApp } from './js/app'


document.addEventListener('DOMContentLoaded', async () => { 
  await config(); 
  initApp();
});