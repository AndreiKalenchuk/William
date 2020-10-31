class ProfilePage {
    /**
     * define selectors using getter methods
     */
    get title() {
        return "Local Coding"
    }

    get nameDropDown() {
        return $('.anticon-down')
    };

    get btnLogOut() {
        return $('li[data-qa="logout"]')
    }

    get header() {
        return $('h1')
    };

    logOut() {
        this.nameDropDown.waitForClickable({timeout: 2000});
        this.nameDropDown.click();
        this.btnLogOut.waitForClickable({timeout: 2000});
        this.btnLogOut.click();
    }
}

module.exports = new ProfilePage();