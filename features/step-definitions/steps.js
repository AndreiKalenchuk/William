const {Given, When, Then} = require('cucumber');
const {adminLogin} = require('../step-definitions/axiosTest')
const openWebsite = require('./my_actions/openWebsite')
const {requestStatus} = require('../step-definitions/actions')
const login = require('../step-definitions/my_actions/login');
const verifyTitle = require('../step-definitions/my_actions/verifyTitle')
const ProfilePage = require('../pageobjects/profile.page');
const {apiCreateNewUser, apiUserLogin, adminGetUserById, getAdminToken} = require('./axiosTest');
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

Then(/^Register new user, verify status, message$/, async function () {
    const response = await apiCreateNewUser();
    expect(response.status).toBe(201);
    expect(response.data.message).toBe('User created successfully. Please check your email and verify it');
});

Then(/^Api login "([^"]*)"$/, async function (user) {
    const response = await apiUserLogin(user);
    expect(response.status).toBe(200);
    switch (user) {
        case 'admin':
            process.env.ADMIN_TOKEN = response.data.token;
            process.env.ADMIN_ID = response.data.userId;
        case 'learner':
            process.env.LEARNER_TOKEN = response.data.token;
            process.env.LEARNER_ID = response.data.userId;
        case 'student':
            process.env.STUDENT_TOKEN = response.data.token;
            process.env.STUDENT_ID = response.data.userId;
        case 'new':
            process.env.NEW_USER_TOKEN = response.data.token;
            process.env.NEW_USER_ID = response.data.userId;
            expect(process.env.NEW_USER_TOKEN.length).toBeGreaterThanOrEqual(230);
            expect(process.env.NEW_USER_ID).toHaveLength(24);
    }
});
Then(/^Admin get "([^"].*)" user by userId$/, async function (user) {
    await getAdminToken();
    const response = await adminGetUserById(user);
    console.log(response);
    expect(response.status).toBe(200);
    expect(response.data.firstName).toBe(users[user].firstName);
    expect(response.data.lastName).toBe(users[user].lastName);
    expect(response.data.about).toBe(users[user].about);
    expect(response.data.goals).toBe(users[user].goals);
    const {roles} = response.data;
    expect(roles.includes(user)).toBe(true);
});