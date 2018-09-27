var ballInitX;
var ballInitY;
var ballSize;
var ballSprite;

function Ball(ballInitX, ballInitY, ballSize){
  this.ballInitX = ballInitX;
  this.ballInitY = ballInitY;
  this.ballSize = ballSize;

  ballSprite = createSprite(ballInitX, ballInitY, ballSize, ballSize);
  ballSprite.shapeColor = color(231,54,33);

  this.wallCollision = function(){
    ballSprite.collide(walls);
  }

  this.keyGrabbing = function(){
    ballSprite.overlap(keys, pickUpKey);
  }

  this.doorEntering = function(){
    ballSprite.overlap(doors, enterDoor);
  }

  this.userMovement = function(){
  	if (keyCode === UP_ARROW) {
  	   ballSprite.velocity = createVector(0, -2);
  	}
  	if (keyCode === DOWN_ARROW) {
  		ballSprite.velocity = createVector(0, 2);
  	}
  	if (keyCode === LEFT_ARROW) {
  		ballSprite.velocity = createVector(-2, 0);
  	}
  	if (keyCode === RIGHT_ARROW) {
  		ballSprite.velocity = createVector(2, 0);
  	}
  }

  this.setBoundaries = function(){
    if (ballSprite.position.x < 0){
      ballSprite.position.x = 0;
    }
    if (ballSprite.position.x > width){
      ballSprite.position.x = width;
    }
    if (ballSprite.position.y < 0){
      ballSprite.position.y = 0;
    }
    if (ballSprite.position.y > height){
      ballSprite.position.y = height;
    }
  }

  this.death = function(){
    ballSprite.remove();
  }
}
