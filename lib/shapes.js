class Shape{
    constructor(type, color){
        this.type = type;
        this.color = color;
    }

    render(){
        throw new Error('Not implemented');
    }
}


class Circle extends Shape {
    constructor(color, radius){
       super('circle', color);
       this.radius =radius;
    }

    render(){
        return `<svg><circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" fill="${this.color}"/></svg>`
    }
}

class Square extends Shape {
    constructor(color, size){
       super('square', color);
       this.size = size;
    }

    render(){
        return `<svg><polygon points="0,100 200,100 100,0"/></svg>`
    }
}


class Triangle extends Shape {
    constructor(color, base, height){
       super('triangle', color);
       this.base = base;
       this.height
    }

    render(){
        return `<svg><rect x="0" y="0" width="${this.size}" height="${this.size}" fill="${this.color}"/></svg>`
    }
}

module.exports = Shape;