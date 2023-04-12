class Shape{
    constructor( text, textColor, shapeColor){
        this.type = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor
    }
    render(){
        throw new Error('Not implemented');
    }
}


class Circle extends Shape {
    constructor(color){
       super(null, null, color);
    }
    render(){
        return `<svg><circle cx="25" cy="75" r="20" fill="${color}"/>${text}</svg>`
    }
}

class Square extends Shape {
    constructor(color){
       super('square', color);
    }
    render(){
        return `<svg><polygon points="0,100 200,100 100,0"/>${text}</svg>`
    }
}

class Triangle extends Shape {
    constructor(color){
       super('triangle', color);
    }
    render(){
        return `<svg><polygon points="250,60 100,400 400,400" fill="${color}"/>${text}</svg>`
    }
}

//function to generate SVG 

const generateSvg = ({text, textColor, shape, shapeColor}) =>{
    let shapeInstance;
    switch(shape){
        case "circle":
            shapeInstance = new Circle(shapeColor);
            break;
        case "square":
            shapeInstance = new Square(shapeColor);
            break;
        case "triangle":
            shapeInstance = new Triangle(shapeColor);
            break;
           default:
            throw new Error(`Invalid shape: ${shape}`) 

    }
    return shapeInstance.render(text, textColor)
}


module.exports = generateSvg;