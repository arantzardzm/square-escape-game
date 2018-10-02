function levelSetup(){
  level = 0;
  timer = 10;
  announcement = "";

  ball = new Ball(100, height/2, 30);

  keys = new Group();
  keys.add(createSprite(width/2+30, height/2, 10, 10));
  keys[0].addImage(keyImage);

  doors = new Group();
  doors.add(createSprite(width-125, height/2, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(300, 300, 30, 200));

  walls.add(createSprite(575, 300, 30, 200));
  walls.add(createSprite(650, 400, 200, 30));
  walls.add(createSprite(650, 200, 200, 30));
}
