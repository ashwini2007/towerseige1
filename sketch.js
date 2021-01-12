const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    base1 = new Ground(650,340,180,20);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);
    base1.display();
        
}

