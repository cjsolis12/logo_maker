const inquirer = require('inquirer');
const fs = require('fs')
const {Circle, Triangle, Square} = require("./lib/shapes");

inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter 3 characters for your logo:',
        },
        {
            type: 'input',
            name: 'text color',
            message: 'Please enter your text color:',
        },
        {
            type: "list",
            name: "shape",
            message: "Please select the type of shape for your logo:",
            choices: ["circle", "triangle", "square"],
          },
          {
            type: 'input',
            name: 'shape color',
            message: 'Please enter shape color',
        },
    ])
    .then((answers) => {
        const svgContent = generateShapes(answers);

        fs.writeFile('logo.svg', svgContent, err =>{
            if (err){
                console.log(err);
                return
            }
            console.log('Logo saved as a logo.svg');
        })
    })