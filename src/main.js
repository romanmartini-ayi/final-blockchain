import { web3Service } from "./js/web3.service";
import { initApp } from './js/app'


document.addEventListener('DOMContentLoaded', async () => { 
  await web3Service(); 
  initApp();
});