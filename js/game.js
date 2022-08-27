/*
	button 1 is super effective against button 3,
	button 3 is super effective against button 4,
	button 4 is super effective against button 2,
	button 2 is super effective against button 1,
	button 5 is super effective against button 6,
	button 6 is super effective against button 5,

  each player will have 1000 total health

  super effective damage = 200
  neutral damage = 100
  not effective = 50
*/

//set variables
var playerSelection;
var computerSelection;
const elementArray = ["Fire", "Water", "Wind", "Earth", "Light", "Dark"];

function score() {
  /* this function will keep track of the score.
	the score will change the numbers in the html */
}

function attack(playerSelection, computerSelection) {
  /* this function will calculate the damage each player will take against each other */

}

// ATTACKS
function superEffectiveAttack(user){
  if(user == "Computer"){
    let newVal = $("#health2").val() - 200;
    $("#health2").val(newVal)
    $(`#computerHealth`).text(newVal);
  } else {
    let newVal = $("#health1").val() - 200;
    $("#health1").val(newVal)
    $(`#userHealth`).text(newVal);
  }
}

function notEffectiveAttack(user){ //breakpoint
  if(user == "Computer"){
    let newVal = $("#health2").val() - 50;
    $("#health2").val(newVal)
    $(`#computerHealth`).text(newVal);
  } else {
    let newVal = $("#health1").val() - 50;
    $("#health1").val(newVal)
    $(`#userHealth`).text(newVal);
  }
}

/* this will reset health, score, and text */
function reset() {
  let text = document.getElementById("text");
  let child = text.lastElementChild;
  while (child) {
    text.removeChild(child);
    child = text.lastElementChild;
  }
  $(`#userHealth`).text(1000);
  $(`#computerHealth`).text(1000);
  $("#health1").val(1000);
  $("#health2").val(1000);
}

// adds text into the textbox
function addText(user, elementChosen) {
  let para = document.createElement("p");
  let node = document.createTextNode(`${user} chose ${elementChosen}`);
  para.appendChild(node);
  let element = document.getElementById("text");
  element.appendChild(para);
  scrollDown();
}

function addAttackText(user) {
  let para = document.createElement("p");
  let node = document.createTextNode(`${user}'s attack is super effective! `);
  para.appendChild(node);
  let element = document.getElementById("text");
  element.appendChild(para);
  scrollDown();
}

function computerPlay() {
  //computer chooses a random element
  let ran = Math.floor(Math.random() * 6);
  let elementChosen = elementArray[ran];
  addText("Computer", elementChosen);
  return elementArray[ran];
}

/* button functions */
$(`.fire`).click(() => {
  let elementChosen = "Fire";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Wind"){ //super effective
    superEffectiveAttack("Computer")
    addAttackText("Player")
  } else if (ComputerSelection == "Water"){ //least effective

  }

});

$(`.water`).click(() => {
  let elementChosen = "Water";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Fire"){
    superEffectiveAttack("Computer")
    addAttackText("Player")
  }
});

$(`.wind`).click(() => {
  let elementChosen = "Wind";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Earth"){
    superEffectiveAttack("Computer")
    addAttackText("Player")
  }
});

$(`.earth`).click(() => {
  let elementChosen = "Earth";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Water"){
    superEffectiveAttack("Water")
    addAttackText("Player")
  }
});

$(`.light`).click(() => {
  let elementChosen = "Light";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Dark"){
    superEffectiveAttack("Computer")
    addAttackText("Player")
  }
});

$(`.dark`).click(() => {
  let elementChosen = "Dark";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Light"){
    superEffectiveAttack("Computer")
    addAttackText("Player")
  }
});
/* button functions end */

function scrollDown() {
  /* this function will scroll down automatically when a new element is added into the html */
  $(function () {
    var scroll = $("#text");
    var height = scroll[0].scrollHeight;
    scroll.scrollTop(height);
  });
}

function printSelection(playerSelection, computerSelection) {
  //function for debugging purposes
  console.log("Player selection: " + playerSelection);
  console.log("Computer selection: " + computerSelection);
}
