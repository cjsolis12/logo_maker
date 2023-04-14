class Shape{
    constructor( text, textColor, shapeColor, shape){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
        this.shape = shape;
    }
    render(){
        throw new Error('Child class must implement a render() method.');
    }

}

class Circle extends Shape {
    constructor(text, textColor, shapeColor, shape){
    super(text, textColor, shapeColor, shape)
    }
    
    render(){
        return `<svg width="100" height="100"><circle cx="50" cy="50" r="20" fill="${this.shapeColor}"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    constructor(text, textColor, shapeColor, shape){
       super(text, textColor, shapeColor, shape);
    }
    render(){
        return `<svg width="100" height="100"><rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

class Triangle extends Shape {
    constructor(text, textColor, shapeColor, shape){
       super(text, textColor, shapeColor, shape);
    }
    render(){
        return `<svg width="100" height="100"><polygon points="50, 10 90, 90 10, 90" fill="${this.shapeColor}"/><text x="50" y="50" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.text}</text></svg>`
    }
}


//function to generate SVG 

const generateSvg = ({text, textColor, shape, shapeColor}) =>{
    let shapeInstance;
    switch(shape){
        case "circle":
            shapeInstance = new Circle(text, textColor, shapeColor, shape);
            break;
        case "square":
            shapeInstance = new Square(text, textColor, shapeColor, shape);
            break;
        case "triangle":
            shapeInstance = new Triangle(text, textColor, shapeColor, shape);
            break;
           default:
            throw new Error(`Invalid shape: ${shape}`) 

    }
    return shapeInstance.render()
}


module.exports = generateSvg;