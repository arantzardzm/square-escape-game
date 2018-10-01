function levelSetup(){
  level = 0;
  timer = 10;
  announcement = "";

  ball = new Ball(width/3-100, height/2, 30);

  //no keys

  doors = new Group();
  doors.add(createSprite(width-100, height/2, 25, 35));
  doors[0].addImage(doorImage);

  walls = new Group();
  walls.add(createSprite(width/2+25, 300, 30, 200));
}
