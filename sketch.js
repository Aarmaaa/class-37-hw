const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


	var player,ground


function setup() {
	createCanvas(800,600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground=new Ground(200,300,80000,30)


	player=Matter.Bodies.rectangle(300,10,50,50)
	Matter.World.add(world,player)

	
	Engine.run(engine);
	world.gravity.y=2
  
}


function draw() {
  rectMode(CENTER);
  background(224);
  
ground.display()



rectMode(CENTER)
rect(player.position.x,player.position.y,50,50)


drawSprites();
}



