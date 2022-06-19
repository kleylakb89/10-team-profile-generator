const Employee = require('../lib/employee.js');

describe('Employee', () => {
    describe('constructor', () => {
        it('should return an object with three values when called with new keyword', () => {
            const obj = new Employee();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
        });
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

    describe('getName', () => {
        it('should return a new employee name', () => {
            const name = 'Sam';

            const newName = new Employee(name, '25', 'test@testing.com').getName();

            expect(name).toEqual(newName);
        });
    });

    describe('getId', () => {
        it('should return a new employee id', () => {
            const id = '25';

            const newId = new Employee('Sam', id, 'test@testing.com').getId();

            expect(id).toEqual(newId);
        });
    });

    describe('getEmail', () => {
        it('should return a new employee email', () => {
            const email = 'test@testing.com';

            const newEmail = new Employee('Sam', '25', email).getEmail();

            expect(email).toEqual(newEmail);
        });
    });

    describe('getRole', () => {
        it('should return a new employee role', () => {
            const role = 'Employee';

            const newRole = new Employee().getRole();

            expect(role).toEqual(newRole);
        });
    });
});