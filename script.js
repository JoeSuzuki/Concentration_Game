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
}
