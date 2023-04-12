const inquirer = require('inquirer');
const fs = require('fs')
const generateSvg = require("./lib/shapes");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 characters for your logo:',
            validate: function(value){
                return value.length <= 3;
            }
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter the text color:',
        },
        {
            type: "list",
            name: "shape",
            message: "Please select the type of shape for your logo:",
            choices: ["circle", "triangle", "square"],
          },
          {
            type: 'input',
            name: 'shapeColor',
            message: 'Please enter the shape color:',
        },
    ])
    .then((answers) => {
        const svgContent = generateSvg(answers);

        fs.writeFile('logo.svg', svgContent, err =>{
            err ? console.error(err) : console.log('Generated logo.svg')
        })
    })