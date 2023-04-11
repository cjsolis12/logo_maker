const Shape = require('./shapes');

class Square extends Shape {
    constructor(color, size){
       super('square', color);
       this.size = size;
    }

    render(){
        return `<svg><rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}"/></svg>`
    }
}

module.exports = Square;