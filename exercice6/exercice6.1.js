const readlineSync = require ("readline-sync")
class Circle {
    constructor(xPos, yPos, radius){  
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius
    }
    get surface(){
        let surface = (Math.pow(this.radius ,2)) * Math.PI;  
        return surface.toFixed(2);
    }
    move(xOffset, yOffset){
        this.xPos = xOffset;
        this.yPos = yOffset;
    }
}
let bubble = new Circle(2, 5, 10);
console.log(bubble.surface)    