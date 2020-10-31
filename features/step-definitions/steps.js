const {Given, When, Then} = require('cucumber');
const {adminLogin} = require('../step-definitions/axiosTest')
const openWebsite = require('./my_actions/openWebsite')
const {requestStatus} = require('../step-definitions/actions')
const login = require('../step-definitions/my_actions/login');
const verifyTitle = require('../step-definitions/my_actions/verifyTitle')
const ProfilePage = require('../pageobjects/profile.page');
const {apiCreateNewUser, apiUserLogin} = require('./axiosTest');
const users = require('../../data/users')

Given(/^I Open the (url|page) "([^"]*)?"$/,
    openWebsite
);

When(/^"([^"]*)?" login with( not)* valid credentials$/,
    login
);

Then(/^User( not)* on "([^"]*)" page$/,
    verifyTitle
);

When(/^Login with (.*) and (.*)$/, (email, pass) => {
    LoginPage.login(email, pass)
});

Then(/^Should see (.*) on the profile page$/, function (userName) {
    expect(ProfilePage.header).toBeDisplayed()
    expect(ProfilePage.header).toHaveTextContaining(userName)
});

Then(/^Log out$/, function () {
    ProfilePage.logOut();
});

Then(/^Should receive (success|fail) status$/,
    requestStatus
);
Then(/^(.*) login$/, async function (user) {
    const response = await adminLogin(user);
});

Then(/^Register new user$/, async function () {
    const response = await apiCreateNewUser();
    expect(response.status).toBe(201)
});

Then(/^Api login "([^"]*)"$/, async function (user) {
    const response = await apiUserLogin(user);
    expect(response.status).toBe(200);
    process.env.NEW_USER_ID = response.data.userId;
    process.env.NEW_USER_TOKEN = response.data.token;
    expect(process.env.NEW_USER_TOKEN.length > 200).toBe(true);
    expect(process.env.NEW_USER_ID).toHaveLength(24);
    expect(response.data.user.email).toBe(users[user].email.toLowerCase());
    expect(response.data.user.firstName).toBe(users[user].firstName);
    expect(response.data.user.lastName).toBe(users[user].lastName);
    expect(response.data.user.about).toBe(users[user].about);
    expect(response.data.user.goals).toBe(users[user].goals);
    const roles = response.data.user.roles;
    expect(roles.includes(user)).toBe(true);
});

Then(/^Verify user role "([^"]*)"$/, function () {

});