// fs is a Node standard library package for reading and writing files
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'Please describe the project',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Please enter installation instructions',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Please enter usage information',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Please enter contribution guidelines',
        name: 'contribution',
      },
      {
        type: 'checkbox',
        message: 'What languages do you know?',
        name: 'stack',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
      },
      {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'GitHubURL',
      },
      {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'eMail',
      }
];

// function to write README file
function writeToFile(addName, addData) {
    fs.writeFile(addName, addData, (err) => 
    err ? console.log(err) : console.log('Success!')
  )
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        questions()
    ])
    .then((data) => {
  
    const readmeName = `README.md`

    const finalString = generateMarkdown(data);

    writeToFile(readmeName, finalString)
    })
}

// function call to initialize program
init()

