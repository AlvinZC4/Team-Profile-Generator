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
            message: "Enter the name of the manager.",
            validate: function(value) {
                let pass = value.match(
                    /^[a-zA-Z_]+([ ]?[a-zA-Z])*$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid name"
            }
            },
            {
            type: "input",
            name: "id",
            message: "Enter the employee ID number of the manager",
            validate: function(value) {
                let pass = value.match(
                    /^\d+$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid number"
            }
            },
            {
            type: "input",
            name: "email",
            message: "Enter the manager's e-mail address",
            validate: function(value) {
                let pass = value.match(
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid e-mail address"
            }
            },
            {
            type: "input",
            name: "officeNumber",
            message: "Enter the office number of the manager",
            validate: function(value) {
                let pass = value.match(
                    /^\d+$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid number"
            }
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
            message: "Enter the name of the engineer.",
            validate: function(value) {
                let pass = value.match(
                    /^[a-zA-Z_]+([ ]?[a-zA-Z])*$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid name"
            }
            },
            {
            type: "input",
            name: "id",
            message: "Enter the employee ID number of the engineer",
            validate: function(value) {
                let pass = value.match(
                    /^\d+$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid number"
            }
            },
            {
            type: "input",
            name: "email",
            message: "Enter the engineer's e-mail address",
            validate: function(value) {
                let pass = value.match(
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid e-mail address"
            }
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
            message: "Enter the name of the intern.",
            validate: function(value) {
                let pass = value.match(
                    /^[a-zA-Z_]+([ ]?[a-zA-Z])*$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid name"
            }
            },
            {
            type: "input",
            name: "id",
            message: "Enter the employee ID number of the intern",
            validate: function(value) {
                let pass = value.match(
                    /^\d+$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid number"
            }
            },
            {
            type: "input",
            name: "email",
            message: "Enter the intern's e-mail address",
            validate: function(value) {
                let pass = value.match(
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/
                )
                if (pass) {
                    return true
                }
                return "Please enter a valid e-mail address"
            }
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

    const createHTML = render(employees)

    fs.writeFile(outputPath, createHTML, function(err) {
        if (err) {
            return console.log(err)
        }
    })

    console.log("Team successfully assembled!")

    return
}

initApp()