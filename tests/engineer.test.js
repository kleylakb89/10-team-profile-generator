const Engineer = require('../lib/engineer.js');

describe('Engineer', () => {
    describe('constructor', () => {
        it('should return an object with four values when called with new keyword', () => {
            const obj = new Engineer();

            expect('name' in obj).toEqual(true);
            expect('id' in obj).toEqual(true);
            expect('email' in obj).toEqual(true);
            expect('github' in obj).toEqual(true);
        });
        it('should set name, id, email, and office number when created', () => {
            const name = 'Sam';
            const id = '25';
            const email = 'test@testing.com';
            const github = 'username';

            const obj = new Engineer(name, id, email, github);

            expect(obj.name).toEqual(name);
            expect(obj.id).toEqual(id);
            expect(obj.email).toEqual(email);
            expect(obj.github).toEqual(github);
        });
    });

    describe('getGithub', () => {
        it('should return a new engineer github username', () => {
            const github = 'username';

            const newGithub = new Engineer('Sam', '25', 'test@testing.com', github).getGithub();

            expect(github).toEqual(newGithub);
        })
    })

    describe('getRole', () => {
        it('should return a new engineer role', () => {
            const role = 'Engineer';

            const newRole = new Engineer().getRole();

            expect(role).toEqual(newRole);
        });
    });
});