function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const box = document.querySelector("#boxes");
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const input = document.querySelector("input");
let arrEl = [];
let num = 0;
// function create element and add element in box
const createElement = (n) => {
  for (let i = 0; i < n; i++) {
    const newEl = <div style="background-color: ${getRandomHexColor()}; width: 30px; height: 30px"></div>;
    arrEl.push(newEl);
  }
  box.insertAdjacentHTML("afterbegin", arrEl.join(""));
};
//get input value
input.addEventListener("blur", () => {
  createBtn.addEventListener("click", createElement(input.value));
});