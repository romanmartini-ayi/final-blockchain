import Web3 from 'web3';
import StudentNote from '../../build/contracts/StudentNote.json';

export let web3;
export let contract;

const initWeb3 = async  () => {
  try {
    if (typeof window.ethereum !== 'undefined') {
      await window.ethereum.enable();
      return new Web3(window.ethereum);
    }
    if (typeof window.web3 !== 'undefined') return new Web3(window.web3.currentProvider);
    return new Web3('http://localhost:9545');
  } catch (error) {
    throw new Error(error);    
  }
};

const initContract =  () => {
  const deploymentKey = Object.keys(StudentNote.networks)[0];
  return new web3.eth.Contract(
    StudentNote.abi, 
    StudentNote
      .networks[deploymentKey]
      .address
  );
};

export const config = async () => {
  web3 = await initWeb3();
  contract = initContract();
};
