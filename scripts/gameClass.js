var ball; //Initializing ball, keys, doors, walls, and enemies
var keys;
var doors;
var walls;
var enemies;

var timer; //Initializing timer, announcement, and level
var level;
var announcement;

function preload(){ //Preloading key and door image
  keyImage = loadImage('../images/key.png');
  doorImage = loadImage('../images/door.png');
}

function setup(){ //Setting canvas and level (0-5)
  createCanvas(800,600);
  levelSetup();
}

function draw(){ //Drawing background and sprites
  background(255);
  drawSprites();
  beginTime();

  ball.setBoundaries(); //Setting ball's actions
  ball.wallCollision();
  ball.keyGrabbing();
  ball.doorEntering();

  textSize(26); //Timer setup
  text(timer, 20, 40);

  textSize(40); //Announcement setup (new level or game over)
  text(announcement, width/2-90, height/2+10);
}

function pickUpKey(){ //When key is picked up, remove wall and key
  walls[walls.length-1].remove();
  keys[keys.length-1].remove();
}

function enterDoor(){ //When user enters door, remove all sprites and start next level
  announcement = "New level!";
  noLoop();
  var newLevel = (function() {window.location.href = "../level"+(level+1)+"/index.html";})
  setTimeout(newLevel, 2000);
}

function beginTime(){ //Time function
  if (frameCount % 60 == 0 && timer >= 0){
    timer--;
  }
  if (timer <= 0){ //Checks when time runs out
    announcement = "Try again!";
    noLoop();
    var restartLevel = (function() {window.location.href = "../level"+(level)+"/index.html";})
    setTimeout(restartLevel, 2000);
  }
}

function removeSprites(){ //remove sprites from screen
  ball.death();
  do {
    walls[0].remove();
  } while(walls[0] !== undefined);
  do {
    doors[0].remove();
  } while(doors[0] !== undefined)
}


function keyPressed() { //key/user movement
  ball.userMovement();
}
