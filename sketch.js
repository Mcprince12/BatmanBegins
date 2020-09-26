const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var umbrella;
var maxDrops = 100;
var drops = []

function preload(){
    thunder = loadImage("ggg-removebg-preview (1).png");
}

function setup(){
   createCanvas(500, 1000);
   engine = Engine.create();
   world = engine.world;

   umbrella = new Umbrella(250, 600);
  
}

function draw(){
    background("black");
    Engine.update(engine);
    
    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,400), random(0,400)));
        image(thunder, 200, 0, 200, 200);
    }

    umbrella.display();
    drops[0].display();
    
}   

