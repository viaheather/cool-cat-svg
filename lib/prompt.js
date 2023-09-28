const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
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
    name: 'shape',
}
])