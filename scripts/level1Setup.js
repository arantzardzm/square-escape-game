function levelSetup(){
  ball = new Ball(width/2, height/2, 30); //one ball

  keys = new Group();
  keys.add(createSprite(width/2+60, height/2+20, 10, 10)); //one key

  doors = new Group();
  doors.add(createSprite(width-100, height-200, 25, 35)); //one door

  walls = new Group();
  walls.add(createSprite(500, 300, 30, 200)); //four walls
  walls.add(createSprite(300, 300, 30, 100));
  walls.add(createSprite(380, 360, 210, 30));
  walls.add(createSprite(370, 240, 240, 30));

  //no enemies

  keys[0].addImage(keyImage); //adding images to key and door
  doors[0].addImage(doorImage);

  timer = 10; //time begins at 10
  level = 0; //level 0
  announcement = "";
}
