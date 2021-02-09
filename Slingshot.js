class Slingshot{
    constructor(bodyX, pointY){
        var options = {
            bodyA: bodyX,
            pointB: pointY,
            stiffness: 0.04,
            length: 10
        }
        this.Sling = Constraint.create(options);
        World.add(world, this.Sling);
    }

    display(){
        if (this.Sling.bodyA){
            var pointA = this.Sling.bodyA.position;
            var pointB = this.Sling.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly(){
        this.Sling.bodyA = null;
    }
}