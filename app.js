const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name"
        },
        {
            type: "list",
            name: "position",
            choices: ['engineer', 'intern', 'manager'],
            message: "Choose your position"           
        },
        {
            type: "input",
            name: "email",
            message: "Please provide your email"
        },
        {
            type: "input",
            name: "github",
            message: "Please provide your GitHub account"
        }
    ]);

}


async function main() {
  try {
    const answers = await promptUser();
    console.log(answers);
  }
  catch(err) {
    console.log(err);
  }
}

main();