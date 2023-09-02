const counter = document.querySelector("#counter");
const valueSpan = document.querySelector("#value");
const incrementButton = counter.querySelector("[data-action='increment']");
const decrementButton = counter.querySelector("[data-action='decrement']");

let counterValue = 0;
//valueSpan.textContent = counterValue;

function increment() {
  counterValue += 1;
  valueSpan.textContent = counterValue;
  console.log(valueSpan.innerHTML);
}

function decrement() {
  counterValue -= 1;
  valueSpan.textContent = counterValue;
  console.log(valueSpan.innerHTML);
}

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);
