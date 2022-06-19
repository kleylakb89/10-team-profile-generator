// require all packages and files
const { prompt } = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js');

// first set of questions for the manager. Requires input to continue
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

// set array of questions for engineers and interns. Starts with list choice.
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

// async init function to prompt questions
const init = async () => {
    const data1 = await prompt(questions1);
    let data2 = {};
    let team = [];
    // will run the second set of questions as long as the user continues to input engineers or interns
    do {
        data2 = await prompt(questions2);
        team.push(data2);
    } while (data2.choice !== 'I don\'t want to add any more members');
    // writes to file the generated HTML
    fs.writeFile('./output/index.html', generateHTML(generateManager(data1), generateEngineer(team), generateIntern(team)), err => err ? console.log(err) : console.log('Your HTML file is complete!'));
}

// will create a new Manager subclass and return a template literal filled with the manager's data
const generateManager = (data) => {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.officeNumber);
    return `<div class="card col-4 p-2 bg-warning m-3" style="width: 18rem;">
                    <h5 class="card-title">${manager.getName()}</h5>
                    <h6 class="card-subtitle p-3">☕ ${manager.getRole()}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${manager.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
                        <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                    </ul>
                </div>`
}

// will create Engineer subclasses and fill a template literal with that data
const generateEngineer = (arr) => {
    let engineers = '';
    // loops through the array of engineers and interns and extracts the data for the engineers
    for (member of arr) {
        if (member.choice === 'Engineer') {
            let engineer = new Engineer(member.engineerName, member.engineerId, member.engineerEmail, member.engineerGithub)
            engineers += `<div class="card col-4 p-2 bg-warning m-3" style="width: 18rem;">
                    <h5 class="card-title">${engineer.getName()}</h5>
                    <h6 class="card-subtitle p-3">👓 ${engineer.getRole()}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${engineer.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.getGithub()}">${engineer.getGithub()}</a></li>
                    </ul>
                </div>
                `
        }
    }
    return engineers;
}

// will create Intern subclasses and fill a template literal with that data
const generateIntern = (arr) => {
    let interns = '';
    // loops through the array of engineers and interns and extracts the data for the interns
    for (member of arr) {
        if(member.choice === 'Intern') {
            let intern = new Intern(member.internName, member.internId, member.internEmail, member.internSchool)
            interns += `<div class="card col-4 p-2 bg-warning m-3" style="width: 18rem;">
                    <h5 class="card-title">${intern.getName()}</h5>
                    <h6 class="card-subtitle p-3">🎓 ${intern.getRole()}</h6>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">ID: ${intern.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
                        <li class="list-group-item">School: ${intern.getSchool()}</li>
                    </ul>
                </div>
                `
        }
    }
    return interns;
}

// creates a full HTML file populated with the cards created using the previous generate functions
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

// runs the initializing function
init();