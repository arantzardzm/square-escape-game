function levelSetup(){
  level = 2;
  timer = 12;
  announcement = "";
  wallMovement = true;

  ball = new Ball(width/2, height-50, 30);

  keys = new Group();
  keys.add(createSprite(width/2-60, height/2-35, 10, 10));
  keys[0].addImage(keyImage);

  doors = new Group();
  doors.add(createSprite(300, 50, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(330, 200, 100, 30));
  walls.add(createSprite(280, 420, 200, 30));
  walls.add(createSprite(500, 100, 100, 30));
  walls.add(createSprite(600, 450, 140, 30));
  walls.add(createSprite(400, 350, 80, 30));
  walls.add(createSprite(100, 450, 140, 30));
  walls.add(createSprite(400, 500, 200, 30));
  walls.add(createSprite(560, 400, 150, 30));
  walls.add(createSprite(340, 300, 200, 30));

  walls.add(createSprite(200, 20, 30, 200));
  walls.add(createSprite(400, 20, 30, 200));
  walls.add(createSprite(300, 100, 200, 30));
}
