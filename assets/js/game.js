var target = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (120 - 19)) + 19;
}
var crystal1 = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (12 - 1)) + 12;
}
var crystal2 = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (12 - 1)) + 12;
}
var crystal3 = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (12 - 1)) + 12;
}
var crystal4 = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (12 - 1)) + 12;
}

var userScore = 0;

//---------- Add click listener-----------
$("#crystal").on("click", updateScore);

var updateScore = function (){
	$(this).val();//google userScore += num

	if (userScore > targetScore) {
	display("Lose")

	} else if (userScore === targetScore) {
		display ("Win");
	}
	};

 

// 	parse string to num userScore += $(this).data("")
// 	if userScore > target 
// 		display "Lost"

// 	else if userScore === target 
// 		display "winner"

// 	else if UserScore < target 
// 		not sure if I create a for loop 
// 		or how to keep the game going 
