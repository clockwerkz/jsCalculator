var digits = document.querySelectorAll(".digit");
var operators = document.querySelector(".operator");
var decimal = document.querySelector(".dot");
var eval = document.querySelector(".eval");
var display = document.getElementById("display");
var smallDisplay = document.getElementById("smallDisplay");
var operatorFunction;
var input;
var total=0;
var evalPressed = false;

digits.forEach(function(button){
	button.addEventListener("click", function() {
		val = this.dataset.value;
		if (display.textContent==="0" || operatorFunction || evalPressed) {
			evalPressed = false;
			display.textContent = val;
		} else {
			display.textContent += val;
		}
	});
});

operators.addEventListener("click", function(){
	input = display.textContent;
	if (operatorFunction) {
		total = operatorFunction(total, Number(input));
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


/*
calcButtons.forEach(function(button){
	button.addEventListener("click", function(){
		var firstNum, secondNum;
		var val = this.dataset.value;
		if ((Number(val) >= 0) && (Number(val) <= 9)){
			//First check and see if the number displayed is 0. If it is, then replace 0 with value.
			//If not zero, then append the value to existing number.
			if (display.textContent === "0"){
				display.textContent = val;
			} else {
				if (display.textContent.length === 9){
					smallDisplay.textContent = "Digit Limit";
					display.textContent = 0;
				} else {
					secondDisplay.textContent = "";
					display.textContent += val;
				}
			}
		}
		if (val) 
	});
});*/