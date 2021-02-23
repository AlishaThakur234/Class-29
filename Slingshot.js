class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1 = loadImage ("sprites/sling1.png")
        this.sling2 = loadImage ("sprites/sling2.png")
        this.sling3 = loadImage ("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1 ,220,100,35,120)
        image(this.sling2 ,195,100,35,70)
        
        console.log (this.sling2.height)

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            stroke (48,22,8)

            if (this.sling.bodyA.position.x > 210){
                strokeWeight(4);
                line(pointA.x+20, pointA.y, pointB.x-5, pointB.y);
                line(pointA.x+20, pointA.y, pointB.x+25, pointB.y);
                image(this.sling3,pointA.x+20,pointA.y-5)
            }
            else {
                strokeWeight(7);
                line(pointA.x-15, pointA.y, pointB.x-5, pointB.y);
                line(pointA.x-15, pointA.y, pointB.x+25, pointB.y);
                image(this.sling3,pointA.x-20,pointA.y-5)
            }
        }
    }
    
}