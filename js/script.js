console.log('BMI Calculator');

const legendArea = document.querySelector('.container-legend');
const legendBtn = document.querySelector('.legendBtn');
const calculateBtn = document.querySelector('.calculateBtn');
const resultBmi = document.querySelector('h3');

let inputWeight;
let inputHeight;

let isLegend = false
let bmi;

function showHideLegend() {
  if (isLegend === true) {
    legendArea.style.display = 'none';
    isLegend = false;
    console.log('hide');
  } else {
    legendArea.style.display = 'block'
    isLegend = true;
    console.log('show');
  }
}

function calculateBmi() {
  inputWeight = document.getElementById('inputWeight').value;
  inputHeight = document.getElementById('inputHeight').value;
  if (inputWeightValidation() === true
    && inputHeightValidation() === true) {
    bmi = 10000 * (inputWeight) / (inputHeight * inputHeight);
    bmi = Math.round((bmi + Number.EPSILON) * 100) / 100;
    presentBmi();
  }
}

function presentBmi() {
  resultBmi.textContent = bmi;
}

function inputWeightValidation() {
  if (isNumber(inputWeight) === true) {
    return true;
  }
}

function inputHeightValidation() {
  if (isNumber(inputHeight) === true) {
    return true;
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

function isRange(min, max) {

}

legendBtn.addEventListener('click', showHideLegend);
calculateBtn.addEventListener('click', calculateBmi);