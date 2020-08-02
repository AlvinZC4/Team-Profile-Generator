const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const teamMembers = []

const initApp = () =>
{

    console.log("Assemble your team. Lets start with the manager")
     inquirer
        .prompt([
            {
            type: "input",
            name: "name",
            message: "Enter the name of the manager."
            },
            {
            type: "input",
            name: "id",
            message: "Enter the employee ID number of the manager"
            },
            {
            type: "input",
            name: "email",
            message: "Enter the manager's e-mail address"
            },
            {
            type: "input",
            name: "officeNumber",
            message: "Enter the office number of the manager"
            },
            {
            type: "list",
            name: "next",
            message: "Select the role of the next team member",
            choices: [
                "Engineer",
                "Intern"
                ]
            }
    ]).then(function(data) {
        const newManager = new Manager(data.name, data.id, data.email, data.officeNumber)

        teamMembers.push(newManager)
        
        if (data.next === "Engineer") {
            createEngineer()
        }
        else {
            createIntern()
        }
    })
}
const createEngineer = () => {
    inquirer
        .prompt([
            {
            type: "input",
            name: "name",
            message: "Enter the name of the engineer."
            },
            {
            type: "input",
            name: "id",
            message: "Enter the employee ID number of the engineer"
            },
            {
            type: "input",
            name: "email",
            message: "Enter the engineer's e-mail address"
            },
            {
            type: "input",
            name: "github",
            message: "Enter the engineer's GitHub username"
            },
            {
            type: "list",
            name: "next",
            message: "Select the role of the next team member",
            choices: [
                "Engineer",
                "Intern",
                "Finished creating team!"
                ]
            }
    ]).then(function(data) {
        const newEngineer = new Engineer(data.name, data.id, data.email, data.github)

        teamMembers.push(newEngineer)
        
        if (data.next === "Engineer") {
            createEngineer()
        }
        else if (data.next === "Intern") {
            createIntern()
        }
        else {
            assembleTeam(teamMembers)
        }
    })
}
const createIntern = () => {
    inquirer
        .prompt([
            {
            type: "input",
            name: "name",
            message: "Enter the name of the intern."
            },
            {
            type: "input",
            name: "id",
            message: "Enter the employee ID number of the intern"
            },
            {
            type: "input",
            name: "email",
            message: "Enter the intern's e-mail address"
            },
            {
            type: "input",
            name: "school",
            message: "Enter the name of the school the intern is currently attending"
            },
            {
            type: "list",
            name: "next",
            message: "Select the role of the next team member",
            choices: [
                "Engineer",
                "Intern",
                "Finished creating team!"
                ]
            }
    ]).then(function(data) {
        const newIntern = new Intern(data.name, data.id, data.email, data.school)

        teamMembers.push(newIntern)
        
        if (data.next === "Engineer") {
            createEngineer()
        }
        else if (data.next === "Intern") {
            createIntern()
        }
        else {
            assembleTeam(teamMembers)
        }
    })
}
const assembleTeam = employees => {
    console.log(employees)

    return
}


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```


initApp()