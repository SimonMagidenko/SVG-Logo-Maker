const ShapeSelected = require("../lib/shapes.js")

function setShape(response) {

    if (response === Circle) {
        let userShape = new Circle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response === Square) {
        let userShape = new Square(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
    if (response === Triangle) {
        let userShape = Triangle(response.shapeColor, response.text, response.textColor)
        return userShape.render()
    }
}

module.exports = setShape;