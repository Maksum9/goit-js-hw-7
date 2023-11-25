const textInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');
textInput.addEventListener('input',function() {
const trimmedInput = textInput.value.trim();
if (trimmedInput === '') {
    nameOutput.textContent = "Anonymous";
} else {
    nameOutput.textContent = trimmedInput;
}
});
