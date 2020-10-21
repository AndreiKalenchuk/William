const Page = require('./page');
class LoginPage extends Page {

    /**
     * define selectors using getter methods
     */
    get title() { return "Local Coding"}
    get inputEmail () { return $('#normal_login_email') }
    get inputPassword () { return $('#normal_login_password') }
    get btnSubmit () { return $('button[type="submit"]') }


    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    login (userRole) {
        this.inputEmail.setValue(userRole.email);
        this.inputPassword.setValue(userRole.password);
        this.btnSubmit.waitForDisplayed({timeout: 2000} );
        this.btnSubmit.click();
    }
    /**
     * overwrite specifc options to adapt it to page object
     */
    open() {
        return super.open('user/login');
    }
}

module.exports = new LoginPage();
