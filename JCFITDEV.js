//------TDEE CALCULATOR--------
let maleEl = document.getElementById("male");
let femaleEl = document.getElementById("female");
let ageEl = document.getElementById("age");
let weightEl = document.getElementById("weight");
let heightEl = document.getElementById("height");
let myActivityEl = document.getElementById("myActivity");
let statsEL = document.getElementById("stats");
let submitEl = document.getElementById("submit");
let LoseOrGain = document.querySelector(".LoseOrGain");
let maintenanceCals = document.querySelector(".maintenanceCals");
let rEE = 0;
let tdee = 0;
let weightLbs = 0;
let protein = 0;
let fats = 0;
let carbs = 0;
let tdeeResultContainer = document.querySelector(".tdee-result");

submitEl.addEventListener("click", function (e) {
  e.preventDefault();
  loseOrGain();

  if (
    ageEl.value.length === 0 ||
    weightEl.value.length === 0 ||
    heightEl.value.length === 0 ||
    myActivityEl.value === ""
  ) {
    maintenanceCals.style.display = "none";
    tdeeResultContainer.style.display = "none";
    document.querySelector("#stats").innerHTML = "Please Complete the Details!";
    setTimeout(() => document.querySelector("#stats").remove(), 3000);
  } else {
    tdeeResultContainer.style.display = "block";
    maintenanceCals.style.display = "block";
    document.querySelector("#stats").style.display = " none";
  }

  if (maleEl.checked) {
    rEE =
      parseInt(weightEl.value) * 10 +
      parseInt(heightEl.value) * 6.25 -
      parseInt(ageEl.value) * 5 +
      5;
  } else {
    rEE =
      parseInt(weightEl.value) * 10 +
      parseInt(heightEl.value) * 6.25 -
      parseInt(ageEl.value) * 5 -
      161;
  }
  let output = myActivityEl.value;
  tdee = output * rEE;
  document.querySelector(".CalsPerday").innerHTML =
    Math.floor(tdee) + "<p class='italic'>Calories Per Day</p>" + "<hr>";
  document.querySelector("#CalsPerweek").innerHTML =
    Math.floor(tdee) * 7 + "<p class='italic'>Calories Per Week</p>" + "<hr>";
  document.querySelector("#Macros1").innerHTML =
    "Your Daily Maintenance Macros";
  document.querySelector("#maintenance-Macros").innerHTML = mainteMacros();
  document.querySelector("#mainte-text-cals").textContent =
    "Your Maintenance Calories";
  loseOrGain();
});

function mainteMacros() {
  protein = (tdee * 0.3) / 4;
  fats = (tdee * 0.4) / 9;
  carbs = (tdee * 0.3) / 4;

  let maintenance =
    "Protein: " +
    Math.floor(protein) +
    " Fats: " +
    Math.floor(fats) +
    " Carbs: " +
    Math.floor(carbs);
  return maintenance;
}

function loseOrGain() {
  if (LoseOrGain.style.display === "none") {
    LoseOrGain.style.display = "block";
  } else {
    LoseOrGain.style.display = "block";
  }
}
let cutting1 = 0;
function cutting() {
  cutting1 = tdee - 250;
  weightLbs = weightEl.value * 2.2;
  protein = (cutting1 * 0.3) / 4;
  let proteinCals = protein * 4;
  fats = (cutting1 * 0.35) / 9;
  let fatsCals = fats * 9;
  carbs = (cutting1 * 0.35) / 4;
  let carbsCals = cutting1 - proteinCals - fatsCals;

  document.querySelector("#LoseOrGainResult").innerHTML =
    "Your Cutting Calories ";
  document.querySelector("#calsPerDay").innerHTML =
    Math.floor(cutting1) +
    "<p class='italic'>Cutting Calories Per day</p>" +
    "<hr>";
  document.querySelector("#calsPerWeek").innerHTML =
    Math.floor(cutting1) * 7 +
    "<p class='italic'>Cutting Calories Per Week</p>" +
    "<hr>";
  document.querySelector("#Macros").innerHTML = "Your Daily Cutting Macros";

  document.querySelector("#moderateCarb").innerHTML = "Moderate Carb";
  document.querySelector("#dailyMacros").innerHTML =
    "Protein: " +
    Math.floor(protein) +
    " Fats: " +
    Math.floor(fats) +
    " Carbs: " +
    Math.floor(carbs) +
    "<hr>";
  document.querySelector("#lowCarb").innerHTML = "Lower Carb";
  document.querySelector("#lowMacros").innerHTML = lowCarbCut();
  document.querySelector("#highCarb").innerHTML = "Higher Carb";
  document.querySelector("#highMacros").innerHTML = highCarbCut();
}

function highCarbCut() {
  protein = (cutting1 * 0.3) / 4;
  fats = (cutting1 * 0.2) / 9;
  carbs = (cutting1 * 0.5) / 4;

  let highCarb =
    "Protein: " +
    Math.floor(protein) +
    " Fats: " +
    Math.floor(fats) +
    " Carbs: " +
    Math.floor(carbs) +
    "<hr>";

  return highCarb;
}

function lowCarbCut() {
  protein = (cutting1 * 0.4) / 4;
  fats = (cutting1 * 0.4) / 9;
  carbs = (cutting1 * 0.2) / 4;

  let lowCarb =
    "Protein: " +
    Math.floor(protein) +
    " Fats: " +
    Math.floor(fats) +
    " Carbs: " +
    Math.floor(carbs) +
    "<hr>";

  return lowCarb;
}

var bulking1 = 0;
function bulking() {
  bulking1 = tdee + 250;
  weightLbs = weightEl.value * 2.2;
  protein = (bulking1 * 0.3) / 4;
  let proteinCals = protein * 4;
  fats = (bulking1 * 0.35) / 9;
  let fatsCals = fats * 9;
  carbs = (bulking1 * 0.35) / 4;
  let carbsCals = bulking1 - proteinCals - fatsCals;
  document.querySelector("#LoseOrGainResult").innerHTML =
    "Your Bulking Calories";
  document.querySelector("#calsPerDay").innerHTML =
    Math.floor(bulking1) +
    "<p class='italic'>Bulking Calories Per ay</p>" +
    "<hr>";
  document.querySelector("#calsPerWeek").innerHTML =
    Math.floor(bulking1) * 7 +
    "<p class='italic'>Bulking Calories Per Week</p>" +
    "<hr>";
  document.querySelector("#Macros").innerHTML = "Your Daily Bulking Macros";
  document.querySelector("#moderateCarb").innerHTML = "Moderate Carb";
  document.querySelector("#dailyMacros").innerHTML =
    "Protein: " +
    Math.floor(protein) +
    " Fats: " +
    Math.floor(fats) +
    " Carbs: " +
    Math.floor(carbs) +
    "<hr>";
  document.querySelector("#lowCarb").innerHTML = "Lower Carb";
  document.querySelector("#lowMacros").innerHTML = lowCarb();
  document.querySelector("#highCarb").innerHTML = "Higher Carb";
  document.querySelector("#highMacros").innerHTML = highCarb();
}

function highCarb() {
  protein = (bulking1 * 0.3) / 4;
  fats = (bulking1 * 0.2) / 9;
  carbs = (bulking1 * 0.5) / 4;

  let highCarb =
    "Protein: " +
    Math.floor(protein) +
    " Fats: " +
    Math.floor(fats) +
    " Carbs: " +
    Math.floor(carbs) +
    "<hr>";

  return highCarb;
}

function lowCarb() {
  protein = (bulking1 * 0.4) / 4;
  fats = (bulking1 * 0.4) / 9;
  carbs = (bulking1 * 0.2) / 4;

  let lowCarb =
    "Protein: " +
    Math.floor(protein) +
    " Fats: " +
    Math.floor(fats) +
    " Carbs: " +
    Math.floor(carbs) +
    "<hr>";

  return lowCarb;
}

//------End of TDEE CALCULATOR--------
