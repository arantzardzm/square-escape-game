function levelSetup(){
  level = 1;
  timer = 11;
  announcement = "";

  ball = new Ball(width/2, height/2, 30);

  keys = new Group();
  keys.add(createSprite(width/2+60, height/2+20, 10, 10));
  keys[0].addImage(keyImage);

  doors = new Group();
  doors.add(createSprite(width-100, height-200, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(500, 300, 30, 200));
  walls.add(createSprite(300, 300, 30, 100));
  walls.add(createSprite(380, 360, 210, 30));
  walls.add(createSprite(370, 240, 240, 30));
}
