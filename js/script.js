//set variables
var playerSelection
var computerSelection

/* button functions */
let button = document.querySelector(`.button1`)
playerSelection = button.addEventListener("click", function(){
	let para = document.createElement("p")
	let node = document.createTextNode("Player 1 chose Fire.")
	para.appendChild(node)
	let element = document.getElementById("text")
	element.appendChild(para)
	scrollDown()
	computerSelection = computerPlay()
	return(1)
})

let button2 = document.querySelector(`.button2`)
playerSelection = button2.addEventListener("click", function(){
	let para2 = document.createElement("p")
	let node2 = document.createTextNode("Player 1 chose Water.")
	para2.appendChild(node2);
	let element2 = document.getElementById("text")
	element2.appendChild(para2)
	scrollDown()
	computerSelection = computerPlay()
	return(2)
})

let button3 = document.querySelector(`.button3`)
playerSelection = button3.addEventListener("click", function(){
	let para3 = document.createElement("p")
	let node3 = document.createTextNode("Player 1 chose Wind.")
	para3.appendChild(node3)
	let element3 = document.getElementById("text")
	element3.appendChild(para3)
	scrollDown()
	computerSelection = computerPlay()
	return(3)
})

let button4 = document.querySelector(`.button4`)
playerSelection = button4.addEventListener("click", function(){
	let para4 = document.createElement("p")
	let node4 = document.createTextNode("Player 1 chose Earth.")
	para4.appendChild(node4)
	let element4 = document.getElementById("text")
	element4.appendChild(para4)
	scrollDown()
	computerSelection = computerPlay()
	return(4)
})

let button5 = document.querySelector(`.button5`)
playerSelection = button5.addEventListener("click", function(){
	let para5 = document.createElement("p")
	let node5 = document.createTextNode("Player 1 chose Light.")
	para5.appendChild(node5)
	let element5 = document.getElementById("text")
	element5.appendChild(para5)
	scrollDown()
	computerSelection = computerPlay()
	return(5)
})

let button6 = document.querySelector(`.button6`)
playerSelection = button6.addEventListener("click", function(){
	let para6 = document.createElement("p")
	let node6 = document.createTextNode("Player 1 chose Dark.")
	para6.appendChild(node6)
	let element6 = document.getElementById("text")
	element6.appendChild(para6)
	scrollDown()
	computerSelection = computerPlay()
	return(6)
})
/* button functions end */ 