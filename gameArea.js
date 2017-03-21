function GameArea(width, height) {
  this.canvas = document.createElement("canvas");
  document.body.insertBefore(this.canvas, document.body.childNodes[2]);
  this.canvas.width = width;
  this.canvas.height = height;
  this.context = this.canvas.getContext("2d");

  this.clear = function() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.context.fillStyle = "#EEEEEE";
    this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
