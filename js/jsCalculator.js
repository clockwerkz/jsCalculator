var calcButtons = document.querySelectorAll(".button");
var display = document.getElementById("display");
var secondDisplay = document.getElementById("accumulative");
var isOperator = false;

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
});