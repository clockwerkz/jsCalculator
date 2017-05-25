# jsCalculator

Free Code Camp's front end project the Javascript Calculator.<br />
<br />
Design: I plan on looking at all sorts of old calculators to find a cool design for the layout of the page. I'll keep it simple: a calculator that will fit on the screen of mobile devices.<br />
<br />
Some thoughts on the code: <br />
The button divs will have data-value attributes that hold the number/symbol of the button. <br />
<br />
Loop through all the buttons and add an evenListener that calls the same function to each button.<br />
<br />
Inside that function, use a switch statement to identify what the value of the button that was pressed.<br />
<br />
0-9: Update the display<br />
<br />
+,-,/,* (These will most likely have their own cases): <br />
Is there a current operation queued up?<br />
If yes, then ignore the button press<br />
If no, then store the number that's in the display into some sort of variable or array.<br />
<br />
=: If there is an equation in the stack/variables, solve and display<br />
CE/E: Do whatever these do- clear the current number or clear the entire cache<br />
<br />
I think the best way to handle the stack of equations to solve would be use an array. The array will contain a list of number, operator, number, operator,...<br />
loop through entire array:<br />
More to come later!<br />
