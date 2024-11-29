let currentInput = '';
let operator = '';
let firstOperand = null;

function appendValue(value) {
  currentInput += value;
  updateDisplay(currentInput);
}

function operation(op) {
  if (currentInput === '') return; // Prevents clicking operator without a number
  if (firstOperand === null) {
    firstOperand = parseFloat(currentInput);
  } else {
    calculate();
  }
  operator = op;
  currentInput = ''; // Clear input for the second operand
}

function calculate() {
  if (firstOperand === null || operator === '' || currentInput === '') return;

  const secondOperand = parseFloat(currentInput);
  let result = 0;

  switch (operator) {
    case '+':
      result = firstOperand + secondOperand;
      break;
    case '-':
      result = firstOperand - secondOperand;
      break;
    case '*':
      result = firstOperand * secondOperand;
      break;
    case '/':
      result = secondOperand !== 0 ? firstOperand / secondOperand : 'Error';
      break;
    default:
      return;
  }

  updateDisplay(result);
  firstOperand = result;
  currentInput = '';
  operator = '';
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  firstOperand = null;
  updateDisplay(0);
}

function updateDisplay(value) {
  document.getElementById('result').value = value;
}
