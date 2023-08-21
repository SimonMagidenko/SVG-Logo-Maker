//* Recommended: place common functionality and properties shared by the three shapes in a parent 'shape' class and use inheritance to reuse the code in the child
class Shape {
    constructor(shape, text, textFill) {
        this.shape = this.shape
        this.text = text
        this.shapeFill = ""
        this.textFill = textFill
    }

    setColor() {
        this.shapeFill = shapeFill

    }
}

class Circle extends Shape {

    constructor(radius) {

        super(shape, text, textFill)
        this.radius = radius
    }


    render() {
        return `<${this.shape} cx="150" cy="100" r="${this.radius}" fill="${this.shapeFill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
        `
    }

}
class Triangle extends Shape {

    constructor(shapeFill = "green") {
        super(shape, text, textFill)
        this.markUp = `<polygon points="150,18 244,182 56,182" fill="blue" /> `
    }
    render() {
        return `<${this.shape} cx="150" cy="100" r="80" fill="${this.shapeFill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
        `
    }

}


class Square extends Shape {

    constructor() {
        super(shape, text, textFill)
    }

    render() {
        return `<${this.shape} cx="150" cy="100" r="80" fill="${this.shapeFill}" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textFill}">${this.text}</text>
        `
    }
}

module.exports = { Circle, Triangle, Square }