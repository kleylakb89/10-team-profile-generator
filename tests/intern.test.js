const Intern = require('../lib/intern.js');

// tests for the Intern subclass
describe('Intern', () => {
    describe('constructor', () => {
        // object Intern should have four key-value pairs
        it('should return an object with four values when called with new keyword', () => {
            const obj = new Intern();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('school' in obj).toEqual(true);
        });
        // object Intern should have a name, id, email, and school name
        it('should set name, id, email, and school when created', () => {
            const name = 'Sam';
            const id = '25';
            const email = 'test@testing.com';
            const school = 'UNC';

            const obj = new Intern(name, id, email, school);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.school).toEqual(school);
        });
    });

    // getSchool function should return the intern's school
    describe('getSchool', () => {
        it('should return a new intern school', () => {
            const school = 'UNC';

            const newSchool = new Intern('Sam', '25', 'test@testing.com', school).getSchool();

            expect(school).toEqual(newSchool);
        })
    })

    // getRole function should return the intern's role
    describe('getRole', () => {
        it('should return a new intern role', () => {
            const role = 'Intern';

            const newRole = new Intern().getRole();

            expect(role).toEqual(newRole);
        });
    });
});