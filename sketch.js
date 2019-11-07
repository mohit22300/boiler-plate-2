var movingrect , fixedrect;



function setup() {
  createCanvas(800,400);
 
movingrect=createSprite(200, 200, 50, 30);
movingrect.shapeColor="blue";

fixedrect=createSprite(300,200,50,30);
fixedrect.shapeColor="blue";

movingrect.velocityY=-3;
fixedrect.velocityY=+3;

}

function draw() {
  background(0);  

  movingrect.x=World.mouseX;
  movingrect.y=World.mouseY;

bounceoff(movingrect,fixedrect);





  drawSprites();
}

function bounceoff(object1,object2){

  if(object1.x-object2.x<object1.width/2+object2.width/2 &&
    object2.x-object1.x<object2.width/2+object1.width/2 ){

   object1.velocityX=object1.velocityX*(-1);
   object2.velocityX=object2.velocityX*(-1);
  }
 if (object1.y-object2.y<object1.height/2+object2.height/2 &&
  object2.y-object1.y<object2.height/2+object1.height/2){

 object1.velocityY=object1.velocityY*(-1);
   object2.velocityY=object2.velocityY*(-1);


 }

  }




