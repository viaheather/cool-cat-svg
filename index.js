const { writeFile } = require('fs').promises;
const inquirer = require('inquirer');
const { Triangle, Square, Circle } = require("./lib/shapes");

const propmtUser = () => {
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

const generateSVG = ({initials, color, shape}) => ;

const init = () => {
    userPrompt()
      .then((answers) => writeFile('logo.svg', generateSVG(answers)))
      .then(() => console.log('Successfully created your logo.'))
      .catch((err) => console.error(err));
  };
  
  init();  