const readlineSync = require ("readline-sync")

class Rectangle{
    constructor(topLeftXpos, topLeftYpos, width, length){
        this.topLeftXpos = topLeftXpos;
        this.topLeftYpos = topLeftYpos;
        this.width = width;
        this.length = length;
    }
    collides(otherRectangle){
        let x = this.topLeftXpos;
        let y = this.topLeftYpos;

        if(x === otherRectangle.topLeftXpos && y === otherRectangle.topLeftYPos){
            return true;
        }else{
            return false;
        }
    }
}

let firstRectangle = new Rectangle(1, 1, 4, 7);
let secondRectangle = new Rectangle(1, 1, 4, 9);
console.log(firstRectangle.collides(secondRectangle))
