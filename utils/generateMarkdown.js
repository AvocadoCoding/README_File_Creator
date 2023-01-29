// function to generate markdown for README
function generateMarkdown(data) {
  
  return `
  ![License badge image](https://img.shields.io/badge/License-${data.stack}-black)

  # ${data.title}


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
  ${data.installation}
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
  You can find more of my work at my [GitHub](${data.GitHubURL}) page.
`;
}

// export the generateMarkdown function from this file
module.exports = generateMarkdown;
