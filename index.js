// Packages for the application
const FS = require('fs');
const INQUIRER = require('inquirer');
const {renderLicenseBadge} = require('./utils/generateMarkdown');

//function to write the README file
function writeToFile({fileName, license, desc, install, usage, contribute, test, ghub, email}) {
    return `
# ${fileName}
${renderLicenseBadge(license)}
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
    
## Questions

Have any questions? This is how to contact me:

Github: https://github.com/${ghub}
Email: ${email}
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
            message: 'What is your Github Username?',
            name: 'ghub'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ])
    .then((answers) => {
        const pageContent = writeToFile(answers)
        
        FS.writeFile('README.md', pageContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!'))
    })
}


// Function call to initialize app
init();
