$(document).ready(function() {

	// Declaring varibales

	var playerChoice = ["X", "O"];
	var aiChoice = ["X", "O"];
	var random;



	$('#x').on("click", function() {
		playerChoice = playerChoice[0];
		this.disabled = true;
		$('#o').attr("disabled","disabled");
		$('table').removeClass('hidden');
		
	});

	$('#o').on("click", function() {
		playerChoice = playerChoice[1];
		this.disabled = true;
		$('#x').attr("disabled","disabled");
		$('table').removeClass('hidden');
		
	});



	$('td').on("click", function() {
	 $(this).html(playerChoice);
	 aiMove();
	});


	function aiMove() {
		td = $('td');
		// Defining AI "X" or "O"
		if(playerChoice === "X") {
			aiChoice = "O";
		 } else {
		 	aiChoice = "X";
		 } 
		// Generate a random number
		generateRandomNumber();
		// Checks if the id of the <td> is equal to the random number, if it is, and if the <td> does not
		// containe "X" or "O", the function will place a "X" on the table cell
		for(var i = 0; i < td.length && i <= random; i++) {
			if(random == td[i].id) {
			if(td[i].innerHTML !== "X" || td[i].innerHTML !== "O") {
				td[i].innerHTML = aiChoice;	
			}	
			// Else (Meaning the random number equal a <td> with a "X" or "O" inside) i will execute the function again,
			// witch will generate a random number and try again 
			} else {
			tryAgain();
			} 
		} 
	}


	function generateRandomNumber() {
		random = Math.floor(Math.random() * 9);
	}

	function tryAgain() {
		aiMove();
	}


}); // end document ready



/*
// variables
var cell;
var x = document.querySelector('#x');
var o = document.querySelector('#o');
var table = document.querySelector('table');
var playerChoice;
var aiChoice;
var random;
var cell;

// asking player to choose beetween X or O
x.addEventListener('click', function() {
	playerChoice = "X";
	x.disabled = true;
	o.disabled = true;
	table.classList.remove('hidden');
	cell = document.querySelectorAll('td');
	playerMove();
});

o.addEventListener('click', function() {
	playerChoice = "O";
	x.disabled = true;
	o.disabled = true;
	table.classList.remove('hidden');
	cell = document.querySelectorAll('td');
	playerMove();
});


function playerMove() {
	for(var i =0; i < cell.length; i++) {
		cell[i].addEventListener("click", function() {
			if(this.innerHTML === "X" || this.innerHTML === "O") {
				alert("You can't do that mate");
			} else {
				this.innerHTML = playerChoice;
				aiMove();
			}
		});
	 
	}
	
}


function aiMove() {
	generateRandomNumber();
	if(playerChoice === "X") {
		aiChoice = "O";
	} else {
		aiChoice = "X";
	}

	for(var i = 0; i < cell.length; i++) {
		//console.log(cell[i]);
		if(cell[i].id == random) {
			if(cell[i].innerHTML !== "X" || cell[i].innerHTML !== "O"){
				cell[i].innerHTML = aiChoice;
				break;
			} 
		}
		else {
			//tryAgain();
			console.log(random);
		}
	}

}


function generateRandomNumber() {
	
}



function tryAgain() {
	aiMove();
	//generateRandomNumber();
	
}

*/













