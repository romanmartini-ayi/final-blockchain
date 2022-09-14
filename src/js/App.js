import { changeOwner, evaluate, getOwner, seeNotes } from "./contract-methods.service";

const exec = {
  ['setStudentNotes']: evaluateApplication,
  ['getStudentNotes']: getStudentNotesApplication,
  ['getOwner']: getOwnerApplication,
  ['changeOwner']: changeOwnerApplication,
}

export function app() {

  document.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!exec[e.target.id]) return;
    await exec[e.target.id](e)
  })

  getOwnerApplication()

};

// APLLICATION
async function evaluateApplication(e) {
  const studentId = e.target.elements.studentId.value;
  const note = e.target.elements.note.value;
  const tx = await evaluate(studentId, note);
  console.log(tx)
}

async function getStudentNotesApplication(e) {
  const $seeNote = document.getElementById('seeNote');
  try {
    const studentId = e.target.elements.studentId.value;
    const result = await seeNotes(studentId);
    if (+result) return $seeNote.innerText = `${result}`;
    return $seeNote.innerText = "El estudiante no existe";
  } catch (error) {
    $seeNote.innerText = `Ooops there was an error while trying to read a user ${studentId}`
  }
}

async function getOwnerApplication() {
  const $seeOwner = document.getElementById('seeOwner');
  try {
    const ownerAddress = await getOwner();
    console.log(1)
    console.log(ownerAddress)
    $seeOwner.innerText = ownerAddress;
    return 
  } catch (error) {
    $seeOwner.innerText = `Ooops. Error`
  }
}

async function changeOwnerApplication(e) {
  const newOwnerAddress = e.target.elements.newOwnerAddress.value;
  const tx = await changeOwner(newOwnerAddress);
  console.log(tx)
  await getOwnerApplication();
}