class Mango{
    constructor(x,y,radius,angle){
        var options={
            'isStatic':true,
            'restitution':0,
            'friction':1
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius= Math.round(random(50,80));
        this.x=Math.round(random(510,690));
        this.y=Math.round(random(510,210));
        this.image=loadImage("Plucking Mangoes/mango.png")
        World.add(world,this.body);

    }
    display(){
        var pos=this.body.position
        push()
        var angle = this.body.angle;
        imageMode(CENTER);
        ellipseMode(CENTER);
        image(this.image,pos.x,pos.y,this.radius);
        pop()
    }
}