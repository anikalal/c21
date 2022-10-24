
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball
var ground,left,right
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	var balls_options=
	{
		isStatic:false,
		restitution: 0.3,
		friction: 0,
		density:1.2
	}
	ball=Bodies.circle(260,100,20,balls_options)
	World.add(world,ball)
	//Create the Bodies Here.
 ground=new Ground(width/2,670,width,20)
left=new Ground(1100,600,20,120)
right=new Ground(1350,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ellipse(ball.position.x,ball.position.y,20,20)
 ground.show()
 left.show()
 right.show()
}
 function keyPressed(){
	if(keyCode===DOWN_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
 }


