"use strict"; //****Misspelled strict 1*********

var totOdds = 0;
var totEvens = 0;

//	Create an alias
var $ = function (id) {
	return document.getElementById(id); // *****getElementByID is not a method 2********
};

var processEntries = function () {
	//	Generate a random number between 1 - 100
	var rn = 0;

	$("randomNumber").value = "";
	$("status").value = "";
	rn = Math.floor(Math.random() * 1000) + 1;
	$("randomNumber").value = rn;

	//	Call function to determine odd/even,
	//	increment correct counter
	oddOrEven(rn); //**********oddsOrEven isn't a method 3********
};

var oddOrEven = function (rn) {
	//	Determine odd/even (% 2, check result)
	var res = rn % 2;

	//	Odd or Even Number
	if (res == 1) {
		totOdds++; // ******4 Adding it to nothing*******
		$("status").value = "Odd";
	} else if (res === 0) {
		totEvens++;
		$("status").value = "Even";
	}

	$("totOdds").value = totOdds; //*******5 missing e in value********
	$("totEvens").value = totEvens;
};

//	"Register the button"
window.onload = function () {
	$("calculate").onclick = processEntries;
};