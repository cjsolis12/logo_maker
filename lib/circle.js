const Shape = require('./shapes');

class Circle extends Shape {
    constructor(color, radius){
       super('circle', color);
       this.radius =radius;
    }

    render(){
        return `<svg><circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}"/></svg>`
    }
}

module.exports = Circle;