const inquirer = require('inquirer');
const fs = require("fs");
const questions = require('./lib/questions.js');
const setShape = require("./lib/selectShape.js");


function createLogo(response) {
    const svg = setShape(response);
    fs.writeFile("./examples/generatedLogo.svg", svg, () => console.log('Generated Logo.svg')
    )
};

function init() {

    inquirer
        .prompt(questions)
        .then((response) => {
            createLogo(response)
        })
        .catch(err => {
            console.log(err);
        });
}


init()