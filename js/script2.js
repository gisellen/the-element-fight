function scrollDown(){
	/* this function will scroll down automatically when a new element is added into the html */
	$(function(){
		var scroll = $('#text')
		var height = scroll[0].scrollHeight;
		scroll.scrollTop(height)
})
}

/*
	button 1 is super effective against button 3,
	button 3 is super effective against button 4,
	button 4 is super effective against button 2,
	button 2 is super effective against button 1,
	button 5 is super effective against button 6,
	button 6 is super effective against button 5,
*/

function computerPlay(){
	/* note to self:
	there are 6 buttons to play from.
	the computer will chose from each of these 6 choices by generating a random number.
	These random numbers will be linked to the choice. */
    let ran = Math.floor(Math.random()*6)+1
	switch(ran){
		case 1:
            let cButton1 = document.createElement("p")
            let cNode1 =  document.createTextNode("Computer choose Fire.")
            cButton1.appendChild(cNode1)
            let cElement1 = document.getElementById("text")
            cElement1.appendChild(cButton1)
            scrollDown()
            return (1)
            break;
		case 2:
            let cButton2 =  document.createElement("p")
            let cNode2 = document.createTextNode("Computer choose Water.")
            cButton2.appendChild(cNode2)
            let cElement2 = document.getElementById("text")
            cElement2.appendChild(cButton2)
            scrollDown()
			return (2)
			break;
		case 3:
            let cButton3 =  document.createElement("p")
            let cNode3 = document.createTextNode("Computer choose Earth.")
            cButton3.appendChild(cNode3)
            let cElement3 = document.getElementById("text")
            cElement3.appendChild(cButton3)
            scrollDown()
			return (3)
			break;
		case 4:
            let cButton4 = document.createElement("p")
            let cNode4 = document.createTextNode("Computer choose Wind.")
            cButton4.appendChild(cNode4)
            let cElement4 = document.getElementById("text")
            cElement4.appendChild(cButton4)
            scrollDown()
			return (4)
			break;
		case 5:
            let cButton5 = document.createElement("p")
            let cNode5 = document.createTextNode("Computer choose Light.")
            cButton5.appendChild(cNode5)
            let cElement5 = document.getElementById("text")
            cElement5.appendChild(cButton5)
            scrollDown()
			return (5)
			break;
		case 6:
            let cButton6 = document.createElement("p")
            let cNode6 = document.createTextNode("Computer choose Dark.")
            cButton6.appendChild(cNode6)
            let cElement6 = document.getElementById("text")
            cElement6.appendChild(cButton6)
            scrollDown()
            return (6)
            break;
	}
}

function score(){
	/* this function will keep track of the score.
	the score will change the numbers in the html */
}

function attack(){
	/* this function will calculate the damage each player will take against each other */
}

function reset(){
	/* this will reset health, score, and text */
	let text = document.getElementById('text')
	let child = text.lastElementChild
	while (child){
		text.removeChild(child)
		child = text.lastElementChild
	}
}
