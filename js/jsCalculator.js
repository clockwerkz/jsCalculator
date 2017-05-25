var digits = document.querySelectorAll(".digit");
var operators = document.querySelector(".operator");
var decimal = document.querySelector(".dot");
var eval = document.querySelector(".eval");
var display = document.getElementById("display");
var secondDisplay = document.getElementById("secondDisplay");
var operatorFunction;
var firstDigit, secondDigit;
var total = 0;

digits.forEach(function(button){
	button.addEventListener("click", function() {
		val = this.dataset.value;
		if (!firstDigit) {
			display.textContent = val;
			firstDigit = val;
		} else {
			secondDigit = val;
			display.textContent = val;
			secondDisplay.textContent = firstDigit;
		}
	});
});

operators.addEventListener("click", function(){
	if (firstDigit){
		secondDisplay.textContent += firstDigit + " + ";
		operatorFunction = adding;
	} 
});

eval.addEventListener("click", function(){
	
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
					secondDisplay.textContent = "Digit Limit";
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