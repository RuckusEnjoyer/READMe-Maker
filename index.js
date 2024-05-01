// Packages for the application
const FS = require('fs');
const INQUIRER = require('inquirer');
const {renderLicenseBadge, renderSchoolBadge, renderHostBadge} = require('./utils/generateMarkdown');

//function to write the README file
function writeToFile({fileName, license, school, host, desc, install, usage, contribute, test, link, ghub,}) {
    return `
# ${fileName}
${renderLicenseBadge(license)} ${renderSchoolBadge(school)} ${renderHostBadge(host)} ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Description

${desc}
    
## Table of Contents

- [Installation](#Installation)
- [Usage](#Usage)
- [License](#License)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [Questions](#Questions)
    
## Installation

${install}

## Usage
    
${usage}

## License

This project is covered under the ${license} license. For more information, visit the link below.

[License Link](./LICENSE)

## Contributing

${contribute}
    
## Tests

${test}

## Link

Here is the link to the deployed version of this app:
${link}
    
## Questions

Have any questions? This is how to contact me:

Github: https://github.com/${ghub}
    `
}

//function to initialize app
function init() {
    INQUIRER.prompt([
        {
            type: 'input',
            message: 'What is your file name?',
            name: 'fileName'
        },
        {
            type: 'input',
            message: 'What will your description be?',
            name: 'desc'
        },
        {
            type: 'input',
            message: 'how can the user install this application?',
            name: 'install',
        },
        {
            type: 'input',
            message: 'How will the user use this application?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'How can a user contribute to this application?',
            name: 'contribute'
        },
        {
            type: 'input',
            message: 'How can a user test this application?',
            name: 'test'
        },
        {
            type: 'list',
            message: 'What license should this application use?',
            choices: ['MIT', 'GPL', 'Apache', 'BSD', 'MPL', 'No License'],
            name: 'license',
        },
        {
            type: 'input',
            message: 'What is the link to the deployed app?',
            name: 'link'
        },
        {
            type: 'input',
            message: 'What is your Github Username?',
            name: 'ghub'
        },
        {
            type: 'confirm',
            message: 'Is This an EDX bootcamp assignment?',
            name: 'school'
        },
        {
            type: 'list',
            message: 'Where is this site hosted?',
            choices: ['GitHub Pages', 'Heroku', 'NetLify'],
            name: 'host'
        },
    ])
    .then((answers) => {
        const pageContent = writeToFile(answers)
        
        FS.writeFile('./output/README.md', pageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!'))
    })
}


// Function call to initialize app
init();
