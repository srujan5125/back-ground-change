var ball;
function setup() {
  createCanvas(400,400);
ball= createSprite(200,200,50,50);
background(30);
}

function draw() 
{
  
if(keyDown (UP_ARROW)){
  ball.y-=5
background("red")
}

if(keyDown (DOWN_ARROW)){
  ball.y+=5
background("pink")
}

if(keyDown (LEFT_ARROW)){
  ball.x-=5
background("yellow")
}

if(keyDown(RIGHT_ARROW)){
ball.x+=5
background("blue")
}








drawSprites()

}








