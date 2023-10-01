const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes");

const promptUser = (answers) => {
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
            type: 'list',
            message: 'What shape do you want the logo to be?',
            choices: ['Square', 'Triangle', 'Circle'],
            name: 'shape',
        }
    ])
}

const generateSVG = ({ initials,color,shape }) => 
    `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
    ${this.shape}`

// If answer length is less than 3 characters, then logo.svg will be written from the user answers
const init = () => {
    promptUser()
        .then((answers) => {
            if (answers.initials.length > 3 || answers.initials.length === 0) {
                console.log("Your initials must be 2-3 characters max.");
            } else if (answers.color.length == 0 ){
                console.log("Empty inputs.");
            } else {
                writeFile('logo.svg', generateSVG(answers));
                console.log('Your logo is generated.');
            }
        })
        .catch((err) => console.error(err));
}

init();  