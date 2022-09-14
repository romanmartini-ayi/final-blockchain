import { web3Service } from "./js/config";
import { initApp } from './js/app'


document.addEventListener('DOMContentLoaded', async () => { 
  await web3Service(); 
  initApp();
});