function setup() {
  createCanvas(800,400);
 shape1= createSprite(400, 200, 50, 50);
 shape2=createSprite(369, 234, 60, 120);
}

function draw() {
  background(215);
    shape1.x=mouseX
    shape1.y=mouseY
    if(abs(shape1.x-shape2.x)<shape1.width/2+shape2.width/2&&
    abs(shape1.y-shape2.y)<shape1.height/2+shape2.height/2){
      shape1.shapeColor="red"
      shape2.shapeColor="red" 
    }else{
      shape1.shapeColor="indigo"
      shape2.shapeColor="indigo"  
    }
  drawSprites();
}