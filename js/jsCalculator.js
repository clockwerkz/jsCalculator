
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
});

//View
var screens = {
	display :  document.getElementById("display"),
	smallDisplay : document.getElementById("smallDisplay"),

	newDisplay : function(val) {
		display.textContent = val;
	},

	UpdateDisplay : function (val) {
		display.textContent += val;
	}
};

//Model
var calculatorFunction = {
	newNumber : true,
	operatorFunction:"",
	input:"",
	total:0,

	digitInput : function (digit) {
		if (this.newNumber) {
			this.newNumber = false;
			screens.newDisplay(digit);
		} else {
			screens.UpdateDisplay(digit);
		}
	},

	decimal: function () {
		if (!display.textContent.includes(".")){
			if (this.newNumber){
				screens.newDisplay("0.");
				this.newNumber = false;
			} else {
			screens.UpdateDisplay(".");
			}
		}
	},

	evaluator: function () {
		if (this.operatorFunction && !this.newNumber) {
			this.input = display.textContent;
			this.total = this.operatorFunction(this.total, Number(this.input));
			display.textContent = this.total;
			smallDisplay.textContent = "";
			this.newNumber = true;
		}
	},

	operatorPressed: function (operator) {
		this.input = display.textContent;
		if (this.operatorFunction && !this.newNumber) {
			this.total = this.operatorFunction(this.total, Number(this.input));
			display.textContent = this.total;
		} else {
			this.total = Number(this.input);
		}
		smallDisplay.textContent += this.input + " " + operator + " ";
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