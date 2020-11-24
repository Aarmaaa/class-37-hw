const Engine=Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Body= Matter.Body;

var player,ground

function setup() {
  createCanvas(800,600);
  
  engine=Matter.Engine.create();
  world=engine.world;

  ground=new Ground(400,600,800,30)

  player=Bodies.rectangle(300,550,50,50)
  World.add(world,player)

}

function draw() {
  background(225)
  Matter.Engine.update(engine)
  rectMode(CENTER)
  rect(player.position.x,player.position.y,50,50)
  
  if(keyDown("LEFT_ARROW")){
    player.position.x=player.position.x-2
    console.log(player)
  }


  ground.displace()
  //world.gravity.y=2
}