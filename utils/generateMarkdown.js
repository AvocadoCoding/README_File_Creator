// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  # First project
  

  ## Description

  This is my first prjoect

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

  a bit of javascript

  
    
  ## Contributing

  Js, html and css

  ## Tests

  To run tests, run the following command:

  \`\`\`
  npm run test
  \`\`\`

  ## Questions

  If you have any questions about the repo, open an issue or contact me directly at dav@gmail.com. You can find more of my work at [dav](https://github.com/dav/).
`;
}

module.exports = generateMarkdown;
