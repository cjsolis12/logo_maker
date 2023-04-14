const inquirer = require('inquirer');
const fs = require('fs')
const generateSvg = require("./lib/shapes");

//Test for valid color chosen by user
const colorValidator = (value) => {
const isValid = /^([a-z]+|\#[0-9A-Fa-f]{6}|\#[0-9A-Fa-f]{3})$/i.test(value);
return isValid ? true : 'Please enter a valid color name or hexadecimal code';
}

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
            validate: colorValidator,
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
            validate: colorValidator,
        },
    ])
    .then((answers) => {
        const svgContent = generateSvg(answers);

        fs.writeFile('logo.svg', svgContent, err =>{
            err ? console.error(err) : console.log('Generated logo.svg')
        })
    })