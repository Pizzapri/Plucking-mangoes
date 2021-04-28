class Tree{
	constructor(x,y,width,height){

        var options={
            isStatic:true
        }
		
		this.body=Bodies.rectangle(this.x, this.y, this.width, this.height, options)
		this.x=600;
		this.y=240;
        this.width = width;
        this.height = height;
		this.image=loadImage("Plucking Mangoes/tree.png")
		
		World.add(world, this.body)

    }
    
	display(){
			var pos=this.body.position;
			push();
			translate(pos.x,pos.y);
			imageMode(CENTER);
			image(this.image,600,215,this.width, this.height)
			pop();
			
	}

}