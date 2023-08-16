console.log('BMI Calculator');

const legendArea = document.querySelector('.container-legend');
const legendBtn = document.querySelector('.legendBtn');
const calculateBtn = document.querySelector('.calculateBtn');
const resultBmi = document.querySelector('h3');

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
  const inputWeight = document.getElementById('inputWeight').value;
  const inputHeight = document.getElementById('inputHeight').value;
  bmi = 10000 * (inputWeight) / (inputHeight * inputHeight);
  bmi = Math.round((bmi + Number.EPSILON) * 100) / 100;

  presentBmi();
}

function presentBmi() {
  resultBmi.textContent = bmi;
}

legendBtn.addEventListener('click', showHideLegend);
calculateBtn.addEventListener('click', calculateBmi);