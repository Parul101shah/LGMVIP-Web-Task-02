
const inputElement = document.querySelector(".input");


function appendToInput(value) {
  inputElement.value += value;
}

function clearInput() {
  inputElement.value = "";
}

function calculate() {
  try {
    inputElement.value = eval(inputElement.value);
  } catch (error) {
    inputElement.value = "Error";
  }
}

function calculateSquareRoot() {
  inputElement.value = Math.sqrt(eval(inputElement.value));
}

function calculatePower() {
  inputElement.value = Math.pow(eval(inputElement.value), 2);
}

function calculateSin() {
  inputElement.value = Math.sin(eval(inputElement.value));
}

function calculateCos() {
  inputElement.value = Math.cos(eval(inputElement.value));
}

function clearLastEntry() {
    const currentInput = inputElement.value;
    inputElement.value = currentInput.slice(0, -1);
  }

function calculateTan() {
  inputElement.value = Math.tan(eval(inputElement.value));
}

function calculateLog() {
  inputElement.value = Math.log10(eval(inputElement.value));
}
