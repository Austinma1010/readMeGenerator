// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
let badge;
if (license == 'Apache License 2.0') {
  return badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
}
else if (license == 'MIT License') {
  return badge = 'https://img.shields.io/badge/License-MIT-yellow.svg';
}
else if (license == 'The Unlicense') {
  return badge = 'https://img.shields.io/badge/license-Unlicense-blue.svg';
}
else {
  return;
}

 }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let link;
if (license == 'Apache License 2.0') {
  return link = 'https://opensource.org/license/apache-2-0/';
}
else if (license == 'MIT License') {
  return link = 'https://opensource.org/licenses/MIT';
}
else if (license == 'The Unlicense') {
  return link = 'http://unlicense.org/';
}
else {
  return;
}

}



// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usageInfo, license, guidLines, testInstructions, gitUrl} = data;
  
  if (license == 'None') {
    return `# ${title}

  ## Table of Contents
  #### [Go to Description](#description)
  #### [Go to Installation](#installation)
  #### [Go to Usage](#usage)
  #### [Go to License](#license)
  #### [Go to Contributing](#contributing)
  #### [Go to Tests](#tests)
  #### [Go to Questions](#questions)
  
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usageInfo}
  
  ## License
  This project doesn't have a license

  ## Contributing
  ${guidLines}
  
  ## Tests
  ${testInstructions}
  
  ## Questions
  [My Github page](${gitUrl})

`;

  } else {

  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  return `# ${title}

  ## Table of Contents
  #### [Go to Description](#description)
  #### [Go to Installation](#installation)
  #### [Go to Usage](#usage)
  #### [Go to License](#license)
  #### [Go to Contributing](#contributing)
  #### [Go to Tests](#tests)
  #### [Go to Questions](#questions)
  
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usageInfo}
  
  ## License
  
  #### ![license badge](${badge})
  [link to license](${link})

  ## Contributing
  ${guidLines}
  
  ## Tests
  ${testInstructions}
  
  ## Questions
  [My Github page](${gitUrl})

`; }
}

module.exports = generateMarkdown;
