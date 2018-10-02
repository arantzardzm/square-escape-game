var ball;
var keys;
var doors;
var walls;

var timer;
var level;
var announcement;

var direction;
var wallMovement = false;
var wallRotation = false;

var beginTime = false;

function preload(){
  keyImage = loadImage('../images/key.png');
  doorImage = loadImage('../images/door.png');
}

function setup(){
  createCanvas(800,600);
  levelSetup();
}

function draw(){
  background(255);

  drawSprites();

  if (beginTime){
    timeTracker();
  }

  if (wallMovement && !wallRotation){
    moveWalls();
  }
  if (!wallMovement && wallRotation){
    rotateWalls();
  }
  if (wallMovement && wallRotation){
    bothWalls();
  }

  ball.setBoundaries();
  ball.wallCollision();
  ball.keyGrabbing();
  ball.doorEntering();

  textSize(26);
  text(timer, width-40, 40);

  textSize(40);
  text(announcement, width/2-90, height/2+10);
}

function moveWalls(){
  var divider = Math.ceil((walls.length-3)/2);
  for (var i=0; i<divider; i++){
    var g = walls[i];
    g.position.y += sin(frameCount/20);
  }
  for (var i=divider; i<walls.length-3; i++){
    var g = walls[i];
    g.position.y -= sin(frameCount/40);
  }
}

function rotateWalls(){
  direction += 2;
  var divider = Math.ceil((walls.length-3)/2);
  for (var i=0; i<divider; i++){
    walls[i].setSpeed(3, direction);
    walls[i].rotateToDirection = true;
  }
  for (var i=divider; i<walls.length-2; i++){
    walls[i].setSpeed(3, -direction);
    walls[i].rotateToDirection = true;
  }
}

function bothWalls(){
  direction += 2;
  for (var i=0; i<3; i++){
    var g = walls[i];
    g.position.y += cos(frameCount/20);
  }
  for (var i=3; i<6; i++){
    var g = walls[i];
    g.position.y -= cos(frameCount/45);
  }
  for (var i=6; i<10; i++){
    walls[i].setSpeed(4, direction);
    walls[i].rotateToDirection = true;
  }
  for (var i=10; i<walls.length-2; i++){
    walls[i].setSpeed(4, -direction);
    walls[i].rotateToDirection = true;
  }
}

function pickUpKey(){
  walls[walls.length-1].velocity = createVector(10, 0);
  keys[keys.length-1].remove();
}

function enterDoor(){
  noLoop();
  if (level<5){
    announcement = "New level!";
    var newLevel = (function() {window.location.href = "../level"+(level+1)+"/index.html";})
    setTimeout(newLevel, 2000);
  } else {
    announcement = "You won!"
    var newLevel = (function() {window.location.href = "../main.html";})
    setTimeout(newLevel, 2000);
  }
}

function timeTracker(){
  if (frameCount % 60 == 0 && timer >= 0){
    timer--;
  }
  if (timer <= 0){
    announcement = "Try again!";
    noLoop();
    var restartLevel = (function() {window.location.href = "../level"+(level)+"/index.html";})
    setTimeout(restartLevel, 2000);
  }
}

function keyPressed() {
  ball.userMovement();
  beginTime = true;
}
