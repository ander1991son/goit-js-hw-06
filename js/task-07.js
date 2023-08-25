const inputElement = document.querySelector("#font-size-control");
const textSpan = document.querySelector("#text");

inputElement.addEventListener("input", () => {
  const fontSize = inputElement.value + "px";

  textSpan.style.fontSize = fontSize;
});
