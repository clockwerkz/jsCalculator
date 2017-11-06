
//Controller
var calculator = document.querySelector(".calculator");
calculator.addEventListener("click", (e) => {
	let btn = e.target;

	if (btn.classList.contains("digit")) {
		calculatorFunction.digitInput(e.target.dataset.value);
	}

	if (btn.classList.contains("operator")) {
		calculatorFunction.operatorPressed(e.target.dataset.value);
	}

	if (btn.classList.contains("dot")) {
		calculatorFunction.decimal();
	}
	
	if (btn.classList.contains("eval")) {
		calculatorFunction.evaluator();
	}

	if (btn.classList.contains("cButton")) {
		calculatorFunction.clearAll();
	}

	if (btn.classList.contains("ceButton")) {
		calculatorFunction.clear();
	}
});

//View
var screens = {
	display :  document.getElementById("display"),
	smallDisplay : document.getElementById("smallDisplay"),

	newDisplay : function(val) {
		this.display.textContent = val;
	},

	updateDisplay : function (val) {
		this.display.textContent += val;
	},

	clearSmallDisplay : function() {
		this.smallDisplay.textContent = "";
	},

	updateSmallDisplay : function(val) {
		this.smallDisplay.textContent += val;
	},

	displayValue : function(){
		return this.display.textContent;
	}
};

//Model
var calculatorFunction = {
	//newNumber keeps track of the state of the input. When the calculator first starts, nothing has been
	//entered so newNumber is true. As soon as a digit or decimal point is pressed, newNumber becomes false.
	//If we press a series of numbers and press an operator, we've completed the first number we wish to calculate
	//so newNumber becomes true (we are now expecting a new value, we don't want to keep adding digits to the 
	//previous number)
	newNumber : true,
	//operatorFunction simply holds a function that will process whatever operator we selected.
	operatorFunction:"",
	input:"",
	total:"",
	runningTotal:"",

	clear: function() {
		this.newNumber = true;
		screens.newDisplay("0");
	},

	clearAll : function() {
		this.newNumber = true;
		this.operatorFunction = "";
		this.input = "";
		this.total = 0;
		screens.newDisplay(this.total); 
		screens.clearSmallDisplay();
	},

	digitInput : function (digit) {
		if (this.newNumber) {
			this.newNumber = false;
			screens.newDisplay(digit);
		} else {
			screens.updateDisplay(digit);
		}
	},

	decimal: function () {
		if (!display.textContent.includes(".")){
			if (this.newNumber){
				screens.newDisplay("0.");
				this.newNumber = false;
			} else {
			screens.updateDisplay(".");
			}
		}
	},

	evaluator: function () {
		//if we have two values ready to compute and an operator:
		if (this.operatorFunction && !this.newNumber) {
			this.input = screens.displayValue();
			this.total = this.operatorFunction(Number(this.total) , Number(this.input));
			screens.newDisplay(this.total);
			screens.clearSmallDisplay();
			this.newNumber = true;
		}
	},

	operatorPressed: function (operator) {
		this.input = screens.displayValue();
		if (this.operatorFunction && !this.newNumber) {
			this.total = this.operatorFunction(this.total, Number(this.input));
			screens.newDisplay(this.total);
		} else {
			this.total = Number(this.input);
		}
		screens.updateSmallDisplay(this.input + " " + operator + " ");
		this.newNumber = true;
		this.operatorFunction = this.setOperator(operator);
	},

	setOperator: function (value) {
		let newOperator;
		switch (value) {
			case "+":
				newOperator = (num1, num2)=> {
					return num1 + num2;
				}
				break;
			case "-":
				newOperator = (num1, num2)=> {
					return num1 - num2;
				}
				break;
			case "*":
				newOperator = (num1, num2)=> {
					return num1 * num2;
				}
				break;
			case "/":
				newOperator = (num1, num2)=> {
					return num1 / num2;
				}
				break;
		}
		return newOperator;
	}
};