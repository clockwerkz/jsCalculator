# jsCalculator

<h1>Free Code Camp's front end project the Javascript Calculator</h1>
<br />
Design: I plan on looking at all sorts of old calculators to find a cool design for the layout of the page. I'll keep it simple: a calculator that will fit on the screen of mobile devices.<br />
<br />
Some thoughts on the code: <br />
C/CE: C on calculators will clear everything: what's typed in the main screen, and the history of the expressions so far. It's an entire reset of the calculator. CE will only clear what was just typed in. Feels like these keys' functionality should be flipped since CE looks like "Clear Everything!" <br>
Currently, I have event listeners to basically every button in the calculator. I thought it was really wasteful to have every button have a separate eventlistener, but I didn't know any other way to go about this. Well, I've come to learn about event propogation/event bubbling and will use that to give the parent element an event listener, and just test out which button was pressed and handle it from there. 