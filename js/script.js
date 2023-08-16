console.log('BMI Calculator');

const legendArea = document.querySelector('.container-legend');
const legendBtn = document.querySelector('.legendBtn');

let inputWeight = document.getElementById('inputWeight').innerText;
let inputHeight = document.getElementById('inputHeight').innerText;
let bmi;

let isLegend = false

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



bmi = 10000 * (inputWeight) / (inputHeight * inputHeight);

console.log(bmi);

legendBtn.addEventListener('click', showHideLegend)