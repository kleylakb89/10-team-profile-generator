const Employee = require('../lib/employee.js');

// tests for the employee class
describe('Employee', () => {
    describe('constructor', () => {
        // object Employee should have three key-value pairs
        it('should return an object with three values when called with new keyword', () => {
            const obj = new Employee();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
        // object Employee should have a name, id, and email
        it('should set name, id, and email when created', () => {
            const name = 'Sam';
            const id = '25';
            const email = 'test@testing.com';

            const obj = new Employee(name, id, email);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
        });
    });

    // getName function should return the employee's name
    describe('getName', () => {
        it('should return a new employee name', () => {
            const name = 'Sam';

            const newName = new Employee(name, '25', 'test@testing.com').getName();

            expect(name).toEqual(newName);
        });
    });

    // getId function should return the employee's id
    describe('getId', () => {
        it('should return a new employee id', () => {
            const id = '25';

            const newId = new Employee('Sam', id, 'test@testing.com').getId();

            expect(id).toEqual(newId);
        });
    });

    // getEmail function should return the employee's email
    describe('getEmail', () => {
        it('should return a new employee email', () => {
            const email = 'test@testing.com';

            const newEmail = new Employee('Sam', '25', email).getEmail();

            expect(email).toEqual(newEmail);
        });
    });

    // getRole function should return the employee's role
    describe('getRole', () => {
        it('should return a new employee role', () => {
            const role = 'Employee';

            const newRole = new Employee().getRole();

            expect(role).toEqual(newRole);
        });
    });
});