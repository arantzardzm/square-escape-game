var ball;
var ballPositionX;
var ballPositionY;
var ballSize;

var keys;
var keyPositionX;
var keyPositionY;
var keySize;

var timer;
var score;
var walls;
var doors;
var announcement;

function preload(){
  keyImage = loadImage('images/key.png');
  doorImage = loadImage('images/door.png');
}

function setup(){
  createCanvas(800,600);

  ballPositionX = width/2;
  ballPositionY = height/2;
  ballSize = 30;
  ball = new Ball(ballPositionX, ballPositionY, ballSize);

  keyPositionX = width/2+60;
  keyPositionY = height/2+20;
  keys = new Group();
  keys.add(createSprite(keyPositionX, keyPositionY, 10, 10));
  keys[0].addImage(keyImage);

  walls = new Group();
  walls.add(createSprite(500, 300, 30, 200));
  walls.add(createSprite(300, 300, 30, 100));
  walls.add(createSprite(380, 360, 210, 30));
  walls.add(createSprite(370, 240, 240, 30));

  doors = new Group();
  doors.add(createSprite(700, 500, 25, 35));
  doors[0].addImage(doorImage);


    score = 0;
    timer = 10;
    announcement = "";
}

function draw(){
  background(210,210,210);
  textSize(26);
  text(timer, 20, 40);

  drawSprites();

  beginTime();

  ball.setBoundaries();
  ball.wallCollision();
  ball.keyGrabbing();
  ball.doorEntering();

  textSize(40);
  text(announcement, width/2-110, height/2+10);
}

function pickUpKey(){
  walls[walls.length-1].remove();
  keys[keys.length-1].remove();
  timer += 10;
}

function enterDoor(){
  removeSprites();
  announcement = "New Level";
  score = timer;
  console.log(timer);
}

function beginTime(){
  if (frameCount % 60 == 0 && timer >= 0){
    timer--;
  }
  if (timer < 0){
    announcement = "Game Over!";
    noLoop();
  }
}

function removeSprites(){
  ball.death();
  do {
    walls[0].remove();
  } while(walls[0] !== undefined);
  do {
    doors[0].remove();
  } while(doors[0] !== undefined)
}


function keyPressed() {
  ball.userMovement();
}
