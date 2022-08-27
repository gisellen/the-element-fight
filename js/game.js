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

// ATTACK
function attackComputer(damage){
    let newVal = $("#health2").val() - damage;
    $("#health2").val(newVal)
    $(`#computerHealth`).text(newVal);
}

function attackPlayer(damage){
    let newVal = $("#health1").val() - damage;
    $("#health1").val(newVal)
    $(`#userHealth`).text(newVal);
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

function addAttackText(user, text) {
  let para = document.createElement("p");
  let node = document.createTextNode(`${user}'s attack is ${text} `);
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
    attackComputer(200)
    attackPlayer(50)
    addAttackText("Player", "is super effective!")
    addAttackText("Computer", "is not effective...")
  } else if (computerSelection == "Water"){ //least effective
    attackComputer(50)
    attackPlayer(200)
    addAttackText("Computer", "is super effective!")
    addAttackText("Player", "is not effective...")
  } else { //elements are neutral attacks between each other
    attackPlayer(100)
    attackComputer(100)
    addAttackText("Computer", "is neutral.")
    addAttackText("Player", "is neutral.")
  }
});

$(`.water`).click(() => {
  let elementChosen = "Water";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Fire"){ //super effective
    attackComputer(200)
    attackPlayer(50)
    addAttackText("Player", "is super effective!")
    addAttackText("Computer", "is not effective...")
  } else if (computerSelection == "Earth"){ //least effective
    attackComputer(50)
    attackPlayer(200)
    addAttackText("Computer", "is super effective!")
    addAttackText("Player", "is not effective...")
  } else { //elements are neutral attacks between each other
    attackPlayer(100)
    attackComputer(100)
    addAttackText("Computer", "is neutral.")
    addAttackText("Player", "is neutral.")
  }
});

$(`.wind`).click(() => {
  let elementChosen = "Wind";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Earth"){ //super effective
    attackComputer(200)
    attackPlayer(50)
    addAttackText("Player", "is super effective!")
    addAttackText("Computer", "is not effective...")
  } else if (computerSelection == "Fire"){ //least effective
    attackComputer(50)
    attackPlayer(200)
    addAttackText("Computer", "is super effective!")
    addAttackText("Player", "is not effective...")
  } else { //elements are neutral attacks between each other
    attackPlayer(100)
    attackComputer(100)
    addAttackText("Computer", "is neutral.")
    addAttackText("Player", "is neutral.")
  }
});

$(`.earth`).click(() => {
  let elementChosen = "Earth";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Water"){ //super effective
    attackComputer(200)
    attackPlayer(50)
    addAttackText("Player", "is super effective!")
    addAttackText("Computer", "is not effective...")
  } else if (computerSelection == "Wind"){ //least effective
    attackComputer(50)
    attackPlayer(200)
    addAttackText("Computer", "is super effective!")
    addAttackText("Player", "is not effective...")
  } else { //elements are neutral attacks between each other
    attackPlayer(100)
    attackComputer(100)
    addAttackText("Computer", "is neutral.")
    addAttackText("Player", "is neutral.")
  }
});

$(`.light`).click(() => {
  let elementChosen = "Light";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Dark"){ //super effective
    attackComputer(200)
    attackPlayer(200)
    addAttackText("Player", "is super effective!")
    addAttackText("Computer", "is super effective!")
  } else { //elements are neutral attacks between each other
    attackPlayer(100)
    attackComputer(100)
    addAttackText("Computer", "is neutral.")
    addAttackText("Player", "is neutral.")
  }
});

$(`.dark`).click(() => {
  let elementChosen = "Dark";
  addText("Player", elementChosen);
  computerSelection = computerPlay();
  playerSelection = elementChosen;
  if(computerSelection == "Light"){ //super effective
    attackComputer(200)
    attackPlayer(200)
    addAttackText("Player", "is super effective!")
    addAttackText("Computer", "is super effective!")
  } else { //elements are neutral attacks between each other
    attackPlayer(100)
    attackComputer(100)
    addAttackText("Computer", "is neutral.")
    addAttackText("Player", "is neutral.")
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
