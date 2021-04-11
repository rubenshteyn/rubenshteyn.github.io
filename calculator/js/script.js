let operationButtons = document.getElementsByClassName('operation-button')

let inputOne = document.getElementById('input-one');
let inputTwo = document.getElementById('input-two');

function makeOperation(operationCode) {
  var numberOne = Number(inputOne.value);
  var numberTwo = Number(inputTwo.value);

  if(operationCode === '+') {
    var result = numberOne + numberTwo;
  } else if(operationCode === '-') {
    var result = numberOne - numberTwo;
  } else if (operationCode === '*') {
    var result = numberOne * numberTwo;
  } else if (operationCode === '/') {
    var result = numberOne / numberTwo;
  } else {
    window.alert('NO')
  }
  window.alert(result)
}

function onOperationButtonClick(eventObject) {
  var clickedElement = eventObject.currentTarget;
  var operation = clickedElement.innerHTML;
  makeOperation(operation);
}

for (var i = 0; i < operationButtons.length; i++) {
  var button = operationButtons[i];
  button.addEventListener('click', onOperationButtonClick);
}