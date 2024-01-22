// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
let badge;
if (license == 'Apache License 2.0')  {
  badge = 'https://img.shields.io/badge/License-Apache_2.0-blue.svg';
  return badge;
} }
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
let link;
if (license == 'Apache License 2.0') {
  link = 'https://opensource.org/license/apache-2-0/';
  return link;
}
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {title, description, installation, usageInfo, license, guidLines, testInstructions, gitUrl} = data;
  let badge = renderLicenseBadge(license);
  let link = renderLicenseLink(license);
  return `# ${title}

  ## Table of Contents
  #### [Go to Description](##description)
  #### [Go to Installation](##installation)
  #### [Go to Usage](##usage)
  #### [Go to License](##license)
  #### [Go to Contributing](##contributing)
  #### [Go to Tests](##tests)
  #### [Go to Questions](##questions)
  
  
  ## Description
  ${description}
  
  ## Installation
  ${installation}
  
  ## Usage
  ${usageInfo}
  
  ## License
  I have the ${license} license
  #### ![license badge](${badge})
  [link to license](${link})

  ## Contributing
  ${guidLines}
  
  ## Tests
  ${testInstructions}
  
  ## Questions
  [My Github page](${gitUrl})

`;
}

module.exports = generateMarkdown;
