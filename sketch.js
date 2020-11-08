var fixedrect, movingrect;
var rectangle, rect;
function setup() {
  createCanvas(400,400);
  fixedrect=  createSprite(200, 200, 80, 80);
  fixedrect.shapeColor= "red";
  

  movingrect= createSprite(50, 200, 80, 40);
  movingrect.shapeColor= "blue";
 

  rectangle = createSprite(50, 100, 100, 50); 
  rectangle.shapeColor= "green";
 

  rect = createSprite(350, 350, 70, 40); 
  rect.shapeColor= "black";
  
}

function draw() {
  background("yellow");  

  rect.x= mouseX;
  rect.y= mouseY;

  
  

  if(isTouching(rect, rectangle)){
    rectangle.shapeColor="orange";
    //fixedrect.shapeColor="orange";
    rect.shapeColor="orange";
  }
  else{
    //fixedrect.shapeColor= "red";
    rectangle.shapeColor= "green";
    rect.shapeColor="black";
  }

  bounceOff(movingrect, rect);
  bounceOff(movingrect,rectangle);
  bounceOff(rect, rectangle);
  bounceOff(fixedrect, movingrect);
  bounceOff(fixedrect, rectangle);
  bounceOff(fixedrect, rect);
  drawSprites();
 
}
