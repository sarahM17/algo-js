/*Create a function named calcDistance which takes the coordinates 
of two different points A and B in a 2D space. 
That function must return the distance between those two points.

Point A = [1, 1], point B = [2, 2] => 1.41
Point A = [1, 1], point B = [3, 1] => 2
Point A = [4, 1], point B = [1, 1] => 3
Point A = [-2, 2], point B = [2, -2] => 5.65
*/

function calcDistance (x1,y1,x2,y2) {
    return Math.hypot(x1-x2,y1-y2);
}

//output:

console.log(Math.round(calcDistance(1,1,2,2)*100)/100);
console.log(Math.round(calcDistance(1,1,3,1)*100)/100);
console.log(Math.round(calcDistance(4,1,1,1)*100)/100);
console.log(Math.round(calcDistance(-2,2,2,-2)*100)/100);



