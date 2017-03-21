var gameArea;
var player;
var interval;

function startGame() {
  gameArea = new GameArea(500, 500);
  window.addEventListener('keydown', function(e) {
    gameArea.keys = (gameArea.keys || []);
    gameArea.keys[e.keyCode] = true;
  });
  window.addEventListener('keyup', function(e) {
    gameArea.keys[e.keyCode] = false;
  });

  player = new Player(5, 5, "green", 35, 35, gameArea.context);

  interval = setInterval(function() {updateGameArea()}, 20);
}

function updateGameArea() {
  gameArea.clear();
  keyboardEvents();
  boundsControl();
  player.update();
}

function keyboardEvents() {
  if (gameArea.keys && (gameArea.keys[37] || gameArea.keys[65])) { player.moveLeft(); } // 37 = left, 65 = a
  if (gameArea.keys && (gameArea.keys[39] || gameArea.keys[68])) { player.moveRight(); } // 39 = right, 68 = d
  if (gameArea.keys && (gameArea.keys[38] || gameArea.keys[87])) { player.moveUp(); } // 38 = up, 87 = w
  if (gameArea.keys && (gameArea.keys[40] || gameArea.keys[83])) { player.moveDown(); } // 40 = down, 83 = s
}

function boundsControl() {
  if (player.x < 0) { player.moveRight(); } // Out of bounds; left
  else if (player.x+player.width > gameArea.canvas.width) { player.moveLeft(); } // Out of bounds; right
  if (player.y < 0) { player.moveDown(); } // Out of bounds; top
  else if (player.y+player.height > gameArea.canvas.height) { player.moveUp(); } // Out of bounds; bottom
}
