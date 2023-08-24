// const spanColor = document.querySelector(".color");
// const btn = document.querySelector(".change-color");

// btn.addEventListener("click", () => {
//   spanColor.value = spanColor.style.backgraudcolor = blue;
// });
//////////////

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const changeColorButton = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");
const body = document.body;

changeColorButton.addEventListener("click", function () {
  const randomColor = getRandomHexColor();
  body.style.backgroundColor = randomColor;
  colorSpan.textContent = randomColor;
});
