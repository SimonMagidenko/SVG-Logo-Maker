const { Circle, Square, Triangle } = require("../lib/shapes.js");

function setShape(response) {
    console.log(response);
    let userShape;
    if (response.shape === 'Circle') {
        let userShape = new Circle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response.shape === 'Square') {
        let userShape = new Square(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response.shape === 'Triangle') {
        let userShape = Triangle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    } else {
        throw new Error('Invalid Shape Type')
    }

}

module.exports = setShape;