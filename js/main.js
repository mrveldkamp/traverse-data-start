// ANALYZER DATA START CODE

// Load Data From Files
let surveyData = await loadTextFile("data/survey-results.txt");
let ageData = await loadTextFile("data/age-data.txt");
let numberData = await loadTextFile("data/number-data.txt");

// Output Element Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "survey") {
    traverseSurveyData();
  } else if (selection === "ages") {
    traverseAgeData();
  } else if (selection === "numbers") {
    traverseNumberData();
  }
}

// Menu Option Functions
function traverseSurveyData() {
  outputEl.innerHTML = "Survey Data";
  var list1 = [];
  var list2 = [];
  var list3 = [];
  for (let i = 0; i < surveyData.length; i++) {
    if (surveyData[i] === "Yes") {
      list1.push(surveyData[i]);
    } else if (surveyData[i] === "No") {
      list2.push(surveyData[i]);
    } else {
      list3.push(surveyData[i]);
    }
  }
  console.log(
    "Yes:",
    list1.length,
    "No:",
    list2.length,
    "Maybe:",
    list3.length
  );
}

function traverseAgeData() {
  outputEl.innerHTML = "Age Data";
  var list1 = [];
  var list2 = [];
  var list3 = [];
  var list4 = [];
  for (let i = 0; i < ageData.length; i++) {
    if (ageData[i] < 18) {
      list1.push(ageData[i]);
    } else if (ageData[i] <= 35) {
      list2.push(ageData[i]);
    } else if (ageData[i] <= 65) {
      list3.push(ageData[i]);
    } else {
      list4.push(ageData[i]);
    }
  }
  console.log(
    "Under 18:",
    list1.length,
    "18 to 35:",
    list2.length,
    "36 to 65:",
    list3.length,
    "Above 65:",
    list4.length
  );
}

function traverseNumberData() {
  outputEl.innerHTML = "Number Data";
  let evenList = [];
  let oddList = [];
  for (var i = 0; i < numberData.length; i++) {
    if (numberData[i] % 2 === 0) {
      evenList.push(numberData[i]);
    } else {
      oddList.push(numberData[i]);
    }
  }
  console.log("even:", evenList.length);
  console.log("odd:", oddList.length);
}
