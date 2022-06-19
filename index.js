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
    let data2 = {};
    let team = [];
    do {
        data2 = await prompt(questions2);
        team.push(data2);
    } while (data2.choice !== 'I don\'t want to add any more members');
    console.log(generateHTML(generateManager(data1), generateEngineer(team), generateIntern(team)));
}

const generateManager = (data) => {
    return `<div class="card col-4 p-2 bg-warning m-3" style="width: 18rem;">
                    <h5 class="card-title">${data.managerName}</h5>
                    <h6 class="card-subtitle p-3">☕ Manager</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${data.managerId}</li>
                        <li class="list-group-item">Email: <a href="mailto:${data.managerEmail}">${data.managerEmail}</a></li>
                        <li class="list-group-item">Office Number: ${data.officeNumber}</li>
                    </ul>
                </div>`
}

const generateEngineer = (arr) => {
    let engineers = '';
    for (member of arr) {
        if (member.choice === 'Engineer') {
            engineers += `<div class="card col-4 p-2 bg-warning m-3" style="width: 18rem;">
                    <h5 class="card-title">${member.engineerName}</h5>
                    <h6 class="card-subtitle p-3">👓 Engineer</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${member.engineerId}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member.engineerEmail}">${member.engineerEmail}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${member.engineerGithub}">${member.engineerGithub}</a></li>
                    </ul>
                </div>
                `
        }
    }
    return engineers;
}

const generateIntern = (arr) => {
    let interns = '';
    for (member of arr) {
        if(member.choice === 'Intern') {
            interns += `<div class="card col-4 p-2 bg-warning m-3" style="width: 18rem;">
                    <h5 class="card-title">${member.internName}</h5>
                    <h6 class="card-subtitle p-3">🎓 Intern</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${member.internId}</li>
                        <li class="list-group-item">Email: <a href="mailto:${member.internEmail}">${member.internEmail}</a></li>
                        <li class="list-group-item">School: ${member.internSchool}</li>
                    </ul>
                </div>
                `
        }
    }
    return interns;
}

const generateHTML = (func1, func2, func3) => {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    </head>
    
    <body>
        <header class="row">
            <h1 class="col-12 bg-success text-center p-3 text-light">My Team</h1>
        </header>
        <main class="row">
            <section class="col-12 d-flex justify-content-evenly p-4 m-3 flex-wrap">
                ${func1}
    
                ${func2}
    
                ${func3}
            </section>
        </main>
    </body>
    
    </html>`
}

init();