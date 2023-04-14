//Render Method is imported
const {Circle, Square, Triangle} = require('./shapes.js')

//Testing Suite
describe('Circle', () =>{
    test('renders a circle with user choice of color')
    const circle = new Circle;
    expect(shape.render()).toEqual(`<svg width="100" height="100"><circle cx="50" cy="50" r="20" fill="${this.shapeColor}"/><text x="50%" y="50%" text-anchor="middle" dominant-baseline="central" fill="${this.textColor}">${this.text}</text></svg>`);
})