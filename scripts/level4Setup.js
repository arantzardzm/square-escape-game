function levelSetup(){
  level = 4;
  timer = 14;
  announcement = "";
  direction = 90;
  wallRotation = true;

  ball = new Ball(50, 100, 30);

  keys = new Group();
  keys.add(createSprite(2*(width/3), height/2+100, 10, 10));
  keys[0].addImage(keyImage);

  doors = new Group();
  doors.add(createSprite(width-50, 100, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(560, 400, 100, 30));
  walls.add(createSprite(200, 100, 30, 100));
  walls.add(createSprite(330, 200, 150, 30));
  walls.add(createSprite(300, 400, 30, 100));
  walls.add(createSprite(700, 470, 30, 150));

  walls.add(createSprite(500, 100, 100, 30));
  walls.add(createSprite(500, 470, 30, 150));
  walls.add(createSprite(400, 550, 200, 30));
  walls.add(createSprite(340, 170, 30, 150));
  walls.add(createSprite(650, 600, 100, 30));

  walls.add(createSprite(650, 90, 30, 200));
  walls.add(createSprite(750, 170, 180, 30));
}
