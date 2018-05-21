
$(document).ready(function () {
	var resetCrystals = function(){
		userScore = 0;
		target = 0;
	}
	var startGame = function(){
		target = 0;
		userScore = 0;
		
		
		$('#targetNumber').text(target);
	
	var target = Math.floor(Math.random() * (100 + 19) +19 );
	console.log(target);
					 //doesn't work until I call it and put the min=19 and max=120
		//I am lost as to what to do to get this attached to the buttons.			
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
	
	
	//---------------TONIGHT----------------------------------------------------------
	//_______________if I have time learn to group fxns-----------
	// var updateScore = function (){
	// 	$(this).val();  //google userScore += num
		//in each block of code userScore += the crystal1/2/3/4/
	
	function winCheck(){
		$("#userSum").text(userScore);
		if (userScore > target) {
		$("#result").text("Aw, shoot!")
		$(":reset").css("background-color", "red");
		} else if (userScore === target) {
			$("#result").text("you win") 
			$(":reset").css("background-color", "red");
		document.reset();
		}
	}
	}
	startGame();
	});
	
	
	