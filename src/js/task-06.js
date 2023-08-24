const inputElement = document.querySelector("#validation-input");

inputElement.addEventListener("blur", function () {
  const expectedLength = parseInt(inputElement.getAttribute("data-length"));
  const actualLength = inputElement.value.length;

  inputElement.classList.toggle("valid", actualLength === expectedLength);
  inputElement.classList.toggle("invalid", actualLength !== expectedLength);
  console.log(inputElement.value);
});

// inputElement.addEventListener("blur", function () {
//   const expectedLength = parseInt(inputElement.getAttribute("data-length"));
//   const actualLength = inputElement.value.length;

//   if (actualLength === expectedLength) {
//     inputElement.classList.remove("invalid");
//     inputElement.classList.add("valid");
//   } else {
//     inputElement.classList.remove("valid");
//     inputElement.classList.add("invalid");
//   }
// });
