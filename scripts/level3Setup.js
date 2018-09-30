function levelSetup(){
  level = 3;
  timer = 13;
  announcement = "";
  wallMovement = true;

  ball = new Ball(100, 100, 30);

  keys = new Group();
  keys.add(createSprite(width/2+60, height/2+20, 10, 10));
  keys[0].addImage(keyImage);

  doors = new Group();
  doors.add(createSprite(width-50, height-200, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(250, 0, 30, 200));
  walls.add(createSprite(380, 200, 30, 200));
  walls.add(createSprite(300, 400, 30, 200));
  walls.add(createSprite(250, 550, 30, 100));
  walls.add(createSprite(230, 300, 30, 100));
  walls.add(createSprite(410, 400, 30, 100));
  walls.add(createSprite(290, 170, 30, 150));

  walls.add(createSprite(750, 450, 200, 30));
  walls.add(createSprite(650, 390, 30, 200));
  walls.add(createSprite(750, 320, 200, 30));
}
