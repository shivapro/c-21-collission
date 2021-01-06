var fixedRect, movingRect;
var o1,o2,o3,o4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  
  o1 = createSprite(100,200,50,50);
  o1.shapeColor="green";
  o2 = createSprite(200,200,50,50);
  o2.shapeColor="green";
  o3 = createSprite(300,200,50,50);
  o3.shapeColor="green";
  o4 = createSprite(400,200,50,50);
  o4.shapeColor="green";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect,o2)){

    movingRect.shapeColor = "red";
    o2.shapeColor = "red";
  }else{
    movingRect.shapeColor = "green";
    o2.shapeColor = "green";

  }

  
  drawSprites();
}

// function isTouching(o1,o2){

//   if (o1.x - o2.x < o2.width/2 + o1.width/2
//     && o2.x - o1.x < o2.width/2 + o1.width/2
//     && o1.y - o2.y < o2.height/2 + o1.height/2
//     && o2.y - o1.y < o2.height/2 + o1.height/2) {
//   return true;
// }
// else {
//   return false
// }

// }



