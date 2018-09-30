function levelSetup(){
  level = 5;
  timer = 10;
  announcement = "";
  direction = 90;
  wallMovement = true;
  wallRotation = true;

  ball = new Ball(50, 300, 30);

  keys = new Group();
  keys.add(createSprite(2*(width/3), height/2-80, 10, 10));
  keys[0].addImage(keyImage);

  doors = new Group();
  doors.add(createSprite(width-70, 565, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(200, 100, 30, 100));
  walls.add(createSprite(300, 470, 150, 30));
  walls.add(createSprite(340, 500, 30, 150));
  walls.add(createSprite(330, 200, 30, 100));
  walls.add(createSprite(300, 400, 30, 100));
  walls.add(createSprite(700, 250, 100, 30));
  walls.add(createSprite(500, 100, 30, 100));
  walls.add(createSprite(700, 500, 30, 100));
  walls.add(createSprite(700, 170, 30, 150));
  walls.add(createSprite(400, 550, 30, 100));
  walls.add(createSprite(560, 400, 100, 30));
  walls.add(createSprite(500, 400, 30, 100));
  walls.add(createSprite(340, 170, 150, 30));

  walls.add(createSprite(650, 600, 30, 200));
  walls.add(createSprite(750, 500, 180, 30));
}
