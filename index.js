const inquirer = require('inquirer');
const fs = require("fs");
const questions = require('./lib/questions.js');
const selectShape = require('./lib/selectShape.js');
const LogoFileName = require("./examples/generatedLogo.svg");


function createLogo(response) {
    const svg = selectShape(response);
    fs.writeFile(LogoFileName, svg, () => console.log('Generated Logo.svg')
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