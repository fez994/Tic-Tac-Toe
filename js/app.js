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
		

		var myCell;

		do {
   			generateRandomNumber();
   			myCell = $('#' + random);	
   			
		} 
		/* while (myCell.innerHTML === "X" || myCell.innerHTML === "O"); */ 
		while(myCell.html() === "X" || myCell.html() === "O");
		myCell.html(aiChoice);

		//console.log(myCell);
		checkWin();
		}
		
		

	function checkWin() {
		var cell = $('td');
		if(
		   // Orizontal Conditions
		   cell[0].innerHTML === "X" && cell[1].innerHTML === "X" && cell[2].innerHTML === "X" ||
		   cell[3].innerHTML === "X" && cell[4].innerHTML === "X" && cell[5].innerHTML === "X" ||
		   cell[6].innerHTML === "X" && cell[7].innerHTML === "X" && cell[8].innerHTML === "X" ||
		   // Vertical Conditions
		   cell[0].innerHTML === "X" && cell[3].innerHTML === "X" && cell[6].innerHTML === "X" ||
		   cell[1].innerHTML === "X" && cell[4].innerHTML === "X" && cell[7].innerHTML === "X" ||
		   cell[2].innerHTML === "X" && cell[5].innerHTML === "X" && cell[8].innerHTML === "X" ||
		   // Oblique Conditions
		   cell[0].innerHTML === "X" && cell[4].innerHTML === "X" && cell[8].innerHTML === "X" ||
		   cell[2].innerHTML === "X" && cell[4].innerHTML === "X" && cell[6].innerHTML === "X"
		   ) {
			console.log("X WON");
		}

		else if(
			// Orizontal Conditions
		   cell[0].innerHTML === "O" && cell[1].innerHTML === "O" && cell[2].innerHTML === "O" ||
		   cell[3].innerHTML === "O" && cell[4].innerHTML === "O" && cell[5].innerHTML === "O" ||
		   cell[6].innerHTML === "O" && cell[7].innerHTML === "O" && cell[8].innerHTML === "O" ||
		   // Vertical Conditions
		   cell[0].innerHTML === "O" && cell[3].innerHTML === "O" && cell[6].innerHTML === "O" ||
		   cell[1].innerHTML === "O" && cell[4].innerHTML === "O" && cell[7].innerHTML === "O" ||
		   cell[2].innerHTML === "O" && cell[5].innerHTML === "O" && cell[8].innerHTML === "O" ||
		   // Oblique Conditions
		   cell[0].innerHTML === "O" && cell[4].innerHTML === "O" && cell[8].innerHTML === "O" ||
		   cell[2].innerHTML === "O" && cell[4].innerHTML === "O" && cell[6].innerHTML === "O"
		   ) {
		   	console.log("O WON");
		}

		
		// Winning conditions

		// Orizontal conditions
		// cells[0] && cells[1] && cells[2]
		// cells[3] && cells[4] && cells[5]
		// cells[6] && cells[7] && cells[8]

		// Vertical conditions
		// cells[0] && cells[3] && cells[6]
		// cells[1] && cells[4] && cells[7]
		// cells[2] && cells[5] && cells[8]

		// Oblique conditions
		// cells[0] && cells[4] && cells[8]
		// cells[2] && cells[4] && cells[6]


	} // end checkwin Function



	function generateRandomNumber() {
		random = Math.floor(Math.random() * 9);
	}




}); // end document ready







