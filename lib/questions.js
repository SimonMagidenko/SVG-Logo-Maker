const colorOptions = require("../lib/colorOptions.js")

const questions = [

    {
        name: 'shape',
        message: 'What shape would you like your logo to be? (Please select from the list below)',
        type: 'list',
        choices: ['Circle', 'Square', 'Triangle'],
    },

    {
        name: 'shapeColorFormat',
        message: "Choose a color format for your logo's color:",
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },

    {
        type: "input",
        name: "shapeColor",
        message: "Please enter the color you would like your logo to be.",
        when: (answers) => {
            if (answers.shapeColorFormat === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            if (colorOptions.some(keyword => answerLowercase.includes(keyword))) {
                return true;
            } else {
                console.log("\n Please enter a valid color keyword");
                return false
            }
        }
    },

    {
        type: "input",
        name: "shapeColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if (answers.shapeColorFormat === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (!answer.match(hexRegEx)) {
                console.log("\nPlease enter a valid hexadecimal");
                return false;
            }
            return true;
        }
    },

    {
        name: 'text',
        message: 'What would you like the text within your logo to be? (Three character maximum)',
        type: 'input',
        validate: (answer) => {
            if (answer.length > 3) {
                return console.log("\n Text must be three characters or less! Please try again");
            }
            return true;
        }
    },

    {
        name: 'textColorFormat',
        message: "Choose a color format for your logo's text color:",
        type: 'list',
        choices: ['color keyword', 'hexadecimal']
    },

    {
        type: "input",
        name: "textColor",
        message: "Please enter the color you would like your logo's text to be.",
        when: (answers) => {
            if (answers.textColorFormat === 'color keyword') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            let answerLowercase = answer.toLowerCase();
            if (colorOptions.some(keyword => answerLowercase.includes(keyword))) {
                return true;
            } else {
                console.log("\n Please enter a valid color keyword");
                return false
            }
        }
    },

    {
        type: "input",
        name: "textColor",
        message: "Enter the shape hexadecimal number (#CCCCCC)",
        when: (answers) => {
            if (answers.textColorFormat === 'hexadecimal') {
                return true;
            }
            return false;
        },
        validate: (answer) => {
            const hexRegEx = /^#[A-Fa-f0-9]{6}$/;
            if (!answer.match(hexRegEx)) {
                console.log("\nPlease enter a valid hexadecimal");
                return false;
            }
            return true;
        }
    },
];

module.exports = questions;