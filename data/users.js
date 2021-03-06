const faker = require('faker');

const email = faker.internet.email();
const password = faker.internet.password();
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const phone = 17775551122;
const about = faker.lorem.sentence(9);
const goals = faker.lorem.sentence(5);
const englishLevel = 'Advance';
const countryName = 'BELARUS';

module.exports = {
    admin: {
        email: 'admin@qa6.us',
        password: 'admin',
        firstName: 'AdminFirst',
        lastName: 'AdminLast',
    },
    learner: {
        email: 'learner@qa6.us',
        password: 'learner',
        firstName: 'LearnerFirst',
        lastName: 'LearnerLast',
    },
    student: {
        email: 'student@qa6.us',
        password: 'student',
        firstName: 'StudentFirst',
        lastName: 'StudentLast',
    },
    invalid: {
        email: '1234@gmail.com',
        password: '1234',
    },
    new: {
        email,
        password,
        firstName,
        lastName,
        phone,
        about,
        goals,
        englishLevel,
        countryName,
    }
}