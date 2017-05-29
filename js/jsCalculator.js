var digits = document.querySelectorAll(".digit");
var operators = document.querySelector(".operator");
var decimal = document.querySelector(".dot");
var eval = document.querySelector(".eval");
var display = document.getElementById("display");
var smallDisplay = document.getElementById("smallDisplay");
var operatorFunction;
var newNumber = true;
var input;
var total=0;


digits.forEach(function(button){
	button.addEventListener("click", function() {
		val = this.dataset.value;
		if (newNumber) {
			newNumber = false;
			display.textContent = val;
		} else {
			display.textContent += val;
		}
	});
});

decimal.addEventListener("click", function(){
	if (!display.textContent.includes(".")){
		display.textContent += ".";
	}
});

operators.addEventListener("click", function(){
	input = display.textContent;
	if (operatorFunction && !newNumber) {
		total = operatorFunction(total, Number(input));
		display.textContent = total;
		operatorFunction = adding;
	} else {
		total = Number(input);
		operatorFunction = adding;
	}
	smallDisplay.textContent += input + " + ";
	newNumber = true;
});

eval.addEventListener("click", function(){
	if (operatorFunction) {
		input = (newNumber) ? input : display.textContent;
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

