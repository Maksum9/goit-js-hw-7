function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const box = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");

const createBoxes = (amount) => {
  box.innerHTML = "";
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const newEl = document.createElement("div");
    newEl.style.backgroundColor = getRandomHexColor();
    newEl.style.width = `${size}px`;
    newEl.style.height = `${size}px`;
    newEl.style.margin = `${10}px`;
    box.appendChild(newEl);
    size += 10;
  }
};

const destroyBoxes = () => {
  box.innerHTML = "";
};

createBtn.addEventListener("click", () => {
  const amount = parseInt(input.value);
  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    input.value = "";
  }
});

destroyBtn.addEventListener("click", destroyBoxes);