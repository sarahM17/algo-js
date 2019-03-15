class rectangle {
    constructor(topLeftXpos,topLeftYpos,width,length){
        this.topLeftXpos = topLeftXpos;
        this.topLeftYpos = topLeftYpos;
        this.width = width;
        this.length = length;
    }

    collides(otherRectangle){
        if ( (this.topLeftXpos <= otherRectangle.topLeftXpos &&
            this.topLeftXpos + this.width >= otherRectangle.topLeftXpos)||
            (this.topLeftXpos <= otherRectangle.topLeftXpos + otherRectangle.width &&
            this.topLeftXpos + this.width >= otherRectangle.topLeftXpos + otherRectangle.width) &&
            
            (this.topLeftYpos <= otherRectangle.topLeftYpos &&
            this.topLeftYpos + this.length >= otherRectangle.topLeftYpos)||
            (this.topLeftYpos <= otherRectangle.topLeftYpos + otherRectangle.length &&
            this.topLeftYpos + this.length >= otherRectangle.topLeftYpos + otherRectangle.length)
            ){
            return true;
            }

            else{
            return false;
            }
            
    }
}

let object1 = new rectangle(0,0,25,50);
let object2 = new rectangle(5,25,40,80);
let object3 = new rectangle(0,0,25,50);
let object4 = new rectangle(50,100,400,300);

object1.collides(object2);
object3.collides(object4);