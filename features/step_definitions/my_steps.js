const {Given} = require('cucumber');
const LoginPage = require('../../features/pageobjects/login.page')
var {Then} = require('cucumber');
var {When} = require('cucumber');
const pages ={
    login: LoginPage,
    profile: ProfilePage
}
Given(/^Open (.*)page$/, function (page) {
    pages[page].open();
});
