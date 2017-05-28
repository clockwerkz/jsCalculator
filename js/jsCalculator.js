var digits = document.querySelectorAll(".digit");
var operators = document.querySelector(".operator");
var decimal = document.querySelector(".dot");
var eval = document.querySelector(".eval");
var display = document.getElementById("display");
var smallDisplay = document.getElementById("smallDisplay");
var operatorFunction;
var functionPressed = false;
var input;
var total=0;
var evalPressed = false;


//What if instead of keeping track of functionPressed and evalPressed, 
//we keep track of whether it's a new number?
//to start, newNumber is true. Once we press a number in, newNumber becomes false
//if we press eval or an operation, newNumber becomes true again.
digits.forEach(function(button){
	button.addEventListener("click", function() {
		val = this.dataset.value;
		if (display.textContent==="0" || functionPressed || evalPressed) {
			functionPressed = evalPressed = false;
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
	functionPressed = true;
	input = display.textContent;
	if (operatorFunction) {
		total = operatorFunction(total, Number(input));
		display.textContent = total;
		operatorFunction = adding;
	} else {
		total = Number(input);
		operatorFunction = adding;
	}
	smallDisplay.textContent += input + " + ";
});

eval.addEventListener("click", function(){
	evalPressed = true;
	input = display.textContent;
	if (operatorFunction) {
		total = operatorFunction(total, Number(input));
		display.textContent = total;
		smallDisplay.textContent = "";
		operatorFunction = "";
	}
});

function adding(num1, num2){
	return num1 + num2;
}

