const fs = require("fs")
let SVG = require("./lib/svg")


let example = new SVG("triangle", "AND", "yellow", "black");
fs.writeFile("shape.svg", example.markUp, function (err) {
    if (err)
        console.log(err)

})