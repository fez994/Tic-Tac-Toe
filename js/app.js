// variables
var cell;
var x = document.querySelector('#x');
var o = document.querySelector('#o');
var tableDiv = document.querySelector('#table');
var playerChoice;
var table = '<table><tr><td id="1">1</td><td class="vertical" id="2">2</td><td id="3">3</td></tr><tr><td class="bottom-up" id="4">4</td><td class="vertical bottom-up" id="5">5</td><td class="bottom-up" id="6">6</td></tr><tr><td id="7">7</td><td class="vertical" id="8">8</td><td id="9">9</td></tr></table>';
var aiChoice;
var random;

// asking player to choose beetween X or O
x.addEventListener('click', function() {
	playerChoice = "X";
	x.disabled = true;
	o.disabled = true;
	tableDiv.innerHTML = table;
	playerMove();
});

o.addEventListener('click', function() {
	playerChoice = "O";
	x.disabled = true;
	o.disabled = true;
	tableDiv.innerHTML = table;
	playerMove();
});



// adding whatever the player hcoose to the grid
function playerMove() {
	var cell = document.querySelectorAll('td');
	for (var i = 0; i < cell.length; i++) {
	cell[i].addEventListener("click", function() {
	this.innerHTML = playerChoice;
	aiMove();
	});
  }
}


// AI move
function aiMove() {
	if(playerChoice === "X") {
		aiChoice = "O";
	} else {
		aiChoice = "X";
	}
	// console.log('ITS AI TURN');

	generateRandomNumber();

	var cell = document.querySelectorAll('td');

	for(var i = 0; i < cell.length; i++) {
		console.log(cell[i].id);
		if(random == cell[i].id) {
			console.log(this);
			cell[i].innerHTML = aiChoice;
		}
	}
}


function generateRandomNumber() {
	random = Math.floor(Math.random() * 9) + 1;
}

















