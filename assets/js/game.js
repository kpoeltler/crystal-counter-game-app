$(document).ready(function() {

	function reload() {
		location.reload();
	}


	var resetCrystals = function(){
		userScore = 0;
		target= 0;
		
	}

	//starts the game
	var startGame = function(){
		target =0;
		userScore = 0;
		
		
		 $('#targetNumber').text(target);
	
	var target = Math.floor(Math.random() * (100 + 19) +19 );
		
	var crystal1 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal2 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal3 = Math.floor(Math.random() * (12 - 1)) + 1;
	var crystal4 = Math.floor(Math.random() * (12 - 1)) + 1;
	
	
	$("#targetNumber").text(target);
	$("#crystal1").on("click",function(){
		userScore += crystal1
		console.log (userScore);
		winCheck ();
	});
	
	$("#crystal2").on("click",function(){
		userScore += crystal2
		console.log (userScore);
		winCheck();
	});
	$("#crystal3").on("click",function(){
		userScore += crystal3
		console.log (userScore);
		winCheck();
	});
	$("#crystal4").on("click",function(){
		userScore += crystal4
		console.log (userScore);
		winCheck();
	});
	
	
	
	function winCheck(){
		$("#userSum").text(userScore);
		
			if (userScore === target) {
				console.log("won");
				alert("You Won!");
				reload();
				
				

				

			// swal({
			// 	title:"You won!",
			// 	text: "Click Ok to play again",
			// 	icon: "success",
			// 	button:"OK!",
			// })
		} else {
			if (userScore > target){
				console.log("lost");
				alert("You lost.");
				reload(); 
				
			// 	swal({
			// 	title:"You lost.",
			// 	text: "Click Ok to play again",
			// 	icon:"error",
			// 	button:"OK!",
			// })
				
			};

		}
	}
}



	// 	if (userScore > target) {
	// 	$("#result").text("Aw, shoot!")
	// 	$(":reset").css("background-color", "red");
	// 	} else if (userScore === target) {
	// 		$("#result").text("you win") 
	// 		$(":reset").css("background-color", "red");
		
	// 	}
	
	startGame();
	
});