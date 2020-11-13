class Umbrella{
    constructor(x, y){
        this.body = Bodies.circle(x, y, 400, 600);
        this.x = x;
        this.y = y;
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, 400, 400);
    }
}