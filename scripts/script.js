var ball;
var keys;
var score; //will eventually change to timer
var walls;
var doors;
var announcement;


function setup(){
  createCanvas(800,600);

  score = 0;
  announcement = "";

  ball = createSprite(width/2, height/2, 30, 30);
  ball.shapeColor = color(231,54,33);

  keys = new Group();
  keys.add(createSprite(width/2+60, height/2+30, 10, 10));

  walls = new Group();
  walls.add(createSprite(500, 300, 30, 200));
  walls.add(createSprite(300, 300, 30, 100));
  walls.add(createSprite(380, 360, 210, 30));
  walls.add(createSprite(370, 240, 240, 30));

  doors = new Group();
  doors.add(createSprite(700, 500, 25, 35));
}

function draw(){
  background(210,210,210);
  textSize(26);
  text(score, 20, 40);

  drawSprites();
  drawBoundaries();

  ball.collide(walls);
  ball.overlap(keys, pickUpKey);
  ball.overlap(doors, enterDoor);

  textSize(40);
  text(announcement, width/2-110, height/2+10);
}

function pickUpKey(){
  walls[walls.length-1].remove();
  keys[keys.length-1].remove();
  score += 20;
}

function enterDoor(){
  removeSprites();
  announcement = "New Level!";
}

function removeSprites(){
  ball.remove();
  do {
    walls[0].remove();
  } while(walls[0] !== undefined);
  do {
    doors[0].remove();
  } while(doors[0] !== undefined)
}

function drawBoundaries(){
  if (ball.position.x < 0){
    ball.position.x = 0;
  }
  if (ball.position.x > width){
    ball.position.x = width;
  }
  if (ball.position.y < 0){
    ball.position.y = 0;
  }
  if (ball.position.y > height){
    ball.position.y = height;
  }
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		ball.velocity = createVector(0, -2);
	}
	if (keyCode === DOWN_ARROW) {
		ball.velocity = createVector(0, 2);
	}
	if (keyCode === LEFT_ARROW) {
		ball.velocity = createVector(-2, 0);
	}
	if (keyCode === RIGHT_ARROW) {
		ball.velocity = createVector(2, 0);
	}
}
