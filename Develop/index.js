// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const { massage } = require(`statuses`)
const axios = require("axios");
const markdown = require("./utils/generateMarkdown");
const { Console } = require("console");
// TODO: Create an array of questions for user input
inquirer.prompt(
    [
        {   
            type: "input",
            massage: "What's the project title?",
            name: "title",
            validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
        },
        {   
            type: "input",
            message: "How do you install your app?",
            name: "installation",
            validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
        },
        {   
            type: "input",
            message: "How do you use your app?",
            name: "instructions",
            validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
        },
        {   
            type: "input",
            message: "Any credits?",
            name: "credits",
            validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
        },
        {   
            type: "list",
            message: "What license did you use?",
            name: "license",
            choices: ["The MIT Licence", "The GPL License", "Apache License", "GNU license", "N/A"],
            validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
        },
        {   
            type: "input",
            message: "Github username:",
            name: "git",
            validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
        },
        {   
            type: "input",
            message: "What is the user github email address?",
            name: "email",
            validate: (value)=>{ if(value){return true} else {return `I need a value to continue`}}
        },
    ]
).then(({
    title,
    installation,
    instructions,
    credits,
    license,
    git,
    email,
})=>{
const template = `# ${title}

* [installation](#installation)
* [usage](#usage)
* [licenses](#licenses)
* [credits](#credits)
# installation:
${installation}
## usage
${usage}
### instructions
${instructions}
## credits
${credits}
##license
${license}

#Contact
* github :${git}
* email :${email}`;

createnewfile(title,template);
}
);

function createnewfile(filename,data){
fs.writeFile(`./${filename.tolowercase().split(``).join('')}.md`,data,(eer)=>{
    if(eer){
        console.log(eer)
    }
    console.log(`your README has been generated.`);
})
}