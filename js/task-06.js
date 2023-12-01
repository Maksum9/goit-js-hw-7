function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const box = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
let arrEl = [];
let num = 0;
let sizeIncrement = 10;

const createElement = (n) => {
  for (let i = 0; i < n; i++) {
    const newSize = 30 + i * sizeIncrement;
    const newEl = `<span style="background-color: ${getRandomHexColor()}; width: ${newSize}px; height: ${newSize}px; display: inline-block; margin: 5px;"></span>`;
    arrEl.push(newEl);
  }
  box.insertAdjacentHTML("beforeend", arrEl.join(""));
};

const destroyElements = () => {
  box.innerHTML = "";
};

input.addEventListener("blur", () => {
  createBtn.addEventListener("click", () => {
    createElement(input.value);
  });
});

destroyBtn.addEventListener("click", destroyElements);
