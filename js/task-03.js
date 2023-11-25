const textInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#mane-output');
textInput.addEventListener('input',function() {
const trimmedInput = textInput.trim();
if (trimmedInput === '') {
    nameOutput.text = "Anonymous";
}
});
