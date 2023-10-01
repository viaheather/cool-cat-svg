const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes");

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            message: 'What do you want the initials to say? (2-3 characters maximum)',
            name: 'initials',
        }, {
            type: 'input',
            message: 'What color do you want the logo to be in? Can be color keyword or hex color.',
            name: 'color',
        }, {
            type:'input',
            message: 'What color do you want the font color to be? Can be color keyword or hex color.',
            name:'fontcolor'
        }, {
            type: 'list',
            message: 'What shape do you want the logo to be?',
            choices: ['Square', 'Triangle', 'Circle'],
            name: 'shape',
        }
    ])
}

const generateSVG = ({ initials, fontcolor, color, shape }) => {
    let shapeObj;

    if (shape === "Square") {
        shapeObj = new Square(initials, color, fontcolor);
    } else if (shape === "Triangle") {
        shapeObj = new Triangle(initials, color, fontcolor);
    } else if (shape === "Circle") {
        shapeObj = new Circle(initials, color, fontcolor);
    }
    if (shapeObj) {
        return `<svg version="1.1" width="500" height="500" xmlns="http://www.w3.org/2000/svg">
            ${shapeObj.render()}`;
    } else {
        throw new Error("Invalid shape selected");
    }
}

// If answer length is less than 3 characters, then logo.svg will be written from the user answers
const init = () => {
    promptUser()
        .then((answers) => {
            if (answers.initials.length > 3 || answers.initials.length === 0) {
                console.log("Your initials must be 2-3 characters max.");
            } else if (answers.color.length == 0 || answers.fontcolor.length === 0 ) {
                console.log("Empty color input.");
            } else {
                const svg = generateSVG(answers);
                return writeFile('logo.svg', svg);
            }
        })
        .then(() => {
            console.log('Your logo is generated.');
        })
        .catch((err) => console.error(err));
}

init();  