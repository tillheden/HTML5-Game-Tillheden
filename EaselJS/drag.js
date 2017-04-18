var update = true;
var stage;
var circle;

function init() {
  //Create a stage by getting a reference to the canvas
  stage = new createjs.Stage("demoCanvas");

  // Enable touch interaction if supported on the current device
  createjs.Touch.enable(stage);

  // Enable mouse over / out events
  stage.enableMouseOver(10);
  stage.mouseMoveOutside = true; // Keep tracking the mouse even when it leaves the canvas

  //Create a Shape DisplayObject.
  circle = new createjs.Shape();
  circle.graphics.beginFill("red").drawCircle(0, 0, 40);
  //Set position of Shape instance.
  circle.x = circle.y = 250;

  circle.cursor = "pointer";

  // using "on" binds the listener to the scope of the currentTarget by default
  // in this case that means it executes in the scope of the button.
  circle.on("mousedown", function(event) {
    this.parent.addChild(this);
    this.offset = {x: this.x - event.stageX, y: this.y - event.stageY};
  })

  // The pressmove event is dispatched when the mouse moves after a mousedown on the target until the mouse is released
  circle.on("pressmove", function(event) {
    this.x = event.stageX + this.offset.x;
    this.y = event.stageY + this.offset.y;
    // Indicate that the stage should be updated on the next tick;
    update = true;
  })

  createjs.Ticker.addEventListener("tick", tick);

  //Add Shape instance to stage display list.
  stage.addChild(circle);
  //Update stage will render next frame
  stage.update();
}

function stop() {
  createjs.Ticker.removeEventListener("tick", tick);
}

function tick(event) {
  // This makes it so the stage only re-renders when an event handler indicates a change has happened.
  if (update) {
    update = false; // Only update once
    stage.update(event);
  }
}
