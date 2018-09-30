function levelSetup(){
  level = 2;
  timer = 13;
  announcement = "";
  verticalMovement = true;
  horizontalMovement = false;

  ball = new Ball(100, 100, 30);

  keys = new Group();
  keys.add(createSprite(width/2+60, height/2+20, 10, 10));

  doors = new Group();
  doors.add(createSprite(width-50, height-200, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(200, 0, 30, 200));
  walls.add(createSprite(330, 200, 30, 200));
  walls.add(createSprite(250, 400, 30, 200));
  walls.add(createSprite(200, 550, 30, 100));
  walls.add(createSprite(170, 300, 30, 100));
  walls.add(createSprite(360, 400, 30, 100));
  walls.add(createSprite(240, 170, 30, 150));

  walls.add(createSprite(750, 450, 200, 30));
  walls.add(createSprite(650, 390, 30, 200));
  walls.add(createSprite(750, 350, 200, 30));
}
