class Drop{
    constructor(x, y){ 
        var options ={
            
            friction: 0.1
        }       
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(this.x, this.y, 4, options);
        World.add(world, this.body);
    }
    update(){
        if(this.body.position.y > height){
            Matter.Body.setPosition(this.body, {x: random(0,400), y: random(0,400)});
        }
    }
    display(){
        var pos = this.body.position;
              
        
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, 4, 4);
        
    }
}