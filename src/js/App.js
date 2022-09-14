import { initApp, initContract, initWeb3 } from "./init-contract";

export function App() {
  console.log("App")
  initWeb3()
  .then(_web3 => {
    web3 = _web3;
    crud = initContract();
    initApp(); 
  })
  .catch(e => console.log(e.message));
};