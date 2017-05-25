var calcButtons = document.querySelectorAll(".button");
var display = document.getElementById("display");

calcButtons.forEach(function(button){
	button.addEventListener("click", function(){
		display.textContent += this.dataset.value;
	});
});