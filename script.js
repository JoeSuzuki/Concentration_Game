var resetButton = document.getElementById("reset-button");
var colors = [];

for (var i = 0; i < 10; i++) {
  colors.push('square-' + i);
}

// el : The reference to a DOM element (div.game-square)
// color : The color of a square. This will be the class name that represents the color of the square i.e. "square-1" to "square-9".
function GameSquare(el, color) {
  this.el = el;
  this.isOpen = false;
  this.isLocked = false;
  this.el.addEventListener("click", this, false);
  this.setColor(color); // <-- Set the color!
}

GameSquare.prototype.handleEvent = function(e) {
  switch (e.type) {
    case "click":
      if (this.isOpen || this.isLocked) {
        return;
      }
      this.isOpen = true;
      this.el.classList.add('flip');
  }
}

GameSquare.prototype.reset = function() {
  this.isOpen = false;
  this.isLocked = false;
  this.el.classList.remove('flip');
}

GameSquare.prototype.lock = function() {
  this.isLocked = true;
  this.isOpen = true;
}

GameSquare.prototype.setColor = function(color) {
  this.el.children[0].children[1].classList.remove(this.color);
  this.color = color;
  this.el.children[0].children[1].classList.add(color);
}

// returns a number from 0 to n - 1.
function random(n) {
  return Math.floor(Math.random() * n);
}

function getSomeColors() {
  var colorscopy = colors.slice();
  var randomColors = [];
  for (var i = 0; i < 8; i++) {
    var index = random(colorscopy.length);
    randomColors.push(colorscopy.splice(index, 1)[0]);
  }
  return randomColors.concat(randomColors.slice());
}

function setupGame() {
  var array = document.getElementsByClassName("game-square");
  var randomColors = getSomeColors();             // Get an array of 8 random color pairs
  for (var i = 0; i < array.length; i++) {
    var index = random(randomColors.length);      // Get a random index
    var color = randomColors.splice(index, 1)[0]; // Get the color at that index
    // Use that color to initialize the GameSquare
    gameSquares.push(new GameSquare(array[i], color));
  }
}

setupGame();
