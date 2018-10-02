function levelSetup(){
  level = 1;
  timer = 11;
  announcement = "";
  wallMovement = true;

  ball = new Ball(100, height/2, 30);

  keys = new Group();
  keys.add(createSprite(400, 400, 10, 10));
  keys[0].addImage(keyImage);

  doors = new Group();
  doors.add(createSprite(width-100, 100, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(300, 350, 30, 120));
  walls.add(createSprite(400, 200, 150, 30));

  walls.add(createSprite(500, 400, 30, 140));
  walls.add(createSprite(400, 500, 140, 30));

  walls.add(createSprite(width-180, 100, 30, 200));
  walls.add(createSprite(width-180, 100, 30, 200));
  walls.add(createSprite(width-100, 200, 200, 30));
}
