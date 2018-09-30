var ballSprite;
var ballInitX;
var ballInitY;
var ballInitSize;

function Ball(ballInitX, ballInitY, ballInitSize){
  this.ballInitX = ballInitX;
  this.ballInitY = ballInitY;
  this.ballInitSize = ballInitSize;

  ballSprite = createSprite(ballInitX, ballInitY, ballInitSize, ballInitSize);
  ballSprite.shapeColor = color(231,54,33);

  this.wallCollision = function(){
    if (walls != null){
      ballSprite.collide(walls);
    }
  }

  this.keyGrabbing = function(){
    if (keys != null){
      ballSprite.overlap(keys, pickUpKey);
    }
  }

  this.doorEntering = function(){
    if (doors != null){
      ballSprite.overlap(doors, enterDoor);
    }
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
