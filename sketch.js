const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;


function setup() {
  createCanvas(800,400);
slingshot = new Slinger(100,360,40,40)
  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(0,0,0);  
  Engine.update(engine);
  strokeWeight(4);
  slingshot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}