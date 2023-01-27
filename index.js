// fs is a Node standard library package for reading and writing files
const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name',
      },
      {
        type: 'input',
        message: 'What is your location?',
        name: 'location',
      },
      {
        type: 'input',
        message: 'Write a short bio aboout yourself here',
        name: 'bio',
      },
      {
        type: 'input',
        message: 'What is your LinkedIn URL?',
        name: 'LinkedInURL',
      },
      {
        type: 'input',
        message: 'What is your GitHub URL?',
        name: 'GitHubURL',
      }
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {
    inquirer
    .prompt([
        questions();
    ])
    .then((data) => {
  
    const readmeName = `README.md`

    const finalString = generateMarkdown(data);

    writeToFile(readmeName, finalString)

    }
}

// function call to initialize program
init();
