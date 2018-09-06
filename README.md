# Functional Javascript
## Combat Simulator
Learning functional programming in vanilla javascript. Running the main.js either with `node main.js` or by loading it through your browser simulates very basic combat between a boss and group of heroes.

* The heroes hp and attack is randomized, somewhat based on their job (character class). The boss is also randomized and has a job of boss, giving that object much higher stats.
* The program then runs through combat to decide who wins, logging combat events to the console displaying the result on screen.

I also played around with prototypes, using the Object.setPrototypeOf() for the heroes and bosses.