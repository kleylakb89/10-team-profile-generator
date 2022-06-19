const Manager = require('../lib/manager.js');

describe('Manager', () => {
    describe('constructor', () => {
        it('should return an object with four values when called with new keyword', () => {
            const obj = new Manager();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('officeNumber' in obj).toEqual(true);
        });
        it('should set name, id, email, and office number when created', () => {
            const name = 'Sam';
            const id = '25';
            const email = 'test@testing.com';
            const officeNumber = '123';

            const obj = new Manager(name, id, email, officeNumber);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.officeNumber).toEqual(officeNumber);
        });
    });

    describe('getRole', () => {
        it('should return a new manager role', () => {
            const role = 'Manager';

            const newRole = new Manager().getRole();

            expect(role).toEqual(newRole);
        });
    });
});