// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Whats the title?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please enter your installation instructions',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Please enter any usage information',
        name: 'usageInfo',
    },
    {
        type: 'input',
        message: 'Please enter contribution guidlines',
        name: 'guidLines',
    },
    {
        type: 'input',
        message: 'Please enter test instructions',
        name: 'testInstructions',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const {title, description, installation, usageInfo, license, guidLines, testInstructions} = data;
    let readMeText = 
`# ${title}

## Table of Contents
#### Description
#### Installation
#### Usage
#### License
#### Contributing
#### Tests
#### Questions
    
## Description
${description}
## Installation
 ${installation}
## Usage
${usageInfo}
## License
${license}
## Contributing
${guidLines}
## Tests
${testInstructions}
## Questions`;

    fs.writeFile(title + 'ReadMe.md', readMeText, (err) =>
    err ? console.error(err) : console.log('Success!')
);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        writeToFile(response.title, response);
    });
}

// Function call to initialize app
init();
