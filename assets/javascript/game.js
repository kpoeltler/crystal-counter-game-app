
$(document).ready(function(){

var target = function getRndInteger(min, max) {
  return Math.floor(Math.random() * (120 - 19)) + 19;
};
var crystal1= function getRndInteger(min, max) {
  return Math.floor(Math.random() * (1 - 12)) + 12;
};
var crystal2= function getRndInteger(min, max) {
  return Math.floor(Math.random() * (1 - 12)) + 12;
};
var crystal3= function getRndInteger(min, max) {
  return Math.floor(Math.random() * (1 - 12)) + 12;
};
var crystal4= function getRndInteger(min, max) {
  return Math.floor(Math.random() * (1 - 12)) + 12;
};
var userScore = 0;


var crystal = function(){
	target = parseInt($(this).val());
	

 $(".crystal").on("click", updateScore);
// var updateScore = function () {
// 	var num = $(this) //to access assoc #
	
// }
// userScore += num
// if (userScore > target){
// 	display ("Game Over");
// }
// else if (userScore===target){
// 	display ("Winner")
// }
//  //or use this as stated in review session
//  $(".crystal").on("click", updateScore) {
// };
// var updateScore = function(){$(this).val();};

// $(".crystal-image").on("click", function() {
});