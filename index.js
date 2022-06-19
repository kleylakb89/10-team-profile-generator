// GIVEN a command-line application that accepts user input
// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input
// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address
// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab
// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated

// write question prompts
// use template to build template literal

const { prompt } = require('inquirer');
const fs = require('fs');

const questions1 = [
    {
        type: 'input',
        message: 'What is your manager\'s name?',
        name: 'managerName',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What is your manager\'s id number?',
        name: 'managerId',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What is your manager\'s email?',
        name: 'managerEmail',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
    {
        type: 'input',
        message: 'What is your manager\'s officer number?',
        name: 'officeNumber',
        validate: answer => (answer.length === 0) ? 'Please input something' : true
    },
]

const questions2 = [
    {
        type: 'list',
        message: 'What team member would you like to add?',
        choices: ['Engineer', 'Intern', 'I don\'t want to add any more members'],
        name: 'choice'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s name?',
        name: 'engineerName',
        validate: answer => (answer.length === 0) ? 'Please input something' : true,
        when: answers => answers.choice === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s id number?',
        name: 'engineerId',
        validate: answer => (answer.length === 0) ? 'Please input something' : true,
        when: answers => answers.choice === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s email?',
        name: 'engineerEmail',
        validate: answer => (answer.length === 0) ? 'Please input something' : true,
        when: answers => answers.choice === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is your engineer\'s GitHub username?',
        name: 'engineerGithub',
        validate: answer => (answer.length === 0) ? 'Please input something' : true,
        when: answers => answers.choice === 'Engineer'
    },
    {
        type: 'input',
        message: 'What is your intern\'s name?',
        name: 'internName',
        validate: answer => (answer.length === 0) ? 'Please input something' : true,
        when: answers => answers.choice === 'Intern'
    },
    {
        type: 'input',
        message: 'What is your intern\'s id number?',
        name: 'internId',
        validate: answer => (answer.length === 0) ? 'Please input something' : true,
        when: answers => answers.choice === 'Intern'
    },
    {
        type: 'input',
        message: 'What is your intern\'s email?',
        name: 'internEmail',
        validate: answer => (answer.length === 0) ? 'Please input something' : true,
        when: answers => answers.choice === 'Intern'
    },
    {
        type: 'input',
        message: 'What is your intern\'s school?',
        name: 'internSchool',
        validate: answer => (answer.length === 0) ? 'Please input something' : true,
        when: answers => answers.choice === 'Intern'
    }
]

const init = async () => {
    const data1 = await prompt(questions1);
    console.log(data1);
    let data2 = {};
    do {
        data2 = await prompt(questions2);
    } while (data2.choice !== 'I don\'t want to add any more members');
    console.log(data2);
}

init();