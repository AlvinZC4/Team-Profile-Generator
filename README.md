# Team-Profile-Generator

The Team Profile Generator is an application that allows the user to quickly create a .html page that displays information for all of the employees on a team. The information is based on user input.

  ![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)

  ***

  ## Table of Contents:

  1. [How to Install Team Profile Generator](#Installation)
  2. [Using Team Profile Generator](#How%20To%20Use%20This%20Application)
  3. [Testing Team Profile Generator](#Test%20Code)
  4. [Contribution Guidlines](#Contribution%20Guidelines)
  5. [Ask Us Questions](#Ask%20Questions)
  6. [Licenses](#License)

  ***

  ## Installation

  Clone the Team Profile Generator application from the Team-Profile-Generator repository in the author's GitHub profile (given below).  Once the application has been cloned onto your local machine then navigate the CLI to the root folder containing the Team Profile Generator application. Next run the "npm i" command in the CLI to install all the dependicies necessary to run the Team Profile Generator, this will finish the installation.

  ## How to Use This Application

  This application will create a .html document that contains information about each employee on a team.  The number of employees and all of the information about each employee are entered by the user via prompts in the Command Line Interface. Information includes the employee's role, name, id number, e-mail address, office number (for the manager only), github username (for engineer's only), and school name (for interns only).  The application is setup to only allow one manager per team but will allow any number of engineers and inters to be on a team.  
  
  There is validation built into the prompts for employee information to prevent invalid data being passed into the Team Profile Generator.  Employee names cannot include any numbers or special characters but will allow for spaces (this gives the user the option to enter only a first name, a first and last name, or a whole name). the e-mail address prompt will only allow a local-part followed by the @ character followed by the domain.  The employee id number and manager's office number will only allow integer values.  
  
  Once the user has finished entering information for the last employee the "Finished creating team!" option should be selected on the "Select the role of the next team member" prompt; this will end the prompts and create the .html with all of the team members and their information.

  ## Test Code

  Test code was created and used in creating the classes used for this application.  To view the test type "npm test" in the CLI with the CLI in the root folder in of the Team Profile Generator application.

  ## Contribution Guidelines

  Please check your code for errors before making a merge request.

  ## Ask Questions

  Visit my GitHub Page: [My GitHub Profile Page](https://github.com/AlvinZC4)
 -OR-
 Drop me an e-mail at: alvinzcoxiv@gmail.com

  ## License

  This applicaton is covered under the Public Domain (Unlicense)