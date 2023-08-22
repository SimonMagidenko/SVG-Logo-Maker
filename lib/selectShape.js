const { Circle, Square, Triangle } = require("../lib/shapes.js");

function setShape(response) {
    let userShape;
    if (response.shapeType === 'Circle') {
        let userShape = new Circle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response.shapeType === 'Square') {
        let userShape = new Square(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response.shapeType === 'Triangle') {
        let userShape = Triangle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    } else {
        throw new Error('Invalid Shape Type')
    }
    return userShape.render()
}

module.exports = setShape;