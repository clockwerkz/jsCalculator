var digits = document.querySelectorAll(".digit");
var decimal = document.querySelector(".dot");
var eval = document.querySelector(".eval");
var display = document.getElementById("display");
var addition = document.getElementById("addition");
var subtraction = document.getElementById("subtraction");
var multiplication = document.getElementById("multiplication");
var division = document.getElementById("division");
var smallDisplay = document.getElementById("smallDisplay");
var operatorFunction;
var newNumber = true;
var input;
var total=0;

var screens = {
	display :  document.getElementById("display"),
	smallDisplay : document.getElementById("smallDisplay"),

	newDisplay : function (val){
		display.textContent = val;
	},

	UpdateDisplay : function(val){
		display.textContent += val;
	}
};


digits.forEach(function(button){
	button.addEventListener("click", function() {
		val = this.dataset.value;
		if (newNumber) {
			newNumber = false;
			screens.newDisplay(val);
		} else {
			screens.UpdateDisplay(val);
		}
	});
});

decimal.addEventListener("click", function(){
	if (!display.textContent.includes(".")){
		if (newNumber){
			screens.newDisplay("0.");
			newNumber = false;
		} else {
		screens.UpdateDisplay(".");
		}
	}
});

function processOperator() {
	input = display.textContent;
	if (operatorFunction && !newNumber) {
		total = operatorFunction(total, Number(input));
		display.textContent = total;
	} else {
		total = Number(input);
	}
	newNumber = true;
}

addition.addEventListener("click", function(){
	input = display.textContent;
	if (operatorFunction && !newNumber) {
		total = operatorFunction(total, Number(input));
		display.textContent = total;
	} else {
		total = Number(input);
	}
	operatorFunction = adding;
	smallDisplay.textContent += input + " + ";
	newNumber = true;
});

subtraction.addEventListener("click", function(){
	input = display.textContent;
	if (operatorFunction && !newNumber) {
		total = operatorFunction(total, Number(input));
		display.textContent = total;
	} else {
		total = Number(input);
	}
	operatorFunction = subtracting;
	smallDisplay.textContent += input + " - ";
	newNumber = true;
});

multiplication.addEventListener("click", function(){
	input = display.textContent;
	if (operatorFunction && !newNumber) {
		total = operatorFunction(total, Number(input));
		display.textContent = total;
	} else {
		total = Number(input);
	}
	operatorFunction = multiplying;
	smallDisplay.textContent += input + " x ";
	newNumber = true;
});

division.addEventListener("click", function(){
	input = display.textContent;
	if (operatorFunction && !newNumber) {
		total = operatorFunction(total, Number(input));
		display.textContent = total;
	} else {
		total = Number(input);
	}
	operatorFunction = dividing;
	smallDisplay.textContent += input + " / ";
	newNumber = true;
});

eval.addEventListener("click", function(){
	if (operatorFunction && !newNumber) {
		input = display.textContent;
		total = operatorFunction(total, Number(input));
		display.textContent = total;
		smallDisplay.textContent = "";
		newNumber = true;
	}
});


function adding(num1, num2){
	return num1 + num2;
}

function subtracting (num1, num2) {
	return num1 - num2;
}

function multiplying (num1, num2) {
	return num1 * num2;
}

function dividing (num1, num2) {
	return num1 / num2;
}

