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
		// Checks if the id of the <td> is equal to the random number, if it is, and if the <td> does not
		// containe "X" or "O", the function will place a "X" on the table cell
		var myCell;

		do {
   			generateRandomNumber();
   			myCell = $('#' + random);	
   			
		} 
		/* while (myCell.innerHTML === "X" || myCell.innerHTML === "O"); */ 
		while(myCell.html() === "X" || myCell.html() === "O");
		myCell.html(aiChoice);

		console.log(myCell);
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













