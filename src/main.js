import { web3Service } from "./js/web3.service";
import { app } from './js/app'


document.addEventListener('DOMContentLoaded', async () => { 
  await web3Service(); 
  app();
});