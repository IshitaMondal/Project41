const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;

var umbrella;
var drops = [];
var maxDrops;

function preload(){
    thunder1 = loadImage("images/thunderbolt/1.png");
    thunder2 = loadImage("images/thunderbolt/2.png");
    thunder3 = loadImage("images/thunderbolt/3.png")
    thunder4 = loadImage("images/thunderbolt/4.png")
    
}

function setup(){
    createCanvas(400, 750);
    engine = Engine.create();
    world = engine.world;

    umbrella = new Umbrella(200, 575);    
    maxDrops = 100;

    for(var i=0; i<maxDrops; i++){
        drops.push(new Drop(random(0,496),random(0,400)));
    }
}

function draw(){
    background(0);

    umbrella.display();
    for(var i=0; i<drops.length; i++){
        drops[i].display();
        drops[i].update();
    }
    if(frameCount%80 === 0){
        var rand = Math.round(random(1, 4));
        switch(rand){
            case 1: image(thunder1, 260, 0);
                break;
            case 2: image(thunder2, 240, 0);
                break;
            case 3: image(thunder3, 260, 0);
                break;  
            case 4: image(thunder4, 240, 0);
                break;
        }
    }
        
}   

