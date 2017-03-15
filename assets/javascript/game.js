
//setting global variables================================================================================
var targetNumber = [19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,56,57,58,59,60,61,
					62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,
					101,102,103,104,105,106,107,108,109,110,110,112,113,114,115,116,117,118,119,120];

var crystalValue = [1,2,4,5,6,7,8,9,10,11,12];

var randomNumber = targetNumber[Math.floor(Math.random() * targetNumber.length) ];

var randomCrystalValue = crystalValue[Math.floor(Math.random() * crystalValue.length)];

var counter = 0

var win = 0;

var lose = 0;
//=========================================================================================================

$(document).ready(function(){

	//setting random target number to appear in #numberGuess==================== 
	for (var i = 0; i < randomNumber.length; i++) {	
	}

	$("#numberGuess").text(randomNumber);
//===================================================

	//setting random crystal value to each crystal image============================
	for (var i = 0; i < randomCrystalValue.length; i++) {

		$(".crystalImage").attr(randomCrystalValue[i]);
	} //doesn't work right >:| 
//==================================================================================

	//creating on click function to add crystal value to counter
	$(".crystalImage").on("click", function () {

		counter += randomCrystalValue

		// alert("New Score: " + counter);
		$("#score").text("score: " + counter);

		if (counter === randomNumber) {

			$("#score").text("You Win!!")
		}

		else if (counter >= randomNumber) {

			$("#score").text("You Lose! :(")

		}

	});
//================================================================================

});