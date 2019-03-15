

class Circle {
    constructor(xPos,yPos,radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    get surface(){
        return this.radius* this.radius* Math.PI;

    }


    move(xOffset,yOffset){
        this.xPos = xPos + xOffset
        this.yPos = yPos + yOffset
    }


    test(){
        console.log(this.surface);
        console.log(this.move);

    }

}


let object = new Circle(200 ,200,30);
object.move(200,300);
object.test();

