// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # First project
  

  ## Description

  ${data.description}

  ## Table of Contents 

  * [Installation](#installation)

  * [Usage](#usage)
  
  * [Contributing](#contributing)

  * [Tests](#tests)

  * [Questions](#questions)

  ## Installation

  To install necessary dependencies, run the following command:

  \`\`\`
  npm install
  \`\`\`

  ## Usage

  ${data.usage}
    
  ## Contributing

  ${data.contribution}

  ## Tests

  To run tests, run the following command:

  \`\`\`
  npm run test
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at ${data.eMail}. 
  You can find more of my work at [GitHub](${data.GitHubURL}).
`;
}

module.exports = generateMarkdown;
