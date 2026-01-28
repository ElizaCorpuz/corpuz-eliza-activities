const display = document.getElementById("display");
const display1 = document.getElementById("display1");

let firstValue = "";
let operator = "";

function appendValue(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}
function ope(value) {
  firstValue = display.value;
  operator = value;
  display1.value = operator;
  display.value = "0";
}

function calculate() {
  const secondValue = display.value;
  let result;

  if (operator === "+") {
    result = Number(firstValue) + Number(secondValue);
  } else if (operator === "-") {
    result = Number(firstValue) - Number(secondValue);
  } else if (operator === "*") {
    result = Number(firstValue) * Number(secondValue);
  } else if (operator === "/") {
    result = Number(firstValue) / Number(secondValue);
  }

  display.value = result;
  display1.value = "";
}


function allClear() {
  display.value = "0";
  display1.value = "";
}

function clearLast() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") display.value = "0";
}
