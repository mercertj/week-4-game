//not sure what this even does//
$(document).ready(function() {

//array of the types of crystals//
var crystals = ["Blue", "Green", "Red", "Yellow"];

var points = [];

//game data//
var counter = 0;
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var goal = 0;
var score = 0;
var addition = 0;
var html;

//score to get//
var ranNumValue = Math.floor((Math.random() * 120) + 19);
	$("#ranNum").text(" Your score goal is: " + ranNumValue);


//points for each crystal//
var red = Math.floor((Math.random() * 12) + 1);
var blue = Math.floor((Math.random() * 12) + 1);
var green = Math.floor((Math.random() * 12) + 1);
var yellow = Math.floor((Math.random() * 12) + 1);

var updateScore = function() {
	$('.addition').empty();
	$('.addition').append(addition);
	$('#wins').empty();
	$('#wins').append(wins);
	$('#losses').empty();
	
}
//function list//


function reset() {
	for (i = 0; i < crystals.length; i++) {
		points[i] = Math.floor((Math.random() * 12) + 1);
	}
}
//get point value of each jewel. add to point total.and display point total//
$(document).ready(function() {

	displaydocument.getElementById("blue").addEventListener('click', function (e) {
    var img = document.createElement("img");
}
	$('#red').click(function() {
		addition = addition + red;
		logic();
	}

	$('#blue').click(function() {
		addition = addition + blue;
		logic();
	}

	$('#green').click(function() {
		addition = addition + green;
		logic();
	}

	$('#yellow').click(function() {
		addition = addition + yellow;
		logic();
	}
//win tally//

//click activiy//
	$(document).ready(function() {
	displaydocument.getElementById("blue").addEventListener('click', function (e) {
    var img = document.createElement("img");
}
function scoreTally() {

	if (addition === goal) {
		wins = wins + 1;
		restart();
	}else {
		updateAddition();
	}


document.querySelector("").innerHTML = html;
	
});