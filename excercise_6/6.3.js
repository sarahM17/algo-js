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

            console.log(object);
            return true;
            }

        else{
            return false;
            }
            
    }
}

let object1 = new rectangle(50,100,400,300);

for(i=0; i<1000; i++){
    let a = Math.floor(Math.random()*1000);
    let b = Math.floor(Math.random()*1000);
    let c = Math.floor(Math.random()*1000);
    let d = Math.floor(Math.random()*1000);


let object = (object+i)
object = new rectangle(a,b,c,d);
object1.collides(object);
if(collides=true){}

}