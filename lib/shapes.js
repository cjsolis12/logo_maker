class Shape{
    constructor(type, color){
        this.type = type;
        this.color = color;
    }

    render(){
        throw new Error('Not implemented');
    }
}



module.exports = Shape;