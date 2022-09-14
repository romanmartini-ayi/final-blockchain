import { web3, contract } from "./config";

export const initApp = () => {
  const $setStudentNotes = document.getElementById('setStudentNotes');
  const $getStudentNotes = document.getElementById('getStudentNotes');
  const $seeNote = document.getElementById('seeNote');

  let accounts = [];
  web3.eth.getAccounts().then(_accounts => { accounts = _accounts });

  $setStudentNotes.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentId = e.target.elements.studentId.value;
    const note = e.target.elements.note.value;
    contract.methods.evaluate(studentId, note).send({from: accounts[0]})
      .then(console.log)
      .catch(console.log);
  });  

  $getStudentNotes.addEventListener('submit', (e) => {
    e.preventDefault();
    const studentId = e.target.elements.studentId.value;
    contract.methods.seeNotes(studentId).call()
      .then(result => $seeNote.innerText = `${result}`)
      .catch(_e => $seeNote.innerText = `Ooops there was an error while trying to read a user ${studentId}`);
  });  
};