//Counter
let num = document.getElementById("num");
let counter = document.getElementById("counter");

counter.addEventListener("click", () => {
  num.innerHTML++;
});

//Temp Conv Manual
let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let max_chars = 4;
function celciusToFahrenheit() {
  let fahrenheitValue = (celcius.value * 9) / 5 + 32;
  fahrenheit.value = fahrenheitValue.toFixed(1);

  if (celcius.value.length > celcius.maxLength) {
    celcius.value = celcius.value.slice(0, celcius.maxLength);
  }
}

celcius.addEventListener("input", celciusToFahrenheit);

function fahrenheitToCelcius() {
  let celciusValue = ((fahrenheit.value - 32) * 5) / 9;
  celcius.value = celciusValue.toFixed(1);
  if (fahrenheit.value.length > fahrenheit.maxLength) {
    fahrenheit.value = fahrenheit.value.slice(0, fahrenheit.maxLength);
  }
}

fahrenheit.addEventListener("input", fahrenheitToCelcius);
