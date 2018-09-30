var ball;
var keys;
var doors;
var walls;
var enemies;

var timer;
var level;
var announcement;

var verticalMovement = false;
var horizontalMovement = false;

function preload(){
  doorImage = loadImage('../images/door.png');
}

function setup(){
  createCanvas(800,600);
  levelSetup();
}

function draw(){
  background(255);

  drawSprites();
  timeTracker();

  if (verticalMovement){
    moveWallsVertically();
  }
  if (horizontalMovement){

  }

  ball.setBoundaries();
  ball.wallCollision();
  ball.keyGrabbing();
  ball.doorEntering();

  textSize(26);
  text(timer, 20, 40);

  textSize(40);
  text(announcement, width/2-90, height/2+10);
}

function moveWallsVertically(){
  for (var i=0; i<3; i++){
    var g = walls[i];
    g.position.y += sin(frameCount/20);
  }
  for (var i=3; i<walls.length-3; i++){
    var g = walls[i];
    g.position.y -= sin(frameCount/40);
  }
}

function moveWallsHorizontally(){

}

function pickUpKey(){
  walls[walls.length-1].velocity = createVector(10, 0);
  keys[keys.length-1].remove();
}

function enterDoor(){
  noLoop();
  announcement = "New level!";
  var newLevel = (function() {window.location.href = "../level"+(level+1)+"/index.html";})
  setTimeout(newLevel, 2000);
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
}
