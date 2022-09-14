import { contract, web3 } from "./web3.service";

// WEB3
const getAccount = async () => (await web3.eth.getAccounts())[0];

// OWNER
export const getOwner = async () => contract.methods.getOwner().call();
export const changeOwner = async (newOwner) => {
  try {
    const from = await getAccount();
    const tx = await contract.methods.changeOwner(newOwner).send({ from });
    return tx;
  } catch (error) {
    throw new Error(error)
  }
}

// STUDENT NOTES
export const evaluate = async (studentId, note) => {
  try {
    const from = await getAccount();
    const tx = contract.methods.evaluate(studentId, note).send({ from });
    return tx;
  } catch (error) {
    throw new Error(error)
  }
}

export const seeNotes = async (studentId) => {
  try {
    return contract.methods.seeNotes(studentId).call();
  } catch (error) {
    throw new Error(error)
  }
} 