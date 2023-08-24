const controls = document.querySelector("#controls");
const input = document.querySelector("input");
const btnCreate = document.querySelector("[data-create]");
const btndestroy = document.querySelector("[data-destroy]");
const divBoxes = document.querySelector("#boxes");

btnCreate.addEventListener("click", (e) => {
  e.preventDefault;
  divBoxes.textContent = input.value;
  console.log(divBoxes.textContent);
});

btndestroy.addEventListener("click", (e) => {
  e.preventDefault;
  divBoxes.textContent = "";
  console.log(divBoxes.textContent);
});
