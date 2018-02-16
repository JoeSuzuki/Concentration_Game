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
  this.setColor(color); 
}

// methods called when an event occurs
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

// this.el : is the game square div.
// this.el.children[0] : the game square's child, the "drawer" div.
// this.el.children[0].children[1] : the second child of the drawer div, this should be the color square.
GameSquare.prototype.setColor = function(color) {
  this.el.children[0].children[1].classList.remove(this.color);
  this.color = color;
  this.el.children[0].children[1].classList.add(color);
}
