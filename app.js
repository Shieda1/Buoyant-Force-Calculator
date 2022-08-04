// https://calculator.swiftutors.com/buoyant-force-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const buoyantForceRadio = document.getElementById('buoyantForceRadio');
const fluidDensityRadio = document.getElementById('fluidDensityRadio');
const displacedVolumeRadio = document.getElementById('displacedVolumeRadio');

let buoyantForce;
const g = 9.80665;
let fluidDensity = v1;
let displacedVolume = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

buoyantForceRadio.addEventListener('click', function() {
  variable1.textContent = '(ρ) Fluid Density (kg m-³)';
  variable2.textContent = '(V) Displaced Volume (kg m-³)';
  fluidDensity = v1;
  displacedVolume = v2;
  result.textContent = '';
});

fluidDensityRadio.addEventListener('click', function() {
  variable1.textContent = '(B) Buoyant Force (N)';
  variable2.textContent = '(V) Displaced Volume (kg m-³)';
  buoyantForce = v1;
  displacedVolume = v2;
  result.textContent = '';
});

displacedVolumeRadio.addEventListener('click', function() {
  variable1.textContent = '(B) Buoyant Force (N)';
  variable2.textContent = '(ρ) Fluid Density (kg m-³)';
  buoyantForce = v1;
  fluidDensity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(buoyantForceRadio.checked)
    result.textContent = `Buoyant Force = ${computeBuoyantForce().toFixed(2)} N`;

  else if(fluidDensityRadio.checked)
    result.textContent = `Fluid Density = ${computeFluidDensity().toFixed(2)} kg m-³`;

  else if(displacedVolumeRadio.checked)
    result.textContent = `Displaced Volume = ${computeDisplacedVolumet().toFixed(2)} kg m-³`;
})

// calculation

function computeBuoyantForce() {
  return Number(fluidDensity.value) * Number(displacedVolume.value) * g;
}

function computeFluidDensity() {
  return Number(buoyantForce.value) / (Number(displacedVolume.value) * g);
}

function computeDisplacedVolumet() {
  return Number(buoyantForce.value) / (Number(fluidDensity.value) * g);
}