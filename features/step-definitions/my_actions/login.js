const LoginPage = require('../../pageobjects/login.page');
const users = require('../../../data/users');

module.exports = function (userRole, falseCase) {
    const user = (falseCase) ? users.invalid : users[userRole]
    LoginPage.login(user);
}