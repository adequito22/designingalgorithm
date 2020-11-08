var fixedrectangle, movingrectangle;

function setup() {
  createCanvas(1200,1200);
  fixedrectangle=createSprite(400, 600, 50, 120);
  movingrectangle=createSprite(900, 600, 120, 50);
  movingrectangle.shapeColor="green";
  fixedrectangle.shapeColor="green";
}

function draw() {
  background(0);  
  movingrectangle.x=World.mouseX;
  movingrectangle.y=World.mouseY;
  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2&&
    fixedrectangle.y-movingrectangle.y<movingrectangle.width/2+fixedrectangle.width/2&&movingrectangle.y-fixedrectangle.y<movingrectangle.width/2+fixedrectangle.width/2){
    movingrectangle.shapeColor="red";
    fixedrectangle.shapeColor="red";
  } else{
    movingrectangle.shapeColor="green";
    fixedrectangle.shapeColor="green";
  }
  drawSprites();
}