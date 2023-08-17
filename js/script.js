console.log('BMI Calculator');

const legendArea = document.querySelector('.container-legend');
const legendBtn = document.querySelector('.legendBtn');
const calculateBtn = document.querySelector('.calculateBtn');
const resultBmi = document.querySelector('h3');
const messageBox = document.querySelector('.message-box');
const radioGenderMale = document.getElementById('inputMale');
const radioGenderFemale = document.getElementById('inputFemale');
const resultColor = document.querySelector('h3');

let inputWeight;
let inputHeight;
let inputAge;

let isLegend = false
let bmi;

function showHideLegend() {
  if (isLegend === true) {
    legendArea.style.display = 'none';
    isLegend = false;
  } else {
    legendArea.style.display = 'block'
    isLegend = true;
  }
}

function calculateBmi() {
  inputWeight = document.getElementById('inputWeight').value;
  inputHeight = document.getElementById('inputHeight').value;
  inputAge = document.getElementById('inputAge').value;
  if (inputWeightValidation() === true
    && inputHeightValidation() === true
    && inputAgeValidation() === true
    && radioGenderValidation() === true) {
    bmi = 10000 * (inputWeight) / (inputHeight * inputHeight);
    bmi = Math.round((bmi + Number.EPSILON) * 100) / 100;
    presentBmi();
  }
}

function presentBmi() {
  resultColor.className = '';
  if (bmi <= 17 || bmi >= 30) {
    resultColor.classList.add('result-red')
  }
  else if (bmi <= 25 && bmi >= 18.5) {
    resultColor.classList.add('result-green')
  } else {
    resultColor.classList.add('result-orange')
  }
  resultBmi.textContent = bmi;
  messageBox.value = "Obliczono BMI."
  messageBox.style.color = 'green';
}

function inputWeightValidation() {
  if (isNumber(inputWeight) === true && inputWeight > 0) {
    return true;
  } else {
    messageBox.value = "Wprowadź prawidłową wagę."
    messageBox.style.color = 'red';
  }
}

function inputHeightValidation() {
  if (isNumber(inputHeight) === true && inputHeight > 0) {
    return true;
  } else {
    messageBox.value = "Wprowadź prawidłowy wzrost."
    messageBox.style.color = 'red';
  }
}

function inputAgeValidation() {
  if (isNumber(inputAge) === true && inputAge > 0) {
    return true;
  } else {
    messageBox.value = "Wprowadź prawidłowy wiek."
    messageBox.style.color = 'red';
  }
}

function isNumber(input) {
  if (isNaN(input)) {
    console.log('Input error');
    return false;
  } else {
    return true;
  }
}

function radioGenderValidation() {
  if (radioGenderFemale.checked === true ||
    radioGenderMale.checked === true) {
    return true
  }
  else {
    messageBox.value = "Wybierz płeć."
    messageBox.style.color = 'red';
    return false;
  }
}

legendBtn.addEventListener('click', showHideLegend);
calculateBtn.addEventListener('click', calculateBmi);