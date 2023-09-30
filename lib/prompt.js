const inquirer = require('inquirer');

function userPrompt() {
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
            choices: ['Square', 'Triangle', 'Circle'],
            name: 'shape',
        }
    ])
        .then((answers) => {
            const svgContent = `${answers.initials.toLowerCase().split(' ').join()}.json`;

            fs.writeFile('logo.txt', (err) =>
                err ? console.log(err) : console.log('SVG file created.')
            );
        });
}

userPrompt();