const textInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#mane-output');
const trimmedInput = textInput.trim()
if (trimmedInput === '') {
    nameOutput.textContent = "Anonymous";
}