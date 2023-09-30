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
            message: 'What color do you want the logo to be in?',
            name: 'color',
        }, {
            type: 'list',
            message: 'What shape do you want the logo to be?',
            choices: ['Square', 'Triangle', 'Circle'],
            name: 'shape',
        }
    ])
}

const generateSVG = ({ initials, color, shape }) =>
`
<svg>
${shape} ${color} ${initials} />;
</svg>`
    ;

// If answer length is less than 3 characters, then logo.svg will be written from the user answers
const init = () => {
    promptUser()
        .then((answers) => {
            if (answers.initials.length > 3) {
                console.log("Your initials must be 2-3 characters max.");
            } else {
                writeFile('logo.svg', generateSVG(answers))
            }
        })
        .catch((err) => console.error(err));
}

init();  