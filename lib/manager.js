const Employee = require('./employee.js');

// subclass Manager based off Employee. Includes office number and new role name
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

module.exports = Manager;