$(document).ready(function(){

//setting global variables================================================================================

// var targetNumber = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,56,57,58,59,60,61,
// 					62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
// 					101,102,103,104,105,106,107,108,109,110,110,112,113,114,115,116,117,118,119,120];

// var randomNumber = targetNumber[Math.floor(Math.random() * targetNumber.length) ];

var targetNumber = Math.floor(Math.random()*101+19); //selecting random number to be guessed 

var img1 = Math.floor(Math.random()*11+1);
var img2 = Math.floor(Math.random()*11+1);
var img3 = Math.floor(Math.random()*11+1);
var img4 = Math.floor(Math.random()*11+1);

var counter = 0;

var win = 0;

var lose = 0;
//=========================================================================================================

	// //setting random target number to appear in #numberGuess==================== 
	// for (var i = 0; i < randomNumber.length; i++) {	
	// }

	// $("#numberGuess").text(randomNumber);
//==================================================================================================

//setting certain var to HTML==============================================================

	$("#numberGuess").text(targetNumber);

	$("#win").text("Wins: " + win);

	$("#lose").text("Losses: " + lose);

	$("#score").text("score: " + counter);

//==========================================================================================

	//setting rest, win, and loss functions============================

	function reset(){

		var targetNumber = Math.floor(Math.random()*101+19);
		$("#numberGuess").text(targetNumber);

		img1 = Math.floor(Math.random()*11+1);
		img2 = Math.floor(Math.random()*11+1);
		img3 = Math.floor(Math.random()*11+1);
		img4 = Math.floor(Math.random()*11+1);

		counter=0
		$("#score").text("score: " + counter);
	}

	function win(){

		$("#score").text("You Win!");

		win++;

		reset(); //calling reset function to reset game
	}
	
	function lose(){

		$("#score").text("You Lose! :(");

		lose++;

		reset(); //calling reset function to reset game
	}
//==================================================================================

//creating on click function to each image to add value and calling win and lose functions
	$("#crystal1").on('click', function(){

		counter += img1;

		$("#score").text("score: " + counter);

		if (counter === targetNumber) {

			win();
		}

		else if (counter >= targetNumber) {

			lose();
		}
	});

	$("#crystal2").on('click', function(){

		counter += img2;

		$("#score").text("score: " + counter);

		if (counter === targetNumber) {

			win();
		}

		else if (counter >= targetNumber) {

			lose();
		}
	});

	$("#crystal3").on('click', function(){

		counter += img3;

		$("#score").text("score: " + counter);

		if (counter === targetNumber) {

			win();
		}

		else if (counter >= targetNumber) {

			lose();
		}
	});

	$("#crystal4").on('click', function(){

		counter += img4;

		$("#score").text("score: " + counter);

		if (counter === targetNumber) {

			win();
		}

		else if (counter >= targetNumber) {

			lose();
		}
	});


	//creating on click function to add value to crystal and to counter
	// $(".crystalImage").on("click", function () {

	// 	counter += randomCrystalValue;

	// 	$("#score").text("score: " + counter);

	// 	// conditionals to display user score, wins, and losses
	// 	if (counter === randomNumber) {

	// 		$("#score").text("You Win!!");

	// 		win++;

	// 		counter = 0;

	// 	}

	// 	else if (counter >= randomNumber) {

	// 		$("#score").text("You Lose! :(");

	// 		lose++;

	// 		counter = 0;
	// 	}

	// });

});