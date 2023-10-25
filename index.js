// TODO: Include packages needed for this application
const FS = require('fs');
const INQUIRER = require('inquirer');
const {renderLicenseBadge} = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
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

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
