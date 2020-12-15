const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof, roofSprite;
var engine, world
var rope1, rope2, rope3, rope4, rope5

function preload() {
	
}

function setup() {
createCanvas(800, 700);
engine = Engine.create();
world = engine.world;
roof = Bodies.rectangle(400,35,800,20,{isStatic: true})
World.add(world, roof)
roofSprite = createSprite(400,35,800,20)
roofSprite.shapeColor = color(5,61,125)
bobObject1 = new Bob(116,535,58)
bobObject2 = new Bob(232,535,58)
bobObject3 = new Bob(348,535,58)
bobObject4 = new Bob(464,535,58)
bobObject5 = new Bob(580,535,58)
rope1 = new Rope(bobObject1.body, {x:116, y:35})
rope2 = new Rope(bobObject2.body, {x:232, y:35})
rope3 = new Rope(bobObject3.body, {x:348, y:35})
rope4 = new Rope(bobObject4.body, {x:464, y:35})
rope5 = new Rope(bobObject5.body, {x:580, y:35})
Engine.run(engine); 
}

function draw() {
rectMode(CENTER);
background(40,83,31);
bobObject1.display()
bobObject2.display()
bobObject3.display()
bobObject4.display()
bobObject5.display()
rope1.display()
rope2.display()
rope3.display()
rope4.display()
rope5.display()
drawSprites(); 
}

function mouseDragged(){
Matter.Body.setPosition(bobObject1.body, { x: mouseX, y: mouseY });
}