function Player(x, y, color, width, height, context) {
  this.width = width;
  this.height = height;
  this.x = x;
  this.y = y;
  this.movementSpeed = 6;

  this.newPos = function() {
    this.x += this.speedX;
    this.y += this.speedY;
  }

  this.update = function() {
    this.context = context;
    this.context.beginPath();
    this.context.fillStyle = color;
    this.context.fillRect(this.x, this.y, this.width, this.height);
  }

  this.moveUp = function() { this.y -= this.movementSpeed; }
  this.moveDown = function() { this.y += this.movementSpeed; }
  this.moveRight = function() { this.x += this.movementSpeed; }
  this.moveLeft = function() { this.x -= this.movementSpeed; }
}
