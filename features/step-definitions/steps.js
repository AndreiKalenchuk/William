const {Given, When, Then} = require('cucumber');
const { adminLogin } = require('../step-definitions/axiosTest')
const openWebsite = require('./my_actions/openWebsite')
const {logOut, apiLogin, requestStatus } = require('../step-definitions/actions')
const login = require('../step-definitions/my_actions/login');
const verifyTitle = require('../step-definitions/my_actions/verifyTitle')


Given(/^I Open the (url|page) "([^"]*)?"$/,
    openWebsite
);

When(/^(.*) login with( not)* valid credentials$/,
      login
);

Then(/^User( not)? on "([^"]*)" page$/,
    verifyTitle
);

When(/^Api login (.*)$/,
    apiLogin
);


When(/^Login with (.*) and (.*)$/, (email, pass) => {
    LoginPage.login(email, pass)
});

Then(/^Should see (.*) on the profile page$/, function (userName) {
    expect(ProfilePage.header).toBeDisplayed()
    expect(ProfilePage.header).toHaveTextContaining(userName)
});

Then(/^Log out$/, function () {
    logOut();
});

Then(/^Should receive (success|fail) status$/,
    requestStatus
);
Then(/^(.*) login$/, async function (user) {
    const response = await adminLogin(user);
    console.log(response.data)
});