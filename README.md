# jsCalculator

<h1>Free Code Camp's front end project the Javascript Calculator</h1>
Calculator is live at: <a href="https://clockwerkz.github.io/jsCalculator/">jsCalculator</a>
<br />
Design: I plan on looking at all sorts of old calculators to find a cool design for the layout of the page. I'll keep it simple: a calculator that will fit on the screen of mobile devices.<br />
<br />
<h2>Updates</h2>
<b>November 5, 2017</b><br>
TASKS<br>
Model View Controller (MVC) pattern: I'm creating objects that will contain various methods and attributes that will provide the appropriate functionality. So the Model object will handle all of the calculator functions, the view object will handle the display, etc. COMPLETE<br>
One Event Listener: Right now, I've attached event listeners to every button in the calculator. I thought this was really inefficient but didn't really know another way to go about it. Turns out there's event propogation. As I understand it, when an event is fired by an element, the parent of the element is made "aware" of the event. The buttons are all children of a div element calculator. Actually, they are all children of a div element called buttons, and buttons is a child of calculator. For every button press, both div.buttons and div.calculator are notified. So I'm attaching one event listener to calculator, and just checking for a particular class attached to the element that was clicked and then calling the appropriate function as a result. COMPLETE<br>
Implement C/CE buttons:COMPLETE<br>
More Calculator Functionality: On the Windows calculator, if I push 2 + and then =, it will evaluate to 4 (2+2). If I continue to press =, it will continue adding 2 to the running total.<br>
<br>
TODO: <br>
Improve Small Screen<br>
Right now it just shows up at the bottom of the calculator. Would be nice to have it scroll along the top, or maybe at the bottom of the main display. Also, I'd like to hide the overflow as the the chain of operators gets larger.<br>
Implement a better handling of Numbers<br>
There's a library called BigNumbers (I think that's the name). I'd like to try it and see if cuts down on the unecessary huge numbers when using decimals.<br><br>
Some thoughts on the code: <br />
C/CE: C on calculators will clear everything: what's typed in the main screen, and the history of the expressions so far. It's an entire reset of the calculator. CE will only clear what was just typed in. Feels like these keys' functionality should be flipped since CE looks like "Clear Everything!" <br>

Currently, I have event listeners to basically every button in the calculator. I thought it was really wasteful to have every button have a separate eventlistener, but I didn't know any other way to go about this. Well, I've come to learn about event propogation/event bubbling and will use that to give the parent element an event listener, and just test out which button was pressed and handle it from there. 