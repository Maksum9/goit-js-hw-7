function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const clickBtn = document.querySelector('.chage-color');
addEventListener("click",() => {
  const bodyNewColor = getRandomHexColor();
  document.body.style.backgroundColor = bodyNewColor;
  document.querySelector(".color")
  textContent = bodyNewColor;
}
)