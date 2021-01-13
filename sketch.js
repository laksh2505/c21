var fixedRect, movingRect, baaba, pwam, koala, llama;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  //fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
  baaba = createSprite(200,150,40,40);
  baaba.shapeColor = "green";
 // movingRect.debug = true;
 pwam = createSprite(300,50,20,60);
 pwam.shapeColor = "green";
// movingRect.debug = true;
llama = createSprite(80,50,35,660);
llama.shapeColor = "green";
// movingRect.debug = true;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if (isTouching(movingRect, baaba)) {
    movingRect.shapeColor = "red";
    baaba.shapeColor = "red";
  }
  else {
    movingRect.shapeColor = "green";
    baaba.shapeColor = "green";
  }
  drawSprites();
}

