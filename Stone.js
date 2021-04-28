class Stone{
    constructor(x,y,radius,angle){
        var options={
            'isStatic':false,
            'restitution':0,
            'friction':1,
            'density':1.2
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=30;
        this.x=x;
        this.y=y;
        this.image=loadImage("Plucking Mangoes/stone.png")
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position;
        push()
        var angle = this.body.angle;
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image,pos.x,pos.y,this.radius);
        pop()
    }
}