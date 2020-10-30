const {Given, When, Then} = require('cucumber');
const apiCreateNewUser = require('../step-definitions/axiosTest');

Then(/^API register new user$/, function() {
    const response = apiCreateNewUser;
    expect(response.status).toBe(201)
});